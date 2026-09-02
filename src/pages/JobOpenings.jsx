import { useEffect, useMemo, useState } from "react";
const JOBS_API_URL = import.meta.env.VITE_JOBS_API_URL;
function JobOpenings() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [jobsError, setJobsError] = useState("");
    useEffect(() => {
  let cancelled = false;

  async function loadJobs() {
    if (!JOBS_API_URL) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setJobsError("");

      const response = await fetch(JOBS_API_URL);

      if (!response.ok) {
        throw new Error("Unable to load jobs.");
      }

      const result = await response.json();

      const jobList = Array.isArray(result)
        ? result
        : Array.isArray(result?.jobs)
        ? result.jobs
        : Array.isArray(result?.data)
        ? result.data
        : [];

      if (!cancelled) {
        setJobs(jobList);
      }
    } catch (error) {
      console.error("Jobs API error:", error);

      if (!cancelled) {
        setJobs([]);
        setJobsError(
          "Current opportunities could not be loaded."
        );
      }
    } finally {
      if (!cancelled) {
        setLoading(false);
      }
    }
  }

  loadJobs();

  return () => {
    cancelled = true;
  };
}, []);

const groupedJobs = useMemo(() => {
  return jobs.reduce((groups, job) => {
    const department =
      job.department?.trim() || "Other Opportunities";

    if (!groups[department]) {
      groups[department] = [];
    }

    groups[department].push(job);

    return groups;
  }, {});
}, [jobs]);


  return (
    <main className="min-h-screen bg-[#f2f0eb] text-[#151715]">
{/* =====================================================
    HERO — FINAL
====================================================== */}
<section className="relative overflow-hidden bg-[#0b0d0b] text-white">

  {/* SUBTLE BACKGROUND DEPTH */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">

    {/* Very faint editorial typography */}
    <span
      className="
        absolute
        -bottom-[55px]
        -right-[45px]
        select-none
        font-serif
        text-[210px]
        font-normal
        leading-none
        tracking-[-0.07em]
        text-white/[0.014]
        md:text-[300px]
        lg:text-[350px]
      "
    >
      CAREERS
    </span>

    {/* Single architectural curve */}
    <div
      className="
        absolute
        -right-[430px]
        -top-[680px]
        h-[960px]
        w-[960px]
        rounded-full
        border
        border-white/[0.022]
      "
    />

  </div>


  <div
    className="
      relative
      z-10
      mx-auto
      max-w-7xl
      px-6
      pb-16
      pt-10
      md:px-8
      md:pb-20
      md:pt-12
      lg:pb-20
    "
  >

    {/* MAIN HERO */}
    <div
      className="
        grid
        gap-12
        lg:grid-cols-[1.18fr_0.82fr]
        lg:items-end
        lg:gap-20
      "
    >

      {/* ================= LEFT ================= */}
      <div>

        {/* BRAND + SECTION */}
        <div className="flex items-center gap-3">

          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.38em]
              text-[#f1eee7]/82
            "
          >
            Minivel
          </p>

          <span className="text-[10px] text-white/18">
            /
          </span>

          <p
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.24em]
              text-emerald-300/75
            "
          >
            Careers
          </p>

        </div>


        {/* HEADLINE */}
        <h1
          className="
            mt-7
            max-w-[800px]
            font-serif
            text-[52px]
            font-normal
            leading-[0.94]
            tracking-[-0.052em]
            text-[#f4f1e9]
            sm:text-[62px]
            md:text-[75px]
            lg:text-[84px]
          "
        >
          Open opportunities

          <span className="block text-[#a9aaa3]">
            at Minivel.
          </span>
        </h1>


        {/* DESCRIPTION */}
        <p
          className="
            mt-6
            max-w-[530px]
            text-[13px]
            leading-[1.8]
            text-white/38
            md:text-[14px]
          "
        >
          Discover opportunities where your skills can contribute
          to meaningful work, your perspective can make a difference,
          and your career can continue to evolve.
        </p>

      </div>


      {/* ================= RIGHT ================= */}
      <div className="max-w-[430px] lg:pb-1">

        <p
          className="
            text-[8px]
            font-semibold
            uppercase
            tracking-[0.24em]
            text-emerald-300/75
          "
        >
          Your next chapter
        </p>


        <h2
          className="
            mt-4
            max-w-[410px]
            font-serif
            text-[27px]
            font-normal
            leading-[1.27]
            tracking-[-0.03em]
            text-[#ebe7dd]/90
            md:text-[31px]
          "
        >
          Find the place where your work can move you forward.
        </h2>


        <p
          className="
            mt-4
            max-w-[370px]
            text-[12px]
            leading-[1.8]
            text-white/34
            md:text-[13px]
          "
        >
          Bring your ideas, develop your capabilities and contribute
          alongside people focused on building what comes next.
        </p>


        {/* PRINCIPLES */}
        <div
          className="
            mt-7
            grid
            max-w-[390px]
            grid-cols-3
            gap-5
          "
        >

          <div>
            <p className="font-serif text-[18px] text-emerald-300/75">
              Learn
            </p>

            <p className="mt-1.5 text-[9px] leading-[1.55] text-white/26">
              Build capability.
            </p>
          </div>


          <div>
            <p className="font-serif text-[18px] text-emerald-300/75">
              Contribute
            </p>

            <p className="mt-1.5 text-[9px] leading-[1.55] text-white/26">
              Make work matter.
            </p>
          </div>


          <div>
            <p className="font-serif text-[18px] text-emerald-300/75">
              Grow
            </p>

            <p className="mt-1.5 text-[9px] leading-[1.55] text-white/26">
              Keep moving forward.
            </p>
          </div>

        </div>


        {/* EXPLORE */}
        <div className="mt-8 flex items-center gap-4">

          <a
  href="#current-openings"
  aria-label="View current openings"
  className="
    flex
    h-10
    w-10
    shrink-0
    items-center
    justify-center
    rounded-full
    border
    border-emerald-300/25
    text-[12px]
    text-emerald-300/75
    transition-all
    duration-300
    hover:bg-emerald-300
    hover:text-[#0b0d0b]
  "
>
  ↓
</a>
          <div>

            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white/40
              "
            >
              Explore opportunities
            </p>

            <p className="mt-1 text-[9px] text-white/20">
              View current openings below
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

{/* =====================================================
    CURRENT OPENINGS
====================================================== */}
<section
  id="current-openings"
  className="bg-[#f2f0eb]"
>
  <div className="mx-auto max-w-7xl px-6 pb-20 pt-14 md:px-8 md:pb-24 md:pt-16">

    {/* SECTION HEADING */}
    <div className="mx-auto max-w-[680px] text-center">

      <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-emerald-800/60">
        Current Openings
      </p>

      <h2 className="mt-3 font-serif text-[38px] font-normal leading-[1.05] tracking-[-0.035em] text-[#171917] md:text-[48px]">
        Explore current roles
      </h2>

      <p className="mx-auto mt-4 max-w-[520px] text-[13px] leading-[1.75] text-black/42 md:text-[14px]">
        Discover available opportunities and find where your skills,
        experience and ambitions can contribute at Minivel.
      </p>

    </div>


    {/* MAIN LAYOUT */}
    <div className="mt-11 grid gap-6 lg:grid-cols-[1.55fr_0.75fr] lg:items-stretch">

      {/* LEFT — JOBS */}
      <div className="min-h-[520px] rounded-[20px] bg-white px-6 py-7 shadow-[0_12px_45px_rgba(30,25,15,0.035)] md:px-8 md:py-8">

        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/30">
          Available Positions
        </p>
        <div className="mt-7">

  {loading && (
    <p className="text-[13px] text-black/40">
      Loading opportunities...
    </p>
  )}

  {!loading && jobsError && (
    <p className="text-[13px] text-red-900/60">
      {jobsError}
    </p>
  )}

  {!loading && !jobsError && jobs.length === 0 && (
    <div className="rounded-[16px] bg-[#f5f6f3] px-5 py-8">

      <p className="text-[15px] font-medium text-black/65">
        No opportunities are listed right now.
      </p>

      <p className="mt-2 max-w-[460px] text-[12px] leading-[1.7] text-black/38">
        New openings will appear here as soon as they become available.
      </p>

    </div>
  )}

  {!loading && !jobsError && jobs.length > 0 && (
    <div className="space-y-8">

      {Object.entries(groupedJobs).map(
        ([department, departmentJobs]) => (

          <div key={department}>

            <p className="text-[11px] font-semibold text-emerald-800/70">
              {department}
            </p>

            <div className="mt-3 overflow-hidden rounded-[14px] bg-[#f5f6f3]">

              {departmentJobs.map((job, index) => (

                <button
                  key={job.id ?? job.slug ?? `${department}-${index}`}
                  type="button"
                  className={`
                    group
                    grid
                    w-full
                    gap-4
                    px-5
                    py-5
                    text-left
                    transition-colors
                    duration-300
                    hover:bg-[#ecefe9]
                    md:grid-cols-[1fr_120px_38px]
                    md:items-center
                    ${
                      index !== departmentJobs.length - 1
                        ? "border-b border-black/[0.055]"
                        : ""
                    }
                  `}
                >

                  <div>
                    <h3 className="text-[15px] font-medium tracking-[-0.015em] text-black/75 transition-colors group-hover:text-emerald-800">
                      {job.title}
                    </h3>

                    {job.workType && (
                      <p className="mt-1.5 text-[10px] text-black/35">
                        {job.workType}
                      </p>
                    )}
                  </div>

                  <div>
                    <p className="text-[11px] text-black/48">
                      {job.location || "—"}
                    </p>

                    <p className="mt-1 text-[9px] text-black/28">
                      {job.experience || "Experience not specified"}
                    </p>
                  </div>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-[11px] text-black/45 transition-all duration-300 group-hover:bg-[#111310] group-hover:text-white">
                    →
                  </span>

                </button>

              ))}

            </div>

          </div>

        )
      )}

    </div>
  )}

</div>
      </div>


     {/* =====================================================
    RIGHT — CAREER STATEMENT
====================================================== */}
<aside
  className="
    relative
    min-h-[520px]
    overflow-hidden
    rounded-[20px]
    bg-[#101210]
    text-white
  "
>

  {/* CONTENT */}
  <div className="relative z-10 p-8 md:p-9">

    <p
      className="
        text-[8px]
        font-semibold
        uppercase
        tracking-[0.26em]
        text-emerald-300/65
      "
    >
      Minivel / Careers
    </p>


    {/* QUOTE MARK */}
    <span
      className="
        mt-8
        block
        font-serif
        text-[56px]
        leading-[0.7]
        text-white/12
      "
    >
      “
    </span>


    {/* MAIN STATEMENT */}
<blockquote
  className="
    mt-5
    max-w-[340px]
    font-serif
    text-[31px]
    font-normal
    leading-[1.16]
    tracking-[-0.035em]
    text-[#f2f0e9]
    md:text-[35px]
  "
>
  The work you choose today
  can shape the professional
  you become tomorrow.

  <span className="mt-3 block text-white/45">
    Choose a place that gives
    you room to make it count.
  </span>
</blockquote>


    {/* SUPPORTING COPY */}
    <p
      className="
        mt-7
        max-w-[285px]
        text-[11px]
        leading-[1.8]
        text-white/32
      "
    >
      Find an opportunity where your contribution matters
      today and your potential has room to grow tomorrow.
    </p>

  </div>


  {/* =====================================================
      ABSTRACT ARCHITECTURAL ART
  ====================================================== */}
  <div
    className="
      pointer-events-none
      absolute
      bottom-0
      right-0
      h-[185px]
      w-[235px]
      overflow-hidden
    "
  >

    {/* Tall form */}
    <div
      className="
        absolute
        -bottom-12
        right-[18px]
        h-[205px]
        w-[60px]
        rotate-[8deg]
        rounded-t-[38px]
        bg-[#a8aaa5]
      "
    />

    {/* Middle form */}
    <div
      className="
        absolute
        -bottom-9
        right-[78px]
        h-[140px]
        w-[70px]
        -rotate-[9deg]
        rounded-t-[36px]
        bg-[#777b76]
      "
    />

    {/* Light front form */}
    <div
      className="
        absolute
        -bottom-6
        right-[150px]
        h-[91px]
        w-[54px]
        rotate-[10deg]
        rounded-t-[28px]
        bg-[#d7d8d2]
      "
    />

    {/* Sphere */}
    <div
      className="
        absolute
        bottom-[28px]
        right-[108px]
        h-[49px]
        w-[49px]
        rounded-full
        bg-[#989b95]
        shadow-[inset_-10px_-12px_20px_rgba(15,18,15,0.18)]
      "
    />

  </div>


  {/* SMALL SIGNATURE */}
  <p
    className="
      absolute
      bottom-7
      left-8
      text-[7px]
      uppercase
      tracking-[0.24em]
      text-white/16
    "
  >
    Build what comes next
  </p>

</aside>

    </div>

  </div>
</section>

    </main>
  );
}

export default JobOpenings;