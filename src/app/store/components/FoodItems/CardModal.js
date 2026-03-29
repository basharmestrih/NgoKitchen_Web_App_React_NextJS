import { useEffect, useMemo, useState } from "react";

const extrasList = [
  { name: "Ketchup", price: 1 },
  { name: "Garlic Cream", price: 2 },
  { name: "Soya Beans", price: 2 },
];

export default function CardModal({ onClose, onAdd, item }) {
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 20);
    return () => clearTimeout(timer);
  }, []);

  const toggleExtra = (extraName) => {
    setSelectedExtras((prev) =>
      prev.includes(extraName)
        ? prev.filter((entry) => entry !== extraName)
        : [...prev, extraName]
    );
  };

  const unitPrice = Number(item.price) || 0;
  const extrasPrice = useMemo(() => {
    return selectedExtras.reduce((sum, extraName) => {
      const extra = extrasList.find((entry) => entry.name === extraName);
      return sum + (extra?.price || 0);
    }, 0);
  }, [selectedExtras]);

  const totalPrice = ((unitPrice + extrasPrice) * quantity).toFixed(2);

  const handleAdd = () => {
    const formattedExtras = selectedExtras.map((name) => ({ name }));
    onAdd({ quantity, extras: formattedExtras });
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center bg-slate-950/50 px-0 pb-0 pt-6 transition-opacity duration-300 sm:items-center sm:p-6 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`relative flex h-[calc(100vh-1.5rem)] w-full max-w-6xl flex-col overflow-hidden rounded-t-[2rem] bg-stone-50 shadow-2xl transition-transform duration-300 sm:mt-8 sm:h-[calc(100vh-5rem)] sm:rounded-[2rem] ${
          isVisible ? "translate-y-0 sm:translate-x-0" : "translate-y-full sm:translate-x-8"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-12 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg text-slate-700 shadow-md transition hover:bg-red-50 hover:text-red-600 sm:right-5 sm:top-5 sm:h-11 sm:w-11 sm:text-2xl"
        >
          &times;
        </button>

        <div className="grid h-full grid-cols-1 overflow-hidden lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[350px] overflow-hidden bg-slate-200">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
              <div className="mt-8 mb-2 hidden flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-white/80 sm:flex">
                <span className="rounded-full bg-white/15 px-3 py-1 backdrop-blur">
                  {item.category}
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 backdrop-blur">
                  {item.country}
                </span>
              </div>

              <h1 className="max-w-xl text-xl font-black tracking-tight sm:text-5xl">
                {item.title}
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/80 sm:hidden">
                <span className="rounded-full bg-white/15 px-3 py-1 backdrop-blur">
                  {item.category}
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 backdrop-blur">
                  {item.country}
                </span>
              </div>

              <p className="hidden md:block mt-4 max-w-xl text-sm font-medium leading-6 text-white/85 sm:text-base">
                {item.description ||
                  "A hearty, crowd-pleasing meal prepared to be practical, filling, and easy to serve at scale."}
              </p>
            </div>
          </div>

          <div className="min-h-0 overflow-y-auto bg-stone-50 px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            <div className="rounded-[1.75rem] bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-slate-400">
                    Build your order
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-slate-900">
                    Customize this meal
                  </h2>
                  <p className="mt-2 text-sm font-black uppercase tracking-[0.18em] text-amber-500 sm:hidden">
                    Price: ${unitPrice.toFixed(2)}
                  </p>
                </div>

                <div className="hidden rounded-[1.25rem] bg-amber-300 px-4 py-3 text-right text-slate-900 shadow-sm sm:block">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.22em]">
                    Base price
                  </p>
                  <p className="text-2xl font-black">${unitPrice.toFixed(2)}</p>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-black text-slate-900">Extras</h3>
                  <p className="text-sm font-bold text-slate-400">Optional add-ons</p>
                </div>

                <div className="mt-4 grid gap-3">
                  {extrasList.map((extra) => {
                    const active = selectedExtras.includes(extra.name);

                    return (
                      <button
                        key={extra.name}
                        type="button"
                        onClick={() => toggleExtra(extra.name)}
                        className={`flex items-center justify-between rounded-[1.25rem] border px-4 py-4 text-left transition ${
                          active
                            ? "border-blue-600 bg-blue-50 shadow-sm"
                            : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        <div>
                          <p className="text-base font-extrabold text-slate-900">
                            {extra.name}
                          </p>
                          <p className="text-sm font-semibold text-slate-500">
                            Add a practical side or sauce to the order
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-sm font-black text-slate-700">
                            +${extra.price}
                          </span>
                          <span
                            className={`flex h-6 w-6 items-center justify-center rounded-full border text-xs font-black ${
                              active
                                ? "border-blue-600 bg-blue-600 text-white"
                                : "border-slate-300 text-slate-400"
                            }`}
                          >
                            {active ? "✓" : "+"}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-black text-slate-900">Quantity</h3>
                  <p className="text-sm font-bold text-slate-400">Adjust portions</p>
                </div>

                <div className="mt-4 flex items-center justify-between rounded-[1.5rem] bg-slate-100 px-4 py-4">
                  <div>
                    <p className="text-sm font-bold text-slate-500">Serving count</p>
                    <p className="text-3xl font-black text-slate-900">{quantity}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-black text-slate-700 shadow-sm transition hover:bg-slate-200 sm:h-11 sm:w-11"
                    >
                      -
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuantity((value) => value + 1)}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-xl font-black text-white shadow-sm transition hover:bg-slate-700 sm:h-11 sm:w-11"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-[1.75rem] bg-slate-50 p-4 ring-1 ring-slate-200 sm:p-5">
                <div className="mb-4 grid grid-cols-1 gap-3 text-center sm:grid-cols-3">
                  <div className="rounded-2xl bg-white px-3 py-3">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
                      Meal
                    </p>
                    <p className="mt-1 text-lg font-black text-slate-900">
                      ${unitPrice.toFixed(2)}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white px-3 py-3">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
                      Extras
                    </p>
                    <p className="mt-1 text-lg font-black text-slate-900">
                      ${extrasPrice.toFixed(2)}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-900 px-3 py-3 text-white">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/60">
                      Total
                    </p>
                    <p className="mt-1 text-lg font-black">${totalPrice}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => alert("Show Recipe")}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-extrabold uppercase tracking-[0.16em] text-slate-700 transition hover:border-slate-500 hover:bg-slate-50 sm:px-5 sm:text-sm"
                  >
                    Check Recipe
                  </button>
                  <button
                    type="button"
                    onClick={handleAdd}
                    className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-blue-700 sm:px-5 sm:text-sm"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
