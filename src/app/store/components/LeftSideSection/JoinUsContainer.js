export default function JoinUsCard() {
    return (
      <div className="font-sansation w-[18rem] h-[33rem] bg-white shadow-md rounded-xl overflow-hidden relative ">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(speakup.jpg)' }} // Ensure this image is in the public folder or reachable
        ></div>
  
        {/* Overlay (optional dim) */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
  
        {/* Join Button */}
        <div className="absolute  w-full flex flex-col justify-start z-10 px-5 pt-12">
        <h2 className="text-5xl font-bold text-gray-800">
       Speak up capmaigns
      </h2>
     
      <button className="w-full bg-blue-600 mt-5 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
          Join Us Now
        </button>
        
        </div>
        
      </div>
    );
  }
  