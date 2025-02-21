import { Button, Typography } from '@material-tailwind/react';
import React from 'react';
import SectionTitle from './SectionTitle';

const CallToAction = () => {
    return (
        <section className="py-8   bg-gray-50 dark:bg-gray-900 ">
            <SectionTitle 
            heading={"Give Love, Adopt a Pet"}
            subHeading={'Every pet deserves a loving home. You can make a difference in their life by adopting. Let’s create a better world for them, one adoption at a time.'
            }
            ></SectionTitle>
        <div className="w-11/12 mx-auto bg-white dark:bg-gray-800 lg:p-6 rounded-lg  flex flex-col md:flex-row items-center justify-between">
       
          {/* Left Content (Title, Description, Button) */}
          <div className="md:w-1/2 space-y-6 text-center lg:text-left">
            <Typography variant="h2" className="text-2xl md:text-3xl dark:text-white lg:text-4xl font-bold leading-tight">
              Give a Pet a Second Chance
            </Typography>
            <Typography variant="body1" className="text-lg dark:text-white lg:text-xl opacity-80">
              By adopting a pet, you provide them with a loving home and a better life. Make a difference today and help create a world full of love, happiness, and wagging tails.
            </Typography>
            
            <Button
              className="bg-primary text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
              Adopt a Pet
            </Button>
          </div>
          
          {/* Right Image */}
          <div className="md:w-1/2 mt-5  lg:mt-0">
            <img
              src="https://i.ibb.co/cFMnMCB/image.png" 
              alt="Happy Pet Adoption"
              className="w-[450px] h-auto rounded-md mx-auto object-cover transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>
    );
};

export default CallToAction;