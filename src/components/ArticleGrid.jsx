import { featuredArticles } from "../data/newsData";

function ArticleGrid() {
  return (
    <section className="bg-[#f3f0e8] text-[#111]">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">

        <div className="flex items-end justify-between border-b border-black/20 pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-black/40">
              Articles
            </p>

            <h2 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight">
              Ideas & Perspectives
            </h2>
          </div>

          <p className="hidden md:block text-xs uppercase tracking-[0.18em] text-black/40">
            Longer Reads
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7 mt-10">
          {featuredArticles.map((article) => (
            <article
              key={article.id}
              className="group border-t border-black pt-5"
            >
              <div className="relative h-56 md:h-64 bg-[#d7d4ce] overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" />

                <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.2em] text-black/50">
                  Image coming soon
                </span>
              </div>

              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-black/45">
                {article.category}
              </p>

              <h3 className="mt-3 text-2xl font-semibold leading-snug group-hover:opacity-60 transition-opacity">
                {article.title}
              </h3>

              <p className="mt-4 text-black/55 leading-relaxed">
                {article.description}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm text-black/40">
                  {article.readTime}
                </p>

                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ArticleGrid;