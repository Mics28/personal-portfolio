type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  liveLabel?: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  liveLabel = "Play Game",
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <p className="mt-4 leading-7 text-slate-300">{description}</p>

      <ul className="mt-6 flex flex-wrap gap-2 text-sm text-slate-300">
        {technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full bg-slate-800 px-3 py-1"
          >
            {technology}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-sky-500 px-4 py-2 font-semibold text-slate-950 transition-colors hover:bg-sky-400"
          >
            {liveLabel} <span className="ml-2" aria-hidden="true">↗</span>
          </a>
        )}

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-sky-400 transition-colors hover:text-sky-300"
        >
          View on GitHub <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
