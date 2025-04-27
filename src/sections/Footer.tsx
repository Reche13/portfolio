import { bricolage } from "@/assets/fonts";
import ButtonLink from "@/components/button/ButtonLink";
import Container from "@/components/Container";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useRef } from "react";

const Footer = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  return (
    <motion.div style={{ y }} className="bg-[#1c1d20] w-full">
      <Container>
        <div className="w-full flex flex-col pt-32 pb-48">
          <p
            className={`${bricolage.className} text-[64px] text-white leading-[1.1]`}
          >
            Let&apos;s Work <br />
            Together
          </p>

          <div className="relative mt-10">
            <div className="h-0.5 w-full bg-white/30"></div>
            <div className="w-[180px] h-[180px] bg-primary rounded-full absolute top-0 right-0 -translate-y-1/2"></div>
          </div>
          <div className="mt-10">
            <ButtonLink
              variant="tertiary"
              href="mailto:rechesoares13@gmail.com"
            >
              rechesoares13@gmail.com
            </ButtonLink>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Footer;
