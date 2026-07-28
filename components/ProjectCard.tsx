import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { Project } from "@/data/siteData";

interface ProjectCardProps {
  project: Project;
  aspectOverride?: string;
  index?: number;
}

export default function ProjectCard({ project, aspectOverride }: ProjectCardProps) {
  return (
    <article className="group h-full">
      <Link href={`/portfolio/${project.slug}`} className="block h-full">
        <div
          className={`relative overflow-hidden ${
            aspectOverride || project.aspectRatio || "h-[450px]"
          }`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-1000 ease-luxury group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-90" />

          {/* Spatial Concept Badge */}
          {project.isConceptDemo && (
            <div className="absolute left-4 top-4 z-10 rounded bg-ink/75 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-md border border-white/10">
              Spatial Concept
            </div>
          )}

          {/* Hover Arrow Button */}
          <div className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-ember group-hover:scale-110">
            <MoveUpRight size={16} />
          </div>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-[10px] uppercase tracking-[0.22em] text-ember font-semibold">
              {project.category} · {project.location}
            </span>
            <h3 className="display text-3xl sm:text-4xl mt-1 text-white group-hover:text-white/90 transition-colors">
              {project.title}
            </h3>
            <p className="mt-2 text-xs text-white/70 line-clamp-2 max-w-lg">
              {project.shortDesc}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
