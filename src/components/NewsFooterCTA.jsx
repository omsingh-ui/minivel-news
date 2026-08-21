function NewsFooterCTA() {
  return (
    <section className="bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-end">

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Minivel / News & Articles
            </p>

            <h2 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-semibold leading-[0.98] tracking-tight max-w-4xl">
              Stay curious about what&apos;s changing next.
            </h2>
          </div>

          <div>
            <p className="text-lg text-white/50 leading-relaxed max-w-lg">
              Explore news, business developments, career perspectives,
              technology and workplace stories in one place.
            </p>

            <button className="group mt-8 inline-flex items-center gap-4 border border-white/30 px-6 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors duration-300">
              Explore All Stories

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

        </div>

        <div className="mt-20 pt-6 border-t border-white/15 flex flex-col md:flex-row gap-4 justify-between text-xs uppercase tracking-[0.18em] text-white/35">
          <span>Minivel</span>
          <span>Business · Careers · Technology · Workplace</span>
        </div>

      </div>
    </section>
  );
}

export default NewsFooterCTA;