"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.99 }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      className="group glass-panel flex h-full flex-col overflow-hidden rounded-2xl"
    >
      <div
        className={`relative aspect-[2/1] overflow-hidden bg-gradient-to-br ${project.imageGradient}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,169,98,0.12),transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#070707] to-transparent" />
        <span className="absolute left-5 top-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
          Live
        </span>
        <h3 className="font-display absolute bottom-5 left-5 right-5 text-2xl font-medium text-stone-50">
          {project.title}
        </h3>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-[15px] leading-relaxed text-stone-500">
          {project.description}
        </p>

        <ul className="list-divider mt-6 flex-1">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="text-sm text-stone-300 first:mt-0 first:pt-0 first:border-0">
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-md px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-stone-500 ring-1 ring-white/[0.06]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-2 border-t border-white/[0.05] pt-6">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              Buka sistem
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
            </a>
          ) : null}
          {project.links?.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-semibold"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-60" strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
