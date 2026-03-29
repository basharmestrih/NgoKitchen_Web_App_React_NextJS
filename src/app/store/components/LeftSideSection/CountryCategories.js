import { Close } from "@mui/icons-material";

// Map countries to their ISO flags or emoji
const countryData = [
  { name: "Global"},
  { name: "Middle East"},
  { name: "Italy" },
  { name: "France" },
  { name: "Mexico" },
  { name: "Japan" },
  { name: "Syria"},
  { name: "Lebanon"},
  
];

export default function CountryChips({ onSelectCountry, selectedCountry }) {
  return (
    <div className="w-full py-2 px-1">
      <div className="flex flex-wrap gap-1 sm:gap-2">
        {countryData.map((country) => {
          const isSelected = selectedCountry === country.name;

          return (
            <button
              key={country.name}
              onClick={() => onSelectCountry(isSelected ? null : country.name)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition duration-200 text-sm font-bold ${
                isSelected
                  ? "bg-blue-600 border-blue-600 text-white shadow-lg"
                  : "bg-transparent border-gray-300 text-gray-700 hover:border-blue-400"
              }`}
            >
              <span className="text-lg">{country.flag}</span>
              <span className="whitespace-nowrap">{country.name}</span>

              {isSelected && (
                <Close className="text-xs text-blue-100" aria-hidden />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
