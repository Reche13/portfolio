import { bricolage, bebasNeue } from "@/assets/fonts";
import Image from "next/image";
import React from "react";

import poloniumImage from "@/assets/images/polonium.png";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="bg-white w-full pt-52">
      <h2
        className={`${bebasNeue.className} font-bold text-black text-8xl text-center`}
      >
        Projects
      </h2>
      <p
        className={`${bricolage.className} text-2xl text-center font-normal text-black/70`}
      >
        Some of the things I have built.
      </p>

      <div className="w-full flex flex-col md:flex-row justify-center gap-10 mt-40 px-10">
        <div className="w-full lg:w-[800px] lg:h-[526px] rounded overflow-hidden shadow-xl shrink-0">
          <Image src={poloniumImage} alt="polonium" width={800} height={526} />
        </div>
        <div className="pt-5">
          <p className={`${bebasNeue.className} font-bold text-black text-4xl`}>
            polonium
          </p>

          <p
            className={`${bricolage.className} text-base font-normal text-black/70`}
          >
            An API testing tool built for developers to create request
            collections and test REST and WebSocket endpoints with ease. Built
            with a focus on speed, simplicity, and flexibility to streamline
            your API development and debugging workflows.
          </p>

          <p
            className={`${bricolage.className} text-base font-normal text-black/70 mt-6`}
          >
            Next.js, Tailwind CSS, Zustand, HTTP, WebSockets
          </p>

          <div className="flex items-center gap-5 mt-10 text-black font-medium text-lg">
            <Link href={"https://github.com/Reche13/polonium"} target="_blank">
              Source ↗
            </Link>
            <Link href={"https://polonium.rechesoares.com"} target="_blank">
              Live ↗
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
