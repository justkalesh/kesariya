import { useState } from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

export default function Image({
  className = "",
  containerClassName = "",
  alt,
  src,
  ...props
}: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-surface-variant/30 ${containerClassName || className}`}>
      {/* Skeleton overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-outline-variant/30 z-10" />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${
          isLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
}
