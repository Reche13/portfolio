import { Container } from "@/components/Container";
import Heading from "@/components/text/Heading";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export const Projects = () => {
  return (
    <Container className="w-full px-4 md:px-10 py-8  bg-zinc-50 dark:bg-zinc-900 shadow-reche">
      <div className="flex items-center justify-between">
        <Heading as="h3" className="text-lg font-medium">
          What I&apos;ve Built
        </Heading>
        <Link
          href="/projects"
          className="border-[2px] cursor-pointer border-zinc-300 dark:border-zinc-600 hover:border-orange-600 active:border-orange-600 focus:border-orange-600 hover:bg-orange-500/5 active:bg-orange-500/5 focus:bg-orange-500/5 text-zinc-500 dark:text-zinc-400 hover:text-orange-600 active:text-orange-600 focus:text-orange-600 transition duration-300 text-xs font-medium flex items-center gap-1 py-1.5 px-2 rounded-xl"
        >
          See More
          <ArrowRight strokeWidth={1.5} className="size-4" />
        </Link>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-8 mt-6 items-stretch">
        <Project
          url="https://berlix.vercel.app"
          imageUrl="/berlix.png"
          title="Berlix UI"
          desc="A UI library of clean, animated components you can drop into any project."
        />
        <Project
          url="https://polonium.rechesoares.com"
          imageUrl="/polonium.png"
          title="Polonium"
          desc="An API client for testing REST and WebSocket requests, no login required."
        />
      </div>
    </Container>
  );
};

interface ProjectProps {
  url: string;
  imageUrl: string;
  title: string;
  desc: string;
}
const Project = ({ url, imageUrl, title, desc }: ProjectProps) => {
  return (
    <Link href={url} target="_blank">
      <motion.div
        whileHover="hover"
        variants={{
          hover: {
            boxShadow: "var(--shadow-reche)",
          },
        }}
        className="w-full md:w-[300px] rounded-[14px] flex flex-col h-full"
      >
        <div className="w-full overflow-hidden rounded-xl md:h-[180px]">
          <motion.img
            variants={{
              hover: { scale: 1.05 },
            }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          initial={{ x: -8 }}
          variants={{
            hover: { y: -4, x: 0 },
          }}
          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="p-4"
        >
          <Heading as="h5" className="text-base font-medium text-zinc-600">
            {title}
          </Heading>
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1">
            {desc}
          </p>
        </motion.div>
      </motion.div>
    </Link>
  );
};
