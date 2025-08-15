import { FaTrashAlt } from "react-icons/fa";

export default function CountryCategories({ onSelect, selectedCountry }) {
  const categories = [
    "Italy",
    "France",
    "Germany",
    "Luxembourg",
    "Morrocco",
    "Syria",
    "Senegal",
    "Sudan",
  ];

  return (
    <div className="font-sansation w-[18rem] p-4 bg-white shadow-md rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-600">Categories</h2>
        {selectedCountry && (
          
          <button
            onClick={() => onSelect(null)}
            title="Clear Filter"
            className="text-red-500 hover:text-red-700 transition"
          >
            <FaTrashAlt />
          </button>
         
        )}
      </div>
      <p className="text-md font-bold mb-4 text-gray-400">By country:</p>
      <ul className="space-y-3">
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => onSelect(cat)}
            className={`font-bold text-xl cursor-pointer flex items-center justify-between ${
              selectedCountry === cat ? "text-blue-600 " : "text-gray-700"
            } hover:text-blue-600 transition`}
          >
            {cat}
            {selectedCountry === cat && <span className="text-green-500">✓</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
