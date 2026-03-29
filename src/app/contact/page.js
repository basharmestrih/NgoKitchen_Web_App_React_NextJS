import Image from "next/image";

export const metadata = {
  title: "Contact Us",
  description: "Reach out to the Ngo Kitchen support team.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_48%,#f8fafc_100%)] px-0 py-0 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <section className="order-2 rounded-t-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200 sm:rounded-[2rem] sm:p-8 lg:order-1 lg:p-10">
          <div className="max-w-2xl">
            <p className="font-orbitron text-sm font-black uppercase tracking-[0.28em] text-blue-600">
              Contact Us
            </p>
            <h1 className="mt-4 font-['Archivo_Black'] text-3xl leading-tight text-slate-900 sm:text-4xl">
              Create a support ticket and tell us how we can help.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Share your question, issue, or request and our team will review it
              as soon as possible. This form is currently visual only, so no
              submission logic is connected yet.
            </p>
          </div>

          <form className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">
                  Full Name
                </span>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">
                  Email Address
                </span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white"
                />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">
                  Ticket Type
                </span>
                <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white">
                  <option>General Support</option>
                  <option>Order Issue</option>
                  <option>Donation Question</option>
                  <option>Partnership Request</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">
                  Subject
                </span>
                <input
                  type="text"
                  placeholder="Short summary of your issue"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-700">
                Message
              </span>
              <textarea
                rows={7}
                placeholder="Describe your request in detail"
                className="w-full rounded-[1.75rem] border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-700">
                Reference Number
              </span>
              <input
                type="text"
                placeholder="Optional order or ticket reference"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white"
              />
            </label>

            <div className="flex flex-col gap-4 rounded-[1.75rem] bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-slate-500">
                A support agent will follow up once ticket submission is wired
                up in the next step.
              </p>
              <button
                type="button"
                className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </section>

        <aside className="hidden md:block order-1 relative min-h-[260px] overflow-hidden bg-slate-900 shadow-[0_24px_80px_rgba(15,23,42,0.14)] sm:rounded-[2rem] lg:order-2 lg:min-h-full">
          <Image
            src="https://images.pexels.com/photos/8543401/pexels-photo-8543401.jpeg"
            alt="Charity support moment"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10 sm:bg-[linear-gradient(180deg,rgba(15,23,42,0.08)_0%,rgba(15,23,42,0.6)_55%,rgba(15,23,42,0.88)_100%)]" />

          <div className="absolute inset-x-0 bottom-0 hidden p-5 text-white sm:block sm:p-8">
            <p className="font-orbitron text-[10px] font-black uppercase tracking-[0.24em] text-blue-200 sm:text-xs sm:tracking-[0.28em]">
              Community Care
            </p>
            <h2 className="mt-2 font-['Archivo_Black'] text-lg leading-tight sm:mt-3 sm:text-3xl">
              Every conversation can be part of meaningful support.
            </h2>
            <p className="mt-3 max-w-md text-xs leading-6 text-slate-200 sm:mt-4 sm:text-base sm:leading-7">
              Our platform is built to connect food, care, and community.
              Contact us for help, collaboration requests, or questions about
              how the initiative works.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
