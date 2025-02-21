import React from 'react';

const AboutUS = () => {
  return (

    <section class="bg-gray-50 dark:bg-gray-900 py-8">
      <div class="max-w-7xl mx-auto  px-6 sm:px-12 lg:px-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* <!-- Left Content: Image --> */}
          <div class="relative">
            <div class="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://i.ibb.co/CPcKLJT/image.png"
                alt="Adopt a pet"
                class="w-full h-auto"
              />
            </div>
            <div
              class="absolute inset-0 bg-gradient-to-tr from-primary to-transparent opacity-20 rounded-lg"
            ></div>
          </div>

          {/* Right Content:*/}
          <div>
            <h2 class="text-4xl font-extrabold dark:text-white text-secondary">
              About Us
            </h2>
            <p class="mt-6 text-lg dark:text-white text-info leading-relaxed">
              Welcome to <strong class="text-primary font-semibold">Pet Adoption Platform</strong>, where we help pets find loving homes. Our mission is to simplify the adoption process, making it a joyful experience for both pets and families.
            </p>
            <p class="mt-4 text-info dark:text-white leading-relaxed">
              This platform is designed to connect pet lovers with their future companions while ensuring every adoption is handled responsibly. From playful puppies to serene cats, we’re here to make sure your pet adoption journey is seamless and trustworthy.
            </p>
            <p class="mt-4 text-info dark:text-white leading-relaxed">
              Every pet listed on our platform comes from verified sources, and we prioritize transparency and care in every step of the process.
            </p>
            <div class="mt-6">
              <a
                href="#"
                class="inline-block px-6 py-3 text-white bg-primary hover:bg-primary-dark rounded-lg shadow-lg transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>




  );
};

export default AboutUS;