import { Typography } from "@material-tailwind/react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-11/12 mx-auto text-center">
      <Typography
        variant="h2"
        className="text-2xl md:text-3xl text-secondary dark:text-white  lg:text-4xl font-bold mb-6"
      >
        {heading}
      </Typography>
      <Typography className="dark:text-white max-w-3xl mx-auto text-base text-info md:text-lg mb-8">
        {subHeading}
      </Typography>
    </div>
  );
};

export default SectionTitle;
