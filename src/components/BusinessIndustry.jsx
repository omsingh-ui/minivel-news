import { Link } from "react-router-dom";

function BusinessIndustry() {
  const stories = [
    {
      id: 1,
      category: "AI & Recruitment",
      title: "AI is powerful. Integrated AI is transformational.",
      description:
        "Embedding intelligence across the hiring workflow for smarter decisions and stronger outcomes.",
      slug: "integrated-ai-transformational-recruitment",
      type: "ai",
    },
    {
      id: 2,
      category: "Automotive & Mobility",
      title: "Driving India's automotive growth through the right talent.",
      description:
        "Future mobility needs future-ready teams across technology, manufacturing and innovation.",
      slug: "driving-india-automotive-growth-right-talent",
      type: "automotive",
    },
    {
      id: 3,
      category: "Women & Industry",
      title: "Women power India's electronics revolution.",
      description:
        "Women are driving precision, quality and growth across India's manufacturing ecosystem.",
      slug: "india-electronics-revolution-women-careers",
      type: "women",
    },
    {
      id: 4,
      category: "Talent Strategy",
      title:
        "The best recruiters don't fill roles. They solve business problems.",
      description:
        "From insight to impact — building stronger teams and better organizations.",
      slug: "best-recruiters-solve-business-problems",
      type: "talent",
    },
    {
      id: 5,
      category: "Hiring Strategy",
      title: "The cost of a delayed hire is higher than you think.",
      description:
        "Delayed hiring can affect productivity, delivery and business momentum more than many organizations realize.",
      slug: "cost-of-a-delayed-hire",
      type: "hiring",
    },
    {
      id: 6,
      category: "Business Growth",
      title: "India's MSME growth story needs the right talent partner.",
      description:
        "Supporting the engine of India's economy with the right people, at the right time.",
      slug: "india-msme-growth-talent-partner",
      type: "msme",
    },
  ];

  /* -------------------------------------------------------
     CUSTOM VISUALS
  ------------------------------------------------------- */

  function Illustration({ type }) {
    const stroke = "#6ee7b7";

    /* AI */
    if (type === "ai") {
      return (
        <svg
          viewBox="0 0 300 220"
          className="h-full w-full"
          fill="none"
        >
          {/* connections */}
          <g stroke={stroke} strokeWidth="1" opacity="0.18">
            <path d="M150 110L45 50" />
            <path d="M150 110L255 50" />
            <path d="M150 110L270 110" />
            <path d="M150 110L250 180" />
            <path d="M150 110L50 180" />
            <path d="M150 110L30 110" />
            <path d="M150 110L150 25" />
            <path d="M150 110L150 200" />
          </g>

          {/* outer chip */}
          <rect
            x="94"
            y="54"
            width="112"
            height="112"
            rx="25"
            fill="rgba(110,231,183,0.025)"
            stroke={stroke}
            strokeWidth="2"
          />

          {/* inner chip */}
          <rect
            x="111"
            y="71"
            width="78"
            height="78"
            rx="17"
            fill="rgba(110,231,183,0.05)"
            stroke={stroke}
            opacity="0.85"
          />

          <text
            x="150"
            y="126"
            textAnchor="middle"
            fill={stroke}
            fontSize="43"
            fontWeight="600"
          >
            AI
          </text>

          {[
            [45, 50],
            [255, 50],
            [270, 110],
            [250, 180],
            [50, 180],
            [30, 110],
            [150, 25],
            [150, 200],
          ].map(([x, y], index) => (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="6"
              fill="#07100e"
              stroke={stroke}
              opacity="0.55"
            />
          ))}
        </svg>
      );
    }

    /* AUTOMOTIVE */
    if (type === "automotive") {
      return (
        <svg
          viewBox="0 0 300 220"
          className="h-full w-full"
          fill="none"
        >
          {/* background city */}
          <g stroke={stroke} opacity="0.13">
            <path d="M20 180H280" />
            <path d="M38 180V105H67V180" />
            <path d="M75 180V75H103V180" />
            <path d="M113 180V125H140V180" />
            <path d="M220 180V93H247V180" />
            <path d="M255 180V60H278V180" />
          </g>

          {/* road */}
          <path
            d="M30 181H275"
            stroke={stroke}
            strokeWidth="2"
            opacity="0.35"
          />

          {/* car */}
          <path
            d="M54 148L82 114C89 106 98 102 108 102H195C207 102 216 107 223 115L248 148"
            stroke={stroke}
            strokeWidth="3"
          />

          <path
            d="M45 148H257V169H45V148Z"
            fill="rgba(110,231,183,0.04)"
            stroke={stroke}
            strokeWidth="2"
          />

          <circle
            cx="90"
            cy="169"
            r="17"
            fill="#07100e"
            stroke={stroke}
            strokeWidth="3"
          />

          <circle
            cx="215"
            cy="169"
            r="17"
            fill="#07100e"
            stroke={stroke}
            strokeWidth="3"
          />

          <path
            d="M100 103L126 78H185L208 103"
            stroke={stroke}
            opacity="0.65"
          />

          {/* growth arrow */}
          <path
            d="M215 70L254 35"
            stroke={stroke}
            strokeWidth="2"
            opacity="0.7"
          />

          <path
            d="M238 36H255V53"
            stroke={stroke}
            strokeWidth="2"
            opacity="0.7"
          />
        </svg>
      );
    }

    /* WOMEN & INDUSTRY */
    if (type === "women") {
      return (
        <svg
          viewBox="0 0 300 220"
          className="h-full w-full"
          fill="none"
        >
          {/* industrial background */}
          <g stroke={stroke} opacity="0.12">
            <path d="M20 185H280" />
            <path d="M30 185V135H60V185" />
            <path d="M68 185V108H101V185" />
            <path d="M110 185V145H138V185" />
            <path d="M232 185V105H270V185" />

            <circle cx="45" cy="65" r="18" />
            <circle cx="260" cy="55" r="14" />

            <path d="M45 35V95" />
            <path d="M15 65H75" />

            <path d="M260 30V80" />
            <path d="M235 55H285" />
          </g>

          {/* person */}
          <circle
            cx="170"
            cy="70"
            r="35"
            fill="rgba(110,231,183,0.025)"
            stroke={stroke}
            strokeWidth="2"
          />

          <path
            d="M138 166C142 120 152 100 170 100C189 100 200 120 204 166"
            stroke={stroke}
            strokeWidth="3"
          />

          <path
            d="M150 63C157 44 178 38 193 50C202 57 204 70 201 84"
            stroke={stroke}
            strokeWidth="3"
          />

          <path
            d="M146 82C152 94 160 102 173 105"
            stroke={stroke}
            strokeWidth="2"
            opacity="0.6"
          />

          {/* circuit */}
          <path
            d="M205 118H258V93"
            stroke={stroke}
            opacity="0.35"
          />

          <circle
            cx="258"
            cy="90"
            r="5"
            stroke={stroke}
            opacity="0.6"
          />
        </svg>
      );
    }

    /* TALENT STRATEGY */
    if (type === "talent") {
      return (
        <svg
          viewBox="0 0 300 220"
          className="h-full w-full"
          fill="none"
        >
          {/* network */}
          {[
            [150, 25],
            [250, 65],
            [255, 160],
            [150, 198],
            [48, 160],
            [48, 65],
          ].map(([x, y], index) => (
            <g key={index}>
              <line
                x1="150"
                y1="110"
                x2={x}
                y2={y}
                stroke={stroke}
                opacity="0.18"
              />

              <circle
                cx={x}
                cy={y}
                r="20"
                fill="rgba(110,231,183,0.015)"
                stroke={stroke}
                opacity="0.5"
              />
            </g>
          ))}

          {/* centre */}
          <circle
            cx="150"
            cy="110"
            r="44"
            fill="rgba(110,231,183,0.04)"
            stroke={stroke}
            strokeWidth="2"
          />

          <circle
            cx="150"
            cy="96"
            r="13"
            stroke={stroke}
            strokeWidth="2"
          />

          <path
            d="M125 136C131 118 140 111 150 111C160 111 169 118 175 136"
            stroke={stroke}
            strokeWidth="2"
          />
        </svg>
      );
    }

    /* DELAYED HIRE */
    if (type === "hiring") {
      return (
        <svg
          viewBox="0 0 300 220"
          className="h-full w-full"
          fill="none"
        >
          {/* pipeline */}
          <path
            d="M55 55H245"
            stroke={stroke}
            opacity="0.16"
          />

          <path
            d="M75 55V175"
            stroke={stroke}
            opacity="0.16"
          />

          <path
            d="M150 55V175"
            stroke={stroke}
            opacity="0.16"
          />

          <path
            d="M225 55V175"
            stroke={stroke}
            opacity="0.16"
          />

          {/* candidates */}
          {[
            [75, 80],
            [150, 80],
            [225, 80],
            [75, 150],
            [150, 150],
            [225, 150],
          ].map(([x, y], index) => (
            <g key={index}>
              <rect
                x={x - 22}
                y={y - 22}
                width="44"
                height="44"
                rx="10"
                fill="rgba(110,231,183,0.03)"
                stroke={stroke}
                opacity="0.65"
              />

              <circle
                cx={x}
                cy={y - 5}
                r="6"
                fill={stroke}
                opacity="0.65"
              />

              <path
                d={`M${x - 10} ${y + 10}C${x - 7} ${
                  y + 2
                } ${x + 7} ${y + 2} ${x + 10} ${y + 10}`}
                stroke={stroke}
                opacity="0.65"
              />
            </g>
          ))}

          {/* time indicator */}
          <circle
            cx="150"
            cy="115"
            r="31"
            fill="#07100e"
            stroke={stroke}
            strokeWidth="2"
          />

          <path
            d="M150 98V116L162 124"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    }

    /* MSME / BUSINESS GROWTH */
    return (
      <svg
        viewBox="0 0 300 220"
        className="h-full w-full"
        fill="none"
      >
        {/* bars */}
        <path
          d="M45 180H260"
          stroke={stroke}
          opacity="0.25"
        />

        <rect
          x="70"
          y="145"
          width="28"
          height="35"
          rx="4"
          fill="rgba(110,231,183,0.025)"
          stroke={stroke}
        />

        <rect
          x="112"
          y="120"
          width="28"
          height="60"
          rx="4"
          fill="rgba(110,231,183,0.03)"
          stroke={stroke}
        />

        <rect
          x="154"
          y="91"
          width="28"
          height="89"
          rx="4"
          fill="rgba(110,231,183,0.035)"
          stroke={stroke}
        />

        <rect
          x="196"
          y="57"
          width="28"
          height="123"
          rx="4"
          fill="rgba(110,231,183,0.04)"
          stroke={stroke}
        />

        {/* growth line */}
        <path
          d="M65 150C105 139 135 116 165 92C191 72 213 49 245 27"
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M228 29L246 26L243 44"
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* orbit */}
        <path
          d="M74 70C103 34 160 20 207 36C233 45 251 62 263 83"
          stroke={stroke}
          opacity="0.15"
        />

        <circle
          cx="74"
          cy="70"
          r="5"
          fill={stroke}
          opacity="0.55"
        />

        <circle
          cx="263"
          cy="83"
          r="5"
          fill={stroke}
          opacity="0.55"
        />
      </svg>
    );
  }

  /* -------------------------------------------------------
     CARD
  ------------------------------------------------------- */

  function StoryCard({ story }) {
    const available = Boolean(story.slug);

    const card = (
      <article
        className="
          group
          relative
          h-[360px]
          overflow-hidden
          rounded-[22px]
          border border-white/[0.075]
          bg-[#08100e]
          transition-all
          duration-500
          hover:-translate-y-1
          hover:border-emerald-300/25
          hover:shadow-[0_24px_65px_rgba(0,0,0,0.34)]
        "
      >
        {/* ambient glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-64
            w-64
            rounded-full
            bg-emerald-300/[0.045]
            blur-[90px]
            transition-all
            duration-700
            group-hover:scale-125
            group-hover:bg-emerald-300/[0.07]
          "
        />

        {/* inner layout */}
        <div className="relative z-10 grid h-full grid-cols-[1.04fr_0.96fr]">

          {/* TEXT */}
          <div className="flex h-full flex-col p-6">

            {/* Category */}
            <div className="flex h-[20px] items-center gap-2.5">

              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300/80" />

              <p className="text-[8px] font-semibold uppercase tracking-[0.21em] text-emerald-300/80">
                {story.category}
              </p>

            </div>

            {/* Fixed heading area */}
            <div className="mt-5 h-[105px]">

              <h3
                className="
                  line-clamp-4
                  text-[23px]
                  font-bold
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-white/95
                  transition-colors
                  duration-300
                  group-hover:text-white
                "
              >
                {story.title}
              </h3>

            </div>

            {/* Fixed description area */}
            <div className="mt-3 h-[76px]">

              <p
                className="
                  line-clamp-4
                  text-[11px]
                  leading-[1.65]
                  text-white/38
                "
              >
                {story.description}
              </p>

            </div>

            {/* CTA ALWAYS SAME POSITION */}
            <div className="mt-auto">

              <div className="flex items-center gap-3">

                <span className="text-[9px] font-semibold uppercase tracking-[0.11em] text-emerald-300/80">
                  Read Perspective
                </span>

                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-emerald-300/15
                    text-[12px]
                    text-emerald-300/80
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:border-emerald-300/30
                    group-hover:bg-emerald-300/[0.06]
                    group-hover:text-emerald-200
                  "
                >
                  →
                </span>

              </div>

            </div>

          </div>

          {/* VISUAL — SAME SIZE ON EVERY CARD */}
          <div className="relative h-full overflow-hidden">

            {/* divider */}
            <div className="absolute inset-y-8 left-0 w-px bg-gradient-to-b from-transparent via-white/[0.07] to-transparent" />

            {/* visual glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/[0.025] blur-[55px]" />

            {/* fixed illustration container */}
            <div
              className="
                absolute
                inset-x-3
                top-1/2
                h-[220px]
                -translate-y-1/2
                transition-transform
                duration-700
                ease-out
                group-hover:-translate-y-[51%]
                group-hover:scale-[1.025]
              "
            >
              <Illustration type={story.type} />
            </div>

          </div>

        </div>

        {/* bottom highlight */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-10
            bottom-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-emerald-300/20
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

      </article>
    );

    if (!available) {
      return <div className="h-[360px]">{card}</div>;
    }

    return (
      <Link
        to={`/article/${story.slug}`}
        className="block h-[360px]"
      >
        {card}
      </Link>
    );
  }

  /* -------------------------------------------------------
     SECTION
  ------------------------------------------------------- */

  return (
    <section
      id="business"
      className="relative overflow-hidden bg-[#030706] text-white"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -left-48 top-[10%] h-[480px] w-[480px] rounded-full bg-emerald-300/[0.025] blur-[170px]" />

        <div className="absolute -right-44 bottom-[5%] h-[430px] w-[430px] rounded-full bg-emerald-300/[0.018] blur-[160px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-[1450px] px-6 py-16 md:px-8 md:py-20 lg:px-10">

        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">

          <div>

            <div className="flex items-center gap-3">

              <span className="h-2 w-2 rounded-full bg-emerald-300" />

              <p className="text-[9px] font-medium uppercase tracking-[0.27em] text-emerald-300/80">
                Business & Industry
              </p>

            </div>

            <h2
              className="
                mt-5
                max-w-[640px]
                text-[40px]
                font-medium
                leading-[1.02]
                tracking-[-0.045em]
                md:text-[49px]
                lg:text-[54px]
              "
            >
              Insights that drive{" "}

              <span className="text-emerald-300/85">
                business forward.
              </span>

            </h2>

          </div>

          <p className="max-w-[500px] text-[14px] leading-[1.85] text-white/42 md:text-[15px] lg:justify-self-end">
            Perspectives across business growth, hiring strategy,
            technology and industries shaping India&apos;s evolving workforce.
          </p>

        </div>

        {/* PREMIUM 3 × 2 GRID */}
        <div className="mt-10 grid auto-rows-[360px] gap-4 md:grid-cols-2 xl:grid-cols-3">

          {stories.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
            />
          ))}

        </div>

        {/* BOTTOM VALUE STRIP */}
        <div className="mt-9 grid overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#07100e]/65 sm:grid-cols-2 xl:grid-cols-4">

          {[
            {
              title: "Stronger Teams",
              text: "Build capable and future-ready teams.",
            },
            {
              title: "Sustainable Growth",
              text: "Talent that supports long-term growth.",
            },
            {
              title: "Smarter Decisions",
              text: "Move with confidence and better insight.",
            },
            {
              title: "Real Impact",
              text: "Stronger people. Stronger businesses.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group p-5 transition-colors duration-300 hover:bg-white/[0.025]"
            >

              <div className="flex items-start gap-4">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-300/10 bg-emerald-300/[0.025]">

                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/65 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(110,231,183,0.35)]" />

                </div>

                <div>

                  <h4 className="text-[13px] font-medium text-white/78">
                    {item.title}
                  </h4>

                  <p className="mt-1.5 max-w-[220px] text-[11px] leading-[1.55] text-white/34">
                    {item.text}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default BusinessIndustry;