import React from "react";
import headphone from "../assets/05J3ZvqryZQDwp03HUnvvQt-10.fit_lim.size_840x473.v1662570607-removebg-preview.png";
import watch from "../assets/TFT002-023_OPWBLK_OS_A-removebg-preview.png";
import water from "../assets/image-removebg-preview.png";
import { BsStarFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

export const Weekly = () => {
  return (
    <section className="mt-10 font-poppins pb-10">
      <h1 className="pl-10 pt-10 xs:text-xl text-2xl font-bold">
        Weekly Popular Products
      </h1>
      <div className="grid xs:grid-cols-1 xm:grid-cols-2 lg:grid-cols-3 grid-cols-2 lg:p-10 p-5 gap-5">
        <div>
          <div className="bg-gray-100 rounded-lg h-60 relative overflow-hidden">
            <img
              className="object-contain w-full h-full hover:scale-125 duration-300"
              src={headphone}
              alt=""
            />
            <div className="absolute top-5 right-5 flex items-center justify-center rounded-full p-2 bg-white hover:bg-pink-200">
              <AiOutlineHeart className="text-lg" />
            </div>
          </div>
          <div className="">
            <ul className="flex w-full justify-between items-center mt-1">
              <p className="font-bold text-base lg:text-lg">HomePod mini</p>
              <p className="text-base lg:text-lg font-bold">$ 239.00</p>
            </ul>
            <p className="py-1 text-xs">
              Room-filling sound. An intelligent assistant.
            </p>
            <ul className="flex text-green-500 text-xs">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <li className="text-xs text-black ml-2">(121)</li>
            </ul>
            <button className="mt-3 border border-black px-3 py-2 rounded-full hover:text-white hover:bg-green-950 duration-500 text-sm">
              Add to Cart
            </button>
          </div>
        </div>
        <div>
          <div className="bg-gray-100 rounded-lg h-60 relative overflow-hidden">
            <img
              className="object-contain w-full h-full p-5 hover:scale-125 duration-300"
              src={watch}
              alt=""
            />
            <div className="absolute top-5 right-5 flex items-center justify-center rounded-full p-2 bg-white hover:bg-pink-200">
              <AiOutlineHeart className="text-lg" />
            </div>
          </div>
          <div className="">
            <ul className="flex w-full justify-between items-center mt-1">
              <p className="font-bold text-base lg:text-lg">HomePod mini</p>
              <p className="text-base lg:text-lg font-bold">$ 239.00</p>
            </ul>
            <p className="py-1 text-xs">
              Room-filling sound. An intelligent assistant.
            </p>
            <ul className="flex text-green-500 text-xs">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <li className="text-xs text-black ml-2">(121)</li>
            </ul>
            <button className="mt-3 border border-black px-3 py-2 rounded-full hover:text-white hover:bg-green-950 duration-500 text-sm">
              Add to Cart
            </button>
          </div>
        </div>
        <div>
          <div className="bg-gray-100 rounded-lg h-60 relative overflow-hidden">
            <img
              className="object-contain w-full h-full p-5 hover:scale-125 duration-300"
              src={water}
              alt=""
            />
            <div className="absolute top-5 right-5 flex items-center justify-center rounded-full p-2 bg-white hover:bg-pink-200">
              <AiOutlineHeart className="text-lg" />
            </div>
          </div>
          <div className="">
            <ul className="flex w-full justify-between items-center mt-1">
              <p className="font-bold text-base lg:text-lg">HomePod mini</p>
              <p className="text-base lg:text-lg font-bold">$ 239.00</p>
            </ul>
            <p className="py-1 text-xs">
              Room-filling sound. An intelligent assistant.
            </p>
            <ul className="flex text-green-500 text-xs">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <li className="text-xs text-black ml-2">(121)</li>
            </ul>
            <button className="mt-3 border border-black px-3 py-2 rounded-full hover:text-white hover:bg-green-950 duration-500 text-sm">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
