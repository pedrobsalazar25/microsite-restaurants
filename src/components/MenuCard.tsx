import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import type { MenuItem } from "@/data/menuData";
import type { BusinessOffering } from "@/types/business";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { useBusiness } from "@/context/BusinessContext";

interface MenuCardProps {
  item: MenuItem | BusinessOffering;
}

export const MenuCardSkeleton = () => (
  <div className="glass-dark border-gold/20 rounded-xl overflow-hidden animate-pulse">
    <div className="aspect-square p-2">
      <div className="w-full h-full rounded-lg bg-cream/10" />
    </div>
    <div className="p-3 space-y-2">
      <div className="h-4 bg-cream/10 rounded w-3/4" />
      <div className="h-3 bg-cream/10 rounded w-full" />
      <div className="flex items-center justify-between mt-3">
        <div className="h-5 bg-cream/10 rounded w-16" />
        <div className="w-8 h-8 rounded-full bg-cream/10" />
      </div>
    </div>
  </div>
);

const MenuCard = ({ item }: MenuCardProps) => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { formatCurrency, formatDualPrice } = useCurrency();
  const { activeBusiness } = useBusiness();
  const [imgLoaded, setImgLoaded] = useState(false);

  const destinationPath = `/b/${activeBusiness.slug}/plato/${item.id}`;

  return (
    <div
      className="glass-dark border-gold/20 rounded-xl overflow-hidden cursor-pointer group animate-fade-up"
      onClick={() => navigate(destinationPath)}
    >
      <div className="relative aspect-square overflow-hidden p-2">
        {!imgLoaded && (
          <div className="absolute inset-2 rounded-lg bg-cream/10 animate-pulse" />
        )}
        <img
          src={item.image}
          alt={item.name}
          className={`w-full h-full object-cover rounded-lg group-hover:scale-110 transition-all duration-500 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
        />
        {item.isChefRecommendation && (
          <span className="absolute top-2 left-2 bg-gold text-primary text-[10px] font-bold px-2 py-0.5 rounded-full font-body">
            ⭐ Chef
          </span>
        )}
      </div>

      <div className="p-3">
        <h3 className="font-heading text-sm font-semibold text-foreground truncate">{item.name}</h3>
        <p className="text-foreground/70 text-xs mt-1 line-clamp-2 font-body">{item.description}</p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex flex-col min-w-0">
            <span className="text-gold font-mono font-bold text-sm sm:text-base leading-tight">
              {formatDualPrice(item.price).primary}
            </span>
            <span className="text-cream/50 font-mono text-[10px] leading-tight truncate">
              {formatDualPrice(item.price).secondary}
            </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addItem(item as MenuItem);
            }}
            className="w-8 h-8 rounded-full gold-gradient text-primary flex items-center justify-center shadow-md active:scale-90 transition-transform shrink-0"
            aria-label={`Agregar ${item.name} al carrito`}
          >
            <Plus className="w-4 h-4 text-black" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
