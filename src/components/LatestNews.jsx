import { latestNews } from "../data/newsData";

function LatestNews() {
  return (
    <section className="bg-white text-[#111]">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">

        <div className="flex items-end justify-between border-b border-black pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-black/40">
              Live Desk
            </p>

            <h2 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight">
              Latest News
            </h2>
          </div>

          <p className="hidden md:block text-xs uppercase tracking-[0.18em] text-black/40">
            Updated Stories
          </p>
        </div>

        <div>
          {latestNews.map((news) => (
            <article
              key={news.id}
              className="group grid md:grid-cols-[130px_130px_1fr_80px] gap-5 py-7 border-b border-black/15 items-center"
            >
              <p className="text-sm text-black/45">
                {news.date}
              </p>

              <p className="text-xs uppercase tracking-[0.18em] font-medium">
                {news.category}
              </p>

              <div>
                <h3 className="text-xl md:text-2xl font-medium leading-snug group-hover:opacity-60 transition-opacity">
                  {news.title}
                </h3>

                <p className="mt-2 text-sm text-black/45">
                  {news.source}
                </p>
              </div>

              <a
                href={news.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="flex justify-end text-xl"
              >
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default LatestNews;