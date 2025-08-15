'use client';

import Image from 'next/image';

export default function HeaderSection() {
  return (
    <div className="flex flex-col">
    <div className="font-saira flex items-start justify-between bg-gray-100 p-0 pt-0 w-full">
      
      {/* القسم الأيسر: العنوان والنصوص */}
      <div className="flex flex-col max-w-sm ml-4">
        <h1 className="text-8xl font-extrabold text-black mb-12">Ngo Kitchen</h1>
        <p className="text-4xl font-extrabold">
          <span className="text-violet-600">Together We Feed,</span>{' '}
          <span className="text-pink-600">Together We Heal.</span>
        </p>
        {/* الزران */}
        <div className="flex space-x-4 mt-20">
          <button className="bg-red-600 text-gray px-3 py-3 rounded-lg text-xl font-bold hover:bg-red-700 transition">
            Get Started
          </button>
          <button className="bg-blue-700 text-gray px-3 py-3 rounded-lg text-xl font-bold hover:bg-blue-700 transition">
            Set Your Campaign
          </button>
        </div>
      </div>

      {/* القسم الأيمن: صورة الغلاف داخل حاوية مستديرة */}
      <div className="w-3/5 h-auto rounded-l-lg overflow-hidden shadow-lg">
        <Image
          src="/girlrefugee.jpg"
          alt="NGO Banner"
          width={700}
          height={700}
          className="object-cover w-full h-full"
        />
         
      </div>
    </div>
    <div className="w-full border-t-2 border-gray-200 my-0"></div>
    </div>
    
  );
}
