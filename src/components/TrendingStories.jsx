import { trendingStories } from "../data/newsData";

function TrendingStories() {
  return (
    <section className="bg-[#f3f0e8] text-[#111]">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">

        <div className="grid lg:grid-cols-[0.5fr_1.5fr] gap-10">

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-black/40">
              Trending
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-semibold">
              Most Read
            </h2>
          </div>

          <div className="border-t border-black">
            {trendingStories.map((story) => (
              <article
                key={story.id}
                className="group grid grid-cols-[70px_1fr_40px] md:grid-cols-[100px_150px_1fr_40px] gap-4 py-7 border-b border-black/20 items-center"
              >
                <span className="text-4xl md:text-5xl font-light text-black/20">
                  {story.number}
                </span>

                <p className="hidden md:block text-xs uppercase tracking-[0.18em] text-black/40">
                  {story.category}
                </p>

                <div>
                  <p className="md:hidden mb-2 text-xs uppercase tracking-[0.18em] text-black/40">
                    {story.category}
                  </p>

                  <h3 className="text-xl md:text-2xl font-medium group-hover:opacity-55 transition-opacity">
                    {story.title}
                  </h3>
                </div>

                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default TrendingStories;