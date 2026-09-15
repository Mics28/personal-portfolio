import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
export default function Home() {
  return (
  <>
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
          <div className="flex flex-col items-center text-center">
            <div className="relative h-48 w-48 overflow-hidden rounded-lg border border-slate-800 sm:h-56 sm:w-56">
              <Image
                src="/personal-portfolio/images/mico-graduation1.jpg"
                alt="Mico Jose at graduation"
                fill
                sizes="(min-width: 640px) 224px, 192px"
                className="object-cover"
              />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
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
              <li className="rounded-full bg-slate-800 px-3 py-1">React</li>
              <li className="rounded-full bg-slate-800 px-3 py-1">Next.js</li>
            </ul>
          </article>

          <article className="rounded-lg border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold text-white">Backend</h3>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-300">
              <li className="rounded-full bg-slate-800 px-3 py-1">Python</li>
              <li className="rounded-full bg-slate-800 px-3 py-1">Django</li>
              <li className="rounded-full bg-slate-800 px-3 py-1">RestAPI</li>
              <li className="rounded-full bg-slate-800 px-3 py-1">Django REST Framework</li>
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
              <li className="rounded-full bg-slate-800 px-3 py-1">AI-Assisted Development</li>
              <li className="rounded-full bg-slate-800 px-3 py-1">Codex</li>
              <li className="rounded-full bg-slate-800 px-3 py-1">Cursor</li>
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
            githubUrl="https://github.com/Mics28/Mico-training"
          />

          <ProjectCard
            title="Personal Developer Portfolio"
            description="A responsive single-page developer portfolio built to present my Python and Django projects, skills, and contact details while learning modern frontend development."
            technologies={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
            githubUrl="https://github.com/Mics28/personal-portfolio"
          />

          <ProjectCard
            title="Tango with Django"
            description="A Django learning project developed while following and extending the Tango with Django tutorial."
            technologies={["Python", "Django", "HTML", "CSS"]}
            githubUrl="https://github.com/jeanjoellevillanueva/mico-training"
          />

          <ProjectCard
            title="Email OTP Authentication"
            description="A Django authentication feature exploring OTP generation, hashed OTP storage, expiration, resend cooldowns, maximum attempts, session flow, and automated testing."
            technologies={["Python", "Django", "Authentication", "Django testing"]}
            githubUrl="https://github.com/jeanjoellevillanueva/store_system/pull/33"
          />
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-6xl border-t border-slate-800 py-20"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s connect.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            I am open to junior developer opportunities, collaboration, and
            conversations about practical Python and Django development.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a
              href="https://github.com/Mics28"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-800 bg-slate-900 p-5 transition-colors hover:border-slate-600 hover:bg-slate-800"
            >
              <span className="block font-semibold text-white">GitHub</span>
              <span className="mt-1 block text-sm text-slate-400">
                github.com/Mics28
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/mico-jose-0289b6433/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-800 bg-slate-900 p-5 transition-colors hover:border-slate-600 hover:bg-slate-800"
            >
              <span className="block font-semibold text-white">LinkedIn</span>
              <span className="mt-1 block text-sm text-slate-400">
                https://www.linkedin.com/in/mico-jose-0289b6433/
              </span>
            </a>

            <a
              href="mailto:mico.agapito28@gmail.com"
              className="rounded-lg border border-slate-800 bg-slate-900 p-5 transition-colors hover:border-slate-600 hover:bg-slate-800"
            >
              <span className="block font-semibold text-white">Email</span>
              <span className="mt-1 block text-sm text-slate-400">
                mico.agapito28@gmail.com
              </span>
            </a>

            <a
              href="/mico-jose-resume.pdf"
              className="rounded-lg border border-slate-800 bg-slate-900 p-5 transition-colors hover:border-slate-600 hover:bg-slate-800"
            >
              <span className="block font-semibold text-white">Résumé</span>
              <span className="mt-1 block text-sm text-slate-400">
                Download PDF
              </span>
            </a>
          </div>
        </div>
      </section>

    </main>
  <footer className="border-t border-slate-800 px-6 py-8 text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-white">Mico Jose</p>
            <p className="mt-1">Junior Python/Django Developer</p>
          </div>

          <div className="flex gap-5">
            <a
              href="https://github.com/Mics28"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-sky-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/mico-jose-0289b6433/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-sky-400"
            >
              LinkedIn
            </a>
          </div>

          <p>© {new Date().getFullYear()} Mico Jose.</p>
        </div>
      </footer>
    </>
  );
}