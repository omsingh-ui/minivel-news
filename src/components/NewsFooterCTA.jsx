function NewsFooterCTA() {
  return (
    <section className="relative overflow-hidden bg-[#080b0b] text-white">

      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">

        {/* Left emerald glow */}
        <div
          className="
            absolute -bottom-52 -left-44
            h-[500px] w-[500px]
            rounded-full
            bg-emerald-300/[0.055]
            blur-[155px]
            animate-[closingGlow_10s_ease-in-out_infinite]
          "
        />

        {/* Right upper glow */}
        <div
          className="
            absolute right-[8%] top-[8%]
            h-[260px] w-[260px]
            rounded-full
            bg-emerald-300/[0.028]
            blur-[120px]
            animate-[closingFloat_12s_ease-in-out_infinite]
          "
        />

        {/* Center soft atmosphere */}
        <div
          className="
            absolute left-[46%] top-[38%]
            h-[180px] w-[180px]
            rounded-full
            bg-white/[0.015]
            blur-[100px]
          "
        />

        {/* Orbital shapes */}
        <div className="absolute right-[-170px] top-[-185px] h-[440px] w-[440px] rounded-full border border-white/[0.022]" />

        <div className="absolute right-[-75px] top-[-90px] h-[285px] w-[285px] rounded-full border border-emerald-300/[0.035]" />

        {/* Fine curved accent */}
        <div className="absolute -bottom-[260px] left-[-180px] h-[520px] w-[720px] rounded-[50%] border border-emerald-300/[0.045]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">

      <div className="pt-3 pb-14 md:pt-5 md:pb-16 lg:pt-5 lg:pb-18">

          {/* Top marker */}
          <div className="flex items-center justify-between gap-6">

            <div className="flex items-center gap-3">

              <div className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-emerald-300/12" />

                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.45)]" />
              </div>

              <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-white/40 md:text-[10px]">
                Looking Ahead
              </p>

            </div>

            <p className="hidden text-[8px] uppercase tracking-[0.22em] text-white/16 md:block">
              Minivel / Perspectives
            </p>

          </div>

          {/* Main Content */}
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-16">

            {/* Main statement */}
            <div>

              <h2 className="max-w-[790px] text-[40px] font-medium leading-[1.01] tracking-[-0.045em] md:text-[54px] lg:text-[62px]">
                Understanding what&apos;s changing.

                <span className="mt-1 block text-white/40">
                  Anticipating what comes next.
                </span>
              </h2>

            </div>

            {/* Supporting content */}
            <div className="lg:pb-1">

              <p className="max-w-[520px] text-[15px] leading-[1.85] text-white/47 md:text-[16px]">
                Insights and perspectives on talent, business, technology and
                the forces shaping how organizations, industries and careers
                continue to evolve.
              </p>

              {/* Perspective identity */}
              <div className="mt-7 flex items-center gap-4">

                <div
                  className="
                    relative
                    flex h-11 w-11
                    items-center justify-center
                    rounded-full
                    border border-emerald-300/12
                    bg-emerald-300/[0.03]
                    shadow-[0_0_35px_rgba(110,231,183,0.035)]
                  "
                >
                  <span className="absolute inset-[5px] rounded-full border border-white/[0.035]" />

                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/85 shadow-[0_0_10px_rgba(110,231,183,0.4)]" />
                </div>

                <div>

                  <p className="text-[8px] uppercase tracking-[0.21em] text-white/26">
                    Minivel Perspective
                  </p>

                  <p className="mt-1.5 text-[11px] text-white/50">
                    Business · Talent · Technology · Work
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Closing handoff */}
          <div className="mt-12 flex items-center justify-between md:mt-14">

            <div className="inline-flex items-center gap-3">

              <span className="relative flex h-6 w-6 items-center justify-center">

                <span className="absolute h-6 w-6 rounded-full border border-emerald-300/[0.08]" />

                <span className="h-1 w-1 rounded-full bg-emerald-300/60 shadow-[0_0_8px_rgba(110,231,183,0.35)]" />

              </span>

              <p className="text-[8px] uppercase tracking-[0.23em] text-white/24">
                Continuing the conversation
              </p>

            </div>

            <div className="hidden items-center gap-3 md:flex">

              <p className="text-[8px] uppercase tracking-[0.21em] text-white/18">
                News · Ideas · Perspective
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default NewsFooterCTA;