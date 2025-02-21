import { Button, Typography } from "@material-tailwind/react";
import bannerImg from "../assets/bannerGirlPet2.png";

const Banner = () => {
  return (
    <div className="w-[90%] flex flex-col lg:flex-row justify-center gap-6 lg:gap-24 items-center px-12 lg:px-24 ">
      <div>
        <img
          src={bannerImg}
          alt="Pet Picture"
          className="w-76 bg-transparent rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl lg:text-4xl font-bold">Adopt Your Love</h1>
        <h1 className="text-lg font-semibold">
          Visit us today and Adopt Your Pet from Our Shop.
        </h1>
        <Button className="md:px-6 md:py-3 px-3 py-2 bg-primary text-sm md:text-base hover:text-amber-600 font-semibold rounded hover:bg-White bg-red-500 transition duration-300 dark:bg-blue-500 dark:hover:bg-blue-600 cursor-pointer w-1/2">
          Find Your Pet
        </Button>
      </div>
    </div>
  );
};

export default Banner;
