function NewsHero() {
  const categories = [
    "Latest",
    "Business",
    "Technology",
    "Careers",
    "Workplace",
    "Articles",
  ];

  return (
    <section className="relative overflow-hidden bg-[#080b0b] text-white">
      {/* Background details */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-120px] top-[-80px] h-[420px] w-[420px] rounded-full bg-emerald-400/[0.04] blur-[120px]" />

        <div className="absolute left-[-100px] bottom-[-120px] h-[360px] w-[360px] rounded-full bg-white/[0.025] blur-[120px]" />

        {/* Decorative curved lines */}
        <div className="absolute right-[-80px] top-[80px] h-[380px] w-[520px] opacity-[0.07]">
          <div className="absolute inset-0 rounded-[50%] border border-white/20 rotate-[-12deg]" />
          <div className="absolute inset-[28px] rounded-[50%] border border-white/15 rotate-[-8deg]" />
          <div className="absolute inset-[56px] rounded-[50%] border border-white/10 rotate-[-4deg]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-8 pb-7 md:pt-10 md:pb-8">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/12 pb-4">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.26em] text-white/65">
            Minivel / News & Articles
          </p>

          <div className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

            <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">
              Latest Edition
            </p>
          </div>
        </div>

        {/* Main hero */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 py-14 md:py-16 lg:py-18 items-end">
          {/* Left */}
          <div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.22em] text-emerald-300/80 mb-5">
              Business · Careers · Technology · Workplace
            </p>

            <h1 className="hero-heading max-w-[760px] text-[44px] md:text-[60px] lg:text-[68px] font-medium leading-[1.05] tracking-[-0.03em]">
              Timely stories.
              <span className="block mt-1 text-white/95">
                Relevant insights.
              </span>
              <span className="block mt-1 text-white/80">
                Real impact.
              </span>
            </h1>
          </div>

          {/* Right */}
          <div className="max-w-[430px] lg:ml-auto">
            <p className="text-[16px] md:text-[17px] leading-[1.75] text-white/60">
              Explore the ideas, news and perspectives driving change across
              business, careers, technology and the workplace.
            </p>

            <button className="group mt-7 inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-white/80">
              Explore Latest

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/50 text-emerald-300 transition-all duration-300 group-hover:bg-emerald-400 group-hover:text-black group-hover:scale-105">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="border-t border-white/12 pt-5 flex flex-wrap gap-x-8 gap-y-3">
          {categories.map((item, index) => (
            <button
              key={item}
              className={`text-[10px] md:text-xs uppercase tracking-[0.18em] transition-colors duration-300 ${
                index === 0
                  ? "text-white"
                  : "text-white/45 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsHero;