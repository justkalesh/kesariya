export interface Amenity {
  icon: string;
  label: string;
  colSpan?: number;
}

export const roomAmenities: Amenity[] = [
  { icon: "bed", label: "Premium Bedding" },
  { icon: "room_service", label: "24/7 Room Service" },
  { icon: "wifi", label: "Free Wi-Fi" },
  { icon: "ac_unit", label: "AC" },
  { icon: "more_horiz", label: "& many more", colSpan: 2 },
];

export interface BanquetFeature {
  icon: string;
  title: string;
  description: string;
}

export const banquetFeatures: BanquetFeature[] = [
  {
    icon: "celebration",
    title: "Event Management",
    description:
      "End-to-end planning for weddings, corporate events, and parties.",
  },
  {
    icon: "restaurant",
    title: "Premium Catering",
    description:
      "Customizable multi-cuisine menus curated by expert chefs.",
  },
  {
    icon: "deck",
    title: "Custom Decor",
    description: "Thematic decorations to match your unique vision.",
  },
  {
    icon: "music_note",
    title: "Live Entertainment",
    description:
      "Arrangements for live music, DJs, and performances.",
  },
];

export interface BarDrink {
  name: string;
}

export const barDrinks: BarDrink[] = [
  { name: "Classic Mojito" },
  { name: "Old Fashioned" },
  { name: "Whiskey Sour" },
  { name: "Cosmopolitan" },
  { name: "Pina Colada" },
  { name: "Margarita" },
  { name: "Long Island" },
  { name: "Daiquiri" },
  { name: "Negroni" },
  { name: "Mai Tai" },
];

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Restaurant", href: "#restaurant" },
  { label: "Banquets", href: "#banquet" },
  { label: "Rooms", href: "#rooms" },
  { label: "Reviews", href: "#reviews" },
];

export const images = {
  hero: "/media/out.jpg",
  ambienceLeft: "/media/rest.jpg",
  ambienceRight: "/media/rest 2.jpg",
  bar: "/media/bar.jpg",
  banquet:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB71-dp0WYunsOXjYyqfgpWXdn4T16DlASLypgNKWNOgfgPJBBVs-g6yYXA8R54csFtMc10DzVax_oS8qDqIWLYvpWCa5r5MBlizbOz6HaHeZFo8o3VZUrYbWWEPR196WA8rwMNAJAuZNQ06E5HHp1xOCkfxOzvjHb7Rt4DDS6oVYvA41jiQGXhMj-tCQw6h32tHdyO0eVvhZ47tL2XueUwchRIZPjPMyxalwfmpyIkjfRIkx7452XFAQ",
  room: "/media/room.jpg",
  logoNavbar: "/media/logo-navbar.png",
  logoFavicon: "/media/favicon.png",
};

export const GOOGLE_MAPS_URL =
  "https://share.google/UOv3OhNrd1JLp41fm";
