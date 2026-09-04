import { workforceChallengesData } from "../data/workforceChallengesData";
function WorkforceChallenges() {
  const talentScarcity = workforceChallengesData[0];
  const speedOfChange = workforceChallengesData[1];
  const scaleComplexity = workforceChallengesData[2];

  return (
    <main className="min-h-screen bg-white px-6 py-14 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-6 md:grid-cols-3">

          {/* =====================================================
              CARD 01 — TALENT SCARCITY
          ====================================================== */}
          <article
            className="
              group
              relative
              h-[560px]
              overflow-hidden
              rounded-[18px]
              border
              border-black/[0.07]
              bg-[#0b0d0c]
              text-white
              shadow-[0_12px_32px_rgba(0,0,0,0.10)]
              transition-[transform,box-shadow,border-color]
              duration-500
              ease-out
              hover:-translate-y-3
              hover:border-black/[0.11]
              hover:shadow-[0_30px_65px_rgba(0,0,0,0.20)]
            "
          >

            {/* NORMAL STATE */}
            <div
              className="
                absolute
                inset-0
                transition-transform
                duration-[650ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:-translate-y-[145px]
              "
            >
              <div className="absolute inset-0 bg-[#111411]" />


              {/* TITLE */}
              <div
                className="
                  absolute
                  left-7
                  right-7
                  top-7
                  z-20
                  transition-all
                  duration-500
                  ease-out
                  group-hover:-translate-y-6
                  group-hover:opacity-0
                "
              >
                <p className="text-[8px] font-medium uppercase tracking-[0.22em] text-emerald-200/80">
                  {talentScarcity.label}
                </p>

               <h2
  className="
    mt-4
    max-w-[300px]
    font-serif
    text-[34px]
    font-normal
    leading-[1.04]
    tracking-[-0.035em]
    text-[#f5f2eb]
    md:text-[36px]
  "
>
  {talentScarcity.title}
</h2>
              </div>


              {/* VISUAL — CAPABILITIES WITH ONE MISSING */}
              <div className="absolute inset-x-0 bottom-0 h-[380px]">

                {/* Capability */}
                <div
                  className="
                    absolute
                    bottom-[54px]
                    left-[12%]
                    h-[250px]
                    w-[66px]
                    rounded-t-[3px]
                    bg-[#292d29]
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:-translate-x-1.5
                  "
                />

                {/* Capability */}
                <div
                  className="
                    absolute
                    bottom-[54px]
                    left-[35%]
                    h-[215px]
                    w-[66px]
                    rounded-t-[3px]
                    bg-[#858a81]
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:-translate-x-0.5
                  "
                />

                {/* Missing capability */}
                <div
                  className="
                    absolute
                    bottom-[54px]
                    left-[58%]
                    h-[175px]
                    w-[66px]
                    rounded-t-[3px]
                    border
                    border-dashed
                    border-emerald-300/35
                    bg-emerald-300/[0.02]
                    transition-all
                    duration-700
                    ease-out
                    group-hover:-translate-y-2
                    group-hover:border-emerald-300/60
                  "
                />

                {/* Missing edge */}
                <div
                  className="
                    absolute
                    bottom-[54px]
                    left-[57.2%]
                    h-[175px]
                    w-[3px]
                    bg-emerald-300/45
                    transition-all
                    duration-700
                    group-hover:bg-emerald-300/75
                  "
                />

                {/* Capability */}
                <div
                  className="
                    absolute
                    bottom-[54px]
                    right-[9%]
                    h-[235px]
                    w-[66px]
                    rounded-t-[3px]
                    bg-[#d5d0c5]
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:translate-x-1.5
                  "
                />

                {/* Baseline */}
                <div className="absolute bottom-[53px] left-[9%] right-[9%] h-px bg-white/[0.08]" />

                {/* Ground depth */}
                <div className="absolute bottom-[24px] left-[16%] h-12 w-[68%] rounded-full bg-black/35 blur-2xl" />

              </div>
            </div>


            {/* HOVER REVEAL */}
            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                z-30
                h-[205px]
                translate-y-full
                bg-[#0b0d0c]
                px-7
                pb-7
                pt-6
                transition-transform
                duration-[650ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:translate-y-0
              "
            >
              <p className="text-[7px] font-medium uppercase tracking-[0.22em] text-emerald-300/60">
                {talentScarcity.label}
              </p>

              <p className="mt-4 max-w-[310px] text-[12px] leading-[1.75] text-white/62">
                {talentScarcity.description}
              </p>

              <button
                type="button"
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-3
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-white/65
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                {talentScarcity.cta}

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

          </article>


          {/* =====================================================
              CARD 02 — SPEED OF CHANGE
          ====================================================== */}
          <article
            className="
              group
              relative
              h-[560px]
              overflow-hidden
              rounded-[18px]
              border
              border-black/[0.07]
              bg-[#0b0d0c]
              text-white
              shadow-[0_12px_32px_rgba(0,0,0,0.10)]
              transition-[transform,box-shadow,border-color]
              duration-500
              ease-out
              hover:-translate-y-3
              hover:border-black/[0.11]
              hover:shadow-[0_30px_65px_rgba(0,0,0,0.20)]
            "
          >

            {/* NORMAL STATE */}
            <div
              className="
                absolute
                inset-0
                transition-transform
                duration-[650ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:-translate-y-[145px]
              "
            >
              <div className="absolute inset-0 bg-[#111411]" />


              {/* TITLE */}
              <div
                className="
                  absolute
                  left-7
                  right-7
                  top-7
                  z-20
                  transition-all
                  duration-500
                  ease-out
                  group-hover:-translate-y-6
                  group-hover:opacity-0
                "
              >
                <p className="text-[8px] font-medium uppercase tracking-[0.22em] text-emerald-200/80">
                  {speedOfChange.label}
                </p>

                <h2
                  className="
                    mt-4
                    max-w-[300px]
                    font-serif
                    text-[34px]
                    font-normal
                    leading-[1.04]
                    tracking-[-0.035em]
                    text-[#f5f2eb]
                    md:text-[36px]
                  "
                >
                  When business moves
                  <br />
                  {speedOfChange.title}
                </h2>
              </div>


              {/* VISUAL — TWO PATHS, ONE MOVING AHEAD */}
              <div className="absolute inset-x-0 bottom-0 h-[370px]">

                {/* Workforce label */}
                <p
                  className="
                    absolute
                    bottom-[93px]
                    left-[10%]
                    text-[6px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-white/25
                  "
                >
                  Workforce
                </p>

                {/* Workforce trajectory */}
                <div
                  className="
                    absolute
                    bottom-[78px]
                    left-[10%]
                    h-[15px]
                    w-[54%]
                    rounded-full
                    bg-[#676d66]
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:translate-x-1
                  "
                />

                {/* Workforce endpoint */}
                <div
                  className="
                    absolute
                    bottom-[72px]
                    left-[61%]
                    h-[27px]
                    w-[27px]
                    rounded-full
                    border
                    border-white/20
                    bg-[#111411]
                  "
                />


                {/* Business label */}
                <p
                  className="
                    absolute
                    bottom-[208px]
                    left-[10%]
                    text-[6px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-emerald-200/40
                  "
                >
                  Business
                </p>

                {/* Business trajectory */}
                <div
                  className="
                    absolute
                    bottom-[188px]
                    left-[10%]
                    h-[22px]
                    w-[72%]
                    origin-left
                    -rotate-[8deg]
                    rounded-full
                    bg-[#d7d1c5]
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:translate-x-5
                  "
                />

                {/* Emerald leading edge */}
                <div
                  className="
                    absolute
                    bottom-[197px]
                    right-[13%]
                    h-[3px]
                    w-[47px]
                    -rotate-[8deg]
                    bg-emerald-300/55
                    transition-all
                    duration-700
                    group-hover:right-[7%]
                    group-hover:w-[62px]
                    group-hover:bg-emerald-300/80
                  "
                />

                {/* Business endpoint */}
                <div
                  className="
                    absolute
                    bottom-[174px]
                    right-[7%]
                    h-[36px]
                    w-[36px]
                    rounded-full
                    border
                    border-emerald-200/35
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:translate-x-3
                  "
                />

                {/* Widening gap indicator */}
                <div
                  className="
                    absolute
                    bottom-[108px]
                    left-[68%]
                    h-[65px]
                    w-px
                    bg-gradient-to-b
                    from-emerald-300/35
                    to-transparent
                    transition-all
                    duration-700
                    group-hover:h-[82px]
                  "
                />

                <p
                  className="
                    absolute
                    bottom-[133px]
                    left-[70%]
                    text-[6px]
                    uppercase
                    tracking-[0.18em]
                    text-emerald-200/30
                  "
                >
                  Gap
                </p>


                {/* Depth */}
                <div className="absolute bottom-[30px] left-[18%] h-10 w-[64%] rounded-full bg-black/35 blur-2xl" />

              </div>
            </div>


            {/* HOVER REVEAL */}
            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                z-30
                h-[205px]
                translate-y-full
                bg-[#0b0d0c]
                px-7
                pb-7
                pt-6
                transition-transform
                duration-[650ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:translate-y-0
              "
            >
              <p className="text-[7px] font-medium uppercase tracking-[0.22em] text-emerald-300/60">
                {speedOfChange.label}
              </p>

              <p className="mt-4 max-w-[310px] text-[12px] leading-[1.75] text-white/62">
              {speedOfChange.description}
              </p>

              <button
                type="button"
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-3
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-white/65
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                {speedOfChange.cta}

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

          </article>


          {/* =====================================================
              CARD 03 — SCALE & COMPLEXITY
          ====================================================== */}
          <article
            className="
              group
              relative
              h-[560px]
              overflow-hidden
              rounded-[18px]
              border
              border-black/[0.07]
              bg-[#0b0d0c]
              text-white
              shadow-[0_12px_32px_rgba(0,0,0,0.10)]
              transition-[transform,box-shadow,border-color]
              duration-500
              ease-out
              hover:-translate-y-3
              hover:border-black/[0.11]
              hover:shadow-[0_30px_65px_rgba(0,0,0,0.20)]
            "
          >

            {/* NORMAL STATE */}
            <div
              className="
                absolute
                inset-0
                transition-transform
                duration-[650ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:-translate-y-[145px]
              "
            >
              <div className="absolute inset-0 bg-[#111411]" />


              {/* TITLE */}
              <div
                className="
                  absolute
                  left-7
                  right-7
                  top-7
                  z-20
                  transition-all
                  duration-500
                  ease-out
                  group-hover:-translate-y-6
                  group-hover:opacity-0
                "
              >
                <p className="text-[8px] font-medium uppercase tracking-[0.22em] text-emerald-200/80">
                  {scaleComplexity.label}
                </p>

              <h2
  className="
    mt-4
    max-w-[305px]
    font-serif
    text-[34px]
    font-normal
    leading-[1.04]
    tracking-[-0.035em]
    text-[#f5f2eb]
    md:text-[36px]
  "
>
  {scaleComplexity.title}
</h2>
              </div>


              {/* VISUAL — SIMPLE STRUCTURE BECOMES COMPLEX */}
              <div className="absolute inset-x-0 bottom-0 h-[370px]">

                {/* Core */}
                <div
                  className="
                    absolute
                    bottom-[75px]
                    left-1/2
                    h-[82px]
                    w-[82px]
                    -translate-x-1/2
                    rounded-[8px]
                    bg-[#d6d0c4]
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.04]
                  "
                />


                {/* Connector left */}
                <div className="absolute bottom-[115px] left-[25%] h-px w-[25%] bg-white/15" />

                {/* Connector right */}
                <div className="absolute bottom-[115px] right-[25%] h-px w-[25%] bg-white/15" />

                {/* Connector upward */}
                <div className="absolute bottom-[157px] left-1/2 h-[75px] w-px bg-white/15" />


                {/* Left module */}
                <div
                  className="
                    absolute
                    bottom-[82px]
                    left-[13%]
                    h-[66px]
                    w-[66px]
                    rounded-[7px]
                    bg-[#4d534d]
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:-translate-x-2
                  "
                />

                {/* Right module */}
                <div
                  className="
                    absolute
                    bottom-[82px]
                    right-[13%]
                    h-[66px]
                    w-[66px]
                    rounded-[7px]
                    bg-[#777d74]
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:translate-x-2
                  "
                />

                {/* Upper module */}
                <div
                  className="
                    absolute
                    bottom-[222px]
                    left-1/2
                    h-[58px]
                    w-[58px]
                    -translate-x-1/2
                    rounded-[7px]
                    border
                    border-emerald-300/30
                    bg-emerald-300/[0.035]
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:-translate-y-3
                    group-hover:-translate-x-1/2
                  "
                />


                {/* New layer — lower left */}
                <div
                  className="
                    absolute
                    bottom-[188px]
                    left-[21%]
                    h-[46px]
                    w-[46px]
                    rounded-[6px]
                    bg-[#313631]
                    transition-all
                    duration-700
                    ease-out
                    group-hover:-translate-x-2
                    group-hover:-translate-y-1
                  "
                />

                {/* New layer — upper right */}
                <div
                  className="
                    absolute
                    bottom-[193px]
                    right-[20%]
                    h-[46px]
                    w-[46px]
                    rounded-[6px]
                    bg-[#a8aa9f]
                    transition-all
                    duration-700
                    ease-out
                    group-hover:translate-x-2
                    group-hover:-translate-y-2
                  "
                />


                {/* Branches */}
                <div
                  className="
                    absolute
                    bottom-[157px]
                    left-[31%]
                    h-px
                    w-[19%]
                    rotate-[28deg]
                    origin-right
                    bg-white/10
                    transition-colors
                    duration-700
                    group-hover:bg-emerald-200/20
                  "
                />

                <div
                  className="
                    absolute
                    bottom-[157px]
                    right-[31%]
                    h-px
                    w-[19%]
                    -rotate-[28deg]
                    origin-left
                    bg-white/10
                    transition-colors
                    duration-700
                    group-hover:bg-emerald-200/20
                  "
                />


                {/* Emerald complexity marker */}
                <div
                  className="
                    absolute
                    bottom-[247px]
                    left-1/2
                    h-[3px]
                    w-[58px]
                    -translate-x-1/2
                    bg-emerald-300/40
                    transition-all
                    duration-700
                    group-hover:w-[70px]
                    group-hover:bg-emerald-300/70
                  "
                />


                {/* Depth */}
                <div className="absolute bottom-[32px] left-[18%] h-11 w-[64%] rounded-full bg-black/35 blur-2xl" />

              </div>
            </div>


            {/* HOVER REVEAL */}
            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                z-30
                h-[205px]
                translate-y-full
                bg-[#0b0d0c]
                px-7
                pb-7
                pt-6
                transition-transform
                duration-[650ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:translate-y-0
              "
            >
              <p className="text-[7px] font-medium uppercase tracking-[0.22em] text-emerald-300/60">
                {scaleComplexity.label}
              </p>

              <p className="mt-4 max-w-[310px] text-[12px] leading-[1.75] text-white/62">
               {scaleComplexity.description}
              </p>

              <button
                type="button"
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-3
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-white/65
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                {scaleComplexity.cta}

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

          </article>

        </div>
      </div>
    </main>
  );
}

export default WorkforceChallenges;