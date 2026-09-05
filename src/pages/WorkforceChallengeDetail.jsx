import { Link, useParams } from "react-router-dom";
import { workforceChallengesData } from "../data/workforceChallengesData";


function ChallengeVisual({ id }) {
  if (id === "talent-scarcity") {
    return (
      <div
        className="
          relative
          h-full
          w-full
          overflow-hidden
          rounded-[28px]
          bg-[#111411]
          shadow-[0_12px_34px_rgba(15,20,16,0.10)]
          transition-all
          duration-500
          ease-out
          hover:-translate-y-1.5
          hover:shadow-[0_22px_52px_rgba(15,20,16,0.18)]
        "
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(167,243,208,0.08),transparent_38%)]" />

        <div className="absolute bottom-[14%] left-[12%] h-[54%] w-[15%] rounded-t-[5px] bg-[#353a35]" />

        <div className="absolute bottom-[14%] left-[33%] h-[66%] w-[15%] rounded-t-[5px] bg-[#7f847b]" />

        <div className="absolute bottom-[14%] left-[54%] h-[44%] w-[15%] rounded-t-[5px] border border-dashed border-emerald-300/35 bg-emerald-300/[0.025]" />

        <div className="absolute bottom-[14%] right-[10%] h-[59%] w-[15%] rounded-t-[5px] bg-[#d8d2c6]" />

        <div className="absolute bottom-[10%] left-[15%] h-10 w-[70%] rounded-full bg-black/40 blur-2xl" />

        <p className="absolute bottom-7 left-7 text-[8px] uppercase tracking-[0.22em] text-white/25">
          Missing capability
        </p>
      </div>
    );
  }


  if (id === "speed-of-change") {
    return (
      <div
        className="
          relative
          h-full
          w-full
          overflow-hidden
          rounded-[28px]
          bg-[#111411]
          shadow-[0_12px_34px_rgba(15,20,16,0.10)]
          transition-all
          duration-500
          ease-out
          hover:-translate-y-1.5
          hover:shadow-[0_22px_52px_rgba(15,20,16,0.18)]
        "
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_25%,rgba(167,243,208,0.09),transparent_38%)]" />

        <p className="absolute left-[10%] top-[24%] text-[8px] uppercase tracking-[0.2em] text-emerald-200/55">
          Business
        </p>

        <div className="absolute left-[10%] top-[32%] h-[22px] w-[72%] -rotate-[7deg] rounded-full bg-[#ddd7cb]" />

        <div className="absolute right-[7%] top-[27%] h-10 w-10 rounded-full border border-emerald-200/35" />

        <p className="absolute left-[10%] top-[67%] text-[8px] uppercase tracking-[0.2em] text-white/30">
          Workforce
        </p>

        <div className="absolute left-[10%] top-[74%] h-[15px] w-[52%] rounded-full bg-[#656b64]" />

        <div className="absolute left-[60%] top-[70.5%] h-7 w-7 rounded-full border border-white/20" />

        <div className="absolute left-[68%] top-[45%] h-[80px] w-px bg-gradient-to-b from-emerald-300/40 to-transparent" />

        <p className="absolute left-[70%] top-[53%] text-[7px] uppercase tracking-[0.18em] text-emerald-200/35">
          Gap
        </p>
      </div>
    );
  }


  return (
    <div
      className="
        relative
        h-full
        w-full
        overflow-hidden
        rounded-[28px]
        bg-[#111411]
        shadow-[0_12px_34px_rgba(15,20,16,0.10)]
        transition-all
        duration-500
        ease-out
        hover:-translate-y-1.5
        hover:shadow-[0_22px_52px_rgba(15,20,16,0.18)]
      "
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(167,243,208,0.08),transparent_40%)]" />

      <div className="absolute left-1/2 top-[45%] h-[94px] w-[94px] -translate-x-1/2 rounded-[14px] bg-[#d9d3c7]" />

      <div className="absolute left-[12%] top-[56%] h-[68px] w-[68px] rounded-[12px] bg-[#4f554f]" />

      <div className="absolute right-[12%] top-[56%] h-[68px] w-[68px] rounded-[12px] bg-[#777d74]" />

      <div className="absolute left-1/2 top-[17%] h-[62px] w-[62px] -translate-x-1/2 rounded-[12px] border border-emerald-300/30 bg-emerald-300/[0.035]" />

      <div className="absolute left-[24%] top-[30%] h-[48px] w-[48px] rounded-[10px] bg-[#303530]" />

      <div className="absolute right-[23%] top-[31%] h-[48px] w-[48px] rounded-[10px] bg-[#a9aa9f]" />

      <div className="absolute left-1/2 top-[32%] h-[55px] w-px bg-white/12" />

      <div className="absolute left-[28%] top-[49%] h-px w-[22%] rotate-[25deg] bg-white/10" />

      <div className="absolute right-[28%] top-[49%] h-px w-[22%] -rotate-[25deg] bg-white/10" />

      <p className="absolute bottom-7 left-7 text-[8px] uppercase tracking-[0.22em] text-white/25">
        Connected growth
      </p>
    </div>
  );
}


