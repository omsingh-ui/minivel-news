import { useEffect, useState } from "react";

function VisualStory() {
  const slides = [
    {
      number: "01",
      eyebrow: "Business Change",
      title: "New priorities change what the business needs to achieve.",
      text:
        "Growth, new markets, technology and changing customer expectations can quickly reshape business priorities.",
    },
    {
      number: "02",
      eyebrow: "Work Changes",
      title: "When priorities shift, the work itself begins to change.",
      text:
        "Roles, responsibilities and workflows evolve as organizations rethink how work gets done and where value is created.",
    },
    {
      number: "03",
      eyebrow: "Capability Changes",
      title: "The next question is what capabilities the organization will need.",
      text:
        "Changing work creates new demand for skills, judgment, adaptability and the ability to operate in different ways.",
    },
    {
      number: "04",
      eyebrow: "Talent Decisions",
      title: "Strong talent decisions begin with understanding the work.",
      text:
        "Hire, develop, redeploy or redesign — the right response depends on the capability the business actually needs next.",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const current = slides[activeSlide];

  const nextSlide = () => {
    setActiveSlide((currentIndex) => (currentIndex + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide(
      (currentIndex) =>
        (currentIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#101514] text-white">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-[-120px] h-[480px] w-[480px] rounded-full bg-emerald-300/[0.045] blur-[150px]" />

        <div className="absolute -left-40 bottom-[-180px] h-[400px] w-[400px] rounded-full bg-white/[0.018] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">
        {/* Header */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />

              <p className="text-[10px] uppercase tracking-[0.24em] text-emerald-300/70 md:text-xs">
                Visual Story
              </p>
            </div>

            <h2 className="mt-3 max-w-2xl text-3xl font-medium leading-[1.08] tracking-[-0.03em] md:text-4xl">
              From business change
              <span className="block text-white/40">
                to talent decisions.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-[13px] leading-[1.7] text-white/40 md:text-right">
            A four-part view of how changing business priorities eventually
            shape workforce and talent decisions.
          </p>
        </div>

        {/* Main visual story */}
        <div className="relative mt-9 overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#090c0b]">
          {/* Animated atmosphere */}
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute h-[360px] w-[360px] rounded-full bg-emerald-300/[0.055] blur-[120px] transition-all duration-1000"
              style={{
                right: activeSlide % 2 === 0 ? "-80px" : "45%",
                top: activeSlide < 2 ? "-100px" : "45%",
              }}
            />

            <div className="absolute inset-[10px] rounded-[20px] border border-white/[0.025]" />
          </div>

          <div className="relative z-10 grid min-h-[480px] lg:grid-cols-[0.72fr_1.28fr]">
            {/* LEFT — story navigation */}
            <div className="flex flex-col justify-between bg-white/[0.025] p-6 md:p-8">
              <div>
                <p className="text-[8px] uppercase tracking-[0.22em] text-white/25">
                  Story Progress
                </p>

                <div className="mt-7 space-y-3">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.number}
                      onClick={() => setActiveSlide(index)}
                      className={`group flex w-full items-center gap-4 rounded-[16px] px-4 py-3 text-left transition-all duration-500 ${
                        activeSlide === index
                          ? "bg-white/[0.07]"
                          : "hover:bg-white/[0.035]"
                      }`}
                    >
                      <span
                        className={`text-[11px] transition-colors duration-300 ${
                          activeSlide === index
                            ? "text-emerald-300"
                            : "text-white/25"
                        }`}
                      >
                        {slide.number}
                      </span>

                      <div className="flex-1">
                        <p
                          className={`text-[10px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                            activeSlide === index
                              ? "text-white/75"
                              : "text-white/32"
                          }`}
                        >
                          {slide.eyebrow}
                        </p>
                      </div>

                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                          activeSlide === index
                            ? "bg-emerald-300"
                            : "bg-white/10"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Controls */}
              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={() => setIsPaused((value) => !value)}
                  className="text-[8px] uppercase tracking-[0.2em] text-white/30 transition-colors hover:text-white/70"
                >
                  {isPaused ? "Resume Story" : "Pause Story"}
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={previousSlide}
                    aria-label="Previous story"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-white/25 hover:text-white"
                  >
                    ←
                  </button>

                  <button
                    onClick={nextSlide}
                    aria-label="Next story"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-emerald-300/40 hover:bg-emerald-300 hover:text-black"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT — active story */}
            <div className="relative flex flex-col justify-between overflow-hidden p-7 md:p-10 lg:p-12">
              

              <div className="relative z-10">
                <div className="flex items-center gap-3">
  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/70" />

  <p className="text-[9px] uppercase tracking-[0.23em] text-emerald-300/65">
    Minivel / Visual Story
  </p>
</div>

                <div
                  key={`content-${activeSlide}`}
                  className="animate-[heroReveal_0.7s_cubic-bezier(0.22,1,0.36,1)_both]"
                >
                  <h3 className="mt-7 max-w-4xl text-[36px] font-medium leading-[1.06] tracking-[-0.04em] md:text-[48px] lg:text-[56px]">
                    {current.title}
                  </h3>

                  <p className="mt-6 max-w-3xl text-[14px] leading-[1.8] text-white/48 md:text-[16px]">
                    {current.text}
                  </p>
                </div>
              </div>

              {/* Bottom visual chain */}
              <div className="relative z-10 mt-12">
                <div className="grid grid-cols-4 gap-2">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.number}
                      onClick={() => setActiveSlide(index)}
                      className={`relative overflow-hidden rounded-[14px] border px-3 py-4 text-left transition-all duration-500 ${
                        activeSlide === index
                          ? "border-emerald-300/30 bg-emerald-300/[0.07]"
                          : "border-white/[0.06] bg-white/[0.025]"
                      }`}
                    >
                      <p
                        className={`text-[9px] ${
                          activeSlide === index
                            ? "text-emerald-300/80"
                            : "text-white/20"
                        }`}
                      >
                        {slide.number}
                      </p>

                      <p
                        className={`mt-2 text-[9px] uppercase tracking-[0.14em] ${
                          activeSlide === index
                            ? "text-white/65"
                            : "text-white/28"
                        }`}
                      >
                        {slide.eyebrow}
                      </p>

                      {activeSlide === index && !isPaused && (
                        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/[0.06]">
                          <div className="h-full bg-emerald-300/70 animate-[storyProgress_4.5s_linear_forwards]" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/65" />

                  <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                    Business → Work → Capability → Talent
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisualStory;