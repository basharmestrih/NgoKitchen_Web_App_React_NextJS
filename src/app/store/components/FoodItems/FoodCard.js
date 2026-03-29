import Image from "next/image";

export default function FoodCard({ item, onCartClick, onCardClick }) {
  return (
    <div
      className="relative w-full h-64 rounded-2xl shadow hover:shadow-lg overflow-hidden cursor-pointer sm:h-72 md:h-80 lg:h-[22rem]"
      onClick={() => onCardClick(item)}
    >
     
      <Image
        src={item.image} 
        alt={item.title}
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Cart button */}
      <div className="absolute top-3 left-3 z-30">
        <button
          className="bg-white/90 px-3 rounded-lg text-xl font-bold text-gray-900 hover:text-green-600"
          onClick={(e) => {
            e.stopPropagation();
            onCartClick(item);
          }}
        >
          +
        </button>
      </div>

      {/* Price */}
      <div className="absolute top-3 right-3 z-20">
        <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center shadow-md">
          <p className="font-extrabold text-black text-lg">
            ${item.price}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 p-4 z-20 text-white">
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p className="text-sm uppercase text-gray-200">{item.country}</p>
        <p className="text-sm text-gray-300">{item.category}</p>
      </div>
    </div>
  );
}