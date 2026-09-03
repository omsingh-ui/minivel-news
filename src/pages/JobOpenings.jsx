import { useEffect, useMemo, useState } from "react";
const JOBS_API_URL = import.meta.env.VITE_JOBS_API_URL;
const APPLICATION_API_URL =
  import.meta.env.VITE_APPLICATION_API_URL;
function JobOpenings() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [jobsError, setJobsError] = useState("");
    const [selectedJob, setSelectedJob] = useState(null);
    const [showApplication, setShowApplication] = useState(false);
   const [applicationForm, setApplicationForm] = useState({
     fullName: "",
     email: "",
     phone: "",
     resume: null,
    });

const [submitting, setSubmitting] = useState(false);
const [applicationError, setApplicationError] = useState("");
const [applicationSuccess, setApplicationSuccess] = useState(false);
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

const handleApplicationSubmit = async (event) => {
  event.preventDefault();

  setApplicationError("");

  if (
    !applicationForm.fullName.trim() ||
    !applicationForm.email.trim() ||
    !applicationForm.phone.trim()
  ) {
    setApplicationError("Please complete all required fields.");
    return;
  }

  if (!applicationForm.resume) {
    setApplicationError("Please attach your resume before submitting.");
    return;
  }

  if (!APPLICATION_API_URL) {
    setApplicationError(
      "The application service is not connected yet."
    );
    return;
  }

  try {
    setSubmitting(true);

    const payload = new FormData();

    payload.append("jobId", selectedJob.id ?? "");
    payload.append("jobSlug", selectedJob.slug ?? "");
    payload.append("jobTitle", selectedJob.title ?? "");

    payload.append("fullName", applicationForm.fullName);
    payload.append("email", applicationForm.email);
    payload.append("phone", applicationForm.phone);
    payload.append("consent", "true");
    payload.append("resume", applicationForm.resume);

    const response = await fetch(APPLICATION_API_URL, {
      method: "POST",
      body: payload,
    });

    if (!response.ok) {
      throw new Error("Application submission failed.");
    }

    setApplicationSuccess(true);

    setApplicationForm({
      fullName: "",
      email: "",
      phone: "",
      resume: null,
    });
    setTimeout(() => {
  document
    .getElementById("application-form")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
}, 0);

  } catch (error) {
    console.error("Application API error:", error);

    setApplicationError(
      "We couldn't submit your application right now. Please try again."
    );
  } finally {
    setSubmitting(false);
  }
};

