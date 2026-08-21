import { businessStories } from "../data/newsData";

function BusinessIndustry() {
  return (
    <section className="bg-white text-[#111]">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">

        <div className="flex items-end justify-between border-b border-black pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-black/40">
              Business & Industry
            </p>

            <h2 className="mt-2 text-4xl md:text-5xl font-semibold">
              What&apos;s Changing
            </h2>
          </div>

          <span className="hidden md:block text-xs uppercase tracking-[0.18em] text-black/40">
            Analysis
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 mt-10">

          <article className="group">
            <div className="relative h-[380px] md:h-[480px] bg-[#d8d5ce] overflow-hidden">
              <span className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.2em] text-black/45">
                Editorial visual
              </span>
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-black/45">
              {businessStories[0].category}
            </p>

            <h3 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight">
              {businessStories[0].title}
            </h3>

            <p className="mt-4 text-black/55 leading-relaxed max-w-2xl">
              {businessStories[0].description}
            </p>

            <button className="mt-6 flex gap-3 items-center text-sm uppercase tracking-[0.15em]">
              Explore
              <span>→</span>
            </button>
          </article>

          <div className="border-t border-black">
            {businessStories.slice(1).map((story) => (
              <article
                key={story.id}
                className="group py-8 border-b border-black/20"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.18em] text-black/40">
                    {story.category}
                  </p>

                  <span className="text-xs text-black/40">
                    {story.date}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl md:text-3xl font-semibold leading-snug group-hover:opacity-60 transition-opacity">
                  {story.title}
                </h3>

                <p className="mt-4 text-black/55 leading-relaxed">
                  {story.description}
                </p>

                <p className="mt-5 text-xs uppercase tracking-[0.15em] text-black/40">
                  {story.source}
                </p>
              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default BusinessIndustry;