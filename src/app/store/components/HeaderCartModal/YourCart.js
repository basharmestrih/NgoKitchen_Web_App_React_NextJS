import { useEffect, useMemo, useState } from "react";
import { handleConfirmOrder } from "../../../hooks/orderRequest.js";

export default function YourCart({
  isOpen,
  onClose,
  cart,
  deletecart,
  updateQuantity,
  total,
  clearCart,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsVisible(false);
      return;
    }

    const timer = setTimeout(() => setIsVisible(true), 20);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const itemCount = useMemo(
    () => cart.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0),
    [cart]
  );

  if (!isOpen) {
    return null;
  }

  const handleCheckout = async () => {
    if (!cart.length || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    const result = await handleConfirmOrder(cart);
    setIsSubmitting(false);

    if (result.success) {
      clearCart?.();
      onClose();
      return;
    }

    alert("Could not confirm the order. Please try again.");
  };

  return (
    <div
      className={`mx-auto w-full max-w-7xl px-4 py-6 transition-all duration-300 sm:px-6 lg:px-24 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-slate-400">
            Store cart
          </p>
          <h1 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
            Your cart
          </h1>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-slate-700 transition hover:border-slate-500 hover:bg-slate-50 sm:text-sm"
        >
          Back to store
        </button>
      </div>

      <div className="overflow-hidden rounded-[2rem] bg-stone-50 shadow-2xl ring-1 ring-black/5">
        <div className="grid min-h-[calc(100vh-13rem)] grid-cols-1 overflow-hidden xl:grid-cols-[1.15fr_0.85fr]">
          <div className="relative overflow-hidden bg-lime-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.25),_transparent_35%)]" />
            <div className="relative flex h-full flex-col px-6 py-8 text-white sm:px-8 sm:py-10">
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Your cart
              </h2>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-[1.5rem] bg-white/10 px-4 py-4 backdrop-blur">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/60">
                    Meals
                  </p>
                  <p className="mt-2 text-3xl font-black">{itemCount}</p>
                </div>
                <div className="rounded-[1.5rem] bg-white/10 px-4 py-4 text-slate-900 shadow-sm">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/60">
                    Total
                  </p>
                  <p className="mt-2 text-3xl font-black text-lime-400">${total.toFixed(2)}</p>
                </div>
              </div>

              <div className="mt-8 flex-1 overflow-y-auto pr-1">
                {cart.length === 0 ? (
                  <div className="flex h-full min-h-[240px] items-center justify-center rounded-[2rem] border border-dashed border-white/20 bg-white/5 px-6 text-center">
                    <div>
                      <p className="text-lg font-black">Your cart is empty</p>
                      <p className="mt-2 text-sm font-medium text-white/70">
                        Add a few meals from the store and they will appear here instantly.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item, index) => (
                      <div
                        key={`${item.title}-${index}`}
                        className="rounded-[1.75rem] bg-white/10 p-4 backdrop-blur"
                      >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-32 w-full rounded-[1.25rem] object-cover sm:w-24"
                          />

                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <h3 className="truncate text-base font-black text-white sm:text-lg">
                                  {item.title}
                                </h3>
                                <p className="mt-1 text-sm font-semibold text-white/70">
                                  ${Number(item.price).toFixed(2)} each
                                </p>
                              </div>

                              <button
                                type="button"
                                onClick={() => deletecart(index)}
                                className="rounded-full bg-white/10 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.14em] text-red-500 transition hover:bg-red-500 hover:text-white"
                              >
                                x
                              </button>
                            </div>

                            {item.extras?.length > 0 && (
                              <div className="mt-3 flex flex-wrap gap-2">
                                {item.extras.map((extra, extraIndex) => (
                                  <span
                                    key={`${extra.name}-${extraIndex}`}
                                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/80"
                                  >
                                    {extra.name}
                                  </span>
                                ))}
                              </div>
                            )}

                            <div className="mt-4 flex flex-col lg:px-0 sm:px-8 gap-3 sm:flex-row sm:items-center sm:justify-between">
                              <div className="flex w-full  items-center justify-between rounded-full bg-white px-2 py-1.5 text-slate-900 shadow-sm sm:w-auto sm:max-w-none sm:gap-2 sm:px-2 sm:py-2">
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(index, item.quantity - 1)}
                                  className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-base font-black transition hover:bg-slate-200 sm:h-8 sm:w-8 sm:text-lg"
                                >
                                  -
                                </button>
                                <span className="min-w-6 text-center text-xs font-black sm:min-w-8 sm:text-sm">
                                  {item.quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(index, item.quantity + 1)}
                                  className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-base font-black text-white transition hover:bg-slate-700 sm:h-8 sm:w-8 sm:text-lg"
                                >
                                  +
                                </button>
                              </div>

                              <p className="text-base text-center font-black text-white sm:text-lg">
                                ${(Number(item.price) * Number(item.quantity)).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="min-h-0 overflow-y-auto bg-stone-50 px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            <div className="rounded-[1.75rem] bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-slate-400">
                Checkout
              </p>
              <h3 className="mt-2 text-2xl font-black text-slate-900">
                Ready to confirm?
              </h3>
              <p className="mt-3 text-sm font-medium leading-6 text-slate-500">
                This page keeps the final numbers clear so the user knows exactly what will be ordered.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-[1.5rem] bg-slate-50 p-4 ring-1 ring-slate-200">
                  <div className="flex items-center justify-between text-sm font-bold text-slate-500">
                    <span>Meals subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm font-bold text-slate-500">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="mt-4 h-px bg-slate-200" />
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-base font-black text-slate-900">Grand total</span>
                    <span className="text-2xl font-black text-slate-900">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="rounded-[1.5rem] bg-blue-50 p-4 ring-1 ring-blue-100">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-blue-500">
                    Delivery note
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                    Orders are prepared for charitable delivery and kept intentionally simple for fast handling.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-extrabold uppercase tracking-[0.16em] text-slate-700 transition hover:border-slate-500 hover:bg-slate-50 sm:px-5 sm:text-sm"
                >
                  Continue Shopping
                </button>
                <button
                  type="button"
                  onClick={handleCheckout}
                  disabled={!cart.length || isSubmitting}
                  className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:px-5 sm:text-sm"
                >
                  {isSubmitting ? "Confirming Order..." : "Confirm Order"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
