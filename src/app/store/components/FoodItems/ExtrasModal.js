import { useState } from "react";

export default function ExtrasModal({ onClose, onAdd, item }) {
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [quantity, setQuantity] = useState(1); // 🔸 meal quantity

  const toggleExtra = (extra) => {
    setSelectedExtras((prev) =>
      prev.includes(extra)
        ? prev.filter((e) => e !== extra)
        : [...prev, extra]
    );
  };

  const handleAdd = () => {
    const formattedExtras = selectedExtras.map((name) => ({ name }));
    onAdd({ quantity, extras: formattedExtras }); // 🔸 include quantity
  };

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => Math.max(1, q - 1));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl px-6 py-4 w-80 shadow-lg relative">
        <h3 className="text-xl font-extrabold mt-4 mb-4 text-gray-800 text-center">
          Choose Extras
        </h3>

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

          {/* 🔸 Quantity UI */}
          <div className="flex justify-between items-center mt-4">
            <span className="font-bold text-black">Quantity:</span>
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

          <button
            type="button"
            onClick={handleAdd}
            className="w-full bg-blue-600 hover:bg-blue-700 font-bold text-gray-200 py-2 rounded-lg mt-4"
          >
            Add to Cart
          </button>
        </form>

        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
}
