import React from "react";
import homepod from "../assets/sound_hero__ci4zlbhkbauu_large.png";
import instax from "../assets/pexels-carlie-wright-6442119-removebg-preview.png";
import bag from "../assets/000_lo_3etp-zu3-0_2-removebg-preview.png";
import { BsStarFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

export const Deals = () => {
  return (
    <section className="mt-10 font-poppins pb-10">
      <h1 className="pl-5 lg:pl-10 pt-10 text-2xl font-bold">
        Today's Best Deals For You!
      </h1>
      <div className="grid xs:grid-cols-1 xm:grid-cols-2 lg:grid-cols-3 grid-cols-2 lg:p-10 p-5 gap-5 cursor-pointer">
        <div>
          <div className="bg-gray-100 h-60 p-5 relative rounded-lg">
            <img
              className="object-contain w-full h-full lg:p-3 p-5 lg:hover:scale-125 hover:scale-110 duration-300"
              src={homepod}
              alt=""
            />
            <div className="absolute top-5 right-5 flex items-center justify-center rounded-full p-2 bg-white hover:bg-pink-200">
              <AiOutlineHeart className="text-lg" />
            </div>
          </div>
          <div className="">
            <ul className="flex w-full justify-between items-center mt-1">
              <p className="font-bold text-sm lg:text-lg">HomePod mini</p>
              <p className="text-sm lg:text-lg font-bold">$ 239.00</p>
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
          <div className="bg-gray-100 h-60 relative rounded-lg">
            <img
              className="object-contain w-full h-full lg:hover:scale-125 hover:scale-110 duration-300"
              src={instax}
              alt=""
            />
            <div className="absolute top-5 right-5 flex items-center justify-center rounded-full p-2 bg-white hover:bg-pink-200">
              <AiOutlineHeart className="text-lg" />
            </div>
          </div>
          <div className="">
            <ul className="flex w-full justify-between items-center mt-1">
              <p className="font-bold text-sm lg:text-lg">HomePod mini</p>
              <p className="text-sm lg:text-lg font-bold">$ 239.00</p>
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
          <div className="bg-gray-100 h-60 overflow-hidden p-5 relative rounded-lg">
            <img
              className="object-contain w-full h-full lg:hover:scale-125 hover:scale-110 duration-300"
              src={bag}
              alt=""
            />
            <div className="absolute top-5 right-5 flex items-center justify-center rounded-full p-2 bg-white hover:bg-pink-200">
              <AiOutlineHeart className="text-lg" />
            </div>
          </div>
          <div className="">
            <ul className="flex w-full justify-between items-center mt-1">
              <p className="font-bold text-sm lg:text-lg">HomePod mini</p>
              <p className="text-sm lg:text-lg font-bold">$ 239.00</p>
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
