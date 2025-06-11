import { Container } from "@/components/Container";
import Heading from "@/components/text/Heading";

export const Work = () => {
  return (
    <Container className="w-full px-4 md:px-10 py-8 bg-zinc-50 dark:bg-zinc-900 shadow-reche">
      <Heading as="h3" className="text-lg font-medium">
        Where I’ve Worked
      </Heading>
      <div className="w-full flex flex-col gap-10 mt-6">
        <Company
          name="Vericy"
          position="Frontend Engineer"
          duration="2023 - Present"
          imageUrl="/vericy.svg"
          desc="Led Vericy’s frontend, scaled architecture with Turborepo, mentored interns, and delivered fast, modern apps."
        />
        <Company
          name="Intellicure Healthcare"
          position="Fullstack Engineer"
          duration="2022 - 2023"
          imageUrl="/vericy.svg"
          desc="Built booking systems, migrated legacy apps, and launched a custom course platform at Intellicure."
        />
      </div>
    </Container>
  );
};

interface CompanyProps {
  name: string;
  position: string;
  duration: string;
  imageUrl: string;
  desc: string;
}

const Company = ({
  name,
  position,
  duration,
  imageUrl,
  desc,
}: CompanyProps) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex flex-row items-center justify-between gap-4">
        <div className="flex flex-col">
          <Heading as="h3" className="text-base font-medium tracking-tight">
            {name}
          </Heading>
          <p className="text-zinc-600 dark:text-zinc-300 font-medium text-sm mt-1">
            {position}
            <span className="text-zinc-400 ml-4">{duration}</span>
          </p>
        </div>
        <img src={imageUrl} alt={name} className="h-10" />
      </div>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium max-w-[60ch]">
        {desc}
      </p>
    </div>
  );
};
