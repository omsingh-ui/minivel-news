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

  {/* Background Atmosphere */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -right-32 -top-28 h-[460px] w-[460px] rounded-full bg-emerald-300/[0.05] blur-[145px]" />

    <div className="absolute -bottom-40 left-[18%] h-[320px] w-[320px] rounded-full bg-emerald-300/[0.025] blur-[120px]" />
  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-8 md:px-8 md:pb-12 md:pt-9">

    {/* TOP NAVIGATION */}
    <div className="flex items-center justify-between gap-5">

      <Link
        to="/#business-industry"
        className="group inline-flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.21em] text-white/45 transition-colors hover:text-white"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-1">
          ←
        </span>

        Back to Articles
      </Link>

      <div className="hidden items-center gap-2.5 md:flex">

        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/60" />

        <p className="text-[8px] uppercase tracking-[0.19em] text-white/30">
          Minivel · {article.readTime}
        </p>

      </div>

    </div>

    {/* MAIN HERO */}
    <div className="mt-7 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">

      {/* LEFT CONTENT */}
      <div className="min-w-0">

        {/* Category */}
        <div className="flex items-center gap-3">

          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />

          <p className="text-[9px] font-semibold uppercase tracking-[0.23em] text-emerald-300/80">
            {article.category}
          </p>

        </div>

        {/* Title */}
<h1
  className={`mt-5 font-semibold tracking-[-0.045em] text-white ${
    article.heroTitleSize === "large"
      ? "max-w-[720px] text-[46px] leading-[1.01] md:text-[56px] lg:text-[64px]"
      : article.heroTitleSize === "article3"
? "max-w-[760px] text-[38px] leading-[1.01] md:text-[46px] lg:text-[50px]"
      : "max-w-[650px] text-[42px] leading-[1.01] md:text-[50px] lg:text-[56px]"
  }`}
>
  {article.title}
</h1>

        {/* Intro */}
        <p
  className={`mt-5 leading-[1.7] text-white/52 ${
    article.heroTitleSize === "large"
      ? "max-w-[640px] text-[16px] md:text-[17px]"
      : "max-w-[590px] text-[15px] md:text-[16px]"
  }`}
>
  {article.intro}
</p>
        {/* ARTICLE META */}
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">

          {/* Publisher */}
          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-300/[0.045]">
              <span className="text-[12px] font-semibold text-emerald-300/85">
                M
              </span>
            </div>

            <div>
              <p className="text-[7px] uppercase tracking-[0.19em] text-white/25">
                Published By
              </p>

              <p className="mt-1 text-[11px] font-medium text-white/65">
                Minivel
              </p>
            </div>

          </div>

          {/* Read Time */}
          <div className="flex items-center gap-2.5">

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-[11px] text-emerald-300/70">
              ◷
            </span>

            <div>
              <p className="text-[7px] uppercase tracking-[0.18em] text-white/22">
                Reading Time
              </p>

              <p className="mt-1 text-[11px] text-white/55">
                {article.readTime}
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="flex w-full items-center justify-center">

        <div
          className={`relative w-full overflow-hidden rounded-[26px] ${
            article.heroImageSize === "compact"
              ? "flex items-center justify-center"
              : ""
          }`}
        >

          <img
            src={article.image}
            alt={article.title}
         className={
  article.heroImageSize === "compact"
    ? "block h-auto w-[82%] max-w-[430px] rounded-[26px]"

    : article.heroImageSize === "article3"
    ? "block h-auto w-[86%] max-w-[540px] rounded-[26px]"

    : article.heroImageSize === "article4"
    ? "block h-[470px] w-full max-w-[620px] rounded-[22px] object-contain object-center"

 : article.heroImageSize === "article5"
? "block h-auto w-full rounded-[26px]"

    : "block h-auto w-full"
}
          />

        </div>

      </div>

    </div>

  </div>

</section>

{/* OPENING PERSPECTIVE */}
<section className="bg-[#edf0ed] text-[#111]">
  <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">

    {/* Section Header */}
    <div className="flex items-center gap-3">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-700" />

      <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-emerald-900/60">
        Opening Perspective
      </p>
    </div>

    {/* Main Content */}
    <div className="mt-8 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">

      {/* LEFT */}
      <div>
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-black/35">
          The Bigger Picture
        </p>

        <h2 className="mt-4 max-w-[390px] text-[30px] font-semibold leading-[1.08] tracking-[-0.04em] text-black/85 md:text-[36px]">
          Understanding what is really changing.
        </h2>
      </div>

      {/* RIGHT */}
      <div>
        <p className="max-w-[720px] text-[18px] font-medium leading-[1.7] tracking-[-0.015em] text-black/70 md:text-[20px]">
          {article.openingPerspective}
        </p>

        {/* Insight */}
         <div
  className="
    group relative mt-7 overflow-hidden
    rounded-[18px]
    bg-[#0b1512]
    px-6 py-6
    transition-all duration-300
    hover:-translate-y-1
    hover:bg-[#101c18]
    hover:shadow-[0_18px_45px_rgba(0,0,0,0.16)]
    md:px-7 md:py-7
  "
>

          <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-emerald-300/[0.08] blur-[55px]" />

          <div className="relative z-10">
            <div className="flex items-center gap-3">

              <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-emerald-300/70">
                Why It Matters
              </p>
            </div>

            <p className="mt-4 max-w-[650px] text-[15px] leading-[1.75] text-white/65 md:text-[16px]">
              {article.perspectiveInsight ||
                "Understanding the wider business context helps turn individual workforce decisions into more informed long-term choices."}
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>


{/* SECTION 01 */}
{article.sections[0] && (
  <section className="bg-[#dfe4df] text-[#111]">
    <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">

      {/* Section Meta */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/[0.045] text-[9px] font-medium text-black/45">
            01
          </span>

          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-emerald-900/60">
            Business & People
          </p>
        </div>

        <p className="hidden text-[8px] uppercase tracking-[0.2em] text-black/25 md:block">
          Growth & Capability
        </p>
      </div>

      {/* Main Layout */}
      <div className="mt-8 grid gap-9 lg:grid-cols-[minmax(0,1fr)_330px] lg:gap-12">

        {/* Main Content */}
        <div className="min-w-0">
          <h2 className="max-w-3xl text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] text-black/88 md:text-[40px] lg:text-[44px]">
            {article.sections[0].heading}
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-[110px_minmax(0,1fr)] md:gap-7">
            <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/30">
              The Reality
            </p>

            <p className="max-w-2xl text-[15px] leading-[1.8] text-black/58 md:text-[16px]">
              {article.sections[0].text}
            </p>
          </div>
        </div>

        {/* Focus Card */}
        {article.focusCard && (
          <aside className="min-w-0 lg:self-start">
            <div
              className="
                group relative overflow-hidden
                rounded-[22px]
                bg-[#0d1210]
                p-6 text-white
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-[#111916]
                hover:shadow-[0_18px_45px_rgba(0,0,0,0.16)]
                md:p-7
              "
            >
              {/* Soft atmosphere */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-300/[0.06] blur-[65px] transition-all duration-500 group-hover:bg-emerald-300/[0.09]" />

              <div className="relative z-10">
                {/* Label */}
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300 transition-transform duration-300 group-hover:scale-125" />

                  <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-emerald-300/70">
                    {article.focusCard.label}
                  </p>
                </div>

                {/* Insight */}
                <p className="mt-6 text-[20px] font-medium leading-[1.45] tracking-[-0.025em] text-white/88 md:text-[22px]">
                  {article.focusCard.title}
                </p>

                {/* Footer */}
                <p className="mt-7 text-[8px] uppercase tracking-[0.18em] text-white/28">
                  Key Insight
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
    <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">

      {/* Section Meta */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">

          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/[0.045] text-[9px] font-medium text-black/45">
            02
          </span>

          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-emerald-900/60">
            Capability & Growth
          </p>

        </div>

        <p className="hidden text-[8px] uppercase tracking-[0.2em] text-black/25 md:block">
          Access & Execution
        </p>
      </div>

      {/* Main Introduction */}
      <div className="mt-8 grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">

        {/* Heading */}
        <div>
          <h2 className="max-w-xl text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] text-black/88 md:text-[40px] lg:text-[44px]">
            {article.sections[1].heading}
          </h2>
        </div>

        {/* Main Text */}
        <div className="lg:pt-1">
          <p className="max-w-2xl text-[15px] leading-[1.8] text-black/58 md:text-[16px]">
            {article.sections[1].text}
          </p>
        </div>

      </div>

      {/* Capability Cards */}
      {article.capabilityCards && (
        <div className="mt-8 grid items-stretch gap-4 md:grid-cols-3">

          {article.capabilityCards.map((item) => (
            <article
              key={item.number}
              className="
                group relative flex h-full min-h-[220px] flex-col
                overflow-hidden rounded-[20px]
                border border-black/[0.06]
                bg-white/75
                p-5
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-white
                hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)]
                md:p-6
              "
            >
              {/* Soft Hover Atmosphere */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-700/0 blur-[50px] transition-all duration-500 group-hover:bg-emerald-700/[0.06]" />

              <div className="relative z-10 flex h-full flex-col">

                {/* Card Header */}
                <div className="flex items-center justify-between gap-4">

                  <p className="text-[8px] font-semibold uppercase tracking-[0.19em] text-emerald-900/50">
                    Core Requirement
                  </p>

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/[0.035] text-[8px] font-medium text-black/25 transition-all duration-300 group-hover:bg-emerald-800/[0.07] group-hover:text-emerald-900/55">
                    {item.number}
                  </span>

                </div>

                {/* Card Content */}
                <div className="mt-6">

                  <h3 className="text-[21px] font-semibold leading-[1.15] tracking-[-0.025em] text-black/78">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-[1.7] text-black/45">
                    {item.text}
                  </p>

                </div>

                {/* Bottom Detail */}
                <div className="mt-auto flex items-center gap-2 pt-5">

                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-700/35 transition-all duration-300 group-hover:scale-125 group-hover:bg-emerald-700" />

                  <p className="text-[8px] uppercase tracking-[0.18em] text-black/25 transition-colors duration-300 group-hover:text-black/40">
                    Key Capability
                  </p>

                </div>

              </div>
            </article>
          ))}

        </div>
      )}

      {/* Closing Insight */}
      {article.capabilityCards && (
        <div className="mt-8 rounded-[18px] bg-black/[0.035] px-6 py-5 md:px-7">

          <div className="grid gap-3 md:grid-cols-[130px_1fr] md:gap-8">

            <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-emerald-900/50">
              The Principle
            </p>

            <p className="max-w-3xl text-[14px] font-medium leading-[1.7] tracking-[-0.01em] text-black/55 md:text-[15px]">
              Growth becomes easier to support when access to talent, hiring
              speed and long-term fit are considered together rather than as
              separate recruitment decisions.
            </p>

          </div>

        </div>
      )}

    </div>
  </section>
)}

{/* SECTION 03 */}
{article.sections[2] && (
  <section className="bg-[#e2e7e3] text-[#111]">
    <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">

      {/* Section Meta */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">

          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/[0.045] text-[9px] font-medium text-black/45">
            03
          </span>

          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-emerald-900/60">
            People & Opportunity
          </p>

        </div>

        <p className="hidden text-[8px] uppercase tracking-[0.2em] text-black/25 md:block">
          Workplace & Growth
        </p>
      </div>

      {/* Main Layout */}
      <div className="mt-8 grid gap-9 lg:grid-cols-[minmax(0,1fr)_350px] lg:items-start lg:gap-12">

        {/* Main Article Content */}
        <div className="min-w-0">

          <h2 className="max-w-3xl text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] text-black/88 md:text-[40px] lg:text-[44px]">
            {article.sections[2].heading}
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-[110px_minmax(0,1fr)] md:gap-7">

            <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/30">
              The Shift
            </p>

            <p className="max-w-2xl text-[15px] leading-[1.8] text-black/58 md:text-[16px]">
              {article.sections[2].text}
            </p>

          </div>

        </div>

        {/* Workplace / Scaling Lens */}
        {article.workplaceLens && (
          <aside className="min-w-0">

            <div
              className="
                group relative overflow-hidden
                rounded-[22px]
                bg-[#101514]
                p-6 text-white
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-[#131b18]
                hover:shadow-[0_18px_48px_rgba(0,0,0,0.15)]
                md:p-7
              "
            >
              {/* Soft atmosphere */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-emerald-300/[0.06] blur-[75px] transition-all duration-500 group-hover:bg-emerald-300/[0.09]" />

              <div className="relative z-10">

                {/* Label */}
                <div className="flex items-center gap-3">

                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300 transition-transform duration-300 group-hover:scale-125" />

                  <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-emerald-300/70">
                    {article.workplaceLens.label || "Workplace Lens"}
                  </p>

                </div>

                {/* Main Insight */}
                <p className="mt-6 text-[21px] font-medium leading-[1.4] tracking-[-0.025em] text-white/88 md:text-[23px]">
                  {article.workplaceLens.title}
                </p>

                {/* Supporting Text */}
                <p className="mt-4 text-[13px] leading-[1.7] text-white/42 md:text-[14px]">
                  {article.workplaceLens.text}
                </p>

                {/* Bottom Label */}
                <div className="mt-6 flex items-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/45 transition-all duration-300 group-hover:scale-125 group-hover:bg-emerald-300" />

                  <p className="text-[8px] uppercase tracking-[0.18em] text-white/28">
                    Key Observation
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
    <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">

      {/* Section Meta */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/[0.045] text-[9px] font-medium text-black/45">
            04
          </span>

          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-emerald-900/60">
            Bringing It Together
          </p>

        </div>

        <p className="hidden text-[8px] uppercase tracking-[0.2em] text-black/25 md:block">
          Long-Term Value
        </p>

      </div>

      {/* Main Content */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">

        {/* Heading */}
        <div>

          <h2 className="max-w-xl text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] text-black/88 md:text-[40px] lg:text-[44px]">
            {article.sections[3].heading}
          </h2>

        </div>

        {/* Article Text */}
        <div className="lg:pt-1">

          <p className="max-w-2xl text-[15px] leading-[1.8] text-black/58 md:text-[16px]">
            {article.sections[3].text}
          </p>

          {/* Looking Ahead Card */}
          <div
            className="
              group relative mt-7 overflow-hidden
              rounded-[20px]
              border border-black/[0.05]
              bg-white/70
              p-6
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-white
              hover:shadow-[0_16px_42px_rgba(0,0,0,0.07)]
              md:p-7
            "
          >

            {/* Soft Hover Atmosphere */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-700/0 blur-[50px] transition-all duration-500 group-hover:bg-emerald-700/[0.06]" />

            <div className="relative z-10">

              {/* Label */}
              <div className="flex items-center gap-3">

                <span className="h-1.5 w-1.5 rounded-full bg-emerald-700/55 transition-all duration-300 group-hover:scale-125 group-hover:bg-emerald-700" />

                <p className="text-[8px] font-semibold uppercase tracking-[0.21em] text-emerald-900/55 transition-colors duration-300 group-hover:text-emerald-900/75">
                  Looking Ahead
                </p>

              </div>

              {/* Statement */}
              <p className="mt-5 max-w-xl text-[18px] font-medium leading-[1.5] tracking-[-0.02em] text-black/65 transition-colors duration-300 group-hover:text-black/75 md:text-[20px]">
                {article.lookingAhead ||
                  "Sustainable workforce decisions connect immediate business needs with the capability the organization will need next."}
              </p>

              {/* Bottom Label */}
              <div className="mt-5">

                <p className="text-[8px] uppercase tracking-[0.18em] text-black/25 transition-colors duration-300 group-hover:text-emerald-900/45">
                  Forward View
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
    <div className="absolute -bottom-36 -right-28 h-[340px] w-[340px] rounded-full bg-emerald-300/[0.05] blur-[120px]" />
  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">

    {/* Header */}
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-3">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />

        <p className="text-[9px] font-semibold uppercase tracking-[0.23em] text-emerald-300/70">
          Key Takeaway
        </p>
      </div>

      <p className="hidden text-[8px] uppercase tracking-[0.2em] text-white/25 md:block">
        The Bottom Line
      </p>

    </div>

    {/* Main Takeaway */}
    <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">

      <p className="text-[8px] font-medium uppercase tracking-[0.2em] text-white/25">
        In One Thought
      </p>

      <div>

        <p className="max-w-4xl text-[22px] font-medium leading-[1.42] tracking-[-0.025em] text-white/88 md:text-[27px] lg:text-[30px]">
          {article.takeaway}
        </p>

        {/* Closing Marker */}
        <div className="mt-6 flex items-center gap-2">

          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/60" />

          <p className="text-[8px] uppercase tracking-[0.19em] text-white/30">
            Final Thought
          </p>

        </div>

      </div>

    </div>

  </div>
</section>


{/* RELATED ARTICLES */}
<section className="bg-[#edf0ed] text-[#111]">
  <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">

    {/* Header */}
    <div className="flex items-end justify-between gap-6">

      <div>
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-700" />

          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-emerald-900/60">
            Continue Reading
          </p>
        </div>

        <h2 className="mt-3 text-[30px] font-semibold tracking-[-0.035em] text-black/88 md:text-[36px]">
          Related Articles
        </h2>
      </div>

      <p className="hidden text-[8px] uppercase tracking-[0.2em] text-black/25 md:block">
        More from Business & Industry
      </p>

    </div>

    {/* Related Cards */}
    <div className="mt-8 grid gap-4 md:grid-cols-2">

      {relatedArticles.map((item) => (
        <Link
          key={item.id}
          to={`/article/${item.slug}`}
          className="
            group
            overflow-hidden
            rounded-[22px]
            border border-black/[0.06]
            bg-white/75
            p-4
            transition-all duration-300
            hover:-translate-y-1
            hover:bg-white
            hover:shadow-[0_18px_48px_rgba(0,0,0,0.07)]
          "
        >
          <div className="grid gap-5 sm:grid-cols-[170px_1fr]">

            {/* Image */}
            <div className="overflow-hidden rounded-[16px] bg-[#e4e8e4]">
              <img
                src={item.image}
                alt={item.title}
                className="block h-full min-h-[160px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between py-1">

              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-emerald-900/60">
                  {item.category}
                </p>

                <h3 className="mt-3 text-[18px] font-semibold leading-[1.25] tracking-[-0.02em] text-black/82">
                  {item.title}
                </h3>

                <p className="mt-3 line-clamp-2 text-[12px] leading-[1.65] text-black/42">
                  {item.intro}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between">

                <p className="text-[8px] uppercase tracking-[0.18em] text-black/35">
                  {item.readTime}
                </p>

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-[12px] text-black/55 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#111] group-hover:text-white">
                  →
                </span>

              </div>

            </div>

          </div>
        </Link>
      ))}

    </div>

    {/* Return Navigation */}
    <div className="mt-8 flex justify-end">

      <Link
        to="/#business-industry"
        className="group inline-flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.2em] text-black/45 transition-colors hover:text-black"
      >
        Back to Articles

        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/12 text-[12px] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#111] group-hover:text-white">
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