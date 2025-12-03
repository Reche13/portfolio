"use client";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TechCapsuleMini } from "../common/TechCapsuleMini";
import { TypeScriptIcon } from "@/assets/tech-icons/typescript";

export const Stack = () => {
  return (
    <Container className="mt-28">
      <SectionHeading heading="Stack" subHeading="Tech" />
      <div className="mt-8 flex flex-wrap gap-5">
        {Array(20)
          .fill("1")
          .map((item) => (
            <TechCapsuleMini
              label="TypeScript"
              icon={TypeScriptIcon}
              size="lg"
            />
          ))}
      </div>
    </Container>
  );
};
