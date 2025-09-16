import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "../data/data";
import Project from "./project";
import { useSectionInView } from "../hooks/useSectionInView";

export default function Projects() {
  const { ref } = useSectionInView("Projects", { threshold: 0, rootMargin: "0px 0px -80% 0px", stableMs: 200 });

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
