import { trendingStories } from "../data/newsData";

function TrendingStories() {
  return (
    <section className="relative bg-[#080b0b] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-14 md:py-16">

        {/* Header */}
        <div className="grid gap-6 border-b border-white/12 pb-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-emerald-300/75">
              Trending Now
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-medium leading-[1.08] tracking-[-0.03em]">
              Stories gaining
              <span className="block">attention right now.</span>
            </h2>
          </div>

          <div className="lg:flex lg:justify-end">
            <p className="max-w-md text-[14px] md:text-[15px] leading-[1.7] text-white/45">
              A quick look at the conversations shaping business, technology,
              careers and the changing world of work.
            </p>
          </div>
        </div>

        {/* Sticky Overlapping Cards */}
        <div className="relative mt-10">
          {trendingStories.map((story, index) => (
            <article
              key={story.id}
              className="group sticky mb-9 overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#101514] shadow-[0_-22px_70px_rgba(0,0,0,0.42)]"
              style={{
                top: `${92 + index * 14}px`,
                zIndex: index + 1,
              }}
            >
              {/* Card Background Details */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">

                {/* Emerald glow */}
                <div className="absolute -right-28 -top-28 h-[320px] w-[320px] rounded-full bg-emerald-300/[0.06] blur-[110px]" />

                {/* Soft center light */}
                <div className="absolute left-[30%] top-[-120px] h-[260px] w-[260px] rounded-full bg-white/[0.025] blur-[100px]" />

                {/* Inner frame */}
                <div className="absolute inset-[10px] rounded-[20px] border border-white/[0.035]" />

                {/* Top highlight */}
                <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />

                {/* Emerald edge */}
                <div className="absolute left-0 top-0 h-[74px] w-[2px] bg-gradient-to-b from-emerald-300/90 to-transparent" />
              </div>

              {/* Card Layout */}
              <div className="relative grid min-h-[260px] md:grid-cols-[165px_1fr_190px]">

                {/* Premium Ranking Number */}
                <div className="relative flex flex-col justify-between overflow-hidden border-b border-white/[0.07] p-6 md:border-b-0 md:border-r md:p-7">

                  {/* Label */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />

                      <p className="text-[8px] font-semibold uppercase tracking-[0.26em] text-white/35">
                        Most Read
                      </p>
                    </div>

                    <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-emerald-300/60">
                      {story.category}
                    </p>
                  </div>

                  {/* Number */}
                  <div className="relative z-10 mt-10">
                    <p className="mb-3 text-[8px] font-medium uppercase tracking-[0.28em] text-white/25">
                      No.
                    </p>

                    <div className="flex items-end gap-3">
                      <span
                        className="
                          select-none
                          text-[72px]
                          md:text-[86px]
                          font-semibold
                          leading-[0.72]
                          tracking-[-0.08em]
                          text-transparent
                          [-webkit-text-stroke:1px_rgba(255,255,255,0.28)]
                          transition-all
                          duration-500
                          group-hover:[-webkit-text-stroke:1px_rgba(110,231,183,0.75)]
                          group-hover:drop-shadow-[0_0_16px_rgba(110,231,183,0.12)]
                        "
                      >
                        {story.number}
                      </span>

                      <span className="mb-1 h-[2px] w-7 bg-emerald-300/50 transition-all duration-500 group-hover:w-11 group-hover:bg-emerald-300" />
                    </div>
                  </div>

                  {/* Background Number */}
                  <span className="pointer-events-none absolute -bottom-8 -right-3 select-none text-[135px] font-semibold leading-none tracking-[-0.1em] text-white/[0.018]">
                    {story.number}
                  </span>
                </div>

                {/* Main Editorial Content */}
                <div className="flex flex-col justify-center p-6 md:p-8 lg:px-10">

                  {/* Category */}
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/85" />

                    <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-emerald-300/75">
                      Trending Now
                    </p>

                    <span className="h-px w-10 bg-emerald-300/20" />
                  </div>

                  {/* Headline */}
                  <h3 className="mt-5 max-w-[720px] text-[24px] md:text-[31px] font-medium leading-[1.14] tracking-[-0.03em] text-white">
                    {story.title}
                  </h3>

                  {/* Metadata */}
                  <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                      Minivel Editorial
                    </p>

                    <span className="h-1 w-1 rounded-full bg-white/15" />

                    <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                      Current Conversation
                    </p>
                  </div>
                </div>

                {/* Reader Signal */}
                <div className="relative flex flex-col justify-between border-t border-white/[0.07] p-6 md:border-l md:border-t-0 md:p-7">

                  <div>
                    <p className="text-[8px] uppercase tracking-[0.22em] text-white/28">
                      Reader Signal
                    </p>

                    <p className="mt-2 text-[13px] font-medium text-white/65">
                      Rising Interest
                    </p>
                  </div>

                  {/* Signal Graph */}
                  <div>
                    <div className="relative h-[54px]">
                      <svg
                        viewBox="0 0 140 54"
                        className="h-full w-full overflow-visible"
                        aria-hidden="true"
                      >
                        {/* Soft glow */}
                        <path
                          d="M2 44 C24 42, 30 34, 48 36 S72 25, 88 28 S110 12, 138 9"
                          fill="none"
                          stroke="rgba(110,231,183,0.12)"
                          strokeWidth="7"
                        />

                        {/* Main line */}
                        <path
                          d="M2 44 C24 42, 30 34, 48 36 S72 25, 88 28 S110 12, 138 9"
                          fill="none"
                          stroke="rgba(110,231,183,0.65)"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>

                    <div className="mt-3 flex items-center justify-between border-t border-white/[0.07] pt-3">
                      <span className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                        Attention
                      </span>

                      <span className="text-[10px] text-emerald-300/70">
                        ↑
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Detail */}
              <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-emerald-300/15 to-transparent" />
            </article>
          ))}
        </div>

        {/* Section Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-white/12 pt-5">
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
            Minivel Newsroom
          </p>

          <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
            06 / Most Read
          </p>
        </div>

      </div>
    </section>
  );
}

export default TrendingStories;