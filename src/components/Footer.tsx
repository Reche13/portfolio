"use client";
import { GitHubIcon } from "@/assets/icons/github";
import { LinkedInIcon } from "@/assets/icons/linkedin";
import { XIcon } from "@/assets/icons/x";
import { Container } from "@/components/Container";
import Heading from "@/components/text/Heading";
import { Check, Copy } from "lucide-react";
import Link from "next/link";

import React, { useState } from "react";

export const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("rechesoares13@gmail.com");
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <Container className="w-full px-4 md:px-10 py-8  bg-zinc-50 dark:bg-zinc-900 shadow-reche">
      <Heading as="h3" className="text-lg font-medium">
        Connect With Me
      </Heading>
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={handleCopy}
          className="border-[2px] cursor-pointer border-zinc-300 dark:border-zinc-600 hover:border-orange-600 active:border-orange-600 focus:border-orange-600 hover:bg-orange-500/5 active:bg-orange-500/5 focus:bg-orange-500/5 text-zinc-500 dark:text-zinc-400 hover:text-orange-600 active:text-orange-600 focus:text-orange-600 transition duration-300 text-xs font-medium flex items-center gap-1 py-1.5 px-2 rounded-xl"
        >
          rechesoares13@gmail.com
          <div className="ml-1">
            {copied ? (
              <Check strokeWidth={2} className="size-4" />
            ) : (
              <Copy strokeWidth={2} className="size-4" />
            )}
          </div>
        </button>

        <div className="flex items-center gap-4">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/rechesoares"
            className="border-[2px] border-transparent p-1 rounded-xl group hover:border-orange-600 active:border-orange-600 focus:border-orange-600 hover:bg-orange-500/5 active:bg-orange-500/5 focus:bg-orange-500/5"
          >
            <LinkedInIcon className="fill-zinc-600 dark:fill-zinc-300 size-5 group-hover:fill-orange-600 group-active:fill-orange-600 group-focus:fill-orange-600" />
          </Link>

          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Reche13"
            className="border-[2px] border-transparent p-1 rounded-xl group hover:border-orange-600 active:border-orange-600 focus:border-orange-600 hover:bg-orange-500/5 active:bg-orange-500/5 focus:bg-orange-500/5"
          >
            <GitHubIcon className="fill-zinc-600 dark:fill-zinc-300 size-5 group-hover:fill-orange-600 group-active:fill-orange-600 group-focus:fill-orange-600" />
          </Link>

          <Link
            href="https://x.com/rechesoares13"
            target="_blank"
            rel="noopener noreferrer"
            className="border-[2px] border-transparent p-1 rounded-xl group hover:border-orange-600 active:border-orange-600 focus:border-orange-600 hover:bg-orange-500/5 active:bg-orange-500/5 focus:bg-orange-500/5"
          >
            <XIcon className="fill-zinc-600 dark:fill-zinc-300 size-5 group-hover:fill-orange-600 group-active:fill-orange-600 group-focus:fill-orange-600" />
          </Link>
        </div>
      </div>
    </Container>
  );
};
