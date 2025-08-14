import { FaTrashAlt } from "react-icons/fa";

export default function FoodCategories({ onSelectFood,onSelectCountry,selectedCategory,selectedCountry}) {
    const foodcategories = [
      "Pasta",
      "Tapas",
      "Bratwurst",
      "Paella",
      "Schnitzel",
      "Bouillabaisse",
      "Risotto",
      "Goulash",
    ];
      const countrycategories = [
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
      <div className="w-[18rem] p-4 bg-white shadow-md rounded-xl">
              <div className="flex justify-between items-center mb-1">

        <h2 className="text-2xl font-bold mb-4 text-blue-600">Categories</h2>
       
                   </div>
                   
        <p className="text-xl font-bold mb-4 text-rose-600">By food:</p>
        <ul className="space-y-3">
          {foodcategories.map((foodcat) => (
            <li
              key={foodcat}
              onClick={() => onSelectFood(foodcat)}
              className={`font-bold text-xl cursor-pointer flex items-center justify-between ${
              selectedCategory === foodcat ? "text-blue-600 font-bold" : "text-gray-700"
            } hover:text-blue-600 transition`}
          >
            {foodcat}
            {selectedCategory === foodcat && (
            <button
              onClick={(event) => {
                event.stopPropagation(); // Stop the parent click event
                onSelectFood(null);
              }}
              title="Clear Filter"
              className="text-red-500 hover:text-red-700 transition"
            >
              <FaTrashAlt />
            </button>
          )}
            {selectedCategory === foodcat && <span className="text-green-500">✓</span>}
          
            </li>
          ))}
        </ul>



        <p className="text-xl font-bold mb-4 text-rose-600 mt-4">By country:</p>
      <ul className="space-y-3">
        {countrycategories.map((countrycat) => (
          <li
            key={countrycat}
            onClick={() => onSelectCountry(countrycat)}
            className={`font-bold text-xl cursor-pointer flex items-center justify-between ${
              selectedCountry === countrycat ? "text-blue-600 " : "text-gray-700"
            } hover:text-blue-600 transition`}
          >
            {countrycat}
            {selectedCountry === countrycat && (
            <button
              onClick={(event) => {
                event.stopPropagation(); // Stop the parent click event
                onSelectCountry(null);
              }}
              title="Clear Filter"
              className="text-red-500 hover:text-red-700 transition"
            >
              <FaTrashAlt />
            </button>
          )}
            {selectedCountry === countrycat && <span className="text-green-500">✓</span>}
          </li>
        ))}
      </ul>






      </div>
    );
  }
  