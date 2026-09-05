type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
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

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 font-semibold text-sky-400 transition-colors hover:text-sky-300"
      >
        View on GitHub <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}