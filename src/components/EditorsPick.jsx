import { editorsPick } from "../data/newsData";

function EditorsPick() {
  return (
    <section className="bg-[#e9ece8] text-[#111111]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-14 md:py-16">

        {/* Section Header */}
        <div className="flex items-end justify-between border-b border-black/15 pb-5">
          <div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-emerald-800/70">
              Editor&apos;s Pick
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-medium tracking-[-0.03em]">
              One story worth your time.
            </h2>
          </div>

          <p className="hidden md:block text-[10px] uppercase tracking-[0.2em] text-black/35">
            07 / Feature
          </p>
        </div>

        {/* Editorial Spread */}
        <article className="relative mt-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-stretch">

          {/* Image Side */}
          <div className="group relative min-h-[420px] md:min-h-[520px] overflow-hidden">
            <img
              src={editorsPick.image}
              alt={editorsPick.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            {/* Top Marker */}
            <div className="absolute top-5 left-5 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />

              <p className="text-[9px] uppercase tracking-[0.22em] text-white/70">
                Editor&apos;s Selection
              </p>
            </div>

            {/* Bottom Image Copy */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-200/80">
                Feature Story
              </p>

              <p className="mt-3 max-w-xl text-xl md:text-2xl font-medium leading-snug">
                A deeper read on business, people and workplace change.
              </p>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="relative flex flex-col justify-between border-y border-black/15 py-7 md:py-8">

            <div>
              <div className="flex items-center justify-between gap-4">
                <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-800/70">
                  {editorsPick.category}
                </p>

                <span className="text-[10px] uppercase tracking-[0.18em] text-black/30">
                  {editorsPick.readTime}
                </span>
              </div>

              <h3 className="mt-5 max-w-xl text-[30px] md:text-[42px] font-medium leading-[1.08] tracking-[-0.035em]">
                {editorsPick.title}
              </h3>

              <p className="mt-5 max-w-xl text-[15px] md:text-[16px] leading-[1.75] text-black/55">
                {editorsPick.description}
              </p>
            </div>

            {/* Editorial Footer */}
            <div className="mt-10 border-t border-black/12 pt-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-black/35">
                    Curated By
                  </p>

                  <p className="mt-2 text-sm font-medium text-black/70">
                    Minivel Editorial
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-black/35">
                    Focus
                  </p>

                  <p className="mt-2 text-sm font-medium text-black/70">
                    Business & Workplace
                  </p>
                </div>
              </div>
            </div>

          </div>
        </article>

      </div>
    </section>
  );
}

export default EditorsPick;