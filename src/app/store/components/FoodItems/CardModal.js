import { useState, useEffect } from "react";

export default function CardModal({ onClose, onAdd, item }) {
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 20);
    return () => clearTimeout(timer);
  }, []);

  const toggleExtra = (extra) => {
    setSelectedExtras((prev) =>
      prev.includes(extra)
        ? prev.filter((e) => e !== extra)
        : [...prev, extra]
    );
  };

  const handleAdd = () => {
    const formattedExtras = selectedExtras.map((name) => ({ name }));
    onAdd({ quantity, extras: formattedExtras });
  };

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => Math.max(1, q - 1));

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-end transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`transform transition-transform duration-300 ease-in-out bg-white rounded-xl px-6 py-2 w-1/2 h-full shadow-lg overflow-y-auto relative ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Image */}
        <div className="w-full h-3/4">
          <img
            src={item.image}
            alt="Meal Image"
            className="w-full h-full
             object-cover rounded-lg"
          />
        </div>

        {/* Title */}
        <div className="flex flex-col md:flex-row justify-center text-gray-800 text-base md:text-lg font-medium gap-2 md:gap-4">
          <h1 className="text-xl font-bold mt-5">{item.title}</h1>
        </div>

        {/* Description + Extras */}
        <div className="flex flex-col gap-1 text-gray-700">
          {/* Description */}
          <div>
            <h3 className="text-md font-bold mb-2">Description</h3>
            <p className="mb-4 text-gray-400 font-extrabold">
              {item.description ||
                "A delicious and satisfying meal to enjoy any time of the day."}
            </p>
            <div className="flex flex-row gap-10 mt-1">
              <h1 className="text-md font-extrabold mb-2 text-indigo-400">
                Category: {item.category}
              </h1>
              <h1 className="text-md font-extrabold mb-2 text-amber-400">
                Cuisine country: {item.country}
              </h1>
              <h1 className="text-md font-extrabold mb-2 text-rose-600">
                Price: {item.price}$
              </h1>
            </div>
          </div>

          {/* Extras + Quantity */}
          <div>
            <h3 className="text-md font-bold mb-2">Choose Your Desired Extras:</h3>
            <form className="space-y-3 text-gray-400 font-extrabold">
              {["Ketchup", "Garlic Cream", "Soya Beans"].map((extra) => (
                <div key={extra} className="flex items-center">
                  <input
                    type="checkbox"
                    id={extra}
                    checked={selectedExtras.includes(extra)}
                    onChange={() => toggleExtra(extra)}
                    className="mr-3 transform scale-125"
                  />
                  <label htmlFor={extra}>{extra}</label>
                </div>
              ))}

              {/* Quantity */}
              <div className="flex items-center gap-4 mt-4">
                <span className="font-bold text-black whitespace-nowrap">Quantity:</span>
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={decrement}
                    className="px-3 py-1 bg-gray-200 rounded text-lg"
                  >
                    -
                  </button>
                  <span className="text-lg">{quantity}</span>
                  <button
                    type="button"
                    onClick={increment}
                    className="px-3 py-1 bg-gray-200 rounded text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex md:flex-row gap-4 mt-6">
                <button
                  type="button"
                  onClick={handleAdd}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-gray-100 font-extrabold py-2 rounded-lg"
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  onClick={() => alert("Show Recipe")}
                  className="w-full bg-red-600 hover:bg-gray-800 text-gray-100 font-extrabold py-2 rounded-lg"
                >
                  Check Recipe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
