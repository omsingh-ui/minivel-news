import { trendingStories } from "../data/newsData";
import { Link } from "react-router-dom";

function TrendingStories() {
  return (
    <section
    id="trending"
    className="relative bg-[#080b0b] text-white"
    >
      <div className="mx-auto max-w-7xl px-6 pb-7 pt-14 md:px-8 md:pb-9 md:pt-16">

        {/* =====================
            HEADER
        ====================== */}
        <div className="grid gap-6 pb-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-emerald-300/75 md:text-xs">
              Trending Now
            </p>

            <h2 className="mt-2 text-3xl font-medium leading-[1.08] tracking-[-0.03em] md:text-4xl">
              Stories gaining

              <span className="block">
                attention right now.
              </span>
            </h2>
          </div>


          <div className="lg:flex lg:justify-end">

            <p className="max-w-md text-[14px] leading-[1.7] text-white/45 md:text-[15px]">
              A quick look at the conversations shaping business, technology,
              careers and the changing world of work.
            </p>

          </div>

        </div>


        {/* =====================
            STICKY OVERLAPPING CARDS
        ====================== */}
        <div className="relative mt-10">

          {trendingStories.map((story, index) => (

            <Link
              key={story.id}
              to={`/article/${story.slug}`}
              state={{ source: "trending" }}
              className="
                group
                sticky
                mb-9
                block
                overflow-hidden
                rounded-[28px]
                border border-white/[0.08]
                bg-[#101514]
                shadow-[0_-22px_70px_rgba(0,0,0,0.42)]
              "
              style={{
                top: `${92 + index * 14}px`,
                zIndex: index + 1,
              }}
            >

              {/* =====================
                  CARD ATMOSPHERE
              ====================== */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">

                <div className="absolute -right-28 -top-28 h-[320px] w-[320px] rounded-full bg-emerald-300/[0.06] blur-[110px]" />

                <div className="absolute left-[30%] top-[-120px] h-[260px] w-[260px] rounded-full bg-white/[0.025] blur-[100px]" />

                <div className="absolute inset-[10px] rounded-[20px] border border-white/[0.035]" />

                {/* Left emerald accent */}
                <div className="absolute left-0 top-0 h-[74px] w-[2px] bg-gradient-to-b from-emerald-300/90 to-transparent" />

              </div>


              {/* =====================
                  CARD LAYOUT
              ====================== */}
              <div className="relative grid min-h-[260px] md:grid-cols-[165px_1fr_210px]">


                {/* =====================
                    RANKING NUMBER
                ====================== */}
                <div className="relative flex flex-col justify-between overflow-hidden p-6 md:border-r md:border-white/[0.07] md:p-7">

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


                  <div className="relative z-10 mt-10">

                    <p className="mb-3 text-[8px] font-medium uppercase tracking-[0.28em] text-white/25">
                      No.
                    </p>

                    <div className="flex items-end">

                      <span
                        className="
                          select-none
                          text-[72px]
                          font-semibold
                          leading-[0.72]
                          tracking-[-0.08em]
                          text-transparent
                          [-webkit-text-stroke:1px_rgba(255,255,255,0.28)]
                          transition-all
                          duration-500
                          group-hover:[-webkit-text-stroke:1px_rgba(110,231,183,0.75)]
                          group-hover:drop-shadow-[0_0_16px_rgba(110,231,183,0.12)]
                          md:text-[86px]
                        "
                      >
                        {story.number}
                      </span>

                    </div>

                  </div>


                  {/* Background number */}
                  <span className="pointer-events-none absolute -bottom-8 -right-3 select-none text-[135px] font-semibold leading-none tracking-[-0.1em] text-white/[0.018]">
                    {story.number}
                  </span>

                </div>


                {/* =====================
                    MAIN CONTENT
                ====================== */}
                <div className="flex flex-col justify-center p-6 md:p-8 lg:px-10">

                  <div className="flex items-center gap-3">

                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/85" />

                    <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-emerald-300/75">
                      Trending Now
                    </p>

                  </div>


                  <h3 className="mt-5 max-w-[720px] text-[24px] font-medium leading-[1.14] tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-emerald-50 md:text-[31px]">
                    {story.title}
                  </h3>


                  <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2">

                    <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                      Minivel Insight
                    </p>

                    <span className="h-1 w-1 rounded-full bg-white/15" />

                    <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                      Current Conversation
                    </p>

                  </div>


                  <div className="mt-6 flex items-center gap-2">

                    <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-emerald-300/60 transition-colors duration-300 group-hover:text-emerald-300">
                      Read Insight
                    </span>

                    <span className="text-[12px] text-emerald-300/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-emerald-300">
                      →
                    </span>

                  </div>

                </div>


                {/* =====================
                    LIVE READER SIGNAL
                ====================== */}
                <div className="relative flex min-h-[220px] flex-col overflow-hidden p-6 md:border-l md:border-white/[0.07] md:p-7">

                  {/* Ambient glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-44
                      w-44
                      rounded-full
                      bg-emerald-300/[0.055]
                      blur-[70px]
                      transition-all
                      duration-700
                      group-hover:bg-emerald-300/[0.11]
                    "
                  />


                  {/* Signal label */}
                  <div className="relative z-10 flex items-center gap-2.5">

                    {/* Animated live dot */}
                    <span className="relative flex h-2 w-2">

                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-30" />

                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300/85" />

                    </span>

                    <p className="text-[8px] font-medium uppercase tracking-[0.22em] text-white/30">
                      Reader Signal
                    </p>

                  </div>


                  {/* Main signal */}
                  <div className="relative z-10 my-auto">

                    <p className="text-[8px] font-medium uppercase tracking-[0.2em] text-emerald-300/45">
                      Interest
                    </p>

                    <p
                      className="
                        mt-2
                        text-[29px]
                        font-medium
                        leading-none
                        tracking-[-0.045em]
                        text-white/78
                        transition-all
                        duration-500
                        group-hover:text-emerald-200
                      "
                    >
                      Rising
                    </p>

                    <p className="mt-4 max-w-[155px] text-[10px] leading-[1.65] text-white/30">
                      Drawing growing attention across the conversation.
                    </p>

                  </div>


                  {/* Activity bars */}
                  <div className="relative z-10 flex h-[46px] items-end gap-[5px]">

                    {[10, 17, 13, 23, 19, 30, 26, 38].map(
                      (height, signalIndex) => (

                        <span
                          key={signalIndex}
                          className="
                            w-[3px]
                            rounded-full
                            bg-emerald-300/25
                            transition-all
                            duration-500

                            group-hover:bg-emerald-300/65
                            group-hover:shadow-[0_0_8px_rgba(110,231,183,0.12)]
                          "
                          style={{
                            height: `${height}px`,
                            transitionDelay: `${signalIndex * 35}ms`,
                          }}
                        />

                      )
                    )}

                  </div>


                  {/* Background signal */}
                  <span className="pointer-events-none absolute bottom-3 right-3 text-[62px] font-light leading-none text-emerald-300/[0.025] transition-all duration-700 group-hover:text-emerald-300/[0.05]">
                    ↑
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}

export default TrendingStories;