import MenuSection from "@/components/Menusection";
import { menuData } from "@/lib/data";

interface PageProps {
  params: {
    category: string;
  };
}

export default async function MenuCategoryPage({ params }: PageProps) {
  const categoryData = menuData.find(
    (section) => section.category.toLowerCase() === params.category.toLowerCase()
  );

  if (!categoryData) {
    return (
      <p className="text-center text-gray-500 py-20">
        Categoría no encontrada.
      </p>
    );
  }

  return (
    <MenuSection
      title={categoryData.category}
      dishes={categoryData.items}
    />
  );
}
