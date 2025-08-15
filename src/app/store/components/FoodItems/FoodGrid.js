import FoodCard from "./FoodCard";

export default function FoodGrid({ items, onCartClick , onCardClick}) {
  return (
    <div className="font-orbitron grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-x-3 gap-y-4 mt-1 mb-8 ml-5 gap-x-10">
     {items.map((item, index) => (
  <FoodCard key={index} item={item} onCartClick={onCartClick} onCardClick={onCardClick} />
))}

    </div>
  );
}
