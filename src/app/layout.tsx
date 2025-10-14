import type { Metadata } from "next";
import { Heebo, Nunito, Pacifico } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["latin"],
  variable: "--font-heebo",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YUME Sushi 🍣 | El mejor sabor japonés en tu ciudad",
  description:
    "Descubre YUME Sushi, el restaurante japonés donde cada bocado es una experiencia única. Sushi fresco, ramen, platillos asiáticos y un ambiente moderno ideal para disfrutar o compartir.",
  keywords:
    "YUME, sushi, restaurante japonés, ramen, comida asiática, sushi bar, comida japonesa, restaurante en México, delivery sushi, sushi a domicilio, experiencia gourmet",
  openGraph: {
    title: "YUME Sushi | Auténtico sabor japonés 🍣",
    description:
      "Vive la experiencia YUME Sushi: frescura, sabor y tradición japonesa en cada plato. Reserva tu mesa o pide en línea.",
    type: "website",
    locale: "es_MX",
    url: "https://yume.com", // 🔹 Cambia esto a tu dominio real
    siteName: "YUME Sushi",
    images: [
      {
        url: "https://yume.com/og-image.jpg", // 🔹 Usa una imagen real optimizada para OG (1200x630px)
        width: 1200,
        height: 630,
        alt: "YUME Sushi - Restaurante japonés con el mejor sabor a sushi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YUME Sushi | El mejor sabor japonés 🍣",
    description:
      "Disfruta sushi fresco, ramen y comida japonesa auténtica en YUME. Vive una experiencia gastronómica inigualable.",
    images: ["https://yume.com/og-image.jpg"], // 🔹 misma imagen OG
    creator: "@yume_restaurante", // 🔹 agrega tu cuenta real de Twitter si tienes
  },
  alternates: {
    canonical: "https://yume.com", // 🔹 URL canónica
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${heebo.variable} ${nunito.variable} ${pacifico.variable}`}
    >
      <body
        suppressHydrationWarning
        className={`${heebo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
