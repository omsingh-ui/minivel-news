import { careerStories } from "../data/newsData";

function CareersWorkplace() {
  return (
    <section className="bg-[#101010] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">

        <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-10 border-b border-white/15 pb-10">

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Careers & Workplace
            </p>

            <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-none">
              Work is changing.
            </h2>
          </div>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-xl">
            Career expectations, workplace priorities and professional skills
            continue to evolve across industries.
          </p>

        </div>

        <div>
          {careerStories.map((story) => (
            <article
              key={story.id}
              className="group grid md:grid-cols-[110px_180px_1fr_50px] gap-5 py-8 border-b border-white/15 items-start"
            >
              <p className="text-4xl md:text-5xl font-light text-white/20">
                {story.number}
              </p>

              <p className="text-xs uppercase tracking-[0.18em] text-white/40 pt-2">
                {story.category}
              </p>

              <div>
                <h3 className="text-2xl md:text-3xl font-medium leading-snug group-hover:text-white/60 transition-colors">
                  {story.title}
                </h3>

                <p className="mt-3 text-white/45 leading-relaxed max-w-2xl">
                  {story.description}
                </p>
              </div>

              <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CareersWorkplace;