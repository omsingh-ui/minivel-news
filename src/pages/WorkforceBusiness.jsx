function WorkforceBusiness() {
  const businessSignals = [
    {
      number: "01",
      label: "Workforce Planning",
      title: "Plan capability before demand becomes urgent",
      text:
        "Organizations that understand future skill requirements early can make stronger decisions about hiring, development and workforce structure.",
    },
    {
      number: "02",
      label: "Scaling Teams",
      title: "Growth requires more than adding headcount",
      text:
        "Building a larger team works best when roles, responsibilities and capability needs grow together with the business.",
    },
    {
      number: "03",
      label: "Skill Demand",
      title: "Changing work is changing the capabilities businesses need",
      text:
        "Digital, technical and human skills are evolving together, requiring organizations to think carefully about the mix of talent they build.",
    },
  ];

  const priorities = [
    "Critical skill visibility",
    "Talent pipeline strength",
    "Role clarity",
    "Internal capability",
    "Workforce flexibility",
    "Long-term readiness",
  ];

  const decisions = [
    {
      title: "Build",
      text:
        "Develop existing employees when the capability can grow internally and knowledge continuity matters.",
    },
    {
      title: "Hire",
      text:
        "Bring in external talent when new expertise, speed or additional capacity is required.",
    },
    {
      title: "Adapt",
      text:
        "Redesign roles and responsibilities when technology or business priorities change how work gets done.",
    },
  ];

  return (
    <main className="bg-[#eef1ee] text-[#111111]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#080b0b] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 top-[-140px] h-[520px] w-[520px] rounded-full bg-emerald-300/[0.05] blur-[150px]" />
          <div className="absolute -left-40 bottom-[-180px] h-[420px] w-[420px] rounded-full bg-white/[0.018] blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />

                <p className="text-[10px] uppercase tracking-[0.25em] text-white/45">
                  Minivel / Workforce & Business
                </p>
              </div>

              <h1 className="mt-5 max-w-4xl text-[46px] font-medium leading-[0.97] tracking-[-0.045em] md:text-[64px] lg:text-[74px]">
                Build the workforce
                <span className="block text-white/45">
                  your next stage needs.
                </span>
              </h1>
            </div>

            <div className="lg:pb-1">
              <p className="max-w-md text-[15px] leading-[1.75] text-white/52 md:text-[16px]">
                Perspectives on workforce planning, changing skill demand and
                the decisions organizations make as they grow.
              </p>

              <p className="mt-5 text-[9px] uppercase tracking-[0.22em] text-emerald-300/60">
                Capability · Growth · Readiness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS REALITY */}
      <section className="bg-[#eef1ee]">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.23em] text-emerald-800/70">
                Business Reality
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-[30px] font-medium leading-[1.08] tracking-[-0.035em] md:text-[42px]">
                Workforce strategy becomes more important
                <span className="text-black/35">
                  {" "}as businesses become more complex.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-[1.75] text-black/52">
                Growth can create new roles, new skill requirements and new
                pressure on existing teams. Workforce planning helps connect
                those changes with the people and capabilities required to
                support them.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {businessSignals.map((item) => (
              <article
                key={item.number}
                className="group relative overflow-hidden rounded-[22px] border border-black/[0.07] bg-white/65 p-6 md:p-7 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_18px_48px_rgba(0,0,0,0.07)]"
              >
                <div className="relative z-10 flex items-start justify-between">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-emerald-800/70">
                    {item.label}
                  </p>

                  <span className="text-[46px] font-light leading-none tracking-[-0.06em] text-black/[0.07] transition-colors duration-500 group-hover:text-emerald-800/15">
                    {item.number}
                  </span>
                </div>

                <h3 className="relative z-10 mt-8 text-[21px] font-semibold leading-[1.2] tracking-[-0.025em] md:text-[23px]">
                  {item.title}
                </h3>

                <p className="relative z-10 mt-4 text-[14px] leading-[1.72] text-black/50">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFORCE PRIORITIES */}
      <section className="bg-[#dfe4df]">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-14">
          <div className="grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-800/65">
                Workforce Priorities
              </p>

              <h2 className="mt-2 max-w-md text-[28px] font-medium leading-[1.08] tracking-[-0.03em] md:text-[34px]">
                Six things worth understanding
                <span className="block text-black/40">
                  before scaling a team.
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {priorities.map((priority, index) => (
                <div
                  key={priority}
                  className="rounded-[18px] border border-black/[0.06] bg-white/50 p-5"
                >
                  <span className="text-[9px] text-black/25">
                    0{index + 1}
                  </span>

                  <p className="mt-3 text-[14px] font-medium leading-snug text-black/65">
                    {priority}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUILD / HIRE / ADAPT */}
      <section className="bg-[#0d1110] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-300/70">
                Workforce Decisions
              </p>

              <h2 className="mt-2 max-w-md text-[30px] font-medium leading-[1.08] tracking-[-0.03em] md:text-[38px]">
                Not every capability gap
                <span className="block text-white/40">
                  needs the same answer.
                </span>
              </h2>

              <p className="mt-5 max-w-sm text-[14px] leading-[1.75] text-white/45">
                Strong workforce planning considers whether capability should
                be developed internally, hired externally or enabled through
                changes in the way work is structured.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {decisions.map((decision, index) => (
                <article
                  key={decision.title}
                  className="group relative min-h-[250px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-white/[0.03] p-6"
                >
                  <span className="text-[10px] text-white/25">
                    0{index + 1}
                  </span>

                  <h3 className="mt-10 text-[26px] font-medium tracking-[-0.03em] text-emerald-200/90">
                    {decision.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-[1.72] text-white/50">
                    {decision.text}
                  </p>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-300/70 transition-all duration-500 group-hover:w-full" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-[#eef1ee]">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-800/65">
                Final Thought
              </p>

              <h2 className="mt-3 max-w-xl text-[30px] font-medium leading-[1.08] tracking-[-0.035em] md:text-[40px]">
                Workforce readiness is built before growth demands it.
              </h2>
            </div>

            <p className="max-w-lg text-[14px] leading-[1.75] text-black/48 lg:justify-self-end">
              The organizations best prepared for change are often the ones
              already thinking about the capabilities they will need next.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WorkforceBusiness;