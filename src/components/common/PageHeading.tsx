interface Props {
  heading: string;
  subHeading?: string;
}

export const PageHeading = ({ heading, subHeading }: Props) => {
  return (
    <div className="selection:bg-orange-600 selection:text-zinc-50 text-center">
      <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
        {heading}
      </h2>
      <p className="text-base font-medium text-zinc-500 dark:text-zinc-500 mt-2">
        {subHeading}
      </p>
    </div>
  );
};
