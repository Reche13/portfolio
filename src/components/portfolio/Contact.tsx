import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import ContactForm from "../contact/ContactForm";

export const Contact = () => {
  return (
    <Container className="mt-28">
      <SectionHeading heading="Message" subHeading="Send A" />
      <div className="mt-8 flex flex-col gap-8">
        <ContactForm />
      </div>
    </Container>
  );
};
