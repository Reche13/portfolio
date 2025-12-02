import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

export const Stack = () => {
  return (
    <Container className="mt-28">
      <SectionHeading heading="Stack" subHeading="Tech" />
      <div className="mt-8 flex flex-col gap-8">Tech Stack</div>
    </Container>
  );
};
