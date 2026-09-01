import { careerStories } from "../data/newsData";

function CareersWorkplace() {
  const cardMeta = [
    {
      eyebrow: "Career Signals",
      footer: "Skills & Opportunity",
    },
    {
      eyebrow: "Workplace Shift",
      footer: "People & Culture",
    },
    {
      eyebrow: "Growth Outlook",
      footer: "Learning & Progression",
    },
  ];

  return (
    <section
     id="workplace"
      className="bg-[#e9ece8] text-[#111111]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-14">

        {/* Header */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-12 items-end">
          <div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.24em] font-medium text-emerald-800/70">
              Careers & Workplace
            </p>

            <h2 className="mt-2 text-[32px] md:text-[40px] font-medium leading-[1.08] tracking-[-0.035em]">
              How work is evolving.
            </h2>
          </div>

          <p className="max-w-xl text-[15px] md:text-[16px] leading-[1.7] text-black/55">
            Exploring the changing expectations, skills and opportunities
            shaping how people build careers and experience work.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-5 mt-7">
          {careerStories.slice(0, 3).map((story, index) => (
            <article
              key={story.id}
              className="group relative overflow-hidden rounded-[20px] border border-black/[0.08] bg-white/55 p-6 md:p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-800/20 hover:bg-white/80 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]"
            >
              {/* Soft Glow */}
              <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-emerald-700/[0.05] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Top */}
              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.24em] font-semibold text-emerald-800/70">
                    {cardMeta[index]?.eyebrow || story.category}
                  </p>

                  <p className="mt-2 text-[11px] font-medium text-black/38">
                    {story.category}
                  </p>
                </div>

                {/* Number */}
                <span className="select-none text-[50px] md:text-[58px] leading-none font-light tracking-[-0.07em] text-black/[0.07] transition-all duration-500 group-hover:text-emerald-800/15 group-hover:-translate-y-1">
                  0{index + 1}
                </span>
              </div>

              {/* Main Content */}
              <div className="relative z-10 mt-7">
                <h3 className="max-w-[320px] text-[22px] md:text-[24px] font-semibold leading-[1.18] tracking-[-0.025em] text-[#151817]">
                  {story.title}
                </h3>

                <p className="mt-4 max-w-[330px] text-[14px] md:text-[15px] leading-[1.72] text-black/52">
                  {story.description}
                </p>
              </div>

              {/* Footer */}
              <div className="relative z-10 mt-7">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-700/55" />

                  <p className="text-[9px] uppercase tracking-[0.2em] font-medium text-black/40">
                    {cardMeta[index]?.footer}
                  </p>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CareersWorkplace;