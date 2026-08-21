import { editorsPick } from "../data/newsData";

function EditorsPick() {
  return (
    <section className="bg-white text-[#111]">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">

        <div className="border-b border-black pb-5">
          <p className="text-xs uppercase tracking-[0.25em] text-black/40">
            Editor&apos;s Pick
          </p>

          <h2 className="mt-2 text-4xl md:text-5xl font-semibold">
            One story worth your time.
          </h2>
        </div>

        <article className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 mt-10 items-center">

          <div className="group relative h-[400px] md:h-[540px] overflow-hidden bg-[#d5d2cb]">

            <img
              src={editorsPick.image}
              alt={editorsPick.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                Editor&apos;s Selection
              </p>

              <p className="mt-2 text-xl md:text-2xl font-medium max-w-lg">
                A deeper read on business, people and workplace change.
              </p>
            </div>

          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-black/40">
              {editorsPick.category}
            </p>

            <h3 className="mt-5 text-3xl md:text-5xl font-semibold leading-[1.08] tracking-tight">
              {editorsPick.title}
            </h3>

            <p className="mt-6 text-lg text-black/55 leading-relaxed">
              {editorsPick.description}
            </p>

            <p className="mt-6 text-sm text-black/40">
              {editorsPick.readTime}
            </p>

            <button className="group mt-8 inline-flex items-center gap-3 border-b border-black pb-2 text-sm uppercase tracking-[0.16em]">
              Read Article

              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>
          </div>

        </article>

      </div>
    </section>
  );
}

export default EditorsPick;