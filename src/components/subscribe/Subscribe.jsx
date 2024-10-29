import React from 'react';
import Heading from '../Heading';

const Subscribe = () => {
  return (
    <section className="w-full bg-primary py-12 mt-32">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 md:col-span-6">
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <Heading className="font-bold text-2xl md:text-4xl" text='Subscribe to our Newsletter'/>
                  <p className="py-2">For news, offers and so much more! No spams, we promise.</p>
                </div>
            </div>
            <div className="col-span-12 md:col-span-6 flex justify-end">
              <div className="w-full relative ring-1 ring-black rounded">
              <input
                type="email"
                placeholder="Email address"
                className="w-full py-4 pl-5 pr-48 border border-gray-300 rounded-md focus:outline-none "
              />
            <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 absolute top-1/2 right-2 -translate-y-1/2 z-10">Subscribe</button>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;