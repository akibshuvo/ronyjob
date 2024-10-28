import React from 'react';
import Image from '../Image/Image';
import ProductImg from '../../assets/productImg/productImg.jpeg';
import { FiShoppingCart, FiHeart, FiShare2, FiEye } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";

const ProductDesign = () => {
  return (
    <div className="w-1/4 mt-8 relative group">
      {/* Product Image with "New Arrival" Label */}
      <div className="relative">
        {/* New Arrival Label */}
        <span className="absolute top-3 left-3 bg-primary  text-md font-bold px-3 py-2 rounded">
          New Arrival
        </span>

        <Image className="w-full" src={ProductImg} alt="Product" />

        {/* Hover Icons */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
   
          <button className="absolute bottom-[120px] right-3 p-2 bg-white border rounded-full shadow-md hover:bg-gray-100 transition-colors">
            <FiEye className="text-gray-700" />
          </button>
          <p className="absolute bottom-[120px] right-14 px-3 py-1 bg-black text-white text-sm rounded opacity-0">Quick View</p>

          <button className="absolute bottom-16 right-3 p-2 bg-white border rounded-full shadow-md hover:bg-gray-100 transition-colors">
            <FiHeart className="text-gray-700" />
          </button>
          <p className="absolute bottom-16 right-14 px-3 py-1 bg-black text-white text-sm rounded opacity-0">Wishlist</p>
          
          <button className="absolute bottom-3 right-3 p-2 bg-white border rounded-full shadow-md hover:bg-gray-100 transition-colors hover:opacity-1">
            <FiShare2 className="text-gray-700" />
          </button>
          <p className="absolute bottom-3 right-14 px-3 py-1 bg-black text-white text-sm rounded opacity-0">Share</p>

        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex w-full">
        <button className="py-3 border w-1/2 flex justify-center text-lg items-center gap-x-2 font-semibold hover:bg-primary transition duration-150">
          < HiOutlineShoppingBag/> Buy Now
        </button>
        <button className="py-3 border w-1/2 flex justify-center text-lg items-center gap-x-2 font-semibold hover:bg-primary transition duration-150">
          <FiShoppingCart /> Add to Cart
        </button>
      </div>

      {/* Rating and Sales Info */}
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center gap-x-1">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-text_primary" />
          <p className="text-text_primary text-md font-semibold"> (34 Reviews)</p>
        </div>
        <p className="text-text_primary text-md font-semibold">241 Sold</p>
      </div>

      {/* Product Name and Price */}
      <p className="w-full font-semibold text-xl mt-2">
        Cool sweater from the greens of new Iceland Cotton
      </p>

      <div className="flex items-center gap-x-3 mt-2">
        <del className="text-lg font-medium text-text_primary">$200.00</del>
        <p className="font-bold text-lg">$99.99</p>
        <p className="font-bold bg-primary  px-3 py-1 rounded-2xl">25% off</p>
      </div>
    </div>
  );
}

export default ProductDesign;