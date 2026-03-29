import { Delete } from "@mui/icons-material";

export default function FoodCategories({
  onSelectFood,
  onSelectCountry,
  selectedCategory,
  selectedCountry,
}) {
  const foodcategories = [
    "Pasta",
    "Chicken",
    "Pizza",
    "Burger",
    "Sushi",
    "Falafel",
    "Tacos",
    "Salad",
  ];

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-1 sm:gap-2">
        {foodcategories.map((foodcat) => {
          const isSelected = selectedCategory === foodcat;

          return (
            <button
              key={foodcat}
              onClick={() => onSelectFood(isSelected ? null : foodcat)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition duration-200 text-sm font-bold ${
                isSelected
                  ? "bg-blue-600 border-blue-600 text-white shadow-lg"
                  : "bg-transparent border-gray-300 text-gray-700 hover:border-blue-400"
              }`}
            >
              <span className="whitespace-nowrap">{foodcat}</span>
              {isSelected && (
                <Delete
                  onClick={(event) => {
                    event.stopPropagation();
                    onSelectFood(null);
                  }}
                  className="text-xs text-white"
                  aria-hidden
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
