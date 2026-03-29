import Image from 'next/image';

export default function CampaignSection() {
  return (
    <div className="font-saira w-full flex flex-col md:flex-row rounded-none overflow-hidden shadow-lg bg-white">
      {/* Content Area */}
      <div className="w-full md:w-1/4 bg-gray-200 p-6 md:p-8 flex flex-col justify-center space-y-4">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800">Discover charity campaigns</h2>
        <p className="text-gray-600 text-sm md:text-base">
          Help us provide warm meals at every event. Be the reason someone sleeps without hunger today.
        </p>
        <div className="flex flex-col space-y-3 pt-4">
          <a href="/events" className="bg-blue-600 text-white font-bold text-center px-4 py-2 rounded-lg text-sm">
            See campaigns
          </a>
          <a href="/events" className="bg-red-600 text-white font-bold text-center px-4 py-2 rounded-lg text-sm">
            Call us now
          </a>
        </div>
      </div>
      {/* Image Area */}
      <div className="w-full md:w-3/4 ">
        <div className="relative h-64 overflow-hidden md:h-full ">
          <Image src="/rest1.jpg" alt="NGO Banner" fill className="object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
      </div>
    </div>
  );
}
