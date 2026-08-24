import { useParams, Link } from "react-router-dom";
import { articlesData } from "../data/articlesData";

function ArticleDetail() {
  const { slug } = useParams();

  const article = articlesData.find((item) => item.slug === slug);

  if (!article) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#080b0b] px-6 text-white">
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.24em] text-emerald-300/70">
            Minivel / Article
          </p>

          <h1 className="mt-4 text-3xl font-medium md:text-4xl">
            Article not found.
          </h1>

          <Link
            to="/"
            className="group mt-6 inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-white/45 transition-colors hover:text-white"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  const relatedArticles = articlesData
    .filter((item) => item.slug !== article.slug)
    .slice(0, 2);

  return (
    <main className="bg-[#edf0ed] text-[#111111]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#080b0b] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-32 h-[520px] w-[520px] rounded-full bg-emerald-300/[0.06] blur-[150px]" />

          <div className="absolute bottom-[-190px] left-[14%] h-[380px] w-[380px] rounded-full bg-white/[0.018] blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-9 md:px-8 md:pt-11">

          {/* Top navigation */}
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="group inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-white/45 transition-colors hover:text-white"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>

              Back to Home
            </Link>

            <p className="hidden text-[8px] uppercase tracking-[0.22em] text-white/25 md:block">
              Minivel Editorial / {article.readTime}
            </p>
          </div>

          {/* Main hero */}
          <div className="grid gap-8 pb-12 pt-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch lg:pb-14">

            {/* Left content */}
            <div className="flex flex-col justify-between py-2">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />

                  <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-emerald-300/75">
                    {article.category}
                  </p>
                </div>

                <h1 className="mt-6 max-w-3xl text-[42px] font-medium leading-[0.98] tracking-[-0.045em] md:text-[56px] lg:text-[62px]">
                  {article.title}
                </h1>

                <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-white/52 md:text-[17px]">
                  {article.intro}
                </p>
              </div>

              {/* Publisher info */}
              <div className="mt-10">
                <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                  Published By
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/70" />

                  <p className="text-[12px] text-white/60">
                    Minivel Editorial
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="group relative min-h-[420px] overflow-hidden rounded-[26px] md:min-h-[520px]">
              <img
                src={article.image}
                alt={article.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

              <div className="absolute left-5 top-5">
                <div className="rounded-full border border-white/15 bg-black/25 px-3 py-1.5 backdrop-blur-md">
                  <p className="text-[8px] uppercase tracking-[0.2em] text-white/70">
                    Featured Perspective
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[8px] uppercase tracking-[0.2em] text-emerald-200/75">
                  People · Business · Work
                </p>

                <p className="mt-2 max-w-md text-[16px] font-medium leading-[1.4] text-white/82">
                  Looking beyond individual trends to understand the forces
                  reshaping work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPENING PERSPECTIVE */}
      <section className="bg-[#edf0ed]">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[0.42fr_1.18fr_0.4fr]">

            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-800/65">
                The Perspective
              </p>
            </div>

            <div>
             <p className="text-[24px] font-medium leading-[1.42] tracking-[-0.025em] text-black/76 md:text-[30px]">
              {article.openingPerspective}
            </p>
            </div>

            <div className="lg:pt-2">
              <p className="text-[12px] leading-[1.7] text-black/40">
                This perspective looks at capability, growth and workplace
                expectations as connected parts of the same transformation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 01 */}
      {article.sections[0] && (
        <section className="bg-[#dfe4df]">
          <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-14">

            <div className="grid gap-8 lg:grid-cols-[0.3fr_1.1fr_0.6fr]">

              {/* Number */}
              <div>
                <div className="inline-flex flex-col">
                  <span className="text-[8px] uppercase tracking-[0.2em] text-black/25">
                    Section
                  </span>

                  <span className="mt-2 text-[74px] font-light leading-none tracking-[-0.08em] text-black/[0.08] md:text-[92px]">
                    01
                  </span>
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-800/65">
                  Business & People
                </p>

                <h2 className="mt-3 max-w-2xl text-[30px] font-medium leading-[1.08] tracking-[-0.035em] md:text-[40px]">
                  {article.sections[0].heading}
                </h2>

                <p className="mt-5 max-w-2xl text-[15px] leading-[1.82] text-black/58 md:text-[16px]">
                  {article.sections[0].text}
                </p>
              </div>

              {/* Insight Card */}
              <div className="group relative overflow-hidden rounded-[22px] border border-black/[0.06] bg-white/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_40px_rgba(0,0,0,0.07)] lg:self-end">

                <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-emerald-700/[0.05] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <p className="text-[8px] uppercase tracking-[0.2em] text-emerald-800/60">
  In Focus
</p>

<p className="mt-4 text-[16px] font-medium leading-[1.48] text-black/70">
  {article.focusCard?.title}
</p>

...

<p className="text-[8px] uppercase tracking-[0.18em] text-black/35">
  {article.focusCard?.label}
</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      )}

      {/* DARK EDITORIAL BREAK */}
      <section className="relative overflow-hidden bg-[#0c100f] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[10%] top-[-100px] h-[300px] w-[300px] rounded-full bg-emerald-300/[0.045] blur-[110px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-14">

          <div className="grid gap-7 lg:grid-cols-[0.55fr_1.45fr] lg:items-center">

            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-300/65">
                Editorial Note
              </p>

              <p className="mt-3 max-w-xs text-[12px] leading-[1.7] text-white/35">
                The conversation is moving beyond simple headcount.
              </p>
            </div>

            <blockquote className="max-w-4xl text-[28px] font-medium leading-[1.25] tracking-[-0.03em] text-white/85 md:text-[38px]">
              “{article.editorialNote}”
            </blockquote>

          </div>
        </div>
      </section>

      {/* SECTION 02 */}
      {article.sections[1] && (
        <section className="bg-[#edf0ed]">
          <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-14">

            <div className="grid gap-8 lg:grid-cols-[0.32fr_1.68fr]">

              {/* Number */}
              <div>
                <span className="text-[8px] uppercase tracking-[0.2em] text-black/25">
                  Section
                </span>

                <span className="mt-2 block text-[74px] font-light leading-none tracking-[-0.08em] text-black/[0.07] md:text-[92px]">
                  02
                </span>

                <p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-emerald-800/60">
                  Capability
                </p>
              </div>

              <div className="max-w-4xl">
                <h2 className="max-w-3xl text-[30px] font-medium leading-[1.08] tracking-[-0.035em] md:text-[40px]">
                  {article.sections[1].heading}
                </h2>

                <p className="mt-5 max-w-3xl text-[15px] leading-[1.82] text-black/58 md:text-[16px]">
                  {article.sections[1].text}
                </p>

               {/* Capability Cards */}
{article.capabilityCards && (
  <div className="mt-8 grid gap-4 sm:grid-cols-3">
    {article.capabilityCards.map((item) => (
      <article
        key={item.number}
        className="group relative overflow-hidden rounded-[20px] border border-black/[0.06] bg-white/65 p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_35px_rgba(0,0,0,0.06)]"
      >
        <div className="flex items-start justify-between">
          <p className="text-[8px] uppercase tracking-[0.18em] text-emerald-800/60">
            Focus
          </p>

          <span className="text-[30px] font-light leading-none text-black/[0.08] transition-colors duration-300 group-hover:text-emerald-800/18">
            {item.number}
          </span>
        </div>

        <h3 className="mt-6 text-[15px] font-semibold leading-snug text-black/72">
          {item.title}
        </h3>

        <p className="mt-3 text-[12px] leading-[1.65] text-black/42">
          {item.text}
        </p>
      </article>
    ))}
  </div>
)}
              </div>

            </div>
          </div>
        </section>
      )}

      {/* SECTION 03 */}
      {article.sections[2] && (
        <section className="bg-[#e2e7e3]">
          <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-14">

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

              <div>
                <div className="flex items-center gap-3">
                  <span className="text-[9px] uppercase tracking-[0.22em] text-emerald-800/65">
                    Section 03
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-700/35" />

                  <span className="text-[9px] uppercase tracking-[0.2em] text-black/30">
                    Workplace
                  </span>
                </div>

                <h2 className="mt-4 max-w-2xl text-[30px] font-medium leading-[1.08] tracking-[-0.035em] md:text-[40px]">
                  {article.sections[2].heading}
                </h2>

                <p className="mt-5 max-w-2xl text-[15px] leading-[1.82] text-black/58 md:text-[16px]">
                  {article.sections[2].text}
                </p>
              </div>

{/* Workplace Lens */}
{article.workplaceLens && (
  <div className="group relative overflow-hidden rounded-[24px] bg-[#101514] p-7 text-white shadow-[0_18px_45px_rgba(0,0,0,0.12)]">

    <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-300/[0.06] blur-[80px]" />

    <span className="absolute -right-5 -top-10 select-none text-[140px] font-medium leading-none tracking-[-0.08em] text-white/[0.025]">
      03
    </span>

    <div className="relative z-10">

      <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-300/65">
        Workplace Lens
      </p>

      <p className="mt-5 text-[22px] font-medium leading-[1.35] tracking-[-0.02em] text-white/82">
        {article.workplaceLens.title}
      </p>

      <p className="mt-5 text-[13px] leading-[1.7] text-white/40">
        {article.workplaceLens.text}
      </p>

      <div className="mt-6 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/65" />

        <p className="text-[8px] uppercase tracking-[0.18em] text-white/30">
          People & Experience
        </p>
      </div>

    </div>
  </div>
)}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 04 */}
      {article.sections[3] && (
        <section className="bg-[#edf0ed]">
          <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-14">

            <div className="grid gap-8 lg:grid-cols-[0.34fr_1.66fr]">

              <div>
                <span className="text-[8px] uppercase tracking-[0.2em] text-black/25">
                  Section
                </span>

                <span className="mt-2 block text-[74px] font-light leading-none tracking-[-0.08em] text-black/[0.07] md:text-[92px]">
                  04
                </span>
              </div>

              <div className="max-w-3xl">
                <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-800/65">
                  Bringing It Together
                </p>

                <h2 className="mt-3 text-[30px] font-medium leading-[1.08] tracking-[-0.035em] md:text-[40px]">
                  {article.sections[3].heading}
                </h2>

                <p className="mt-5 text-[15px] leading-[1.82] text-black/58 md:text-[16px]">
                  {article.sections[3].text}
                </p>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* KEY TAKEAWAY */}
      <section className="relative overflow-hidden bg-[#0a0d0c] text-white">

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -bottom-32 h-[320px] w-[320px] rounded-full bg-emerald-300/[0.04] blur-[110px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-14">

          <div className="grid gap-7 lg:grid-cols-[0.35fr_1.65fr]">

            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-300/65">
                Key Takeaway
              </p>

              <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/25">
                The Bottom Line
              </p>
            </div>

            <p className="max-w-4xl text-[28px] font-medium leading-[1.3] tracking-[-0.03em] text-white/84 md:text-[38px]">
              {article.takeaway}
            </p>

          </div>
        </div>
      </section>

      {/* RELATED STORIES */}
      <section className="bg-[#edf0ed]">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-14">

          <div className="flex items-end justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-800/65">
                Continue Reading
              </p>

              <h2 className="mt-2 text-[28px] font-medium tracking-[-0.03em] md:text-[34px]">
                Related perspectives.
              </h2>
            </div>

            <p className="hidden text-[9px] uppercase tracking-[0.2em] text-black/28 md:block">
              Minivel Editorial
            </p>
          </div>

          {/* Better Related Cards */}
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {relatedArticles.map((item, index) => (
              <Link
                key={item.id}
                to={`/article/${item.slug}`}
                className="group relative overflow-hidden rounded-[24px] border border-black/[0.06] bg-white/65 p-4 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_50px_rgba(0,0,0,0.07)]"
              >
                <div className="grid gap-5 sm:grid-cols-[185px_1fr]">

                  {/* Image */}
                  <div className="relative min-h-[175px] overflow-hidden rounded-[18px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />

                    <span className="absolute bottom-3 left-3 text-[30px] font-light leading-none text-white/50">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between py-2">

                    <div>
                      <p className="text-[8px] uppercase tracking-[0.2em] text-emerald-800/65">
                        {item.category}
                      </p>

                      <h3 className="mt-3 text-[19px] font-semibold leading-[1.24] tracking-[-0.02em]">
                        {item.title}
                      </h3>

                      <p className="mt-3 line-clamp-2 text-[12px] leading-[1.65] text-black/42">
                        {item.intro}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between">

                      <p className="text-[9px] uppercase tracking-[0.18em] text-black/35">
                        {item.readTime}
                      </p>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:bg-[#111] group-hover:text-white">
                        →
                      </span>

                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Return */}
          <div className="mt-8 flex justify-end">
            <Link
              to="/#featured-story"
              className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-black/50 transition-colors hover:text-black"
            >
              Back to Home

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#111] group-hover:text-white">
                →
              </span>
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}

export default ArticleDetail;