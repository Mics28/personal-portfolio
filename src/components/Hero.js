const ArrowDownIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
  </svg>
);

const GitHubIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.683-.217.683-.483 0-.237-.009-1.025-.013-1.86-2.782.604-3.369-1.18-3.369-1.18-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.349-1.087.635-1.337-2.22-.253-4.555-1.11-4.555-4.942 0-1.092.39-1.985 1.029-2.685-.103-.253-.446-1.271.098-2.65 0 0 .84-.269 2.75 1.026A9.56 9.56 0 0 1 12 6.336a9.6 9.6 0 0 1 2.504.337c1.909-1.295 2.748-1.026 2.748-1.026.546 1.379.203 2.397.1 2.65.64.7 1.028 1.593 1.028 2.685 0 3.841-2.338 4.686-4.564 4.935.359.31.678.92.678 1.855 0 1.34-.012 2.421-.012 2.75 0 .268.18.58.688.482A10.003 10.003 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
  </svg>
);

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative flex min-h-screen items-center overflow-hidden bg-stone-50 px-6 py-24 sm:px-10 lg:px-16">
      <div className="absolute inset-x-0 top-0 h-px bg-stone-200" />
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-6 text-sm font-semibold tracking-[0.18em] text-emerald-700 uppercase">Junior Python/Django Developer</p>
        <h1 id="hero-title" className="max-w-4xl text-5xl font-semibold tracking-tight text-stone-900 sm:text-6xl lg:text-7xl">Mico Jose</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">I build practical web applications with Python and Django, developing my skills one hands-on project at a time.</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="#projects" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2 focus-visible:outline-none">View Projects <ArrowDownIcon /></a>
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 transition-colors hover:border-stone-400 hover:bg-stone-100 focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2 focus-visible:outline-none"><GitHubIcon />GitHub</a>
          <a href="/mico-jose-resume.pdf" download className="inline-flex min-h-12 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-stone-700 transition-colors hover:bg-stone-200 focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2 focus-visible:outline-none">Download Résumé</a>
        </div>
        <p className="mt-12 border-l-2 border-emerald-700 pl-4 text-sm leading-6 text-stone-500">Currently learning modern frontend development with React and Next.js.</p>
      </div>
    </section>
  );
}
