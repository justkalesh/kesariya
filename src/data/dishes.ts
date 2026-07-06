export interface Dish {
  id: number;
  name: string;
  image: string;
  alt: string;
}

export const dishes: Dish[] = [
  {
    id: 1,
    name: "Royal Thali",
    alt: "Royal Thali — a lavish platter with assorted Indian curries, breads, rice, and desserts",
    image: "/media/food 1.jpeg",
  },
  {
    id: 2,
    name: "Dimsum Platter",
    alt: "Dimsum Platter — steamed and fried dumplings with dipping sauces",
    image: "/media/food 2.jpeg",
  },
  {
    id: 3,
    name: "Manchurian Bowl",
    alt: "Manchurian Bowl — crispy vegetable manchurian in tangy gravy",
    image: "/media/food 3.jpeg",
  },
  {
    id: 4,
    name: "Saffron Biryani",
    alt: "Saffron Biryani — aromatic basmati rice layered with spiced meat and saffron",
    image: "/media/food 4.jpeg",
  },
  {
    id: 5,
    name: "Paneer Tikka",
    alt: "Paneer Tikka — chargrilled cottage cheese cubes with spices",
    image: "/media/food 5.jpeg",
  },
  {
    id: 6,
    name: "Rich Curry",
    alt: "Rich Curry — slow-cooked traditional Indian curry with aromatic spices",
    image: "/media/food 6.jpeg",
  },
];
