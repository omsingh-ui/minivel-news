import { Link } from "react-router-dom";

function NewsHero() {
  const categories = [
    "Latest",
    "Business",
    "Careers",
    "Workplace",
    "Articles",
  ];

  const targets = {
    Latest: "#latest",
    Business: "#business",
    Workplace: "#workplace",
    Articles: "#articles",
  };

  return (
    <section className="relative overflow-hidden bg-[#080b0b] text-white">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">

        {/* Emerald glow */}
        <div className="absolute right-[-120px] top-[-80px] h-[500px] w-[500px] rounded-full bg-emerald-400/[0.035] blur-[140px]" />

        {/* Left soft glow */}
        <div className="absolute bottom-[-140px] left-[-120px] h-[380px] w-[380px] rounded-full bg-white/[0.02] blur-[130px]" />

        {/* Decorative curves */}
        <div className="absolute right-[-70px] top-[70px] h-[520px] w-[620px] opacity-[0.07]">
          <div className="absolute inset-0 rotate-[-10deg] rounded-[50%] border border-emerald-200/20" />

          <div className="absolute inset-[42px] rotate-[-7deg] rounded-[50%] border border-emerald-200/15" />

          <div className="absolute inset-[84px] rotate-[-4deg] rounded-[50%] border border-emerald-200/10" />
        </div>

      </div>


      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-7 pt-8 md:px-8 md:pb-8 md:pt-10">

        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">

          <p className="text-[10px] uppercase tracking-[0.26em] text-white/65 md:text-xs">
            Minivel / News & Articles
          </p>

          <div className="flex items-center gap-2.5">

            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

            <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">
              Latest Edition
            </p>

          </div>

        </div>


        {/* Main hero */}
        <div className="grid gap-8 py-12 md:py-14 lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:gap-10">

          {/* Left */}
          <div>

            <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-emerald-300/80 md:text-xs">
              Business · Careers · Technology · Workplace
            </p>

            <h1 className="hero-heading max-w-[780px] text-[46px] font-medium leading-[1.02] tracking-[-0.035em] md:text-[62px] lg:text-[70px]">

              Timely stories.

              <span className="mt-1 block text-white/95">
                Relevant insights.
              </span>

              <span className="mt-1 block text-white/78">
                Real impact.
              </span>

            </h1>


            <p className="mt-7 max-w-[620px] text-[15px] leading-[1.75] text-white/52 md:text-[17px]">
              Explore the ideas, news and perspectives shaping what matters
              across business, careers, technology and the workplace.
            </p>

          </div>


          {/* Right */}
          <div className="flex items-end lg:justify-end">

            <div className="w-full max-w-[420px]">

              <p className="text-[10px] uppercase tracking-[0.22em] text-emerald-300/55">
                Explore the latest
              </p>

              <p className="mt-3 text-[16px] leading-[1.7] text-white/48">
                Stay close to the developments, perspectives and ideas shaping
                people, organizations and the way work continues to evolve.
              </p>


              {/* Explore Latest */}
              <a
                href="#latest"
                className="group mt-6 inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-white/80"
              >

                Explore Latest

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-400/45 text-emerald-300 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-emerald-400 group-hover:text-black">
                  →
                </span>

              </a>

            </div>

          </div>

        </div>


        {/* Bottom Navigation */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-5">

          {categories.map((item, index) => {

            const className = `relative pb-2 text-[10px] uppercase tracking-[0.18em] transition-colors duration-300 md:text-xs ${
              index === 0
                ? "text-white"
                : "text-white/45 hover:text-white"
            }`;


            /* Careers → separate Careers page */
            if (item === "Careers") {
              return (
                <Link
                  key={item}
                  to="/careers"
                  className={className}
                >
                  {item}
                </Link>
              );
            }


            /* Other items → homepage sections */
            return (
              <a
                key={item}
                href={targets[item]}
                className={className}
              >

                {item}

                {/* Latest active indicator */}
                {index === 0 && (
                  <span className="absolute bottom-0 left-0 h-px w-full bg-emerald-300/75" />
                )}

              </a>
            );

          })}

        </div>

      </div>
    </section>
  );
}

export default NewsHero;