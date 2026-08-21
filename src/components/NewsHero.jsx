function NewsHero() {
  return (
    <section className="bg-[#0b0b0b] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">

        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-white/15 pb-4">
          <p className="text-xs md:text-sm uppercase tracking-[0.28em] text-white/60">
            Minivel / News & Articles
          </p>

          <p className="text-xs uppercase tracking-[0.22em] text-white/40">
            Latest Edition
          </p>
        </div>

        {/* Main Hero */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 py-14 md:py-20 items-end">

          {/* Left */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-6">
              Business · Careers · Technology · Workplace
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-[88px] font-semibold leading-[0.95] tracking-tight max-w-4xl">
              Stories that explain what&apos;s changing.
            </h1>
          </div>

          {/* Right */}
          <div className="lg:pb-2">

            {/* Media Panel */}
            <div className="group relative h-[280px] md:h-[340px] lg:h-[360px] bg-white/5 border border-white/10 overflow-hidden">

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

              {/* Top Label */}
              <div className="absolute top-5 left-5">
                <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Featured Visual
                </span>
              </div>

              {/* Center Decoration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <span className="text-xl text-white/70">
                    →
                  </span>
                </div>
              </div>

              {/* Bottom Text */}
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                  Minivel Editorial
                </p>

                <p className="mt-2 text-xl md:text-2xl font-medium leading-snug max-w-md">
                  Stories that connect business, people and change.
                </p>
              </div>

            </div>

            {/* Description */}
            <p className="mt-6 text-base md:text-lg text-white/60 leading-relaxed max-w-xl">
              News, perspectives and useful ideas across business, careers,
              technology and the modern workplace.
            </p>

            {/* CTA */}
            <button className="group mt-7 inline-flex items-center gap-3 text-sm uppercase tracking-[0.18em] border-b border-white/50 pb-2">
              Explore Latest

              <span className="transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </button>

          </div>

        </div>

        {/* Categories */}
        <div className="border-t border-white/15 pt-5 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.18em] text-white/50">

          <button className="text-white">
            Latest
          </button>

          <button className="hover:text-white transition-colors">
            Business
          </button>

          <button className="hover:text-white transition-colors">
            Technology
          </button>

          <button className="hover:text-white transition-colors">
            Careers
          </button>

          <button className="hover:text-white transition-colors">
            Workplace
          </button>

          <button className="hover:text-white transition-colors">
            Articles
          </button>

        </div>

      </div>
    </section>
  );
}

export default NewsHero;