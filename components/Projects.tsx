"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  projectFilters,
  projects,
  type ProjectFilterCategory,
} from "@/data/projects";
import { siteConfig } from "@/data/site";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";

export function Projects() {
  const [active, setActive] = useState<ProjectFilterCategory>("all");

  const filtered = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="projects" className="page-section">
      <div className="section-shell">
        <SectionHeader
          eyebrow={siteConfig.sections.projects.eyebrow}
          title={siteConfig.sections.projects.title}
          description={siteConfig.sections.projects.description}
        />

        <div className="mt-10">
          <div className="segment-track">
            {projectFilters.map((tab) => {
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  data-active={isActive}
                  onClick={() => setActive(tab.id)}
                  className="segment-btn"
                >
                  {isActive ? (
                    <motion.span
                      layoutId="segment-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-b from-[#e2cfa0] to-[#c9a962]"
                      transition={{
                        type: "spring",
                        bounce: 0.12,
                        duration: 0.45,
                      }}
                    />
                  ) : null}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <motion.div layout className="mt-12 grid gap-5 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
