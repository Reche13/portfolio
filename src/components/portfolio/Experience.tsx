import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ExperienceCard } from "../common/experience/ExperienceCard";

export const Experience = () => {
  return (
    <Container className="mt-28">
      <SectionHeading heading="Experience" subHeading="Work" />
      <div className="mt-8 flex flex-col gap-8">
        {[1, 2].map((exp, index) => (
          <ExperienceCard key={`work-expirience-card-${index}`} />
        ))}
      </div>
    </Container>
  );
};
