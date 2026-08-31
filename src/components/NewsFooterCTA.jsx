function NewsFooterCTA() {
  return (
    <section className="relative overflow-hidden bg-[#080b0b] text-white">

      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0">

        {/* Large editorial watermark */}
        <span className="absolute -bottom-8 left-[-20px] select-none text-[120px] font-semibold leading-none tracking-[-0.08em] text-white/[0.012] md:text-[190px] lg:text-[230px]">
          NEXT
        </span>

        {/* Left emerald atmosphere */}
        <div
          className="
            absolute -bottom-44 -left-36
            h-[430px] w-[430px]
            rounded-full
            bg-emerald-300/[0.05]
            blur-[140px]
            animate-[closingGlow_10s_ease-in-out_infinite]
          "
        />

        {/* Right floating atmosphere */}
        <div
          className="
            absolute right-[8%] top-[16%]
            h-[220px] w-[220px]
            rounded-full
            bg-emerald-300/[0.025]
            blur-[110px]
            animate-[closingFloat_12s_ease-in-out_infinite]
          "
        />

        {/* Orbital details */}
        <div className="absolute right-[-150px] top-[-170px] h-[420px] w-[420px] rounded-full border border-white/[0.025]" />

        <div className="absolute right-[-70px] top-[-90px] h-[270px] w-[270px] rounded-full border border-emerald-300/[0.035]" />

        {/* Floating point */}
        <span
          className="
            absolute right-[20%] top-[27%]
            h-1 w-1
            rounded-full
            bg-emerald-300/45
            animate-[closingPulse_4s_ease-in-out_infinite]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <div className="py-16 md:py-20 lg:py-24">

          {/* Top Editorial Marker */}
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">
              <div className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute h-2 w-2 animate-ping rounded-full bg-emerald-300/15" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-300" />
              </div>

              <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-white/38 md:text-[10px]">
                Looking Ahead
              </p>
            </div>

            <p className="hidden text-[8px] uppercase tracking-[0.24em] text-white/18 md:block">
              Minivel / Perspective 08
            </p>

          </div>

          {/* Main Content */}
          <div className="mt-9 grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:gap-16">

            {/* Statement */}
            <div>
              <h2 className="max-w-[790px] text-[38px] font-medium leading-[1.01] tracking-[-0.045em] md:text-[52px] lg:text-[60px]">
                Understanding what&apos;s changing.

                <span className="mt-1 block text-white/40">
                  Anticipating what comes next.
                </span>
              </h2>

              {/* Small visual signature */}
              <div className="mt-7 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/75" />
                <span className="h-1 w-1 rounded-full bg-emerald-300/35" />
                <span className="h-[3px] w-[3px] rounded-full bg-emerald-300/20" />
              </div>
            </div>

            {/* Supporting Content */}
            <div className="lg:pb-1">

              <p className="max-w-[520px] text-[15px] leading-[1.8] text-white/46 md:text-[16px]">
                Insights and perspectives on talent, business, technology and
                the forces shaping how organizations, industries and careers
                continue to evolve.
              </p>

              {/* Editorial Identity */}
              <div className="mt-8 flex items-center gap-4">

                <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-emerald-300/12 bg-emerald-300/[0.03]">

                  <span className="absolute inset-[5px] rounded-full border border-white/[0.035]" />

                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/80" />

                </div>

                <div>
                  <p className="text-[8px] uppercase tracking-[0.21em] text-white/25">
                    Minivel Perspective
                  </p>

                  <p className="mt-1.5 text-[11px] tracking-[0.01em] text-white/50">
                    Business · Talent · Technology · Work
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* Quiet Closing Detail */}
          <div className="mt-14 flex items-end justify-between md:mt-16">

            <div className="inline-flex items-center gap-3">

              <span className="relative flex h-5 w-5 items-center justify-center">
                <span className="absolute h-5 w-5 rounded-full border border-emerald-300/[0.08]" />
                <span className="h-1 w-1 rounded-full bg-emerald-300/55" />
              </span>

              <p className="text-[8px] uppercase tracking-[0.23em] text-white/23">
                Continuing the conversation
              </p>

            </div>

            {/* Minimal editorial coordinates */}
            <div className="hidden text-right md:block">
              <p className="text-[7px] uppercase tracking-[0.22em] text-white/15">
                News · Ideas · Perspective
              </p>

              <p className="mt-1.5 text-[8px] uppercase tracking-[0.2em] text-emerald-300/30">
                Minivel
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default NewsFooterCTA;