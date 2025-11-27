"use client";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProjectList } from "@/components/projects/ProjectList";

export const Projects = () => {
  return (
    <Container className="mt-20">
      <SectionHeading heading="Projects" subHeading="Featured" />
      <div className="mt-8">
        <ProjectList />
      </div>
    </Container>
  );
};
