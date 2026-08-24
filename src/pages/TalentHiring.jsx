function TalentHiring() {
  const hiringPrinciples = [
    {
      number: "01",
      label: "Capability",
      title: "Look beyond the vacancy",
      text:
        "The strongest hiring decisions consider what a role needs today and what the organization may need from that person as the work evolves.",
    },
    {
      number: "02",
      label: "Potential",
      title: "Identify adaptability, not just experience",
      text:
        "Past experience matters, but the ability to learn, solve problems and grow into changing responsibilities can matter just as much.",
    },
    {
      number: "03",
      label: "Experience",
      title: "Treat candidate experience as part of hiring quality",
      text:
        "Clear communication, thoughtful assessment and respectful interactions influence how candidates understand both the opportunity and the organization.",
    },
  ];

  const candidateJourney = [
    {
      step: "Discover",
      text: "Reach the right talent with a clear understanding of the role, expectations and opportunity.",
    },
    {
      step: "Evaluate",
      text: "Assess practical capability, potential and context rather than relying on one-dimensional signals.",
    },
    {
      step: "Engage",
      text: "Create a transparent experience that helps both sides understand fit, expectations and possibilities.",
    },
    {
      step: "Decide",
      text: "Bring evidence and human judgment together to make a confident hiring decision.",
    },
  ];

  const hiringShifts = [
    "From credentials to capability",
    "From filling roles to building pipelines",
    "From one-time assessment to better context",
    "From candidate processing to candidate experience",
  ];

  return (
    <main className="bg-[#eef1ee] text-[#111111]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#080b0b] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 top-[-120px] h-[520px] w-[520px] rounded-full bg-emerald-300/[0.05] blur-[150px]" />
          <div className="absolute left-[-120px] bottom-[-180px] h-[420px] w-[420px] rounded-full bg-white/[0.018] blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />

                <p className="text-[10px] uppercase tracking-[0.25em] text-white/45">
                  Minivel / Talent & Hiring
                </p>
              </div>

              <h1 className="mt-5 max-w-4xl text-[46px] font-medium leading-[0.97] tracking-[-0.045em] md:text-[64px] lg:text-[74px]">
                Better hiring starts
                <span className="block text-white/45">
                  with better judgment.
                </span>
              </h1>
            </div>

            <div className="lg:pb-1">
              <p className="max-w-md text-[15px] leading-[1.75] text-white/52 md:text-[16px]">
                A closer look at how organizations can identify capability,
                understand potential and create stronger hiring experiences.
              </p>

              <p className="mt-5 text-[9px] uppercase tracking-[0.22em] text-emerald-300/60">
                Talent · Capability · Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE HIRING SHIFT */}
      <section className="bg-[#eef1ee]">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.23em] text-emerald-800/70">
                The Hiring Shift
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-[30px] font-medium leading-[1.08] tracking-[-0.035em] md:text-[42px]">
                The strongest hiring strategies
                <span className="text-black/35">
                  {" "}look beyond the vacancy.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-[1.75] text-black/52">
                Finding someone who can perform today matters. Understanding
                who can learn, adapt and contribute as the role evolves can
                make the decision far more valuable over time.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {hiringPrinciples.map((item) => (
              <article
                key={item.number}
                className="group relative overflow-hidden rounded-[22px] border border-black/[0.07] bg-white/65 p-6 md:p-7 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_18px_48px_rgba(0,0,0,0.07)]"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-emerald-700/[0.05] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

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

      {/* HIRING LENS */}
      <section className="bg-[#dfe4df]">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-800/65">
                Talent Lens
              </p>

              <h2 className="mt-2 max-w-md text-[28px] font-medium leading-[1.08] tracking-[-0.03em] md:text-[34px]">
                Four shifts changing
                <span className="block text-black/40">
                  how hiring is understood.
                </span>
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {hiringShifts.map((shift, index) => (
                <div
                  key={shift}
                  className="rounded-[18px] border border-black/[0.06] bg-white/50 px-5 py-5"
                >
                  <span className="text-[9px] text-black/25">
                    0{index + 1}
                  </span>

                  <p className="mt-2 text-[14px] font-medium leading-snug text-black/65">
                    {shift}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CANDIDATE JOURNEY */}
      <section className="bg-[#0d1110] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-300/70">
                Candidate Journey
              </p>

              <h2 className="mt-2 max-w-md text-[30px] font-medium leading-[1.08] tracking-[-0.03em] md:text-[38px]">
                A stronger process
                <span className="block text-white/40">
                  creates stronger decisions.
                </span>
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {candidateJourney.map((item, index) => (
                <article
                  key={item.step}
                  className="rounded-[20px] border border-white/[0.08] bg-white/[0.03] p-5 md:p-6"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-emerald-300/70">
                      {item.step}
                    </p>

                    <span className="text-[10px] text-white/25">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-5 text-[15px] leading-[1.7] text-white/55">
                    {item.text}
                  </p>
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
                Great hiring is not only about finding talent.
              </h2>
            </div>

            <p className="max-w-lg text-[14px] leading-[1.75] text-black/48 lg:justify-self-end">
              It is about understanding capability, creating clarity and
              making decisions that work for both people and organizations.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}

export default TalentHiring;