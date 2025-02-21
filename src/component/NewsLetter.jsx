import React from 'react';

const NewsLetter = () => {
    return (
        <section className='pb-10'>
        <div className="dark:bg-gray-900  bg-gray-100 py-10 rounded-md text-white">
          <div className="p-6 mx-auto rounded-md w-11/12 bg-white dark:bg-gray-800 px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white text-secondary">
              Stay Connected with Pet Heven
            </h2>
            <p className="text-lg mb-6 dark:text-white text-info">
              Subscribe to our newsletter and get the latest pet care tips, exclusive adoption offers,<br /> and heartwarming pet stories.
            </p>
            <form className="flex flex-col md:flex-row items-center justify-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-2/3 p-3 rounded-md text-gray-900 focus:outline-none dark:border-0 border-2 border-primary focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-orange-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-base text-secondary dark:text-white mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    );
};

export default NewsLetter;