import Image from 'next/image';

export default function EmpowerSection() {
  return (
    <div className="font-saira relative w-full h-[42rem] rounded-2xl overflow-hidden shadow-lg">
      <Image
        src="/rest2.jpg"
        alt="Donation Cover"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0 flex justify-end items-center ml-12 mb-60">
        <h1 className="text-gray-200 text-5xl font-extrabold py-3 px-10 w-1/3">
          More Volunteers With Us More People We Feed
        </h1>
      </div>
      <div className="absolute inset-0 flex justify-end items-end ml-12 mb-40 pl-60">
        <a
          href="/signup"
          className="bg-blue-600 text-gray-200 text-xl font-extrabold py-3 px-10 w-1/3 cursor-pointer hover:bg-blue-700 transition duration-300 rounded"
        >
          Join Us Now
        </a>
      </div>
      <div className="absolute inset-0 flex justify-end items-end ml-12 mb-20 pl-60">
        <a
          href="/community"
          className="bg-indigo-100 text-blue-600 text-xl font-extrabold py-3 px-10 w-1/3 cursor-pointer hover:bg-indigo-200 transition duration-300 rounded"
        >
          Be A Donor
        </a>
      </div>
    </div>
  );
}
