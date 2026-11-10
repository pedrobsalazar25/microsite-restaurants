import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getItemsByCategory, type Category } from "@/data/menuData";
import MenuCard, { MenuCardSkeleton } from "@/components/MenuCard";
import { useBusiness } from "@/context/BusinessContext";

interface MenuCategoryPageProps {
  category: Category;
}

const MenuCategoryPage = ({ category }: MenuCategoryPageProps) => {
  const navigate = useNavigate();
  const { activeBusiness } = useBusiness();
  const [loading, setLoading] = useState(true);

  const categoryLabels: Record<Category, string> = {
    cocina: `Cocina & Platos de ${activeBusiness.shortName || activeBusiness.name}`,
    postres: "Postres & Dulces",
    bebidas: "Bebidas & Coctelería",
  };

  const categoryDescriptions: Record<Category, string> = {
    cocina: activeBusiness.specialtyTagline,
    postres: "Dulzuras artesanales preparadas con esmero",
    bebidas: "Bebidas tradicionales, refrescantes y de autor",
  };

  // Filter offerings from the active business
  const businessCategoryItems = activeBusiness.offerings.filter((i) => i.category === category);
  const items = businessCategoryItems.length > 0 ? businessCategoryItems : getItemsByCategory(category);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, [category, activeBusiness.slug]);

  return (
    <div className="pb-20 min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-30 glass-dark px-4 py-3 flex items-center gap-3">
        <button
          onClick={() => navigate(`/b/${activeBusiness.slug}`)}
          className="text-cream/80 hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
        </button>
        <div>
          <h1 className="font-heading text-lg font-bold text-cream">{categoryLabels[category]}</h1>
          <p className="text-cream/60 text-[11px] font-body truncate max-w-[280px]">
            {categoryDescriptions[category]}
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="px-4 mt-4 grid grid-cols-2 gap-3">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <MenuCardSkeleton key={i} />)
          : items.map((item) => <MenuCard key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default MenuCategoryPage;
