export default function JoinUsCard() {
  return (
    <div className="w-full max-w-full overflow-hidden rounded-2xl shadow-md">
      <div
        className="relative h-72 sm:h-80 lg:h-[29rem] bg-cover bg-center"
        style={{ backgroundImage: "url(speakup.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col justify-end gap-4 px-5 pb-6 text-white">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Speak up campaigns
          </h2>
          <button className="w-full bg-blue-600 text-white py-2 text-sm font-semibold rounded-full transition hover:bg-blue-700 sm:text-base">
            Join Us Now
          </button>
        </div>
      </div>
    </div>
  );
}
  
