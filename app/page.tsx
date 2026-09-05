import ProjectCard from "@/components/ProjectCard";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-slate-100">
      <section className="mx-auto flex max-w-6xl flex-col justify-center gap-8 py-16 md:min-h-[calc(100vh-10rem)]">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
          Junior Python/Django Developer
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Mico Jose
        </h1>

        <p className="max-w-2xl text-lg leading-8 text-slate-300">
          I build practical web applications with Python and Django, while
          developing modern frontend skills with React, Next.js, and Tailwind CSS.
        </p>

        <div className="flex flex-col gap-4 pt-2 sm:flex-row">
          <a
            href="#projects"
            className="rounded-md bg-sky-400 px-5 py-3 text-center font-semibold text-slate-950 transition-colors hover:bg-sky-300"
          >
            View Projects
          </a>

          <a
            href="https://github.com/Mics28"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-slate-600 px-5 py-3 text-center font-semibold text-white transition-colors hover:border-slate-400 hover:bg-slate-800"
          >
            GitHub
          </a>

          <a
            href="/mico-jose-resume.pdf"
            className="rounded-md border border-slate-600 px-5 py-3 text-center font-semibold text-white transition-colors hover:border-slate-400 hover:bg-slate-800"
          >
            Download Résumé
          </a>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-6xl border-t border-slate-800 py-20"
      >
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              About
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Building practical skills through hands-on development.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              I am an IT graduate who is transitioning into software development
              through hands-on programming projects and continuous learning.
            </p>

            <p>
              My main focus is Python and Django, where I build practical web
              applications and strengthen my understanding of authentication,
              databases, testing, and Git/GitHub workflows.
            </p>

            <p>
              I am also developing my frontend skills with React, Next.js, and
              Tailwind CSS to better understand how modern web applications are
              designed and built.
            </p>
          </div>
        </div>
      </section>

            <section
        id="skills"
        className="mx-auto max-w-6xl border-t border-slate-800 py-20"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
          Skills
        </p>

        <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Technologies I use and continue to develop.
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <article className="rounded-lg border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold text-white">Frontend</h3>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-300">
              <li className="rounded-full bg-slate-800 px-3 py-1">HTML5</li>
              <li className="rounded-full bg-slate-800 px-3 py-1">CSS3</li>
              <li className="rounded-full bg-slate-800 px-3 py-1">
                JavaScript
              </li>
              <li className="rounded-full bg-slate-800 px-3 py-1">
                Tailwind CSS
              </li>
            </ul>
          </article>

          <article className="rounded-lg border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold text-white">Backend</h3>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-300">
              <li className="rounded-full bg-slate-800 px-3 py-1">Python</li>
              <li className="rounded-full bg-slate-800 px-3 py-1">Django</li>
            </ul>
          </article>

          <article className="rounded-lg border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold text-white">Database</h3>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-300">
              <li className="rounded-full bg-slate-800 px-3 py-1">SQL</li>
              <li className="rounded-full bg-slate-800 px-3 py-1">
                PostgreSQL
              </li>
              <li className="rounded-full bg-slate-800 px-3 py-1">SQLite</li>
            </ul>
          </article>

          <article className="rounded-lg border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold text-white">
              Tools &amp; Development
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-300">
              <li className="rounded-full bg-slate-800 px-3 py-1">Git</li>
              <li className="rounded-full bg-slate-800 px-3 py-1">GitHub</li>
              <li className="rounded-full bg-slate-800 px-3 py-1">VS Code</li>
              <li className="rounded-full bg-slate-800 px-3 py-1">
                Django testing
              </li>
              <li className="rounded-full bg-slate-800 px-3 py-1">
                Authentication/security fundamentals
              </li>
            </ul>
          </article>
        </div>

        <p className="mt-6 text-sm leading-6 text-slate-400">
          Currently learning React and Next.js as part of my modern frontend
          development practice.
        </p>
      </section>


      <section
        id="projects"
        className="mx-auto max-w-6xl border-t border-slate-800 py-20"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
          Projects
        </p>

        <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Practical Django projects and focused learning work.
        </h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <ProjectCard
            title="Task Management System"
            description="A Django task management application with authentication, CRUD functionality, categories, priorities, due dates, and dashboard features."
            technologies={["Python", "Django", "PostgreSQL", "HTML", "CSS"]}
            githubUrl="https://github.com/Mics28/YOUR-TASK-MANAGEMENT-REPOSITORY"
          />

          <ProjectCard
            title="Store System"
            description="A Django-based application created to explore practical business and store management workflows."
            technologies={["Python", "Django", "SQLite", "HTML", "CSS"]}
            githubUrl="https://github.com/Mics28/YOUR-STORE-SYSTEM-REPOSITORY"
          />

          <ProjectCard
            title="Tango with Django"
            description="A Django learning project developed while following and extending the Tango with Django tutorial."
            technologies={["Python", "Django", "HTML", "CSS"]}
            githubUrl="https://github.com/Mics28/YOUR-TANGO-WITH-DJANGO-REPOSITORY"
          />

          <ProjectCard
            title="Email OTP Authentication"
            description="A Django authentication feature exploring OTP generation, hashed OTP storage, expiration, resend cooldowns, maximum attempts, session flow, and automated testing."
            technologies={["Python", "Django", "Authentication", "Django testing"]}
            githubUrl="https://github.com/Mics28/YOUR-EMAIL-OTP-REPOSITORY"
          />
        </div>
      </section>

    </main>
  );
}