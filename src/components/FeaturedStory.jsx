function FeaturedStory() {
  return (
    <section className="bg-[#f3f0e8] text-[#111]">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">

        <div className="flex items-center justify-between border-b border-black/20 pb-4">
          <p className="text-xs uppercase tracking-[0.25em] text-black/50">
            Featured Story
          </p>

          <p className="text-xs uppercase tracking-[0.2em] text-black/40">
            Lead / 01
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 mt-10 items-center">

          <div className="group relative h-[380px] md:h-[520px] overflow-hidden bg-[#d8d5ce]">

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

            <div className="absolute top-5 left-5">
              <span className="bg-white text-black px-3 py-2 text-[10px] uppercase tracking-[0.2em]">
                Featured
              </span>
            </div>

            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                Visual coming soon
              </p>
            </div>

          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-black/45">
              Business & Workplace
            </p>

            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.02] tracking-tight">
              The stories shaping business, people and the modern workplace.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-black/60 max-w-xl">
              Explore important developments across business, careers,
              technology and the changing world of work.
            </p>

            <div className="mt-8 flex items-center gap-6 text-sm text-black/50">
              <span>6 min read</span>
              <span>•</span>
              <span>Featured</span>
            </div>

            <button className="group mt-8 flex items-center gap-3 text-sm uppercase tracking-[0.18em] border-b border-black pb-2">
              Read Story

              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default FeaturedStory;