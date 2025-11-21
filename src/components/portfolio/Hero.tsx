import { Container } from "@/components/common/Container";

export const Hero = () => {
  return (
    <Container>
      <div className="w-full pt-20">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Reché Soares
        </h1>
        <p className="mt-1 font-medium text-lg text-zinc-700 dark:text-zinc-300">
          I'm a{" "}
          <span className="font-semibold text-orange-600">
            Full Stack Developer
          </span>{" "}
          who loves building interactive web apps using Golang, TypeScript,
          Postgres, React & Next.js, pairing strong backend engineering with
          clean, intuitive interfaces.
        </p>
      </div>
    </Container>
  );
};
