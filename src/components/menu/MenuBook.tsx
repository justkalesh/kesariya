import { useState, useRef, useEffect, useCallback, forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { menuCover, menuPages } from "../../data/menuData";

const FlipBook = HTMLFlipBook as any;

/**
 * A single page in the book. react-pageflip requires each child
 * to accept a ref so it can measure and animate the DOM node.
 */
const Page = forwardRef<HTMLDivElement, { src: string; alt: string; eager?: boolean }>(
  ({ src, alt, eager }, ref) => (
    <div ref={ref} className="bg-surface-container overflow-hidden h-full w-full">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading={eager ? "eager" : "lazy"}
        draggable={false}
      />
    </div>
  )
);
Page.displayName = "Page";

/** Blank back-cover page to ensure even page count for desktop spreads */
const BlankPage = forwardRef<HTMLDivElement>((_, ref) => (
  <div
    ref={ref}
    className="bg-surface-container h-full w-full flex items-center justify-center"
  >
    <div className="text-center space-y-3 opacity-60">
      <span className="material-symbols-outlined text-[48px] text-primary">restaurant</span>
      <p className="font-[var(--font-body)] text-sm text-on-surface-variant">
        Thank you for dining with us
      </p>
    </div>
  </div>
));
BlankPage.displayName = "BlankPage";

// --- Helpers ---
function getWindowSize() {
  if (typeof window === "undefined") return { w: 800, h: 600 };
  return { w: window.innerWidth, h: window.innerHeight };
}

const PAGE_ASPECT = 400 / 566; // width / height of a single menu page

export default function MenuBook() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [winSize, setWinSize] = useState(getWindowSize);
  const containerRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<any>(null);

  // All pages: cover + content pages + blank back cover (for even count)
  const allSrcs = [menuCover, ...menuPages];
  const needsBlank = allSrcs.length % 2 !== 0;
  const totalPages = allSrcs.length + (needsBlank ? 1 : 0);

  // --- Fullscreen ---
  const toggleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement) {
      try {
        await containerRef.current?.requestFullscreen();
      } catch (err) {
        console.error("Fullscreen error:", err);
      }
    } else {
      await document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const sync = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", sync);
    return () => document.removeEventListener("fullscreenchange", sync);
  }, []);

  // Toggle scrollbar visibility on body element
  useEffect(() => {
    const body = document.body;
    if (isFullscreen) {
      body.classList.remove("show-scrollbar");
      body.classList.add("no-scrollbar");
    } else {
      body.classList.remove("no-scrollbar");
      body.classList.add("show-scrollbar");
    }
    return () => {
      body.classList.remove("show-scrollbar", "no-scrollbar");
    };
  }, [isFullscreen]);

  // --- Debounced resize ---
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => setWinSize(getWindowSize()), 100);
    };
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const isMobile = winSize.w < 768;

  // --- Sizing ---
  const bookAspect = isMobile ? PAGE_ASPECT : PAGE_ASPECT * 2;
  const maxW = winSize.w - (isMobile ? 16 : 32);
  const maxH = Math.max(winSize.h - (isFullscreen ? 80 : 200), 300);

  let wrapperW = maxW;
  let wrapperH = wrapperW / bookAspect;
  if (wrapperH > maxH) {
    wrapperH = maxH;
    wrapperW = wrapperH * bookAspect;
  }

  const pageW = isMobile ? Math.round(wrapperW) : Math.round(wrapperW / 2);
  const pageH = Math.round(wrapperH);

  // --- Page tracking ---
  const onFlip = useCallback((e: any) => {
    setPageIndex(e.data);
  }, []);

  const getPageLabel = () => {
    if (pageIndex === 0) return "Cover";
    if (pageIndex >= totalPages - 1 && needsBlank) return `Page ${menuPages.length} of ${menuPages.length}`;
    return `Page ${pageIndex} of ${menuPages.length}`;
  };

  // --- Programmatic flip ---
  const flipNext = useCallback(() => {
    bookRef.current?.pageFlip()?.flipNext();
  }, []);

  const flipPrev = useCallback(() => {
    bookRef.current?.pageFlip()?.flipPrev();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex flex-col items-center justify-center gap-2 md:gap-3 ${
        isFullscreen ? "bg-surface w-screen h-screen px-2 py-2 z-50" : "w-full"
      }`}
    >
      {/* Controls bar */}
      <div className="flex items-center justify-between w-full px-4 md:px-0" style={{ maxWidth: wrapperW }}>
        <span className="text-sm text-on-surface-variant font-[var(--font-body)] font-medium">
          {getPageLabel()}
        </span>
        <button
          onClick={toggleFullscreen}
          className="flex items-center gap-2 bg-primary-container text-on-primary-container px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary/20 transition-colors shadow-sm"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          <span className="material-symbols-outlined text-[20px]">
            {isFullscreen ? "fullscreen_exit" : "fullscreen"}
          </span>
          {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </button>
      </div>

      {/* Book + tap zones */}
      <div
        className="relative shadow-2xl rounded-sm mx-auto"
        style={{ width: Math.round(wrapperW), height: pageH }}
      >
        <FlipBook
          key={isMobile ? "portrait" : "landscape"}
          width={pageW}
          height={pageH}
          size="fixed"
          showCover={true}
          usePortrait={isMobile}
          flippingTime={800}
          className="book-element"
          ref={bookRef}
          drawShadow={true}
          maxShadowOpacity={0.5}
          useMouseEvents={false}
          swipeDistance={99999}
          mobileScrollSupport={false}
          disableFlipByClick={true}
          onFlip={onFlip}
          startPage={0}
        >
          {allSrcs.map((src, i) => (
            <Page
              key={src}
              src={src}
              alt={i === 0 ? "Menu Cover" : `Menu Page ${i}`}
              eager={i < 3}
            />
          ))}
          {needsBlank && <BlankPage key="back-cover" />}
        </FlipBook>

        {/* Tap zones — transparent overlays for navigation */}
        <div className="absolute inset-0 z-10 flex pointer-events-none">
          {/* Left half — go back */}
          <button
            onClick={flipPrev}
            className="w-1/2 h-full pointer-events-auto cursor-pointer bg-transparent border-none outline-none group"
            aria-label="Previous page"
          >
            <div className="absolute left-2 top-1/2 -translate-y-1/2 bg-surface/70 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-primary text-[20px]">chevron_left</span>
            </div>
          </button>
          {/* Right half — go forward */}
          <button
            onClick={flipNext}
            className="w-1/2 h-full pointer-events-auto cursor-pointer bg-transparent border-none outline-none group"
            aria-label="Next page"
          >
            <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-surface/70 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-primary text-[20px]">chevron_right</span>
            </div>
          </button>
        </div>
      </div>

      {/* Hint */}
      <p className="text-[11px] text-on-surface-variant/50 text-center font-[var(--font-body)]">
        Tap left or right to turn pages
      </p>
    </div>
  );
}
