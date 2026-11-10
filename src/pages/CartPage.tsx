import { useNavigate } from "react-router-dom";
import { ArrowLeft, Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { useBusiness } from "@/context/BusinessContext";

type PaymentMethod = "Efectivo" | "Transferencia" | "Pago Móvil" | "Zelle";
type OrderType = "Delivery" | "Para Llevar / Pickup" | "Consumo en el Local";

const CartPage = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeItem, clearCart, totalPrice } = useCart();
  const { formatCurrency, formatDualPrice, bcvRate, currency } = useCurrency();
  const { activeBusiness } = useBusiness();

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [orderType, setOrderType] = useState<OrderType>("Delivery");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("Efectivo");

  const phone = activeBusiness.phone || "584249147877";

  const handleCheckout = () => {
    if (!customerName.trim()) return;

    const itemLines = items
      .map((ci) => {
        const itemDual = formatDualPrice(ci.item.price * ci.quantity);
        return `- ${ci.item.name} x${ci.quantity} (${itemDual.full})`;
      })
      .join("\n");

    const totalDual = formatDualPrice(totalPrice);
    const rateText = bcvRate ? ` (Tasa oficial BCV: ${bcvRate.toLocaleString("es-VE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Bs./$)` : "";

    const message = [
      `🍽️ *Nuevo Pedido para ${activeBusiness.name}*`,
      ``,
      `👤 *Cliente:* ${customerName}`,
      customerPhone ? `📞 *Teléfono:* ${customerPhone}` : "",
      `📍 *Tipo:* ${orderType}`,
      orderType === "Delivery" && deliveryAddress ? `🏠 *Dirección:* ${deliveryAddress}` : "",
      notes ? `📝 *Notas:* ${notes}` : "",
      ``,
      `📋 *Detalle del Pedido:*`,
      itemLines,
      ``,
      `💰 *Total a pagar:* ${totalDual.full}${rateText}`,
      `💳 *Método de Pago:* ${paymentMethod}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  if (items.length === 0) {
    return (
      <div className="pb-20 min-h-screen flex flex-col items-center justify-center px-6 text-center bg-black/95 text-white">
        <ShoppingCart className="w-16 h-16 text-gold/30 mb-4" strokeWidth={1} />
        <h2 className="font-heading text-xl font-bold text-white">Tu carrito está vacío</h2>
        <p className="text-white/60 text-sm font-body mt-2">
          Explora los platos de {activeBusiness.name} y agrega tus favoritos
        </p>
        <button
          onClick={() => navigate(`/b/${activeBusiness.slug}/cocina`)}
          className="mt-6 gold-gradient text-black font-body font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full shadow-lg"
        >
          Ver Menú
        </button>
      </div>
    );
  }

  return (
    <div className="pb-20 min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-neutral-950 border-b border-gold/20 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-white/70 hover:text-gold transition-colors">
            <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <h1 className="font-heading text-lg font-bold text-white">Tu Pedido</h1>
        </div>
        <button
          onClick={clearCart}
          className="text-xs text-red-400 hover:text-red-300 font-body transition-colors"
        >
          Vaciar carrito
        </button>
      </div>

      {/* Items list */}
      <div className="px-4 mt-4 space-y-3">
        {items.map((ci) => (
          <div
            key={ci.item.id}
            className="flex items-center gap-3 p-3 bg-neutral-900 border border-neutral-800 rounded-xl"
          >
            <img
              src={ci.item.image}
              alt={ci.item.name}
              className="w-16 h-16 rounded-lg object-cover shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-heading text-sm font-semibold truncate text-white">{ci.item.name}</h4>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="text-gold text-xs font-bold font-mono">
                  {formatDualPrice(ci.item.price).primary}
                </span>
                <span className="text-neutral-400 text-[10px] font-mono">
                  · {formatDualPrice(ci.item.price).secondary}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => updateQuantity(ci.item.id, ci.quantity - 1)}
                  className="w-6 h-6 rounded-full bg-neutral-800 text-white flex items-center justify-center hover:bg-neutral-700"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="text-xs font-bold font-mono w-4 text-center">{ci.quantity}</span>
                <button
                  onClick={() => updateQuantity(ci.item.id, ci.quantity + 1)}
                  className="w-6 h-6 rounded-full bg-neutral-800 text-white flex items-center justify-center hover:bg-neutral-700"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>
            <button
              onClick={() => removeItem(ci.item.id)}
              className="text-neutral-500 hover:text-red-400 p-1"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Customer & Delivery Form */}
      <div className="px-4 mt-6">
        <div className="bg-neutral-900 border border-gold/20 rounded-xl p-4 space-y-3">
          <h3 className="font-heading text-sm font-semibold text-gold">Datos para la entrega</h3>

          <div>
            <label className="block text-xs font-body text-neutral-300 mb-1">Nombre Completo *</label>
            <input
              type="text"
              placeholder="¿A nombre de quién es el pedido?"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-700 focus:border-gold rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-body text-neutral-300 mb-1">Teléfono (opcional)</label>
            <input
              type="text"
              placeholder="Número de contacto"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-700 focus:border-gold rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-body text-neutral-300 mb-1">Tipo de Pedido</label>
            <div className="grid grid-cols-3 gap-1.5">
              {(["Delivery", "Para Llevar / Pickup", "Consumo en el Local"] as OrderType[]).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setOrderType(type)}
                  className={`py-1.5 px-1 text-[11px] font-body rounded-md transition-colors truncate ${
                    orderType === type
                      ? "bg-gold text-black font-bold"
                      : "bg-neutral-950 border border-neutral-700 text-neutral-300 hover:bg-neutral-800"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {orderType === "Delivery" && (
            <div>
              <label className="block text-xs font-body text-neutral-300 mb-1">Dirección de Entrega</label>
              <input
                type="text"
                placeholder="Urbanización, edificio, punto de referencia"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-700 focus:border-gold rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 outline-none"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-body text-neutral-300 mb-1">Método de Pago</label>
            <div className="grid grid-cols-2 gap-1.5">
              {(["Efectivo", "Pago Móvil", "Transferencia", "Zelle"] as PaymentMethod[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setPaymentMethod(m)}
                  className={`py-1.5 text-xs font-body rounded-md transition-colors ${
                    paymentMethod === m
                      ? "bg-gold text-black font-bold"
                      : "bg-neutral-950 border border-neutral-700 text-neutral-300 hover:bg-neutral-800"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-body text-neutral-300 mb-1">Notas especiales (opcional)</label>
            <input
              type="text"
              placeholder="Sin cebolla, salsas extras, etc."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-700 focus:border-gold rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Summary & Checkout CTA */}
      <div className="px-4 mt-6">
        <div className="bg-neutral-900 border border-gold/30 rounded-xl p-4 space-y-2">
          <div className="flex justify-between text-xs text-neutral-400">
            <span>Subtotal</span>
            <span className="font-mono">{formatDualPrice(totalPrice).full}</span>
          </div>
          {bcvRate && (
            <div className="flex justify-between text-[11px] text-gold/70">
              <span>Tasa oficial BCV</span>
              <span className="font-mono">1 USD = {bcvRate.toLocaleString("es-VE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Bs.</span>
            </div>
          )}
          <div className="border-t border-neutral-800 pt-2 flex justify-between items-center">
            <span className="font-heading font-bold text-sm text-white">Total</span>
            <div className="text-right">
              <p className="font-mono font-bold text-lg text-gold leading-tight">
                {formatDualPrice(totalPrice).primary}
              </p>
              <p className="font-mono text-xs text-neutral-400 leading-tight">
                {formatDualPrice(totalPrice).secondary}
              </p>
            </div>
          </div>

          <button
            onClick={handleCheckout}
            disabled={!customerName.trim()}
            className={`w-full py-3 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 mt-4 transition-all shadow-xl ${
              customerName.trim()
                ? "bg-[#25D366] hover:bg-[#20bd5a] text-white cursor-pointer hover:scale-[1.02]"
                : "bg-neutral-800 text-neutral-500 cursor-not-allowed"
            }`}
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Pedir por WhatsApp a {activeBusiness.shortName || activeBusiness.name}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
