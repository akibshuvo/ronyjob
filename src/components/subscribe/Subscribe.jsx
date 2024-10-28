import React from 'react';

const Subscribe = () => {
  return (
    <div className="w-full bg-primary py-12 mt-32">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="font-bold text-2xl md:text-4xl">Subscribe to our Newsletter</h2>
            <p className="py-2">For news, offers and so much more! No spams, we promise.</p>
          </div>
          <div className="flex items-center space-x-2 w-2/5 relative">
            <input
              type="email"
              placeholder="Email address"
              className="w-full py-4 pl-5 pr-48 border border-gray-300 rounded-md focus:outline-none "
            />

          <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 absolute right-1">Subscribe</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;