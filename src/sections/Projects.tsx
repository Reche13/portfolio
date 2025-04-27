import { bricolage } from "@/assets/fonts";
import Image from "next/image";
import React from "react";

import poloniumImage from "@/assets/images/polonium.png";
import kaizenImage from "@/assets/images/kaizen.png";

import Container from "@/components/Container";
import ButtonLink from "@/components/button/ButtonLink";

const Projects = () => {
  return (
    <div className="bg-white w-full pt-20 md:pt-40">
      <h2
        className={`${bricolage.className} font-semibold text-[#1c1d20] text-[64px] text-center`}
      >
        Projects
      </h2>
      <p
        className={`${bricolage.className} text-2xl text-center font-normal text-[#1c1d20]/70`}
      >
        Some of the things I have built.
      </p>

      <Container>
        <div className="w-full flex flex-col md:flex-row justify-center gap-10 mt-20 md:mt-40">
          <div className="shrink-0 flex-1">
            <div className="w-full max-w-[600px] rounded overflow-hidden shadow-xl">
              <Image src={poloniumImage} alt="polonium" width={600} />
            </div>
          </div>
          <div className="pt-1 flex-1">
            <p
              className={`${bricolage.className} font-medium text-[#1c1d20] text-4xl uppercase`}
            >
              polonium
            </p>

            <p
              className={`${bricolage.className} text-base font-normal text-black/70 mt-4`}
            >
              An API testing tool built for developers to create request
              collections and test REST and WebSocket endpoints with ease. Built
              with a focus on speed, simplicity, and flexibility to streamline
              your API development and debugging workflows.
            </p>

            <p
              className={`${bricolage.className} text-base font-normal text-black/70 mt-4`}
            >
              Next.js, Tailwind CSS, Zustand, HTTP, WebSockets
            </p>

            <div className="flex items-center gap-6 md:gap-8 mt-10 text-black font-medium text-lg">
              <ButtonLink
                href="https://github.com/Reche13/polonium"
                variant="secondary"
                target="_blank"
              >
                Source code
              </ButtonLink>
              <ButtonLink
                target="_blank"
                href="https://polonium.rechesoares.com"
              >
                Live link
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-center gap-10 mt-40 md:mt-60">
          <div className="shrink-0 flex-1">
            <div className="w-full max-w-[600px] rounded overflow-hidden shadow-xl">
              <Image src={kaizenImage} alt="polonium" width={600} />
            </div>
          </div>
          <div className="pt-1 flex-1">
            <p
              className={`${bricolage.className} font-medium text-[#1c1d20] text-4xl uppercase`}
            >
              Kaizen
            </p>

            <p
              className={`${bricolage.className} text-base font-normal text-black/70 mt-4`}
            >
              An opensource Project Management app built using microservice
              architecture in Node.js. Currently in development.
            </p>

            <p
              className={`${bricolage.className} text-base font-normal text-black/70 mt-4`}
            >
              Microservices, Node.js, Next.js, Turborepo, Postgres, Redis
            </p>

            <div className="flex items-center gap-6 md:gap-8 mt-10 text-black font-medium text-lg">
              <ButtonLink
                href="https://github.com/Reche13/kaizen"
                variant="secondary"
                target="_blank"
              >
                Source code
              </ButtonLink>
              <ButtonLink target="_blank" href="https://www.rechesoares.com">
                Live link
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
