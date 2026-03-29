import Image from 'next/image';
import Link from 'next/link';

export default function HeaderSection() {
  return (
    <div className="relative w-full">

      {/* IMAGE */}
      <div className="relative w-full h-[500px] md:h-auto">
        <Image
          src="/girlrefugee.jpg"
          alt="NGO Banner"
          fill
          className="object-cover"
          priority
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* CONTENT ON IMAGE (MOBILE) */}
        <div className="absolute inset-0 flex flex-col justify-start mt-8 md:mt-0 items-start px-6 md:hidden text-white">
          <h1 className="text-4xl text-center font-extrabold mb-4">Food Bank</h1>

          <p className="text-md font-bold text-center">
            <span className="text-violet-300">Together We Feed,</span>{' '}
            <span className="text-pink-300">Together We Heal.</span>
          </p>

          <div className="flex flex-col space-y-3 mt-60">
            <Link
              href="/signup"
              className="mt-16 md:mt-0 whitespace-nowrap bg-red-600 px-5 py-2 rounded-lg font-bold text-center"
            >
              Join Us Now
            </Link>
            <Link
              href="/contact"
              className="hidden md:block whitespace-nowrap bg-blue-700 px-5 py-2 rounded-lg font-bold text-center"
            >
              Set Your Campaign
            </Link>
          </div>
        </div>
      </div>

      {/* DESKTOP LAYOUT (unchanged style) */}
      <div className="hidden md:flex justify-between bg-gray-100">
        
        <div className="flex flex-col max-w-sm px-6 py-4 ml-4">
          <h1 className="text-8xl font-extrabold text-black mb-6">Food Bank</h1>
          <p className="text-4xl font-extrabold">
            <span className="text-violet-600">Together We Feed,</span>{' '}
            <span className="text-pink-600">Together We Heal.</span>
          </p>

          <div className="flex space-x-4 mt-20">
            <Link
              href="/signup"
              className="whitespace-nowrap bg-red-600 text-white px-6 py-3 rounded-lg text-xl font-bold"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="whitespace-nowrap bg-blue-700 text-white px-6 py-3 rounded-lg text-xl font-bold"
            >
              Set Your Campaign
            </Link>
          </div>
        </div>

        <div className="w-3/5 h-auto overflow-hidden rounded-l-[1rem]">
          <Image
            src="/girlrefugee.jpg"
            alt="NGO Banner"
            width={700}
            height={700}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
