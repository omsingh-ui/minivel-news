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

  {/* Background atmosphere */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -right-40 -top-32 h-[520px] w-[520px] rounded-full bg-emerald-300/[0.06] blur-[150px]" />

    <div className="absolute bottom-[-190px] left-[14%] h-[380px] w-[380px] rounded-full bg-white/[0.018] blur-[120px]" />
  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-6 pt-9 md:px-8 md:pt-11">

    {/* Top Navigation */}
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

    {/* Main Hero */}
    <div className="grid gap-10 pb-12 pt-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14 lg:pb-14">

      {/* Left Content */}
      <div className="flex flex-col justify-between py-2">

        <div>

          {/* Category */}
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />

            <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-emerald-300/75">
              {article.category}
            </p>
          </div>

          {/* Title */}
          <h1 className="mt-6 max-w-3xl text-[42px] font-medium leading-[1] tracking-[-0.045em] md:text-[55px] lg:text-[60px]">
            {article.title}
          </h1>

          {/* Intro */}
          <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-white/52 md:text-[17px]">
            {article.intro}
          </p>

        </div>

        {/* Publisher */}
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
      <div
        className={`group relative overflow-hidden rounded-[26px] ${
          article.imageType === "infographic"
            ? "min-h-[460px] bg-[#f4f6f2] md:min-h-[520px] lg:min-h-[560px]"
            : "min-h-[420px] md:min-h-[520px]"
        }`}
      >
        <img
          src={article.image}
          alt={article.title}
          className={`absolute inset-0 h-full w-full transition-transform duration-[1200ms] ease-out ${
            article.imageType === "infographic"
              ? "object-contain object-center p-8 md:p-10 lg:p-12"
              : "object-cover group-hover:scale-[1.025]"
          }`}
        />

        {/* Normal Article Image */}
        {article.imageType !== "infographic" && (
          <>
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
          </>
        )}

        {/* Minivel Infographic */}
        {article.imageType === "infographic" && (
          <div className="absolute left-5 top-5">
            <span className="rounded-full border border-black/[0.08] bg-white/90 px-3 py-1.5 text-[8px] uppercase tracking-[0.2em] text-black/45 backdrop-blur-md">
              Minivel Editorial
            </span>
          </div>
        )}

      </div>
    </div>
  </div>
</section>


{/* OPENING PERSPECTIVE */}
<section className="bg-[#edf0ed] text-[#111]">
  <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">

    {/* Perspective Header */}
    <div className="flex items-center justify-between border-b border-black/10 pb-4">

      <div className="flex items-center gap-3">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-700" />

        <p className="text-[9px] uppercase tracking-[0.24em] text-emerald-900/60">
          The Perspective
        </p>
      </div>

      <p className="hidden text-[9px] uppercase tracking-[0.2em] text-black/30 md:block">
        Minivel Editorial
      </p>

    </div>

    {/* Main Perspective */}
    <div className="mt-10 max-w-5xl">

      <p className="text-[27px] font-medium leading-[1.38] tracking-[-0.03em] text-black/80 md:text-[34px] lg:text-[38px]">
        {article.openingPerspective}
      </p>

      {/* Why It Matters */}
      <div className="mt-10 grid gap-5 border-t border-black/10 pt-6 md:grid-cols-[160px_1fr]">

        <p className="text-[9px] uppercase tracking-[0.22em] text-black/35">
          Why It Matters
        </p>

        <p className="max-w-2xl text-[14px] leading-[1.8] text-black/50 md:text-[15px]">
          {article.perspectiveInsight ||
            "Understanding the wider business context helps turn individual workforce decisions into more informed long-term choices."}
        </p>

      </div>

    </div>
  </div>
</section>


{/* SECTION 01 */}
{article.sections[0] && (
  <section className="bg-[#dfe4df] text-[#111]">
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">

      {/* Section Meta */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <span className="text-[10px] font-medium text-black/30">
            01
          </span>

          <p className="text-[9px] uppercase tracking-[0.23em] text-emerald-900/60">
            Business & People
          </p>

        </div>

        <p className="hidden text-[9px] uppercase tracking-[0.2em] text-black/25 md:block">
          Growth & Capability
        </p>

      </div>

      {/* Main Section Layout */}
      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">

        {/* Main Content */}
        <div className="min-w-0">

          <h2 className="max-w-3xl text-[34px] font-medium leading-[1.08] tracking-[-0.04em] md:text-[44px] lg:text-[48px]">
            {article.sections[0].heading}
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-[120px_minmax(0,1fr)] md:gap-8">

            <p className="text-[9px] uppercase tracking-[0.2em] text-black/30">
              The Reality
            </p>

            <p className="max-w-2xl text-[15px] leading-[1.85] text-black/58 md:text-[16px]">
              {article.sections[0].text}
            </p>

          </div>

        </div>

        {/* Growth Lens */}
        {article.focusCard && (
          <aside className="min-w-0 lg:self-start">

            <div className="relative overflow-hidden rounded-[24px] bg-[#0d1210] p-7 text-white md:p-8">

              {/* Soft Atmosphere */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-300/[0.07] blur-[65px]" />

              <div className="relative z-10">

                {/* Label */}
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />

                  <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-300/70">
                    {article.focusCard.label}
                  </p>
                </div>

                {/* Insight */}
                <p className="mt-7 text-[21px] font-medium leading-[1.48] tracking-[-0.025em] text-white/85 md:text-[23px]">
                  {article.focusCard.title}
                </p>

                {/* Attribution */}
                <p className="mt-8 text-[8px] uppercase tracking-[0.2em] text-white/30">
                  Minivel Insight
                </p>

              </div>
            </div>

          </aside>
        )}

      </div>
    </div>
  </section>
)}

{/* SECTION 02 */}
{article.sections[1] && (
  <section className="bg-[#edf0ed] text-[#111]">
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">

      {/* Section Meta */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-medium text-black/30">
            02
          </span>

          <p className="text-[9px] uppercase tracking-[0.23em] text-emerald-900/60">
            Capability & Growth
          </p>
        </div>

        <p className="hidden text-[9px] uppercase tracking-[0.2em] text-black/25 md:block">
          Access & Execution
        </p>
      </div>

      {/* Main Introduction */}
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">

        {/* Heading */}
        <div>
          <h2 className="max-w-xl text-[34px] font-medium leading-[1.08] tracking-[-0.04em] md:text-[44px] lg:text-[48px]">
            {article.sections[1].heading}
          </h2>
        </div>

        {/* Main Text */}
        <div className="lg:pt-1">
          <p className="max-w-2xl text-[15px] leading-[1.85] text-black/58 md:text-[16px]">
            {article.sections[1].text}
          </p>
        </div>

      </div>

      {/* Capability Cards */}
{article.capabilityCards && (
  <div className="mt-10 grid gap-4 md:grid-cols-3">

    {article.capabilityCards.map((item) => (
      <article
        key={item.number}
        className="group relative overflow-hidden rounded-[20px] border border-black/[0.07] bg-white/75 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] md:p-6"
      >

        {/* Subtle hover atmosphere */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-700/0 blur-[45px] transition-all duration-500 group-hover:bg-emerald-700/[0.06]" />

        <div className="relative z-10">

          {/* Card Top */}
          <div className="flex items-center justify-between gap-4">

            <p className="text-[8px] uppercase tracking-[0.2em] text-emerald-900/50">
              Core Requirement
            </p>

            <span className="text-[10px] font-medium text-black/20 transition-colors duration-300 group-hover:text-emerald-800/55">
              {item.number}
            </span>

          </div>

          {/* Main Content */}
          <div className="mt-7">

            <h3 className="text-[22px] font-medium leading-[1.15] tracking-[-0.025em] text-black/78">
              {item.title}
            </h3>

            <p className="mt-3 text-[13px] leading-[1.7] text-black/45">
              {item.text}
            </p>

          </div>

          {/* Bottom Detail */}
          <div className="mt-5 flex items-center gap-2">

            <span className="h-1.5 w-1.5 rounded-full bg-emerald-700/35 transition-all duration-300 group-hover:scale-125 group-hover:bg-emerald-700" />

            <p className="text-[8px] uppercase tracking-[0.18em] text-black/25 transition-colors duration-300 group-hover:text-black/40">
              Minivel Insight
            </p>

          </div>

        </div>

      </article>
    ))}

  </div>
)}

      {/* Closing Insight */}
      {article.capabilityCards && (
        <div className="mt-9 grid gap-4 md:grid-cols-[0.3fr_0.7fr]">

          <p className="text-[9px] uppercase tracking-[0.22em] text-black/30">
            The Principle
          </p>

          <p className="max-w-2xl text-[15px] font-medium leading-[1.7] tracking-[-0.01em] text-black/55">
            Growth becomes easier to support when access to talent, hiring
            speed and long-term fit are considered together rather than as
            separate recruitment decisions.
          </p>

        </div>
      )}

    </div>
  </section>
)}

    {/* SECTION 03 */}
{article.sections[2] && (
  <section className="bg-[#e2e7e3] text-[#111]">
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">

      {/* Section Meta */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">
          <span className="text-[10px] font-medium text-black/30">
            03
          </span>

          <p className="text-[9px] uppercase tracking-[0.23em] text-emerald-900/60">
            People & Opportunity
          </p>
        </div>

        <p className="hidden text-[9px] uppercase tracking-[0.2em] text-black/25 md:block">
          Workplace & Growth
        </p>

      </div>

      {/* Main Layout */}
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_390px] lg:items-start lg:gap-16">

        {/* Main Article Content */}
        <div className="min-w-0">

          <h2 className="max-w-3xl text-[34px] font-medium leading-[1.08] tracking-[-0.04em] md:text-[44px] lg:text-[48px]">
            {article.sections[2].heading}
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-[120px_minmax(0,1fr)] md:gap-8">

            <p className="text-[9px] uppercase tracking-[0.2em] text-black/30">
              The Shift
            </p>

            <p className="max-w-2xl text-[15px] leading-[1.85] text-black/58 md:text-[16px]">
              {article.sections[2].text}
            </p>

          </div>

        </div>

        {/* Workplace / Scaling Lens */}
        {article.workplaceLens && (
          <aside className="min-w-0">

            <div className="group relative overflow-hidden rounded-[24px] bg-[#101514] p-7 text-white shadow-[0_16px_45px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(0,0,0,0.14)] md:p-8">

              {/* Soft atmosphere */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-emerald-300/[0.06] blur-[75px]" />

              <div className="relative z-10">

                {/* Label */}
                <div className="flex items-center justify-between gap-4">

                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />

                    <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-300/70">
                      {article.workplaceLens.label || "Workplace Lens"}
                    </p>
                  </div>

                  <span className="text-[10px] font-medium text-white/20">
                    03
                  </span>

                </div>

                {/* Main Insight */}
                <p className="mt-7 text-[22px] font-medium leading-[1.38] tracking-[-0.025em] text-white/85 md:text-[24px]">
                  {article.workplaceLens.title}
                </p>

                {/* Supporting Text */}
                <p className="mt-5 text-[13px] leading-[1.75] text-white/42 md:text-[14px]">
                  {article.workplaceLens.text}
                </p>

                {/* Bottom */}
                <div className="mt-7 flex items-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/55 transition-transform duration-300 group-hover:scale-125" />

                  <p className="text-[8px] uppercase tracking-[0.18em] text-white/30">
                    Minivel Insight
                  </p>

                </div>

              </div>
            </div>

          </aside>
        )}

      </div>
    </div>
  </section>
)}

{/* SECTION 04 */}
{article.sections[3] && (
  <section className="bg-[#edf0ed] text-[#111]">
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">

      {/* Section Meta */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-medium text-black/30">
            04
          </span>

          <p className="text-[9px] uppercase tracking-[0.23em] text-emerald-900/60">
            Bringing It Together
          </p>
        </div>

        <p className="hidden text-[9px] uppercase tracking-[0.2em] text-black/25 md:block">
          Long-Term Value
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">

        {/* Heading */}
        <div>
          <h2 className="max-w-xl text-[34px] font-medium leading-[1.08] tracking-[-0.04em] md:text-[44px] lg:text-[48px]">
            {article.sections[3].heading}
          </h2>
        </div>

        {/* Article Text */}
        <div className="lg:pt-1">
          <p className="max-w-2xl text-[15px] leading-[1.85] text-black/58 md:text-[16px]">
            {article.sections[3].text}
          </p>

          {/* Looking Ahead Card */}
          <div className="group relative mt-8 overflow-hidden rounded-[22px] border border-black/[0.05] bg-white/65 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_45px_rgba(0,0,0,0.07)] md:p-7">

            {/* Soft Hover Atmosphere */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-700/0 blur-[50px] transition-all duration-500 group-hover:bg-emerald-700/[0.06]" />

            <div className="relative z-10">

              {/* Label */}
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-700/60 transition-all duration-300 group-hover:scale-125 group-hover:bg-emerald-700" />

                <p className="text-[8px] uppercase tracking-[0.21em] text-emerald-900/55 transition-colors duration-300 group-hover:text-emerald-900/75">
                  Looking Ahead
                </p>
              </div>

              {/* Statement */}
              <p className="mt-5 max-w-xl text-[18px] font-medium leading-[1.55] tracking-[-0.02em] text-black/65 transition-colors duration-300 group-hover:text-black/75 md:text-[20px]">
                {article.lookingAhead ||
                  "Sustainable workforce decisions connect immediate business needs with the capability the organization will need next."}
              </p>

              {/* Footer */}
              {/* Footer */}
<div className="mt-6">
  <p className="text-[8px] uppercase tracking-[0.18em] text-black/25 transition-colors duration-300 group-hover:text-emerald-900/45">
    Minivel Perspective
  </p>
</div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
)}


{/* KEY TAKEAWAY */}
<section className="relative overflow-hidden bg-[#090d0c] text-white">

  {/* Background Atmosphere */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -bottom-40 -right-32 h-[380px] w-[380px] rounded-full bg-emerald-300/[0.05] blur-[130px]" />

    <div className="absolute -left-32 top-[-100px] h-[280px] w-[280px] rounded-full bg-white/[0.018] blur-[110px]" />
  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">

    {/* Header */}
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-3">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />

        <p className="text-[9px] uppercase tracking-[0.24em] text-emerald-300/65">
          Key Takeaway
        </p>
      </div>

      <p className="hidden text-[9px] uppercase tracking-[0.2em] text-white/25 md:block">
        The Bottom Line
      </p>

    </div>

    {/* Takeaway Content */}
    <div className="mt-8 grid gap-6 lg:grid-cols-[150px_1fr] lg:gap-10">

      <div>
        <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
          In One Thought
        </p>
      </div>

      <div>

        <p className="max-w-4xl text-[23px] font-medium leading-[1.4] tracking-[-0.025em] text-white/85 md:text-[29px] lg:text-[32px]">
          {article.takeaway}
        </p>

        <div className="mt-7 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/60" />

          <p className="text-[8px] uppercase tracking-[0.2em] text-white/30">
            Minivel Editorial
          </p>
        </div>

      </div>

    </div>

  </div>
</section>


{/* RELATED STORIES */}
<section className="bg-[#edf0ed] text-[#111]">
  <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">

    {/* Related Header */}
    <div className="flex items-end justify-between">

      <div>
        <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-900/60">
          Continue Reading
        </p>

        <h2 className="mt-3 text-[30px] font-medium tracking-[-0.035em] md:text-[38px]">
          Related perspectives.
        </h2>
      </div>

      <p className="hidden text-[9px] uppercase tracking-[0.2em] text-black/25 md:block">
        Minivel Editorial
      </p>

    </div>

    {/* Related Cards */}
    <div className="mt-9 grid gap-5 md:grid-cols-2">

      {relatedArticles.map((item) => (
        <Link
          key={item.id}
          to={`/article/${item.slug}`}
          className="group overflow-hidden rounded-[24px] border border-black/[0.06] bg-white/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_50px_rgba(0,0,0,0.07)]"
        >

          <div className="grid gap-5 sm:grid-cols-[175px_1fr]">

            {/* Image */}
            <div className="relative min-h-[165px] overflow-hidden rounded-[18px] bg-[#e3e6e2]">

              <img
                src={item.image}
                alt={item.title}
                className={`absolute inset-0 h-full w-full transition-transform duration-700 ${
                  item.imageType === "infographic"
                    ? "object-contain p-3"
                    : "object-cover group-hover:scale-[1.04]"
                }`}
              />

              {item.imageType !== "infographic" && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              )}

            </div>

            {/* Content */}
            <div className="flex flex-col justify-between py-2">

              <div>
                <p className="text-[8px] uppercase tracking-[0.2em] text-emerald-900/60">
                  {item.category}
                </p>

                <h3 className="mt-3 text-[19px] font-semibold leading-[1.25] tracking-[-0.02em] text-black/80">
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

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-black/60 transition-all duration-300 group-hover:bg-[#111] group-hover:text-white">
                  →
                </span>

              </div>

            </div>

          </div>
        </Link>
      ))}

    </div>

    {/* Return Navigation */}
    <div className="mt-10 flex justify-end">

      <Link
        to="/#featured-story"
        className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-black/50 transition-colors hover:text-black"
      >
        Back to News & Articles

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