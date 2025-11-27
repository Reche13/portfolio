interface Props {
  heading: string;
  subHeading: string;
}

export const SectionHeading = ({ heading, subHeading }: Props) => {
  return (
    <div className="selection:bg-orange-600 selection:text-zinc-50">
      <p className="text-base font-medium text-zinc-500 dark:text-zinc-500">
        {subHeading}
      </p>
      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        {heading}
      </h2>
    </div>
  );
};
