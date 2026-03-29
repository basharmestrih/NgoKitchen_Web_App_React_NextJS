import FoodCard from "./FoodCard";

export default function FoodGrid({ items, onCartClick, onCardClick }) {
  return (
    <div className="font-orbitron grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 mt-4 mb-8">
      {items.map((item, index) => (
        <FoodCard key={index} item={item} onCartClick={onCartClick} onCardClick={onCardClick} />
      ))}
    </div>
  );
}
