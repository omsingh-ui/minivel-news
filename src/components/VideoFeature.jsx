function VideoFeature() {
  return (
    <section className="relative overflow-hidden bg-[#111716] text-white">
      {/* Section atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-emerald-300/[0.035] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />

              <p className="text-[10px] uppercase tracking-[0.24em] text-emerald-300/70 md:text-xs">
                Watch
              </p>
            </div>

            <h2 className="mt-3 text-3xl font-medium tracking-[-0.025em] md:text-4xl">
              Featured Video
            </h2>
          </div>

          <div className="hidden text-right md:block">
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
              Minivel Editorial
            </p>

            <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/35">
              Future of Work
            </p>
          </div>
        </div>

        {/* Main Feature */}
        <div className="group relative mt-8 overflow-hidden rounded-[26px] bg-[#080b0b]">
          {/* Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/video-poster.jpg"
            className="h-[420px] w-full object-cover md:h-[560px] lg:h-[620px]"
          >
            <source
              src="/videos/future-of-work.mp4"
              type="video/mp4"
            />
          </video>

          {/* Video treatment */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-black/10" />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />

          {/* Soft emerald atmosphere */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full bg-emerald-300/[0.08] blur-[100px]" />

          {/* Inner frame */}
          <div className="pointer-events-none absolute inset-[10px] rounded-[19px] border border-white/[0.05]" />

          {/* Top metadata */}
          <div className="absolute left-5 right-5 top-5 flex items-center justify-between md:left-7 md:right-7 md:top-7">
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-[8px] uppercase tracking-[0.2em] text-white/75 backdrop-blur-md">
                Video Feature
              </span>

              <span className="hidden text-[8px] uppercase tracking-[0.18em] text-white/35 sm:block">
                People · Technology · Work
              </span>
            </div>

            {/* Live-style marker */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-30" />

                <span className="relative h-2 w-2 rounded-full bg-emerald-300" />
              </span>

              <span className="text-[8px] uppercase tracking-[0.18em] text-white/40">
                Playing
              </span>
            </div>
          </div>

          {/* Center visual marker */}
          <div className="pointer-events-none absolute inset-0 hidden items-center justify-center md:flex">
            <div className="flex h-[74px] w-[74px] items-center justify-center rounded-full border border-white/15 bg-black/10 backdrop-blur-[2px] transition-all duration-700 group-hover:scale-110 group-hover:border-emerald-300/35">
              <span className="ml-1 text-[15px] text-white/65">
                ▶
              </span>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              {/* Main message */}
              <div>
                <p className="text-[9px] font-medium uppercase tracking-[0.23em] text-emerald-200/75">
                  Future of Work
                </p>

                <h3 className="mt-3 max-w-3xl text-[28px] font-medium leading-[1.08] tracking-[-0.03em] md:text-[38px] lg:text-[43px]">
                  How people and technology are reshaping the way work gets done.
                </h3>
              </div>

              {/* Context */}
              <div className="lg:pb-1">
                <p className="max-w-lg text-[13px] leading-[1.75] text-white/52 md:text-[14px]">
                  Technology is changing workflows, responsibilities and the
                  capabilities organizations need. The bigger opportunity is
                  understanding how people and tools can work better together.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[8px] uppercase tracking-[0.17em] text-white/45">
                    Collaboration
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[8px] uppercase tracking-[0.17em] text-white/45">
                    Capability
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[8px] uppercase tracking-[0.17em] text-white/45">
                    Change
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="pointer-events-none absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent" />
        </div>

        {/* Supporting footer */}
        <div className="mt-5 flex flex-col gap-2 text-[8px] uppercase tracking-[0.18em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <p>Minivel / Video Perspective</p>

          <p>People · Workplace · Future</p>
        </div>
      </div>
    </section>
  );
}

export default VideoFeature;