function WorkforceChallengeDetail() {
  const { id } = useParams();

  const currentIndex = workforceChallengesData.findIndex(
    (item) => item.id === id
  );

  const challenge = workforceChallengesData[currentIndex];

  const previousChallenge =
    currentIndex > 0
      ? workforceChallengesData[currentIndex - 1]
      : null;

  const nextChallenge =
    currentIndex < workforceChallengesData.length - 1
      ? workforceChallengesData[currentIndex + 1]
      : null;


  if (!challenge) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f1efe9] px-6">
        <div className="text-center">

          <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-emerald-800/60">
            Workforce Challenges
          </p>

          <h1 className="mt-4 font-serif text-[38px] tracking-[-0.04em] text-[#171917]">
            Challenge not found.
          </h1>

          <Link
            to="/workforce-challenges"
            className="mt-7 inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-black/45 transition-colors hover:text-black"
          >
            ← Back to Workforce Challenges
          </Link>

        </div>
      </main>
    );
  }


  return (
    <main className="min-h-screen bg-[#f1efe9] text-[#171917]">


      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="px-6 pb-10 pt-7 md:px-8 md:pb-12 md:pt-8">

        <div className="mx-auto max-w-7xl">

          <Link
            to="/workforce-challenges"
            className="
              group
              inline-flex
              items-center
              gap-3
              text-[8px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-black/40
              transition-colors
              duration-300
              hover:text-black
            "
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            Back to Workforce Challenges
          </Link>


          <div className="mt-7 grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">

            <div>

              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-emerald-800/60">
                {challenge.label}
              </p>

              <h1 className="mt-4 max-w-3xl font-serif text-[44px] font-normal leading-[0.99] tracking-[-0.045em] text-[#171917] md:text-[60px] lg:text-[68px]">
                {challenge.title}
              </h1>

              <p className="mt-5 max-w-xl text-[15px] leading-[1.75] text-black/48">
                {challenge.description}
              </p>

            </div>


            <div className="h-[365px] md:h-[430px]">
              <ChallengeVisual id={challenge.id} />
            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          THE CHALLENGE
      ====================================================== */}
      <section className="bg-[#e5e8e2] px-6 py-12 md:px-8 md:py-14">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-7 lg:grid-cols-[0.68fr_1.32fr] lg:gap-14">

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-emerald-800/60">
                {challenge.eyebrow}
              </p>
            </div>


            <div>

              <h2 className="max-w-4xl font-serif text-[30px] font-normal leading-[1.13] tracking-[-0.03em] md:text-[39px]">
                {challenge.intro}
              </h2>


              <div className="mt-8 grid gap-4 md:grid-cols-3">

                {challenge.points?.map((point) => (
                  <div
                    key={point}
                    className="
                      relative
                      min-h-[175px]
                      overflow-hidden
                      rounded-[20px]
                      bg-[#f5f3ed]
                      p-5
                      shadow-[0_8px_24px_rgba(20,30,22,0.03)]
                      transition-all
                      duration-500
                      ease-out
                      hover:-translate-y-1.5
                      hover:bg-white
                      hover:shadow-[0_18px_48px_rgba(0,0,0,0.08)]
                    "
                  >
                    <p className="mt-3 max-w-[255px] text-[13px] leading-[1.7] text-black/58">
                      {point}
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          BUSINESS IMPACT
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#101310] px-6 py-12 text-white md:px-8 md:py-14">

        <div className="pointer-events-none absolute -right-40 -top-40 h-[460px] w-[460px] rounded-full bg-emerald-300/[0.04] blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">

            <div>

              <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-emerald-300/60">
                {challenge.impactLabel}
              </p>

              <h2 className="mt-4 max-w-2xl font-serif text-[33px] font-normal leading-[1.1] tracking-[-0.035em] text-[#f3f0e8] md:text-[43px]">
                {challenge.impactTitle}
              </h2>

              <p className="mt-5 max-w-xl text-[14px] leading-[1.75] text-white/45">
                {challenge.impactText}
              </p>

            </div>


            <div className="space-y-3">

              {challenge.impactItems?.map((item) => (
                <div
                  key={item.title}
                  className="
                    rounded-[20px]
                    bg-white/[0.045]
                    px-5
                    py-5
                    shadow-[0_8px_24px_rgba(0,0,0,0.08)]
                    transition-all
                    duration-500
                    ease-out
                    hover:-translate-y-1.5
                    hover:bg-white/[0.07]
                    hover:shadow-[0_18px_48px_rgba(0,0,0,0.18)]
                  "
                >
                  <p className="text-[9px] uppercase tracking-[0.2em] text-emerald-300/55">
                    {item.title}
                  </p>

                  <p className="mt-2.5 max-w-md text-[13px] leading-[1.7] text-white/48">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          IN PRACTICE
      ====================================================== */}
      <section className="bg-[#dce1db] px-6 py-12 md:px-8 md:py-14">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-7 lg:grid-cols-[0.68fr_1.32fr] lg:gap-14">

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-emerald-800/60">
                {challenge.practiceLabel}
              </p>
            </div>


            <div>

              <h2 className="max-w-4xl font-serif text-[31px] font-normal leading-[1.12] tracking-[-0.03em] text-[#171917] md:text-[40px]">
                {challenge.practiceTitle}
              </h2>

              <p className="mt-5 max-w-2xl text-[14px] leading-[1.75] text-black/48">
                {challenge.practiceText}
              </p>


              <div className="mt-8 grid gap-4 md:grid-cols-3">

                {challenge.practiceItems?.map((item) => (
                  <div
                    key={item.title}
                    className="
                      rounded-[20px]
                      bg-[#f2f0ea]
                      p-5
                      shadow-[0_8px_24px_rgba(20,30,22,0.03)]
                      transition-all
                      duration-500
                      ease-out
                      hover:-translate-y-1.5
                      hover:bg-white
                      hover:shadow-[0_18px_48px_rgba(0,0,0,0.08)]
                    "
                  >
                    <h3 className="text-[15px] font-medium tracking-[-0.015em] text-[#171917]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[13px] leading-[1.7] text-black/48">
                      {item.text}
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          BETTER PERSPECTIVE
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#f1efe9] px-6 py-12 md:px-8 md:py-14">

        <div className="pointer-events-none absolute right-[10%] top-[15%] h-[260px] w-[260px] rounded-full bg-emerald-800/[0.03] blur-[110px]" />

        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="grid gap-7 lg:grid-cols-[0.62fr_1.38fr] lg:gap-14">

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-emerald-800/60">
                {challenge.perspectiveLabel}
              </p>
            </div>


            <div>

              <h2 className="max-w-4xl font-serif text-[32px] font-normal leading-[1.1] tracking-[-0.035em] md:text-[44px]">
                {challenge.perspectiveTitle}
              </h2>

              <p className="mt-5 max-w-2xl text-[14px] leading-[1.75] text-black/48">
                {challenge.perspectiveText}
              </p>


              <div
                className="
                  mt-7
                  max-w-3xl
                  rounded-[24px]
                  bg-[#dfe5df]
                  px-7
                  py-7
                  shadow-[0_8px_24px_rgba(20,30,22,0.035)]
                  transition-all
                  duration-500
                  ease-out
                  hover:-translate-y-1.5
                  hover:bg-[#e4e9e4]
                  hover:shadow-[0_18px_48px_rgba(0,0,0,0.08)]
                "
              >
                <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-emerald-900/45">
                  Minivel Perspective
                </p>

                <p className="mt-4 max-w-2xl font-serif text-[24px] leading-[1.18] tracking-[-0.025em] text-[#171917] md:text-[28px]">
                  Better workforce decisions begin with clearer visibility into
                  the capability the business actually needs.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          OPPORTUNITY
      ====================================================== */}
      <section className="bg-[#d9ded8] px-6 py-12 md:px-8 md:py-14">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-7 lg:grid-cols-[0.62fr_1.38fr] lg:gap-14">

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-emerald-800/60">
                {challenge.closingLabel}
              </p>
            </div>


            <div>

              <h2 className="max-w-4xl font-serif text-[32px] font-normal leading-[1.1] tracking-[-0.035em] text-[#171917] md:text-[44px]">
                {challenge.closingTitle}
              </h2>

              <p className="mt-5 max-w-2xl text-[14px] leading-[1.75] text-black/48">
                {challenge.closingText}
              </p>

              <p className="mt-4 max-w-2xl text-[13px] leading-[1.75] text-black/42">
                {challenge.closingSupport}
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          COMPACT NAVIGATION
      ====================================================== */}
      <section className="bg-[#111411] px-6 py-6 text-white md:px-8 md:py-7">

        <div className="mx-auto max-w-4xl">

          <div className="grid gap-3 sm:grid-cols-2">

            {previousChallenge ? (
              <Link
                to={`/workforce-challenges/${previousChallenge.id}`}
                className="
                  rounded-[14px]
                  bg-white/[0.045]
                  px-4
                  py-3
                  shadow-[0_8px_20px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-500
                  ease-out
                  hover:-translate-y-1.5
                  hover:bg-white/[0.07]
                  hover:shadow-[0_16px_36px_rgba(0,0,0,0.16)]
                "
              >
                <p className="text-[7px] uppercase tracking-[0.19em] text-white/28">
                  Previous
                </p>

                <p className="mt-1.5 font-serif text-[17px] tracking-[-0.02em] text-[#f3f0e8]">
                  {previousChallenge.label}
                </p>
              </Link>
            ) : (
              <Link
                to="/workforce-challenges"
                className="
                  rounded-[14px]
                  bg-white/[0.045]
                  px-4
                  py-3
                  shadow-[0_8px_20px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-500
                  ease-out
                  hover:-translate-y-1.5
                  hover:bg-white/[0.07]
                  hover:shadow-[0_16px_36px_rgba(0,0,0,0.16)]
                "
              >
                <p className="text-[7px] uppercase tracking-[0.19em] text-white/28">
                  Return
                </p>

                <p className="mt-1.5 font-serif text-[17px] tracking-[-0.02em] text-[#f3f0e8]">
                  All Challenges
                </p>
              </Link>
            )}


            {nextChallenge ? (
              <Link
                to={`/workforce-challenges/${nextChallenge.id}`}
                className="
                  rounded-[14px]
                  bg-white/[0.045]
                  px-4
                  py-3
                  shadow-[0_8px_20px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-500
                  ease-out
                  hover:-translate-y-1.5
                  hover:bg-white/[0.07]
                  hover:shadow-[0_16px_36px_rgba(0,0,0,0.16)]
                  sm:text-right
                "
              >
                <p className="text-[7px] uppercase tracking-[0.19em] text-white/28">
                  Next
                </p>

                <p className="mt-1.5 font-serif text-[17px] tracking-[-0.02em] text-[#f3f0e8]">
                  {nextChallenge.label}
                </p>
              </Link>
            ) : (
              <Link
                to="/workforce-challenges"
                className="
                  rounded-[14px]
                  bg-emerald-300/[0.07]
                  px-4
                  py-3
                  shadow-[0_8px_20px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-500
                  ease-out
                  hover:-translate-y-1.5
                  hover:bg-emerald-300/[0.11]
                  hover:shadow-[0_16px_36px_rgba(0,0,0,0.16)]
                  sm:text-right
                "
              >
                <p className="text-[7px] uppercase tracking-[0.19em] text-emerald-300/45">
                  Continue
                </p>

                <p className="mt-1.5 font-serif text-[17px] tracking-[-0.02em] text-[#f3f0e8]">
                  All Challenges
                </p>
              </Link>
            )}

          </div>

        </div>

      </section>

    </main>
  );
}

export default WorkforceChallengeDetail;