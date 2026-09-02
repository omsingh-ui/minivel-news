import { useState } from "react";
import { Link } from "react-router-dom";

function Careers() {
  const [qualityPage, setQualityPage] = useState(0);
  const [flippedQuality, setFlippedQuality] = useState(null);

  const qualities = [
   {
  number: "01",
  label: "Learning",
  title: "Curious to learn",
  text: "Open to new ideas, feedback and better ways of working.",

  short: "Stay curious. Keep improving.",

  description:
    "We value people who are open to new ideas, welcome feedback and continue building their understanding through every challenge.",
},
   {
  number: "02",
  label: "Drive",
  title: "Motivated to progress",
  text: "Focused, purposeful and willing to keep moving work forward.",

  short: "Move with purpose.",

  description:
    "We look for people who bring focus, consistency and the motivation to keep meaningful progress moving forward.",
},
   {
  number: "03",
  label: "Initiative",
  title: "Ready to step forward",
  text: "Comfortable contributing ideas and taking initiative when it matters.",

  short: "See possibilities. Take action.",

  description:
    "We value people who contribute ideas, take thoughtful initiative and step forward when there is an opportunity to make a difference.",
},
    {
  number: "04",
  label: "Collaboration",
  title: "Works well with others",
  text: "Listens, communicates and contributes to stronger shared outcomes.",

  short: "Listen. Contribute. Build together.",

  description:
    "We value people who communicate openly, respect different perspectives and contribute positively to stronger shared outcomes.",
},
    {
  number: "05",
  label: "Adaptability",
  title: "Open to change",
  text: "Able to learn, adjust and respond thoughtfully as priorities evolve.",

  short: "Learn. Adapt. Keep moving.",

  description:
    "We look for people who stay open to change, respond thoughtfully and remain effective as priorities and challenges evolve.",
},
   {
  number: "06",
  label: "Communication",
  title: "Communicates clearly",
  text: "Shares ideas with clarity and listens with equal attention.",

  short: "Clarity creates better understanding.",

  description:
    "We value people who express ideas clearly, listen with attention and communicate in ways that help others move forward.",
},
  ];

  const visibleQualities = qualities.slice(
    qualityPage * 3,
    qualityPage * 3 + 3
  );

  return (
    <main className="bg-[#eef1ee] text-[#111111]">
      {/* =========================
          CAREERS HERO
      ========================== */}
      <section className="relative overflow-hidden bg-[#080b0b] text-white">

        {/* Background atmosphere */}
        <div className="pointer-events-none absolute inset-0">

          {/* Left glow */}
          <div className="absolute -left-40 top-[8%] h-[430px] w-[430px] rounded-full bg-emerald-300/[0.045] blur-[145px]" />

          {/* Right glow */}
          <div className="absolute right-[-80px] top-[-80px] h-[340px] w-[340px] rounded-full bg-emerald-300/[0.035] blur-[130px]" />

          {/* Subtle circles */}
          <div className="absolute right-[-140px] top-[-150px] h-[420px] w-[420px] rounded-full border border-white/[0.025]" />

          <div className="absolute right-[-45px] top-[-55px] h-[240px] w-[240px] rounded-full border border-emerald-300/[0.035]" />

        </div>

         <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-8 md:px-8 md:pb-20 md:pt-10 lg:pb-24 lg:pt-12">
          {/* Back to News & Articles */}
<Link
  to="/"
  className="
    group
    mb-10
    inline-flex
    items-center
    gap-3
    text-[9px]
    font-medium
    uppercase
    tracking-[0.2em]
    text-white/35
    transition-colors
    duration-300
    hover:text-white/75
  "
>
  <span className="transition-transform duration-300 group-hover:-translate-x-1">
    ←
  </span>

  Back to News & Articles
</Link>

          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">

            {/* =====================
                LEFT CONTENT
            ====================== */}
            <div>

              {/* Label */}
              <div className="flex items-center gap-3">

                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.4)]" />

                <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-white/40 md:text-[10px]">
                  Careers at Minivel
                </p>

              </div>

              {/* Main heading */}
              <h1
                className="
                  mt-5
                  max-w-[760px]
                  text-[42px]
                  font-medium
                  leading-[1.05]
                  tracking-[-0.04em]
                  md:text-[58px]
                  lg:text-[68px]
                "
              >
                Build work that matters.

                <span className="mt-1 block text-white/42">
                  Build what comes next.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-[590px] text-[15px] leading-[1.75] text-white/48 md:text-[16px]">
                Join Minivel and build your career through meaningful work,
                continuous learning and opportunities to contribute with
                purpose.
              </p>

              {/* Actions */}
              <div className="mt-7 flex flex-wrap items-center gap-5">

                <Link
  to="/careers/jobs"
  className="
    group
    inline-flex items-center gap-3
    rounded-full
    bg-emerald-300
    px-5 py-3
    text-[10px]
    font-semibold
    uppercase
    tracking-[0.18em]
    text-[#07100e]
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:bg-emerald-200
  "
>
  Explore Opportunities

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</Link>

                <p className="text-[9px] uppercase tracking-[0.19em] text-white/25">
                  Learn · Contribute · Grow
                </p>

              </div>

            </div>

          {/* =====================
    RIGHT CAREER VISUAL
====================== */}
<div className="relative">

  <div className="relative min-h-[380px] overflow-hidden rounded-[30px] border border-white/[0.07] bg-[#0c1210]">

    {/* Visual atmosphere */}
    <div className="pointer-events-none absolute inset-0">

      <div className="absolute -right-20 -top-20 h-[270px] w-[270px] rounded-full bg-emerald-300/[0.06] blur-[105px]" />

      <div className="absolute -bottom-24 left-[12%] h-[220px] w-[220px] rounded-full bg-white/[0.018] blur-[100px]" />

      <div className="absolute inset-[10px] rounded-[22px] border border-white/[0.03]" />

    </div>


    {/* Top */}
    <div className="absolute left-7 right-7 top-7 flex items-start justify-between">

      <div>
        <p className="text-[8px] uppercase tracking-[0.22em] text-emerald-300/60">
          Your Journey
        </p>

        <p className="mt-2 text-[13px] font-medium text-white/65">
          Keep moving forward
        </p>
      </div>

      <span className="text-[8px] uppercase tracking-[0.2em] text-white/18">
        Minivel
      </span>

    </div>


    {/* =====================
        CAREER PROGRESSION
    ====================== */}
    <div className="absolute left-7 right-7 top-[43%]">

      <div className="relative">

        {/* Base track */}
        <div className="absolute left-[6px] right-[6px] top-[6px] h-px bg-white/[0.09]" />


        {/* Moving illuminated trail */}
        <div className="absolute left-[6px] right-[6px] top-[6px] h-px overflow-hidden">

          <div
            className="
              career-travel-line
              absolute
              top-0
              h-full
              w-[28%]
              bg-gradient-to-r
              from-transparent
              via-emerald-300/70
              to-transparent
            "
          />

        </div>


        {/* Moving green light */}
        <div className="career-travel-light absolute left-[2px] top-[2px] z-20">

          <span
            className="
              block
              h-[9px]
              w-[9px]
              rounded-full
              bg-emerald-300
              shadow-[0_0_8px_rgba(110,231,183,1),0_0_20px_rgba(110,231,183,0.55)]
            "
          />

        </div>


        {/* Journey points */}
        <div className="relative z-10 flex items-start justify-between">

          {/* Learn */}
          <div className="relative">

            <span className="block h-3 w-3 rounded-full border border-emerald-300/35 bg-[#0c1210]" />

            <p className="mt-3 text-[8px] uppercase tracking-[0.17em] text-white/30">
              Learn
            </p>

          </div>


          {/* Contribute */}
          <div className="relative">

            <span className="block h-3 w-3 rounded-full border border-emerald-300/35 bg-[#0c1210]" />

            <p className="mt-3 -translate-x-5 text-[8px] uppercase tracking-[0.17em] text-white/30">
              Contribute
            </p>

          </div>


          {/* Grow */}
          <div className="relative">

            <span className="block h-3 w-3 rounded-full border border-emerald-300/35 bg-[#0c1210]" />

            <p className="mt-3 -translate-x-1 text-[8px] uppercase tracking-[0.17em] text-white/30">
              Grow
            </p>

          </div>


          {/* Lead */}
          <div className="relative">

            <span className="block h-3 w-3 rounded-full border border-emerald-300/35 bg-[#0c1210]" />

            <p className="mt-3 -translate-x-1 text-[8px] uppercase tracking-[0.17em] text-white/30">
              Lead
            </p>

          </div>

        </div>

      </div>

    </div>


    {/* Bottom message */}
    <div className="absolute bottom-7 left-7 right-7">

      <p className="text-[8px] uppercase tracking-[0.2em] text-white/22">
        Your career / your progress
      </p>

      <h2 className="mt-3 max-w-[400px] text-[24px] font-medium leading-[1.16] tracking-[-0.025em] text-white/88 md:text-[27px]">
        Start with an opportunity.

        <span className="block text-white/40">
          Keep building from there.
        </span>
      </h2>

    </div>

  </div>

</div>

          </div>

        </div>

      </section>
      {/* =========================
    WHY MINIVEL
========================== */}
<section className="bg-[#eef1ee] text-[#111111]">
  <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">

    {/* Section introduction */}
    <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">

      {/* Label */}
      <div>
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-700" />

          <p className="text-[9px] font-semibold uppercase tracking-[0.23em] text-emerald-900/55">
            Why Minivel
          </p>
        </div>

        <p className="mt-4 max-w-[260px] text-[12px] leading-[1.7] text-black/38">
          An environment where contribution, learning and progress move
          together.
        </p>
      </div>

      {/* Main statement */}
      <div>
        <h2 className="max-w-[820px] text-[31px] font-medium leading-[1.08] tracking-[-0.035em] text-black/88 md:text-[42px] lg:text-[48px]">
          Do meaningful work.

          <span className="mt-1 block text-black/35">
            Keep becoming better at it.
          </span>
        </h2>

        <p className="mt-5 max-w-[690px] text-[15px] leading-[1.75] text-black/50 md:text-[16px]">
          At Minivel, growth comes from contributing to real work, learning
          through experience and taking greater ownership as your capabilities
          develop.
        </p>
      </div>

    </div>

    {/* Why Minivel cards */}
    <div className="mt-9 grid gap-4 md:grid-cols-3">

      {/* Meaningful Work */}
      <article
        className="
          group
          relative
          min-h-[215px]
          overflow-hidden
          rounded-[22px]
          border border-black/[0.06]
          bg-white/65
          p-6
          transition-all
          duration-500
          hover:-translate-y-1.5
          hover:bg-white
          hover:shadow-[0_20px_50px_rgba(20,40,30,0.08)]
        "
      >
        {/* Hover atmosphere */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-700/[0.07] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10 flex h-full flex-col justify-between">

          <div>
            <div className="flex items-center justify-between">

              <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-emerald-900/55">
                01 / Contribution
              </p>

            </div>

            <h3 className="mt-5 text-[21px] font-medium tracking-[-0.02em] text-black/80">
              Meaningful work
            </h3>

            <p className="mt-3 max-w-[300px] text-[13px] leading-[1.7] text-black/45">
              Contribute to work with clear purpose and understand how your
              effort connects to a broader outcome.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-700/40 transition-all duration-300 group-hover:scale-125 group-hover:bg-emerald-700" />

            <span className="text-[8px] uppercase tracking-[0.18em] text-black/25">
              Make an impact
            </span>
          </div>

        </div>
      </article>

      {/* Learning */}
      <article
        className="
          group
          relative
          min-h-[215px]
          overflow-hidden
          rounded-[22px]
          border border-black/[0.06]
          bg-white/65
          p-6
          transition-all
          duration-500
          hover:-translate-y-1.5
          hover:bg-white
          hover:shadow-[0_20px_50px_rgba(20,40,30,0.08)]
        "
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-700/[0.07] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10 flex h-full flex-col justify-between">

          <div>
            <div className="flex items-center justify-between">

              <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-emerald-900/55">
                02 / Learning
              </p>

            </div>

            <h3 className="mt-5 text-[21px] font-medium tracking-[-0.02em] text-black/80">
              Learn through experience
            </h3>

            <p className="mt-3 max-w-[300px] text-[13px] leading-[1.7] text-black/45">
              Develop practical capability through new challenges, useful
              feedback and the experience of solving real problems.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-700/40 transition-all duration-300 group-hover:scale-125 group-hover:bg-emerald-700" />

            <span className="text-[8px] uppercase tracking-[0.18em] text-black/25">
              Keep learning
            </span>
          </div>

        </div>
      </article>

      {/* Ownership */}
      <article
        className="
          group
          relative
          min-h-[215px]
          overflow-hidden
          rounded-[22px]
          border border-black/[0.06]
          bg-white/65
          p-6
          transition-all
          duration-500
          hover:-translate-y-1.5
          hover:bg-white
          hover:shadow-[0_20px_50px_rgba(20,40,30,0.08)]
        "
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-700/[0.07] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10 flex h-full flex-col justify-between">

          <div>
            <div className="flex items-center justify-between">

              <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-emerald-900/55">
                03 / Ownership
              </p>


            </div>

            <h3 className="mt-5 text-[21px] font-medium tracking-[-0.02em] text-black/80">
              Take greater ownership
            </h3>

            <p className="mt-3 max-w-[300px] text-[13px] leading-[1.7] text-black/45">
              Build confidence by taking responsibility, making thoughtful
              decisions and following work through to its outcome.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-700/40 transition-all duration-300 group-hover:scale-125 group-hover:bg-emerald-700" />

            <span className="text-[8px] uppercase tracking-[0.18em] text-black/25">
              Own the outcome
            </span>
          </div>

        </div>
      </article>

    </div>

  </div>
</section>

{/* =========================
    THE MINIVEL EXPERIENCE
========================== */}
<section className="relative overflow-hidden bg-[#0a0d0c] text-white">

  {/* Background atmosphere */}
  <div className="pointer-events-none absolute inset-0">

    <div className="absolute -left-40 top-[15%] h-[360px] w-[360px] rounded-full bg-emerald-300/[0.035] blur-[140px]" />

    <div className="absolute right-[-160px] top-[-120px] h-[420px] w-[420px] rounded-full border border-white/[0.02]" />

    <div className="absolute right-[-70px] top-[-40px] h-[260px] w-[260px] rounded-full border border-emerald-300/[0.025]" />

  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">

    {/* =========================
        SECTION INTRO
    ========================== */}
    <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-12">

      {/* Label */}
      <div>

        <div className="flex items-center gap-3">

          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.35)]" />

          <p className="text-[9px] font-medium uppercase tracking-[0.23em] text-white/35">
            The Minivel Experience
          </p>

        </div>

        <p className="mt-4 max-w-[280px] text-[12px] leading-[1.7] text-white/30">
          Build capability through experience, responsibility and the way you
          work with others.
        </p>

      </div>

      {/* Heading */}
      <div>

        <h2 className="max-w-[800px] text-[32px] font-medium leading-[1.08] tracking-[-0.035em] md:text-[42px] lg:text-[48px]">
          Grow through what you learn,

          <span className="mt-1 block text-white/40">
            own and contribute.
          </span>
        </h2>

        <p className="mt-5 max-w-[670px] text-[15px] leading-[1.75] text-white/45 md:text-[16px]">
          Strong careers develop over time — through real challenges,
          collaboration, responsibility and opportunities to keep expanding
          what you can do.
        </p>

      </div>

    </div>


    {/* =========================
        EXPERIENCE CARDS
    ========================== */}
    <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

      {/* 01 — LEARN */}
      <article
        className="
          group
          relative
          min-h-[330px]
          overflow-hidden
          rounded-[22px]
          border border-white/[0.07]
          bg-[#0d1210]
          p-5
          transition-all
          duration-500
          hover:-translate-y-1.5
          hover:border-emerald-300/[0.22]
          hover:bg-[#101713]
          hover:shadow-[0_22px_55px_rgba(0,0,0,0.28)]
        "
      >

        {/* Hover glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-300/[0.08] blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Bottom glow */}
        <div className="pointer-events-none absolute bottom-[-80px] left-1/2 h-32 w-40 -translate-x-1/2 rounded-full bg-emerald-300/[0.05] blur-[55px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10 flex h-full flex-col">

          {/* Number */}
          <div className="flex items-center justify-between">

            <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-emerald-300/60">
              01
            </p>

            <span className="h-1.5 w-1.5 rounded-full bg-white/15 transition-all duration-300 group-hover:scale-125 group-hover:bg-emerald-300" />

          </div>

          {/* Visual */}
          <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] transition-all duration-500 group-hover:border-emerald-300/20 group-hover:bg-emerald-300/[0.04]">

            <span className="text-[18px] font-light text-emerald-300/65">
              +
            </span>

          </div>

          {/* Content */}
          <div className="mt-auto pt-8">

            <p className="text-[8px] uppercase tracking-[0.19em] text-white/22">
              Learn
            </p>

            <h3 className="mt-2 text-[21px] font-medium tracking-[-0.025em] text-white/82 transition-colors duration-300 group-hover:text-white">
              Learn through real challenges.
            </h3>

            <p className="mt-3 text-[13px] leading-[1.7] text-white/36">
              Build practical capability by solving meaningful problems and
              learning through experience.
            </p>

          </div>

        </div>

      </article>


      {/* 02 — COLLABORATE */}
      <article
        className="
          group
          relative
          min-h-[330px]
          overflow-hidden
          rounded-[22px]
          border border-white/[0.07]
          bg-[#0d1210]
          p-5
          transition-all
          duration-500
          hover:-translate-y-1.5
          hover:border-emerald-300/[0.22]
          hover:bg-[#101713]
          hover:shadow-[0_22px_55px_rgba(0,0,0,0.28)]
        "
      >

        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-300/[0.08] blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="pointer-events-none absolute bottom-[-80px] left-1/2 h-32 w-40 -translate-x-1/2 rounded-full bg-emerald-300/[0.05] blur-[55px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10 flex h-full flex-col">

          <div className="flex items-center justify-between">

            <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-emerald-300/60">
              02
            </p>

            <span className="h-1.5 w-1.5 rounded-full bg-white/15 transition-all duration-300 group-hover:scale-125 group-hover:bg-emerald-300" />

          </div>

          <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] transition-all duration-500 group-hover:border-emerald-300/20 group-hover:bg-emerald-300/[0.04]">

            <div className="flex items-center">
              <span className="h-3 w-3 rounded-full border border-emerald-300/60" />
              <span className="-ml-1 h-3 w-3 rounded-full border border-emerald-300/35" />
            </div>

          </div>

          <div className="mt-auto pt-8">

            <p className="text-[8px] uppercase tracking-[0.19em] text-white/22">
              Collaborate
            </p>

            <h3 className="mt-2 text-[21px] font-medium tracking-[-0.025em] text-white/82 transition-colors duration-300 group-hover:text-white">
              Build with different perspectives.
            </h3>

            <p className="mt-3 text-[13px] leading-[1.7] text-white/36">
              Work with people who bring different ideas and approaches to the
              challenges you solve together.
            </p>

          </div>

        </div>

      </article>


      {/* 03 — OWN */}
      <article
        className="
          group
          relative
          min-h-[330px]
          overflow-hidden
          rounded-[22px]
          border border-white/[0.07]
          bg-[#0d1210]
          p-5
          transition-all
          duration-500
          hover:-translate-y-1.5
          hover:border-emerald-300/[0.22]
          hover:bg-[#101713]
          hover:shadow-[0_22px_55px_rgba(0,0,0,0.28)]
        "
      >

        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-300/[0.08] blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="pointer-events-none absolute bottom-[-80px] left-1/2 h-32 w-40 -translate-x-1/2 rounded-full bg-emerald-300/[0.05] blur-[55px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10 flex h-full flex-col">

          <div className="flex items-center justify-between">

            <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-emerald-300/60">
              03
            </p>

            <span className="h-1.5 w-1.5 rounded-full bg-white/15 transition-all duration-300 group-hover:scale-125 group-hover:bg-emerald-300" />

          </div>

          <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] transition-all duration-500 group-hover:border-emerald-300/20 group-hover:bg-emerald-300/[0.04]">

            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-emerald-300/50">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/70" />
            </span>

          </div>

          <div className="mt-auto pt-8">

            <p className="text-[8px] uppercase tracking-[0.19em] text-white/22">
              Own
            </p>

            <h3 className="mt-2 text-[21px] font-medium tracking-[-0.025em] text-white/82 transition-colors duration-300 group-hover:text-white">
              Take responsibility for outcomes.
            </h3>

            <p className="mt-3 text-[13px] leading-[1.7] text-white/36">
              Build confidence by making thoughtful decisions and following
              your work through to its outcome.
            </p>

          </div>

        </div>

      </article>


      {/* 04 — GROW */}
      <article
        className="
          group
          relative
          min-h-[330px]
          overflow-hidden
          rounded-[22px]
          border border-white/[0.07]
          bg-[#0d1210]
          p-5
          transition-all
          duration-500
          hover:-translate-y-1.5
          hover:border-emerald-300/[0.22]
          hover:bg-[#101713]
          hover:shadow-[0_22px_55px_rgba(0,0,0,0.28)]
        "
      >

        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-300/[0.08] blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="pointer-events-none absolute bottom-[-80px] left-1/2 h-32 w-40 -translate-x-1/2 rounded-full bg-emerald-300/[0.05] blur-[55px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10 flex h-full flex-col">

          <div className="flex items-center justify-between">

            <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-emerald-300/60">
              04
            </p>

            <span className="h-1.5 w-1.5 rounded-full bg-white/15 transition-all duration-300 group-hover:scale-125 group-hover:bg-emerald-300" />

          </div>

          <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] transition-all duration-500 group-hover:border-emerald-300/20 group-hover:bg-emerald-300/[0.04]">

            <span className="text-[20px] font-light text-emerald-300/65 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↗
            </span>

          </div>

          <div className="mt-auto pt-8">

            <p className="text-[8px] uppercase tracking-[0.19em] text-white/22">
              Grow
            </p>

            <h3 className="mt-2 text-[21px] font-medium tracking-[-0.025em] text-white/82 transition-colors duration-300 group-hover:text-white">
              Keep expanding your contribution.
            </h3>

            <p className="mt-3 text-[13px] leading-[1.7] text-white/36">
              Develop broader capability over time and prepare yourself for
              greater responsibility.
            </p>

          </div>

        </div>

      </article>

    </div>

  </div>
</section>
{/* =========================
    WHAT WE LOOK FOR
========================== */}
<section className="relative overflow-hidden bg-[#0a0d0c] text-white">

  {/* Background atmosphere */}
  <div className="pointer-events-none absolute inset-0">

    <div className="absolute -left-48 top-1/2 h-[440px] w-[440px] -translate-y-1/2 rounded-full bg-emerald-400/[0.06] blur-[150px]" />

    <div className="absolute -right-36 top-[10%] h-[300px] w-[300px] rounded-full bg-emerald-300/[0.02] blur-[125px]" />

  </div>


  <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">

    {/* Small label */}
    <div className="flex items-center gap-3">

      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />

      <p className="text-[9px] font-medium uppercase tracking-[0.23em] text-white/35">
        Careers at Minivel
      </p>

    </div>


    {/* Main layout */}
    <div className="mt-8 grid gap-9 lg:grid-cols-[0.88fr_2.12fr] lg:gap-10">


      {/* =====================
          LEFT INTRO
      ====================== */}
      <div>

        <h2 className="max-w-[390px] text-[34px] font-medium leading-[1.08] tracking-[-0.035em] md:text-[43px] lg:text-[48px]">

          What do we

          <span className="mt-1 block text-white/42">
            look for?
          </span>

        </h2>


        <p className="mt-5 max-w-[365px] text-[14px] leading-[1.75] text-white/43 md:text-[15px]">
          Skills are important. So are curiosity, initiative and the mindset
          you bring to the opportunity.
        </p>


        <p className="mt-6 text-[8px] font-medium uppercase tracking-[0.2em] text-emerald-300/45">
          Potential · Mindset · Contribution
        </p>

      </div>


      {/* =====================
          QUALITIES
      ====================== */}
      <div>

        <div className="grid gap-3 md:grid-cols-3">

          {visibleQualities.map((quality) => {
  const isFlipped = flippedQuality === quality.number;

  return (
    <button
      key={quality.number}
      type="button"
      onClick={() =>
        setFlippedQuality(isFlipped ? null : quality.number)
      }
      className="group relative h-[310px] w-full text-left [perspective:1200px]"
    >
      <div
        className={`
          relative h-full w-full
          transition-transform duration-700
          [transform-style:preserve-3d]
          ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
        `}
      >

        {/* FRONT */}
        <div
          className="
            absolute inset-0
            flex flex-col
            overflow-hidden
            rounded-[24px]
            border border-white/[0.07]
            bg-white/[0.025]
            p-6
            [backface-visibility:hidden]
            transition-all
            duration-500
            group-hover:-translate-y-1
            group-hover:border-emerald-300/15
            group-hover:bg-white/[0.04]
            group-hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)]
          "
        >

          <div className="flex items-center justify-between">

            <p className="text-[9px] font-medium text-emerald-300/60">
              {quality.number}
            </p>

            <p className="text-[8px] uppercase tracking-[0.18em] text-white/25">
              {quality.label}
            </p>

          </div>


          <div className="my-auto">

            <h3 className="max-w-[250px] text-[26px] font-medium leading-[1.12] tracking-[-0.03em] text-white/88">
              {quality.title}
            </h3>

            <p className="mt-4 text-[12px] leading-[1.65] text-white/38">
              {quality.short}
            </p>

          </div>


          <p className="text-[8px] uppercase tracking-[0.18em] text-white/22">
            View quality
          </p>

        </div>


        {/* BACK */}
        <div
          className="
            absolute inset-0
            flex flex-col
            overflow-hidden
            rounded-[24px]
            border border-emerald-300/15
            bg-[#101714]
            p-6
            [backface-visibility:hidden]
            [transform:rotateY(180deg)]
            shadow-[0_20px_50px_rgba(0,0,0,0.22)]
          "
        >

          <div className="flex items-center justify-between">

            <p className="text-[8px] uppercase tracking-[0.18em] text-emerald-300/55">
              {quality.label}
            </p>

            <p className="text-[9px] text-white/20">
              {quality.number}
            </p>

          </div>


          <div className="my-auto">

            <h3 className="text-[21px] font-medium tracking-[-0.025em] text-white/88">
              What this means
            </h3>

            <p className="mt-4 text-[13px] leading-[1.75] text-white/48">
              {quality.description}
            </p>

          </div>


          <p className="text-[8px] uppercase tracking-[0.18em] text-emerald-300/45">
            Click to return
          </p>

        </div>

      </div>
    </button>
  );
})}

        </div>


        {/* =========================
            SLIDER CONTROLS
        ========================== */}
        <div className="mt-6 flex items-center justify-end gap-3">

          {/* Previous */}
          <button
            type="button"
            onClick={() => {
  setQualityPage(0);
  setFlippedQuality(null);
}}
            disabled={qualityPage === 0}
            aria-label="Previous qualities"
            className="
              group
              flex h-11 w-11
              items-center justify-center
              rounded-full
              border border-white/[0.10]
              bg-white/[0.02]
              text-white/45
              transition-all
              duration-300

              hover:border-emerald-300/25
              hover:bg-emerald-300/[0.055]
              hover:text-emerald-300

              disabled:cursor-default
              disabled:opacity-20
              disabled:hover:border-white/[0.10]
              disabled:hover:bg-white/[0.02]
            "
          >
            <span className="text-[17px] transition-transform duration-300 group-hover:-translate-x-0.5">
              ←
            </span>
          </button>


          {/* Next */}
          <button
            type="button"
            onClick={() => {
  setQualityPage(1);
  setFlippedQuality(null);
}}
            disabled={qualityPage === 1}
            aria-label="Next qualities"
            className="
              group
              flex h-11 w-11
              items-center justify-center
              rounded-full
              border border-white/[0.10]
              bg-white/[0.02]
              text-white/45
              transition-all
              duration-300

              hover:border-emerald-300/25
              hover:bg-emerald-300/[0.055]
              hover:text-emerald-300

              disabled:cursor-default
              disabled:opacity-20
              disabled:hover:border-white/[0.10]
              disabled:hover:bg-white/[0.02]
            "
          >
            <span className="text-[17px] transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </button>

        </div>

      </div>

    </div>

  </div>
</section>


  {/* =========================
    HIRING JOURNEY
========================== */}
<section className="relative overflow-hidden bg-[#eef1ee] text-[#111111]">

  {/* Background atmosphere */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -right-40 top-[10%] h-[340px] w-[340px] rounded-full bg-emerald-700/[0.035] blur-[130px]" />
  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">

    {/* =========================
        SECTION INTRO
    ========================== */}
    <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">

      {/* Left */}
      <div>

        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-700" />

          <p className="text-[9px] font-semibold uppercase tracking-[0.23em] text-emerald-900/55">
            Hiring Journey
          </p>
        </div>

        <p className="mt-4 max-w-[280px] text-[12px] leading-[1.7] text-black/38">
          A simple process designed to help us get to know you — and help you
          understand the opportunity.
        </p>

      </div>


      {/* Right */}
      <div>

        <h2 className="max-w-[760px] text-[31px] font-medium leading-[1.08] tracking-[-0.035em] text-black/88 md:text-[42px] lg:text-[48px]">
          From first step

          <span className="mt-1 block text-black/35">
            to what comes next.
          </span>
        </h2>

        <p className="mt-5 max-w-[620px] text-[15px] leading-[1.75] text-black/48 md:text-[16px]">
          Every opportunity may be a little different, but our goal is to keep
          the journey clear, thoughtful and focused on finding the right fit.
        </p>

      </div>

    </div>


    {/* =========================
        HIRING PROCESS
    ========================== */}
    <div className="relative mt-10">

      {/* Desktop timeline */}
      <div className="absolute left-[8%] right-[8%] top-[29px] hidden h-px bg-black/[0.08] lg:block">

        <div className="h-full w-[34%] bg-gradient-to-r from-emerald-700/50 to-emerald-700/10" />

      </div>


      <div className="grid items-stretch gap-3 md:grid-cols-2 lg:grid-cols-4">

        {/* =====================
            01 — APPLY
        ====================== */}
        <article className="group relative flex h-full flex-col">

          {/* Timeline point */}
          <div className="relative z-10 mb-5 flex h-[58px] shrink-0 items-center">

            <div
              className="
                flex h-[58px] w-[58px]
                items-center justify-center
                rounded-full
                border border-emerald-800/15
                bg-[#eef1ee]
                text-[10px]
                font-semibold
                tracking-[0.12em]
                text-emerald-800/60
                transition-all
                duration-500

                group-hover:border-emerald-700/30
                group-hover:bg-emerald-700
                group-hover:text-white
                group-hover:shadow-[0_10px_30px_rgba(4,120,87,0.16)]
              "
            >
              01
            </div>

          </div>


          {/* Card */}
          <div
            className="
              h-[220px]
              rounded-[22px]
              border border-black/[0.055]
              bg-white/60
              p-5
              transition-all
              duration-500

              group-hover:-translate-y-1
              group-hover:bg-white
              group-hover:shadow-[0_18px_45px_rgba(20,40,30,0.08)]
            "
          >

            <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-emerald-900/45">
              Apply
            </p>

            <h3 className="mt-4 text-[20px] font-medium leading-[1.25] tracking-[-0.025em] text-black/80">
              Discover the right opportunity.
            </h3>

            <p className="mt-3 text-[12px] leading-[1.7] text-black/42">
              Explore current opportunities and apply for a role that aligns
              with your skills, interests and career aspirations.
            </p>

          </div>

        </article>


        {/* =====================
            02 — CONNECT
        ====================== */}
        <article className="group relative flex h-full flex-col">

          {/* Timeline point */}
          <div className="relative z-10 mb-5 flex h-[58px] shrink-0 items-center">

            <div
              className="
                flex h-[58px] w-[58px]
                items-center justify-center
                rounded-full
                border border-black/[0.08]
                bg-[#eef1ee]
                text-[10px]
                font-semibold
                tracking-[0.12em]
                text-black/35
                transition-all
                duration-500

                group-hover:border-emerald-700/30
                group-hover:bg-emerald-700
                group-hover:text-white
                group-hover:shadow-[0_10px_30px_rgba(4,120,87,0.16)]
              "
            >
              02
            </div>

          </div>


          {/* Card */}
          <div
            className="
              h-[220px]
              rounded-[22px]
              border border-black/[0.055]
              bg-white/60
              p-5
              transition-all
              duration-500

              group-hover:-translate-y-1
              group-hover:bg-white
              group-hover:shadow-[0_18px_45px_rgba(20,40,30,0.08)]
            "
          >

            <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-emerald-900/45">
              Connect
            </p>

            <h3 className="mt-4 text-[20px] font-medium leading-[1.25] tracking-[-0.025em] text-black/80">
              Start the conversation.
            </h3>

            <p className="mt-3 text-[12px] leading-[1.7] text-black/42">
              Our team connects with selected candidates to understand their
              experience, interests and potential alignment with the role.
            </p>

          </div>

        </article>


        {/* =====================
            03 — INTERVIEW
        ====================== */}
        <article className="group relative flex h-full flex-col">

          {/* Timeline point */}
          <div className="relative z-10 mb-5 flex h-[58px] shrink-0 items-center">

            <div
              className="
                flex h-[58px] w-[58px]
                items-center justify-center
                rounded-full
                border border-black/[0.08]
                bg-[#eef1ee]
                text-[10px]
                font-semibold
                tracking-[0.12em]
                text-black/35
                transition-all
                duration-500

                group-hover:border-emerald-700/30
                group-hover:bg-emerald-700
                group-hover:text-white
                group-hover:shadow-[0_10px_30px_rgba(4,120,87,0.16)]
              "
            >
              03
            </div>

          </div>


          {/* Card */}
          <div
            className="
              h-[220px]
              rounded-[22px]
              border border-black/[0.055]
              bg-white/60
              p-5
              transition-all
              duration-500

              group-hover:-translate-y-1
              group-hover:bg-white
              group-hover:shadow-[0_18px_45px_rgba(20,40,30,0.08)]
            "
          >

            <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-emerald-900/45">
              Interview
            </p>

            <h3 className="mt-4 text-[20px] font-medium leading-[1.25] tracking-[-0.025em] text-black/80">
              Get to know each other.
            </h3>

            <p className="mt-3 text-[12px] leading-[1.7] text-black/42">
              Focused conversations help us understand your capabilities while
              giving you a clearer view of the role, team and opportunity.
            </p>

          </div>

        </article>


        {/* =====================
            04 — NEXT STEP
        ====================== */}
        <article className="group relative flex h-full flex-col">

          {/* Timeline point */}
          <div className="relative z-10 mb-5 flex h-[58px] shrink-0 items-center">

            <div
              className="
                flex h-[58px] w-[58px]
                items-center justify-center
                rounded-full
                border border-black/[0.08]
                bg-[#eef1ee]
                text-[10px]
                font-semibold
                tracking-[0.12em]
                text-black/35
                transition-all
                duration-500

                group-hover:border-emerald-700/30
                group-hover:bg-emerald-700
                group-hover:text-white
                group-hover:shadow-[0_10px_30px_rgba(4,120,87,0.16)]
              "
            >
              04
            </div>

          </div>


          {/* Card */}
          <div
            className="
              h-[220px]
              rounded-[22px]
              border border-black/[0.055]
              bg-white/60
              p-5
              transition-all
              duration-500

              group-hover:-translate-y-1
              group-hover:bg-white
              group-hover:shadow-[0_18px_45px_rgba(20,40,30,0.08)]
            "
          >

            <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-emerald-900/45">
              Next Step
            </p>

            <h3 className="mt-4 text-[20px] font-medium leading-[1.25] tracking-[-0.025em] text-black/80">
              Begin what comes next.
            </h3>

            <p className="mt-3 text-[12px] leading-[1.7] text-black/42">
              If there is a strong mutual fit, we&apos;ll guide you through the
              final steps and prepare you for your journey with Minivel.
            </p>

          </div>

        </article>

      </div>

    </div>

  </div>
</section>
{/* =========================
    EXPLORE OPPORTUNITIES
========================== */}
<section
  id="opportunities"
  className="relative overflow-hidden bg-[#080b0b] text-white"
>
  {/* Background atmosphere */}
  <div className="pointer-events-none absolute inset-0">

    <div className="absolute -left-40 top-[15%] h-[380px] w-[380px] rounded-full bg-emerald-300/[0.055] blur-[145px]" />

    <div className="absolute -right-36 bottom-[-80px] h-[320px] w-[320px] rounded-full bg-emerald-300/[0.025] blur-[130px]" />

  </div>


  <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">

    {/* =========================
        SECTION INTRO
    ========================== */}
    <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-12">

      {/* Left */}
      <div>

        <div className="flex items-center gap-3">

          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />

          <p className="text-[9px] font-medium uppercase tracking-[0.23em] text-white/35">
            Explore Opportunities
          </p>

        </div>


        <p className="mt-4 max-w-[290px] text-[12px] leading-[1.7] text-white/35">
          Find an opportunity where your skills, perspective and ambition can
          contribute to what comes next.
        </p>

      </div>


      {/* Right */}
      <div>

        <h2 className="max-w-[790px] text-[32px] font-medium leading-[1.08] tracking-[-0.035em] md:text-[43px] lg:text-[50px]">

          Find where you can

          <span className="mt-1 block text-white/40">
            make your next move.
          </span>

        </h2>


        <p className="mt-5 max-w-[650px] text-[15px] leading-[1.75] text-white/45 md:text-[16px]">
          Explore current opportunities at Minivel and discover roles where
          your capabilities can grow alongside meaningful work.
        </p>

      </div>

    </div>



{/* =========================
    EXPLORE OPEN ROLES CTA
========================== */}
<div className="mt-8">

 <Link
  to="/careers/jobs"
  className="
    group
    inline-flex items-center gap-3
    rounded-full
    bg-emerald-300
    px-6 py-3.5
    text-[9px]
    font-semibold
    uppercase
    tracking-[0.18em]
    text-[#07100e]
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:bg-emerald-200
  "
>
  Explore Open Roles

  <span className="text-[13px] transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</Link>

</div>

{/* closes max-w-7xl container */}
</div>

</section>

</main>
);
}

export default Careers;