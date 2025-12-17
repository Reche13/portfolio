import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="mt-10 mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-50"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mt-10 mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50"
      {...props}
    />
  ),
  p: (props) => (
    <p className="text-base  text-zinc-600 dark:text-zinc-400" {...props} />
  ),
  a: (props) => (
    <a
      className="underline underline-offset-4 text-orange-500 hover:text-orange-600"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-neutral-100 px-1 py-0.5 text-sm dark:bg-neutral-800"
      {...props}
    />
  ),
};
