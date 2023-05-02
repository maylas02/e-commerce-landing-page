import React from "react";
import { BsStarFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import camera from "../assets/63e8c4e6eaf85336ce58cf03_instax mini 11-min.png";
import watch from "../assets/63e8c4e74b76916e072f2466_watch-min.png";
import shoe from "../assets/63e8c4e4037f3ba53bcf2021_adidas sneakers-min.png";

export const Seller = () => {
  return (
    <section className="mt-5 lg:p-10 p-5 font-poppins">
      <h1 className="text-2xl font-bold mt-5">Most Selling Products</h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 pt-5 pb-2 overflow-hidden">
        <div>
          <div className="bg-gray-100 rounded-lg h-60 relative overflow-hidden">
            <img
              className="object-contain w-full h-full hover:scale-125 duration-300"
              src={camera}
              alt=""
            />
            <div className="absolute top-5 right-5 flex items-center justify-center rounded-full p-2 bg-gray-100 hover:bg-pink-200">
              <AiOutlineHeart className="text-lg" />
            </div>
          </div>
          <div className="">
            <ul className="flex w-full justify-between items-center mt-1">
              <p className="font-bold text-base">HomePod mini</p>
              <p className="text-base font-bold">$ 239.00</p>
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
              className="object-contain w-full h-full hover:scale-125 duration-300"
              src={watch}
              alt=""
            />
            <div className="absolute top-5 right-5 flex items-center justify-center rounded-full p-2 bg-gray-100 hover:bg-pink-200">
              <AiOutlineHeart className="text-lg" />
            </div>
          </div>
          <div className="">
            <ul className="flex w-full justify-between items-center mt-1">
              <p className="font-bold text-base">HomePod mini</p>
              <p className="text-base font-bold">$ 239.00</p>
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
              className="object-contain w-full h-full hover:scale-125 duration-300"
              src={shoe}
              alt=""
            />
            <div className="absolute top-5 right-5 flex items-center justify-center rounded-full p-2 bg-gray-100 hover:bg-pink-200">
              <AiOutlineHeart className="text-lg" />
            </div>
          </div>
          <div className="">
            <ul className="flex w-full justify-between items-center mt-1">
              <p className="font-bold text-base">HomePod mini</p>
              <p className="text-base font-bold">$ 239.00</p>
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
