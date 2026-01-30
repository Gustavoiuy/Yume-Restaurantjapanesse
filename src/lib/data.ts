import {  Promotions, ServiceItem } from "@/types";

export const services: ServiceItem[] = [
{
    id: 1,
    title: "Entradas",
    image: "/images/entradas.jpg",
    link: "/menu/entradas",
  },

 
  {
    id: 2,
    title: "Rollos sushi",
    image: "/images/rollo.jpeg",
    link: "/menu/rollos",
  },
  {
    id: 3,
    title: "Postres",
    image: "/images/bananaice.jpg",
    link: "/menu/postres",
  },
  {
    id: 4,
    title: "Bebidas",
    image: "/images/sakes.jfif",
    link: "/menu/bebidas",
  }

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
    category: "rollos",
    items: [
      { id: 1, name: "California Roll", desc: "Cangrejo, aguacate y pepino.", price: 130, image: "/images/californiaroll.jfif" },
      { id: 2, name: "Philadelphia Roll", desc: "Queso crema y salmón.", price: 145, image: "/images/phila.jfif" },

      { id: 5, name: "Furai Roll", desc: "Rollo empanizado con salsa chipotle.", price: 165, image: "/images/furairoll.webp" },
    ],
  },
  {
    category: "postres",
    items: [
      { id: 1, name: "Mochi (2 pzas)", desc: "Helado japonés envuelto en arroz dulce.", price: 110, image: "/images/mochis.jpg" },
      { id: 2, name: "Banana Ice", desc: "Plátano frito con helado.", price: 110, image: "/images/bananaice.jpg" },
      { id: 3, name: "Tempura Helado", desc: "Helado tempurizado con topping.", price: 120, image: "/images/tempurahelado.webp" },
    ],
  },
  {
    category: "bebidas",
    items: [
      { id: 1, name: "Refresco", desc: "Coca-Cola, Fanta, Sprite.", price: 40, image: "/images/refresco.png" },
      { id: 4, name: "Cerveza", desc: "Nacional o importada.", price: 60, image: "/images/saporo.jfif" },
      { id: 5, name: "Café Capuccino", desc: "Caliente o frappe.", price: 60, image: "/images/capuccino.jfif" },
    ],
  },
];



