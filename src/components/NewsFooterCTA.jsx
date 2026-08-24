function NewsFooterCTA() {
  const categories = [
    "News",
    "Business",
    "Technology",
    "Careers",
    "Articles",
  ];

  return (
    <footer className="relative overflow-hidden bg-[#080b0b] text-white">

      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-emerald-300/[0.045] blur-[130px]" />

        <div className="absolute right-[-120px] top-[-160px] h-[380px] w-[380px] rounded-full border border-white/[0.025]" />

        <div className="absolute right-[-60px] top-[-100px] h-[280px] w-[280px] rounded-full border border-white/[0.025]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

        {/* Main Closing Area */}
        <div className="py-14 md:py-16">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-end">

            {/* Statement */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />

                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.24em] text-white/40">
                  Minivel / News & Articles
                </p>
              </div>

              <h2 className="mt-5 max-w-3xl text-[38px] md:text-[52px] lg:text-[58px] font-medium leading-[1.02] tracking-[-0.04em]">
                Stay curious about
                <span className="block text-white/45">
                  what&apos;s changing next.
                </span>
              </h2>
            </div>

            {/* Supporting copy */}
            <div className="lg:pb-1">
              <p className="max-w-lg text-[15px] md:text-[16px] leading-[1.75] text-white/45">
                Perspectives on business, technology, careers and the changing
                world of work — curated by Minivel.
              </p>

              <div className="mt-6 h-px w-16 bg-emerald-300/45" />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t border-white/[0.10] py-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/65">
              Minivel
            </p>

            <nav className="flex flex-wrap gap-x-6 gap-y-3">
              {categories.map((category) => (
                <span
                  key={category}
                  className="text-[9px] uppercase tracking-[0.18em] text-white/30"
                >
                  {category}
                </span>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-white/[0.07] py-5 text-[8px] uppercase tracking-[0.18em] text-white/20 md:flex-row md:items-center md:justify-between">
          <p>Minivel Newsroom</p>

          <p>Business · Technology · Careers · Workplace</p>
        </div>

      </div>
    </footer>
  );
}

export default NewsFooterCTA;