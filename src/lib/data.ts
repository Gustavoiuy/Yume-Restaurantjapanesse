import { MenuItem, Promotions, ServiceItem, TeamMember, Testimonial } from "@/types";

export const services: ServiceItem[] = [
{
    id: 1,
    title: "Entradas",
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
    link: "/menu/rollos",
  },
  {
    id: 4,
    title: "Postres",
    image: "/images/bananaice.jpg",
    link: "/menu/postres",
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

export interface Dish {
  id: number;
  name: string;
  desc: string;
  price: number;
  image: string;
}

export interface MenuCategory {
  category: string;
  items: Dish[];
}

// src/lib/menuData.ts

export const menuData = [
  {
    category: "entradas",
    items: [
      { id: 1, name: "Camarones Spicy", desc: "Camarones con aderezo.", price: 80, image: "/images/Camaronesspicy.jpg" },
     
      { id: 2, name: "Tama Ball", desc: "Bola de arroz rellena de tampico y camarón.", price: 185, image: "/images/Tamaball.jpg" },
      { id: 3, name: "Kani Gyosas", desc: "3 pz de cangrejo con salsa agridulce.", price: 90, image: "/images/Kanigyosas.jpg" },
    ],
  },
  {
    category: "ensaladas",
    items: [
      { id: 1, name: "Teriyaki Salad", desc: "Pollo, aguacate y lechuga con aderezo.", price: 180, image: "/images/teriyaki-salad.jpg" },
      { id: 2, name: "Yasai", desc: "Verduras mixtas frescas con aderezo.", price: 128, image: "/images/yasai.jpg" },
      { id: 3, name: "Yasai Salmón", desc: "Salmón y mix de verduras con aderezo.", price: 200, image: "/images/yasai-salmon.jpg" },
      { id: 4, name: "Chuka Salad", desc: "Espinaca, pepino, cangrejo y chuka.", price: 150, image: "/images/chuka-salad.jpg" },
      { id: 5, name: "Sunomono", desc: "Pepino, pulpo, camarón y ajonjolí.", price: 170, image: "/images/sunomono.jpg" },
    ],
  },
  {
    category: "sopas",
    items: [
      { id: 1, name: "Sumashi", desc: "Sopa con wakame, pulpo y salmón.", price: 70, image: "/images/sumashi.jpg" },
      { id: 2, name: "Miso Shiro", desc: "Tofu, wakame y cebollín en fondo miso.", price: 50, image: "/images/miso-shiro.jpg" },
      { id: 3, name: "Torisozui", desc: "Arroz, huevo y pollo en fondo de pollo.", price: 100, image: "/images/torisozui.jpg" },
      { id: 4, name: "Sopa Udon", desc: "Camarón tempura y pasta udon.", price: 120, image: "/images/udon.jpg" },
    ],
  },
  {
    category: "yakimeshi",
    items: [
      { id: 1, name: "Verduras", desc: "Arroz frito con verduras.", price: 70, image: "/images/yakimeshi-verduras.jpg" },
      { id: 2, name: "Pollo", desc: "Arroz frito con verduras y pollo.", price: 80, image: "/images/yakimeshi-pollo.jpg" },
      { id: 3, name: "Filete", desc: "Arroz frito con carne.", price: 100, image: "/images/yakimeshi-filete.jpg" },
      { id: 4, name: "Camarón", desc: "Arroz frito con verduras y camarón.", price: 120, image: "/images/yakimeshi-camaron.jpg" },
      { id: 5, name: "Mixto", desc: "Pollo, carne y camarón con verduras.", price: 120, image: "/images/yakimeshi-mixto.jpg" },
    ],
  },
  {
    category: "platos-fuertes",
    items: [
      { id: 1, name: "Tori Rollo", desc: "Pechuga rellena de verduras y queso.", price: 180, image: "/images/tori-rollo.jpg" },
      { id: 2, name: "Teriyaki Pollo", desc: "Pollo con arroz gohan y salsa dulce.", price: 165, image: "/images/teriyaki-pollo.jpg" },
      { id: 3, name: "Teriyaki Filete", desc: "Carne con arroz gohan y ensalada.", price: 170, image: "/images/teriyaki-filete.jpg" },
      { id: 4, name: "Teriyaki Salmón", desc: "Salmón y verduras con salsa dulce.", price: 195, image: "/images/teriyaki-salmon.jpg" },
      { id: 5, name: "Udon Teriyaki", desc: "Pollo, carne y camarón con pasta udon.", price: 220, image: "/images/udon-teriyaki.jpg" },
    ],
  },
  {
    category: "rollos",
    items: [
      { id: 1, name: "California Roll", desc: "Cangrejo, aguacate y pepino.", price: 130, image: "/images/california.jpg" },
      { id: 2, name: "Philadelphia Roll", desc: "Queso crema y salmón.", price: 145, image: "/images/philadelphia.jpg" },
      { id: 3, name: "Set Roll", desc: "Camarón empanizado con queso crema.", price: 161, image: "/images/set-roll.jpg" },
      { id: 4, name: "Tuna Spicy Roll", desc: "Atún flameado con salsa de anguila.", price: 150, image: "/images/tuna-spicy.jpg" },
      { id: 5, name: "Furai Roll", desc: "Rollo empanizado con salsa chipotle.", price: 165, image: "/images/furai-roll.jpg" },
    ],
  },
  {
    category: "postres",
    items: [
      { id: 1, name: "Mochi (2 pzas)", desc: "Helado japonés envuelto en arroz dulce.", price: 110, image: "/images/mochi.jpg" },
      { id: 2, name: "Banana Ice", desc: "Plátano frito con helado.", price: 110, image: "/images/banana-ice.jpg" },
      { id: 3, name: "Tempura Helado", desc: "Helado tempurizado con topping.", price: 120, image: "/images/tempura-helado.jpg" },
    ],
  },
  {
    category: "bebidas",
    items: [
      { id: 1, name: "Agua", desc: "Agua natural o mineral.", price: 20, image: "/images/agua.jpg" },
      { id: 2, name: "Coca Cola", desc: "Regular, Light o Zero.", price: 40, image: "/images/coca.jpg" },
      { id: 3, name: "Limonada", desc: "Clásica o mineral.", price: 45, image: "/images/limonada.jpg" },
      { id: 4, name: "Cerveza", desc: "Nacional o importada.", price: 60, image: "/images/cerveza.jpg" },
      { id: 5, name: "Café Capuccino", desc: "Caliente o frappe.", price: 60, image: "/images/capuccino.jpg" },
    ],
  },
];



