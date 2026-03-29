import Image from 'next/image';

export default function EmpowerSection() {
  return (
    <div className="relative w-full min-h-[30rem] md:h-[42rem] rounded-2xl overflow-hidden shadow-lg">
      <Image src="/rest2.jpg" alt="Donation" fill className="object-cover" />
      
      {/* Overlay: Center everything on mobile, align right on desktop */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center md:items-end p-6 md:pr-10">
        
        <h1 className="text-white text-3xl md:text-5xl font-extrabold text-center md:text-right mb-8 max-w-xs">
          More Volunteers With Us More People We Feed
        </h1>

        <div className="flex flex-col gap-4 w-full md:w-auto">
          <a href="/signup" className="bg-blue-600 text-white text-center py-3 px-10 rounded font-bold">
            Join Us Now
          </a>
          <a href="/community" className="bg-white text-blue-600 text-center py-3 px-10 rounded font-bold">
            Be A Donor
          </a>
        </div>
      </div>
    </div>
  );
}
