import { Link } from "react-router-dom";
function FeaturedStory() {
  return (
    <section
  id="featured-story"
  className="bg-[#e8ebe7] text-[#111111]"
>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-14">

        {/* Section header */}
        <div className="flex items-end justify-between border-b border-black/15 pb-4">
          <div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-emerald-800/70">
              Featured Story
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-medium tracking-[-0.025em]">
              One story worth your attention.
            </h2>
          </div>

          <p className="hidden md:block text-[10px] uppercase tracking-[0.2em] text-black/35">
            01 / Feature
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-9 lg:gap-14 mt-8 items-center">

          {/* Image */}
          <div className="group relative h-[340px] md:h-[460px] overflow-hidden">
            <img
              src="/images/featured-story.jpg"
              alt="Business professionals collaborating in a modern workplace"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

            <div className="absolute top-5 left-5">
              <span className="bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-black/70">
                Featured
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 text-white">
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/65">
                Business · Workplace
              </p>

              <p className="mt-2 max-w-lg text-xl md:text-2xl font-medium leading-snug">
                People, business and the workplace in transition.
              </p>
            </div>
          </div>

          {/* Editorial content */}
          <div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.22em] text-emerald-800/70">
              Business & Workplace
            </p>

            <h3 className="mt-4 text-3xl md:text-4xl lg:text-[46px] font-medium leading-[1.08] tracking-[-0.03em]">
              The stories shaping business, people and the modern workplace.
            </h3>

            <p className="mt-5 max-w-xl text-[16px] md:text-[17px] leading-[1.75] text-black/58">
              Explore important developments across business, careers,
              technology and the changing world of work.
            </p>

            <div className="mt-6 flex items-center gap-4 text-sm text-black/40">
              <span>6 min read</span>
              <span>•</span>
              <span>Featured</span>
            </div>

            <Link
  to="/article/business-people-workplace-transition"
  className="group mt-7 inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-black/75"
>
  Read Story

  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition-all duration-300 group-hover:bg-[#111] group-hover:text-white group-hover:translate-x-1">
    →
  </span>
</Link>
          </div>

        </div>

      </div>
    </section>
  );
}

export default FeaturedStory;