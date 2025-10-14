import { MenuItem, Promotions, ServiceItem, TeamMember, Testimonial } from "@/types";

export const services: ServiceItem[] = [
{
    id: 1,
    title: "Brochetas",
    image: "/images/entradas.jpg",
    link: "/menu/entradas",
  },
  {
    id: 2,
    title: "Platos Fuertes",
    image: "/images/platos-fuertes.jpg",
    link: "/menu/platos-fuertes",
  },
  {
    id: 3,
    title: "Rollos sushi",
    image: "/images/rollo.jpeg",
    link: "/menu/postres",
  },
  {
    id: 4,
    title: "Postres",
    image: "/images/rolls.jpeg",
    link: "/menu/bebidas",
  },

];

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Chicken Burger",
    description: "Ipsum ipsum clita erat amet dolor justo diam",
    price: 115,
    image: "/images/menu-1.jpg",
    category: "burger",
  },
  {
    id: 2,
    name: "Chicken Burger",
    description: "Ipsum ipsum clita erat amet dolor justo diam",
    price: 115,
    image: "/images/menu-2.jpg",
    category: "burger",
  },
  {
    id: 3,
    name: "Chicken Burger",
    description: "Ipsum ipsum clita erat amet dolor justo diam",
    price: 115,
    image: "/images/menu-3.jpg",
    category: "burger",
  },
  {
    id: 4,
    name: "Chicken Burger",
    description: "Ipsum ipsum clita erat amet dolor justo diam",
    price: 115,
    image: "/images/menu-4.jpg",
    category: "snack",
  },
  {
    id: 5,
    name: "Chicken Burger",
    description: "Ipsum ipsum clita erat amet dolor justo diam",
    price: 115,
    image: "/images/menu-5.jpg",
    category: "snack",
  },
  {
    id: 6,
    name: "Chicken Burger",
    description: "Ipsum ipsum clita erat amet dolor justo diam",
    price: 115,
    image: "/images/menu-6.jpg",
    category: "snack",
  },
  {
    id: 7,
    name: "Chicken Burger",
    description: "Ipsum ipsum clita erat amet dolor justo diam",
    price: 115,
    image: "/images/menu-7.jpg",
    category: "beverage",
  },
  {
    id: 8,
    name: "Chicken Burger",
    description: "Ipsum ipsum clita erat amet dolor justo diam",
    price: 115,
    image: "/images/menu-8.jpg",
    category: "beverage",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Full Name",
    position: "Designation",
    image: "/images/team-1.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Full Name",
    position: "Designation",
    image: "/images/team-2.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Full Name",
    position: "Designation",
    image: "/images/team-3.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 4,
    name: "Full Name",
    position: "Designation",
    image: "/images/team-4.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Client Name",
    position: "Profession",
    content:
      "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    image: "/images/testimonial-1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Client Name",
    position: "Profession",
    content:
      "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    image: "/images/testimonial-2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Client Name",
    position: "Profession",
    content:
      "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    image: "/images/testimonial-3.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Client Name",
    position: "Profession",
    content:
      "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    image: "/images/testimonial-4.jpg",
    rating: 5,
  },
];
export const promotions:Promotions[]= [
  {
    id: 1,
    title: "Combo Sushi Lovers",
    desc: "Disfruta 2 rollos + bebida por un precio especial.",
    image: "/images/promo1.jpeg",
    link: "/menu",
    tag: "Solo esta semana",
  },
  {
    id: 2,
    title: "Ramen & Chill",
    desc: "Ramen clásico + té helado artesanal. Ideal para días fríos.",
    image: "/images/promo2.jpeg",
    link: "/menu",
    tag: "Favorito del mes",
  },
  {
    id: 3,
    title: "Cena para 2",
    desc: "Cena romántica con postre incluido. Reserva anticipada.",
    image: "/images/promo3.jpeg",
    link: "/reservaciones",
    tag: "Oferta especial",
  },
];

