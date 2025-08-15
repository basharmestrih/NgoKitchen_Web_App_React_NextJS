export default function FoodCard({ item, onCartClick , onCardClick}) {
    return (
      <div
        className="relative w-[29rem] h-64 rounded-2xl shadow hover:shadow-lg transition bg-center bg-cover text-white overflow-hidden cursor-pointer"
        style={{ backgroundImage: `url(${item.image})` }}
        onClick={() => onCardClick(item)}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl z-0"></div>
  
        <div className="absolute top-2 left-0 max-w-sm p-4 z-10">
          <button
            className="text-2xl hover:text-green-400 transition w-fit"
            onClick={(e) => {
              e.stopPropagation();
              onCartClick(item);
            }}
          >
            🛒
          </button>
        </div>


       <div className="absolute top-2 right-2 z-10">
  <div className="w-10 h-10 rounded-lg bg-yellow-400 flex items-center justify-center shadow-md">
    <p className="font-lobster font-extrabold text-lg text-black">
      {item.price}$
    </p>
  </div>
</div>






        <div className="absolute top-1 right-0 max-w-sm p-4 z-10">
         
        </div>
  
        <div className="relative bottom-0 left-0 p-4 flex flex-col justify-end h-full">
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-sm">{item.country}</p>
          <p className="text-sm mb-2 text-gray-200">{item.category}</p>
           
        </div>
      </div>
    );
  }
  