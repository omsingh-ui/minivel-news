function VideoFeature() {
  return (
    <section className="bg-[#111716] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-14 md:py-16">

        {/* Header */}
        <div className="flex items-end justify-between border-b border-white/12 pb-4">
          <div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-emerald-300/75">
              Watch
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-medium tracking-[-0.02em]">
              Featured Video
            </h2>
          </div>

          <p className="hidden md:block text-[10px] uppercase tracking-[0.2em] text-white/35">
            Media / 05
          </p>
        </div>

        {/* Video */}
        <div className="group relative mt-8 h-[360px] md:h-[520px] lg:h-[600px] overflow-hidden bg-[#080b0b]">

          {/* Placeholder cinematic background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(52,211,153,0.10),transparent_35%)]" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5" />

          {/* Decorative lines */}
          <div className="absolute right-[-80px] top-[-30px] h-[300px] w-[420px] opacity-[0.08]">
            <div className="absolute inset-0 rounded-[50%] border border-white/20 rotate-[-10deg]" />
            <div className="absolute inset-[35px] rounded-[50%] border border-white/15 rotate-[-6deg]" />
          </div>

          {/* Top labels */}
          <div className="absolute top-5 left-5 flex items-center gap-3">
            <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-white/70">
              Video Feature
            </span>

            <span className="text-[10px] uppercase tracking-[0.18em] text-white/35">
              06:24
            </span>
          </div>

          {/* Play button */}
          <button className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full border border-emerald-300/35 bg-black/20 text-xl text-emerald-200 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-emerald-300 group-hover:text-black">
              ▶
            </span>
          </button>

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-200/75">
              Business · Workplace
            </p>

            <h3 className="mt-3 max-w-3xl text-2xl md:text-4xl font-medium leading-tight tracking-[-0.02em]">
              A closer look at how work and business are evolving.
            </h3>

            <p className="mt-4 max-w-2xl text-sm md:text-base leading-[1.7] text-white/50">
              Watch conversations, explainers and stories exploring the shifts
              influencing organizations, professionals and industries.
            </p>
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-300 transition-all duration-700 group-hover:w-full" />
        </div>

      </div>
    </section>
  );
}

export default VideoFeature;