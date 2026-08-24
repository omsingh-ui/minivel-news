function CareersGrowth() {
  const growthAreas = [
    {
      number: "01",
      label: "Career Readiness",
      title: "Strong careers begin with skills that travel",
      text:
        "Communication, problem solving, adaptability and practical capability remain valuable across roles, industries and changing career paths.",
    },
    {
      number: "02",
      label: "Learning Mindset",
      title: "Continuous learning is becoming part of career resilience",
      text:
        "As roles evolve, professionals who keep building relevant skills are better prepared to respond to new responsibilities and opportunities.",
    },
    {
      number: "03",
      label: "Professional Growth",
      title: "Progress is not always a straight line",
      text:
        "Career growth can come through deeper expertise, broader responsibility, new environments or a transition into an entirely different role.",
    },
  ];

  const careerSignals = [
    "Practical capability",
    "Communication",
    "Adaptability",
    "Digital confidence",
    "Problem solving",
    "Continuous learning",
  ];

  const growthChoices = [
    {
      title: "Strengthen",
      text:
        "Build deeper capability in the skills and responsibilities that already matter in your current direction.",
    },
    {
      title: "Expand",
      text:
        "Add complementary skills that increase the range of problems, roles and opportunities you can take on.",
    },
    {
      title: "Transition",
      text:
        "Use transferable capability and focused learning to move toward a new role, function or career path.",
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
                  Minivel / Careers & Growth
                </p>
              </div>

              <h1 className="mt-5 max-w-4xl text-[46px] font-medium leading-[0.97] tracking-[-0.045em] md:text-[64px] lg:text-[74px]">
                Build a career that
                <span className="block text-white/45">
                  can keep evolving.
                </span>
              </h1>
            </div>

            <div className="lg:pb-1">
              <p className="max-w-md text-[15px] leading-[1.75] text-white/52 md:text-[16px]">
                Perspectives on employability, professional growth and the
                capabilities that help people navigate changing opportunities.
              </p>

              <p className="mt-5 text-[9px] uppercase tracking-[0.22em] text-emerald-300/60">
                Skills · Growth · Adaptability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAREER FOUNDATION */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.23em] text-emerald-800/70">
                Career Foundation
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-[30px] font-medium leading-[1.08] tracking-[-0.035em] md:text-[42px]">
                Career readiness is not about knowing everything.
                <span className="text-black/35">
                  {" "}It is about being ready to keep learning.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-[1.75] text-black/52">
                Strong career foundations combine practical capability with
                curiosity, communication and the ability to adapt when roles,
                tools and expectations change.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {growthAreas.map((item) => (
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

      {/* CAREER SIGNALS */}
      <section className="bg-[#dfe4df]">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-14">
          <div className="grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-800/65">
                Career Signals
              </p>

              <h2 className="mt-2 max-w-md text-[28px] font-medium leading-[1.08] tracking-[-0.03em] md:text-[34px]">
                Capabilities that remain valuable
                <span className="block text-black/40">
                  even when roles change.
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {careerSignals.map((signal, index) => (
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

      {/* GROWTH CHOICES */}
      <section className="bg-[#0d1110] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-300/70">
                Career Direction
              </p>

              <h2 className="mt-2 max-w-md text-[30px] font-medium leading-[1.08] tracking-[-0.03em] md:text-[38px]">
                Growth can take
                <span className="block text-white/40">
                  more than one form.
                </span>
              </h2>

              <p className="mt-5 max-w-sm text-[14px] leading-[1.75] text-white/45">
                Progress can mean becoming better at what you already do,
                expanding into new responsibilities or preparing for a
                completely different direction.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {growthChoices.map((choice, index) => (
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

      {/* CLOSING */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-800/65">
                Final Thought
              </p>

              <h2 className="mt-3 max-w-xl text-[30px] font-medium leading-[1.08] tracking-[-0.035em] md:text-[40px]">
                A strong career is built through capability, not certainty.
              </h2>
            </div>

            <p className="max-w-lg text-[14px] leading-[1.75] text-black/48 lg:justify-self-end">
              The ability to learn, adapt and keep building useful skills can
              create opportunities even when the path ahead changes.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CareersGrowth;