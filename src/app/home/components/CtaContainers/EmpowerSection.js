import Image from 'next/image';

export default function EmpowerSection() {
  return (
    <div className="w-full px-4 md:px-0">
      <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-lg md:h-[42rem]">
        <Image src="/rest2.jpg" alt="Donation" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 hidden bg-black/40 md:flex md:items-start md:justify-end md:px-6 md:pt-16 md:pr-6">
          <div className="flex max-w-sm flex-col items-end gap-4 text-right">
      <h1 className="text-4xl font-extrabold text-white">
  <span className="block">More Volunteers</span>
  <span className="block">With Us</span>
  <span className="block">More People</span>
  <span className="block">We Feed</span>
</h1>

            <div className="flex flex-col gap-4 mt-16">
              <a
                href="/signup"
                className="rounded bg-blue-600 px-10 py-3 text-center text-base font-bold text-white"
              >
                Join Us Now
              </a>
              <a
                href="/community"
                className="rounded bg-white px-10 py-3 text-center text-base font-bold text-blue-600"
              >
                Be A Donor
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
