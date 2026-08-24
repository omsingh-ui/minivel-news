function FutureOfWork() {
  const forces = [
    {
      number: "01",
      label: "Automation",
      title: "Routine work is changing first",
      text:
        "As repetitive tasks become easier to automate, more value is shifting toward judgment, creativity, communication and problem solving.",
    },
    {
      number: "02",
      label: "Skills",
      title: "Human capabilities are becoming more visible",
      text:
        "Technical knowledge still matters, but adaptability, collaboration and decision making are increasingly important alongside it.",
    },
    {
      number: "03",
      label: "Work Design",
      title: "Roles are becoming more fluid",
      text:
        "Many jobs are evolving into broader combinations of responsibilities as technology changes how work is organized and delivered.",
    },
  ];

  const workplaceSignals = [
    "Human + technology collaboration",
    "Changing role boundaries",
    "Continuous skill development",
    "Flexible ways of working",
    "Stronger digital confidence",
    "Greater emphasis on judgment",
  ];

  const futureChoices = [
    {
      title: "Automate",
      text:
        "Use technology where it can remove repetitive work, improve speed and reduce unnecessary effort.",
    },
    {
      title: "Augment",
      text:
        "Combine tools with human judgment so people can make better decisions and focus on higher-value work.",
    },
    {
      title: "Redesign",
      text:
        "Rethink roles and workflows when technology changes what work needs to be done and how teams contribute.",
    },
  ];

  return (
    <main className="bg-[#eef1ee] text-[#111111]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#080b0b] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 top-[-140px] h-[520px] w-[520px] rounded-full bg-emerald-300/[0.05] blur-[150px]" />
          <div className="absolute -left-32 bottom-[-180px] h-[420px] w-[420px] rounded-full bg-white/[0.018] blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">

            <div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />

                <p className="text-[10px] uppercase tracking-[0.25em] text-white/45">
                  Minivel / Future of Work
                </p>
              </div>

              <h1 className="mt-5 max-w-4xl text-[46px] font-medium leading-[0.97] tracking-[-0.045em] md:text-[64px] lg:text-[74px]">
                Work is changing.
                <span className="block text-white/45">
                  Human value is changing with it.
                </span>
              </h1>
            </div>

            <div className="lg:pb-1">
              <p className="max-w-md text-[15px] leading-[1.75] text-white/52 md:text-[16px]">
                Perspectives on automation, skills, collaboration and the
                changing relationship between people, technology and work.
              </p>

              <p className="mt-5 text-[9px] uppercase tracking-[0.22em] text-emerald-300/60">
                People · Technology · Change
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS CHANGING */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">

          <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.23em] text-emerald-800/70">
                What&apos;s Changing
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-[30px] font-medium leading-[1.08] tracking-[-0.035em] md:text-[42px]">
                The future of work is not one technology.
                <span className="text-black/35">
                  {" "}It is a shift in how people create value.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-[1.75] text-black/52">
                Technology is changing tasks, expectations and workflows, but
                the bigger story is how organizations redesign work and how
                people continue to contribute in new ways.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {forces.map((item) => (
              <article
                key={item.number}
                className="group relative overflow-hidden rounded-[22px] border border-black/[0.07] bg-white/65 p-6 md:p-7 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_18px_48px_rgba(0,0,0,0.07)]"
              >
                <div className="flex items-start justify-between">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-emerald-800/70">
                    {item.label}
                  </p>

                  <span className="text-[46px] font-light leading-none tracking-[-0.06em] text-black/[0.07] transition-colors duration-500 group-hover:text-emerald-800/15">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-8 text-[21px] font-semibold leading-[1.2] tracking-[-0.025em] md:text-[23px]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[14px] leading-[1.72] text-black/50">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* WORKPLACE SIGNALS */}
      <section className="bg-[#dfe4df]">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-14">

          <div className="grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-800/65">
                Workplace Signals
              </p>

              <h2 className="mt-2 max-w-md text-[28px] font-medium leading-[1.08] tracking-[-0.03em] md:text-[34px]">
                Six shifts worth
                <span className="block text-black/40">
                  paying attention to.
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {workplaceSignals.map((signal, index) => (
                <div
                  key={signal}
                  className="rounded-[18px] border border-black/[0.06] bg-white/50 p-5"
                >
                  <span className="text-[9px] text-black/25">
                    0{index + 1}
                  </span>

                  <p className="mt-3 text-[14px] font-medium leading-snug text-black/65">
                    {signal}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* AUTOMATE / AUGMENT / REDESIGN */}
      <section className="bg-[#0d1110] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">

          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-300/70">
                Work Design
              </p>

              <h2 className="mt-2 max-w-md text-[30px] font-medium leading-[1.08] tracking-[-0.03em] md:text-[38px]">
                Technology creates
                <span className="block text-white/40">
                  more than one response.
                </span>
              </h2>

              <p className="mt-5 max-w-sm text-[14px] leading-[1.75] text-white/45">
                The strongest decisions are not simply about replacing work.
                They consider where technology can remove friction, support
                people and change how work itself is designed.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {futureChoices.map((choice, index) => (
                <article
                  key={choice.title}
                  className="group relative min-h-[250px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-white/[0.03] p-6"
                >
                  <span className="text-[10px] text-white/25">
                    0{index + 1}
                  </span>

                  <h3 className="mt-10 text-[26px] font-medium tracking-[-0.03em] text-emerald-200/90">
                    {choice.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-[1.72] text-white/50">
                    {choice.text}
                  </p>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-300/70 transition-all duration-500 group-hover:w-full" />
                </article>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* HUMAN VALUE */}
      <section className="bg-[#eef1ee]">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">

          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">

            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-800/65">
                Human Value
              </p>

              <h2 className="mt-3 max-w-lg text-[30px] font-medium leading-[1.08] tracking-[-0.035em] md:text-[40px]">
                As tools become more capable, human judgment becomes more visible.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Understanding context",
                "Building trust",
                "Making difficult decisions",
                "Communicating with empathy",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-[18px] border border-black/[0.06] bg-white/60 p-5"
                >
                  <span className="text-[9px] text-black/25">
                    0{index + 1}
                  </span>

                  <p className="mt-3 text-[15px] font-medium text-black/65">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-[#0a0d0c] text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-14">

          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-300/65">
                Final Thought
              </p>

              <h2 className="mt-3 max-w-xl text-[30px] font-medium leading-[1.08] tracking-[-0.035em] md:text-[40px]">
                The future of work will be shaped by what technology can do and what people do best.
              </h2>
            </div>

            <p className="max-w-lg text-[14px] leading-[1.75] text-white/45 lg:justify-self-end">
              The opportunity is not simply to automate more work, but to build
              environments where technology and human capability strengthen one another.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}

export default FutureOfWork;