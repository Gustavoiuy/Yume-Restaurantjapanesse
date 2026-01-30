import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import Footer from "@/components/ui/Footer";
import BackToTop from "@/components/ui/BackToTop";
import About from '@/components/promociones/Promociones';
import MenuItems from "@/components/Menu/MenuItems";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <MenuItems />
      <About />
      <Footer />
      <BackToTop />
    </main>
  );
}
