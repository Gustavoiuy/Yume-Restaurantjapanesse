import Menusection from "@/components/Menusection";
import { menuData } from "@/lib/data";


interface PageProps {
  params: {
    category: string;
  };
}

export default function MenuCategoryPage({ params }: { params: PageProps["params"] }) {
  const categoryData = menuData.find(
    (section) => section.category.toLowerCase() === params.category.toLowerCase()
  );

  if (!categoryData) {
    return <p className="text-center text-gray-500 py-20">Categoría no encontrada.</p>;
  }

  return <Menusection title={categoryData.category} dishes={categoryData.items} />;
}
