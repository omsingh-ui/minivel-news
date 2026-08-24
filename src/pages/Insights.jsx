import { featuredArticles } from "../data/newsData";

function Insights() {
  const insightTopics = [
    {
      number: "01",
      label: "Talent Strategy",
      title: "Building stronger talent pipelines before the need becomes urgent",
      text:
        "A forward-looking approach to talent can help organizations prepare for changing skills, roles and business priorities.",
      meta: "Planning & Capability",
    },
    {
      number: "02",
      label: "Candidate Experience",
      title: "Why the hiring experience matters before someone joins",
      text:
        "Every interaction during recruitment shapes how candidates understand an organization, its culture and its opportunities.",
      meta: "People & Experience",
    },
    {
      number: "03",
      label: "Workforce Planning",
      title: "Thinking beyond today's vacancies",
      text:
        "Workforce planning connects immediate hiring needs with the capabilities organizations may need as they grow.",
      meta: "Growth & Workforce",
    },
  ];

  const signals = [
    "Skills-first hiring",
    "Candidate expectations",
    "Workforce capability",
    "Career readiness",
  ];

  return (
    <main className="bg-[#eef1ee] text-[#111]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#090c0b] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-emerald-300/[0.055] blur-[150px]" />

          <div className="absolute left-[5%] bottom-[-180px] h-[360px] w-[360px] rounded-full bg-white/[0.018] blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16 md:px-8 md:pt-32 md:pb-18">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />

                <p className="text-[10px] uppercase tracking-[0.25em] text-white/45">
                  Minivel / Insights
                </p>
              </div>

              <h1 className="mt-5 max-w-4xl text-[46px] font-medium leading-[0.97] tracking-[-0.045em] md:text-[64px] lg:text-[74px]">
                Ideas for a changing
                <span className="block text-white/45">
                  world of work.
                </span>
              </h1>
            </div>

            <div className="lg:pb-1">
              <p className="max-w-md text-[15px] leading-[1.75] text-white/52 md:text-[16px]">
                Perspectives on talent, careers and workforce decisions that
                help people and organizations think beyond what is changing
                today.
              </p>

              <p className="mt-5 text-[9px] uppercase tracking-[0.22em] text-emerald-300/60">
                Ideas · People · Progress
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPENING THOUGHT */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.23em] text-emerald-800/70">
                Perspective / 01
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-[30px] font-medium leading-[1.08] tracking-[-0.035em] md:text-[42px]">
                Hiring is one decision.
                <span className="text-black/35">
                  {" "}Building capability is the bigger picture.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-[1.75] text-black/52">
                Strong workforce decisions are not only about filling today&apos;s
                roles. They consider the skills, potential and capabilities an
                organization may need next.
              </p>
            </div>
          </div>

          {/* Premium Insight Cards */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {insightTopics.map((topic) => (
              <article
                key={topic.number}
                className="group relative overflow-hidden rounded-[22px] border border-black/[0.07] bg-white/65 p-6 md:p-7 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_18px_48px_rgba(0,0,0,0.07)]"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-emerald-700/[0.05] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-emerald-800/70">
                      {topic.label}
                    </p>

                    <p className="mt-2 text-[10px] text-black/35">
                      {topic.meta}
                    </p>
                  </div>

                  <span className="select-none text-[48px] font-light leading-none tracking-[-0.06em] text-black/[0.07] transition-colors duration-500 group-hover:text-emerald-800/15">
                    {topic.number}
                  </span>
                </div>

                <h3 className="relative z-10 mt-8 text-[21px] font-semibold leading-[1.2] tracking-[-0.025em] md:text-[23px]">
                  {topic.title}
                </h3>

                <p className="relative z-10 mt-4 text-[14px] leading-[1.72] text-black/50">
                  {topic.text}
                </p>

                <div className="relative z-10 mt-7 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-700/50" />

                  <span className="text-[9px] uppercase tracking-[0.18em] text-black/35">
                    Minivel Perspective
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

     {/* SIGNALS */}
<section className="relative overflow-hidden bg-[#dce2dd]">
  {/* Soft background atmosphere */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full bg-emerald-800/[0.045] blur-[100px]" />
  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-14">

    {/* Section Intro */}
    <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
      <div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-700" />

          <p className="text-[9px] font-semibold uppercase tracking-[0.23em] text-emerald-900/60">
            What we&apos;re thinking about
          </p>
        </div>

        <h2 className="mt-3 max-w-md text-[28px] font-medium leading-[1.08] tracking-[-0.03em] md:text-[34px]">
          Signals shaping
          <span className="block text-black/40">
            talent and work.
          </span>
        </h2>
      </div>

      <p className="max-w-lg text-[14px] leading-[1.7] text-black/45 lg:justify-self-end">
        Four conversations influencing how organizations think about people,
        capability and the changing workplace.
      </p>
    </div>

    {/* Signal Cards */}
    <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {signals.map((signal, index) => (
        <article
          key={signal}
          className="
            group
            relative
            min-h-[190px]
            overflow-hidden
            rounded-[20px]
            border
            border-black/[0.06]
            bg-white/55
            p-5
            transition-all
            duration-500
            hover:-translate-y-1.5
            hover:bg-white/90
            hover:shadow-[0_18px_45px_rgba(20,40,30,0.08)]
          "
        >
          {/* Hover glow */}
          <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-emerald-700/[0.07] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Number */}
          <div className="relative z-10 flex items-start justify-between">
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/30">
              Signal
            </span>

            <span
              className="
                select-none
                text-[38px]
                font-medium
                leading-none
                tracking-[-0.06em]
                text-black/[0.07]
                transition-colors
                duration-500
                group-hover:text-emerald-800/18
              "
            >
              0{index + 1}
            </span>
          </div>

          {/* Topic */}
          <div className="relative z-10 mt-10">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-700/60" />

              <span className="text-[8px] uppercase tracking-[0.2em] text-emerald-900/50">
                In Focus
              </span>
            </div>

            <h3 className="max-w-[180px] text-[17px] font-semibold leading-[1.2] tracking-[-0.02em] text-black/75 transition-colors duration-300 group-hover:text-black">
              {signal}
            </h3>
          </div>

          {/* Corner accent */}
          <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-emerald-700/55 transition-all duration-500 group-hover:w-full" />
        </article>
      ))}
    </div>

  </div>
</section>

      {/* SELECTED THINKING */}
      <section className="bg-[#eef1ee]">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-800/65">
                Selected Thinking
              </p>

              <h2 className="mt-2 text-3xl font-medium tracking-[-0.03em] md:text-4xl">
                Perspectives worth exploring.
              </h2>
            </div>

            <p className="hidden text-[9px] uppercase tracking-[0.2em] text-black/30 md:block">
              Minivel Editorial
            </p>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {featuredArticles.map((article) => (
              <article
                key={article.id}
                className="group overflow-hidden rounded-[20px] bg-white/60 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_48px_rgba(0,0,0,0.07)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                <div className="p-5 md:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-emerald-800/65">
                      {article.category}
                    </p>

                    <p className="text-[9px] text-black/30">
                      {article.readTime}
                    </p>
                  </div>

                  <h3 className="mt-3 text-[20px] font-semibold leading-[1.22] tracking-[-0.02em] md:text-[22px]">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-[1.7] text-black/45">
                    {article.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-[#0a0d0c] text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-300/65">
                Keep Exploring
              </p>

              <h2 className="mt-3 max-w-xl text-[30px] font-medium leading-[1.08] tracking-[-0.035em] md:text-[40px]">
                Better questions lead to better workforce decisions.
              </h2>
            </div>

            <p className="max-w-lg text-[14px] leading-[1.75] text-white/45 lg:justify-self-end">
              Continue exploring perspectives across talent, workforce,
              careers and the future of work.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Insights;