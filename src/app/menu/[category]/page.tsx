import MenuSection from "@/components/Menusection";
import { menuData } from "@/lib/data";

export default function MenuCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const categoryData = menuData.find(
    (section) =>
      section.category.toLowerCase() === params.category.toLowerCase()
  );

  if (!categoryData) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center text-center bg-[#FFFDF7]">
        <h1 className="text-3xl font-bold text-[#0F172B] mb-4">
          Categoría no encontrada
        </h1>
        <p className="text-gray-600 mb-6">
          La categoría <strong>{params.category}</strong> no existe.
        </p>
        <a
          href="/menu"
          className="px-4 py-2 bg-[#FEA116] text-white rounded-xl shadow hover:bg-[#e08f10] transition"
        >
          Volver al menú
        </a>
      </main>
    );
  }

  return (
    <MenuSection
      title={categoryData.category}
      dishes={categoryData.items}
    />
  );
}