if (selectedJob) {
  return (
    <main className="min-h-screen bg-[#f2f0eb] text-[#151715]">

      {/* =====================================================
          SELECTED JOB HERO
      ====================================================== */}
      <section className="bg-[#0b0d0b] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">

          <p className="text-[8px] font-semibold uppercase tracking-[0.24em] text-emerald-300/70">
            Minivel Careers
          </p>


          {/* JOB TITLE */}
          <h1 className="mt-4 max-w-[800px] font-serif text-[42px] font-normal leading-[1.02] tracking-[-0.04em] text-[#f4f1e9] md:text-[56px]">
            {selectedJob.title}
          </h1>


    
          {/* BACK TO OPENINGS */}
<button
  type="button"
  onClick={() => {
    setSelectedJob(null);
    setShowApplication(false);
    setApplicationSuccess(false);
    setApplicationError("");

    setApplicationForm({
      fullName: "",
      email: "",
      phone: "",
      resume: null,
    });

    setTimeout(() => {
  document
    .getElementById("current-openings")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
}, 0);
  }}
  className="mt-7 inline-flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-white"
>
  <span>←</span>

  View all opportunities
</button>


          {/* JOB META */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* DEPARTMENT */}
            <div>
              <p className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                Department
              </p>

              <p className="mt-2 text-[12px] text-white/65">
                {selectedJob.department || "—"}
              </p>
            </div>


            {/* LOCATION */}
            <div>
              <p className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                Location
              </p>

              <p className="mt-2 text-[12px] text-white/65">
                {selectedJob.location || "—"}
              </p>
            </div>


            {/* WORK TYPE */}
            <div>
              <p className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                Work Type
              </p>

              <p className="mt-2 text-[12px] text-white/65">
                {selectedJob.workType || "—"}
              </p>
            </div>


            {/* EXPERIENCE */}
            <div>
              <p className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                Experience
              </p>

              <p className="mt-2 text-[12px] text-white/65">
                {selectedJob.experience || "—"}
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          JOB DESCRIPTION
      ====================================================== */}
      <section className="bg-[#f2f0eb]">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">

          <div className="max-w-[760px]">

            {/* ROLE OVERVIEW */}
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-emerald-800/60">
              About the role
            </p>

            <h2 className="mt-3 font-serif text-[32px] font-normal tracking-[-0.03em] text-[#171917] md:text-[38px]">
              Role overview
            </h2>

            <p className="mt-5 text-[14px] leading-[1.85] text-black/55">
              {selectedJob.description ||
                "Detailed information about this opportunity will be available here."}
            </p>


            {/* RESPONSIBILITIES */}
            {selectedJob.responsibilities?.length > 0 && (
              <div className="mt-10">

                <h3 className="font-serif text-[24px] tracking-[-0.025em] text-[#171917]">
                  What you’ll do
                </h3>

                <ul className="mt-5 space-y-3">

                  {selectedJob.responsibilities.map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-[13px] leading-[1.75] text-black/50"
                    >
                      <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-emerald-700/55" />

                      <span>
                        {item}
                      </span>
                    </li>
                  ))}

                </ul>

              </div>
            )}


            {/* REQUIREMENTS */}
            {selectedJob.requirements?.length > 0 && (
              <div className="mt-10">

                <h3 className="font-serif text-[24px] tracking-[-0.025em] text-[#171917]">
                  What we’re looking for
                </h3>

                <ul className="mt-5 space-y-3">

                  {selectedJob.requirements.map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-[13px] leading-[1.75] text-black/50"
                    >
                      <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-emerald-700/55" />

                      <span>
                        {item}
                      </span>
                    </li>
                  ))}

                </ul>

              </div>
            )}


            {/* APPLY BUTTON */}
            <button
  type="button"
  onClick={() => {
    setApplicationError("");
    setShowApplication(true);

    setTimeout(() => {
      document
        .getElementById("application-form")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 0);
  }}
  className="
    mt-12
    inline-flex
    items-center
    gap-4
    rounded-full
    bg-[#111310]
    px-6
    py-3.5
    text-[9px]
    font-semibold
    uppercase
    tracking-[0.2em]
    text-white
    transition-all
    duration-300
    hover:bg-emerald-800
  "
>
  Apply for this role

  <span className="text-[12px]">
    →
  </span>
</button>

          </div>

        </div>
      </section>


      {/* =====================================================
          APPLICATION FORM
      ====================================================== */}
      {showApplication && (
        <section
  id="application-form"
  className="bg-white"
>
          <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">

            <div className="max-w-[760px]">

              {/* FORM HEADER */}
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-emerald-800/60">
                Application
              </p>

              <h2 className="mt-3 font-serif text-[32px] font-normal tracking-[-0.03em] text-[#171917] md:text-[38px]">
                Apply for this role
              </h2>

              <p className="mt-4 text-[13px] leading-[1.75] text-black/45">
                Complete the details below and attach your latest resume.
              </p>


              {/* FORM */}
             {applicationSuccess ? (
  <div className="mt-8 rounded-[18px] bg-[#f2f4ef] px-6 py-8 md:px-8">

    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-emerald-800/60">
      Application received
    </p>

    <h3 className="mt-3 font-serif text-[27px] tracking-[-0.03em] text-[#171917]">
      Thank you for applying.
    </h3>

    <p className="mt-3 max-w-[520px] text-[13px] leading-[1.75] text-black/45">
      Your application has been submitted successfully. If your profile
      matches the opportunity, the Minivel team will get in touch with you.
    </p>

    <button
  type="button"
 onClick={() => {
  setSelectedJob(null);
  setShowApplication(false);
  setApplicationSuccess(false);
  setApplicationError("");

  setApplicationForm({
    fullName: "",
    email: "",
    phone: "",
    resume: null,
  });

  setTimeout(() => {
    document
      .getElementById("current-openings")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, 0);
}}
  className="
    mt-6
    inline-flex
    items-center
    gap-3
    rounded-full
    bg-[#111310]
    px-5
    py-3
    text-[9px]
    font-semibold
    uppercase
    tracking-[0.18em]
    text-white
    transition-all
    duration-300
    hover:bg-emerald-800
  "
>
  View other opportunities
  <span>→</span>
</button>

  </div>
) : (

  <form
    onSubmit={handleApplicationSubmit}
    className="mt-8 grid gap-5 md:grid-cols-2"
  >

                {/* FULL NAME */}
                <div>
                  <label
                    htmlFor="application-name"
                    className="text-[8px] font-semibold uppercase tracking-[0.18em] text-black/35"
                  >
                    Full Name
                  </label>

                  <input
                    id="application-name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={applicationForm.fullName}
                    onChange={(event) =>
                      setApplicationForm({
                        ...applicationForm,
                        fullName: event.target.value,
                      })
                    }
                    className="mt-2 w-full rounded-[14px] border border-black/[0.08] bg-[#f6f6f3] px-4 py-3.5 text-[13px] outline-none transition-colors focus:border-emerald-800/30"
                  />
                </div>


                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="application-email"
                    className="text-[8px] font-semibold uppercase tracking-[0.18em] text-black/35"
                  >
                    Email
                  </label>

                  <input
                    id="application-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={applicationForm.email}
                    onChange={(event) =>
                      setApplicationForm({
                        ...applicationForm,
                        email: event.target.value,
                      })
                    }
                    className="mt-2 w-full rounded-[14px] border border-black/[0.08] bg-[#f6f6f3] px-4 py-3.5 text-[13px] outline-none transition-colors focus:border-emerald-800/30"
                  />
                </div>


                {/* PHONE */}
                <div>
                  <label
                    htmlFor="application-phone"
                    className="text-[8px] font-semibold uppercase tracking-[0.18em] text-black/35"
                  >
                    Phone
                  </label>

                  <input
                    id="application-phone"
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    placeholder="10-digit mobile number"
                    value={applicationForm.phone}
                    onChange={(event) =>
                      setApplicationForm({
                        ...applicationForm,
                        phone: event.target.value,
                      })
                    }
                    className="mt-2 w-full rounded-[14px] border border-black/[0.08] bg-[#f6f6f3] px-4 py-3.5 text-[13px] outline-none transition-colors focus:border-emerald-800/30"
                  />
                </div>


                {/* RESUME */}
                <div>
                  <label
                    htmlFor="application-resume"
                    className="text-[8px] font-semibold uppercase tracking-[0.18em] text-black/35"
                  >
                    Resume
                  </label>

                  <p className="mt-1 text-[9px] text-black/30">
                   PDF, DOC or DOCX · Maximum 5 MB
                  </p>

               <input
  id="application-resume"
  type="file"
  required
  accept=".pdf,.doc,.docx"
  onChange={(event) => {
    const file = event.target.files?.[0] || null;

    setApplicationError("");

    if (file && file.size > 5 * 1024 * 1024) {
      setApplicationError(
        "Resume must be smaller than 5 MB."
      );

      event.target.value = "";

      setApplicationForm({
        ...applicationForm,
        resume: null,
      });

      return;
    }

    setApplicationForm({
      ...applicationForm,
      resume: file,
    });
  }}
  className="mt-2 w-full rounded-[14px] border border-black/[0.08] bg-[#f6f6f3] px-4 py-3 text-[12px] text-black/55"
/>
                </div>

                {/* CONSENT */}
<div className="md:col-span-2">
  <label className="flex cursor-pointer items-start gap-3">

    <input
      type="checkbox"
      required
      className="mt-1 h-3.5 w-3.5 shrink-0 accent-emerald-800"
    />

    <span className="max-w-[620px] text-[10px] leading-[1.65] text-black/40">
      I consent to Minivel using the information provided in this
      application for recruitment and hiring purposes.
    </span>

  </label>
</div>


                {/* SUBMIT */}
                <div className="md:col-span-2">
                  {applicationError && (
  <p className="mb-4 text-[12px] leading-[1.6] text-red-700">
    {applicationError}
  </p>
)}

                  <button
  type="submit"
  disabled={submitting}
  className="
    mt-3
    inline-flex
    items-center
    gap-4
    rounded-full
    bg-[#111310]
    px-6
    py-3.5
    text-[9px]
    font-semibold
    uppercase
    tracking-[0.2em]
    text-white
    transition-all
    duration-300
    hover:bg-emerald-800
    disabled:cursor-not-allowed
    disabled:opacity-50
  "
>
  {submitting ? "Submitting..." : "Submit Application"}

  {!submitting && (
    <span className="text-[12px]">
      →
    </span>
  )}
</button>

                </div>

              </form>
              )}

            </div>

          </div>
        </section>
      )}

    </main>
  );
}

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
                 onClick={() => {
  setSelectedJob(job);
  setShowApplication(false);
  setApplicationSuccess(false);
  setApplicationError("");

  setTimeout(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, 0);
}}
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