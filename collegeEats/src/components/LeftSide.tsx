// ReviewsCard.jsx

export default function LeftSide() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-4xl overflow-hidden rounded-3xl shadow-lg md:grid md:grid-cols-2">
        {/* left ­— text content */}
        <div className="relative px-10 py-14">
          {/* (optional) subtle pattern in the background */}
          <div className="pointer-events-none inset-0 bg-[url('/wave.svg')] opacity-10"></div>

          <h1 className="text-black font-black text-3xl leading-none text-center">
            College Eats
          </h1>

          <p className="mt-10 tracking-[0.2em] text-xs font-semibold text-black">
            Student Led College reviews for campus foods
          </p>

          <h2 className="mt-1 text-5xl font-extrabold leading-none">
            Reviews 2.0
          </h2>

          <p className="mt-6 max-w-sm text-gray-600">
            Restaurant reviews not only become more relevant but also&nbsp;much
            easier to create&nbsp;now.
          </p>

          <button className="mt-10 bg-black inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-400">
            Know more
            <span
              className="relative z-10 transition-transform duration-300 hover:translate-x-[20px]"
              aria-hidden
            >
              →
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
