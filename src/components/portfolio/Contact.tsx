import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

export const Contact = () => {
  return (
    <Container className="mt-28">
      <SectionHeading heading="Message" subHeading="Send A" />
      <div className="mt-8 flex flex-col gap-8">Contact Form</div>
    </Container>
  );
};
