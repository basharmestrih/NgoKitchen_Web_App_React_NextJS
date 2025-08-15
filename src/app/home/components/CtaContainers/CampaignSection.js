import Image from 'next/image';

export default function CampaignSection() {
    return (
      <div className="font-saira w-full h-[30rem] rounded-2xl overflow-hidden shadow-lg flex">
        <div className="w-1/4 bg-gray-200 px-6 flex flex-col justify-start text-left space-y-4 p-5">
          <h2 className="text-4xl font-extrabold text-gray-800">Discover now all charity campaigns we can do</h2>
          <p className="text-gray-600">
            Help us provide warm meals at every event. Be the reason someone sleeps without hunger today.
          </p>
          <div className="px-6 flex flex-col justify-start text-left space-y-4">
            <a href="/events" className="mt-4 bg-blue-600 text-white font-bold text-center px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition text-sm font-semibold">
              See campaigns
            </a>
            <a href="/events" className="mt-4 bg-red-600 text-white font-bold text-center px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition text-sm font-semibold">
              Call us now
            </a>
          </div>
        </div>
        <div className="w-3/4 relative">
          <div className="absolute inset-0 w-full h-full object-cover" />
           <Image
                    src="/rest1.jpg"
                    alt="NGO Banner"
                    fill
                    priority
                    className="object-cover"
                  />
                  
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      </div>
    );
  }
  