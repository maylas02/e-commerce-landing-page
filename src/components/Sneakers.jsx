import React from "react";
import sleeve from "../assets/63e8c4e68b497e229146b818_leptop sleeve-min.png";
import airpods from "../assets/63e8c4e4aed3c6720e446aa1_airpod max-min.png";
import laptop from "../assets/63e8c4e55cc9361a8ecce6d4_flower leptop sleeve-min.png";
import bottle from "../assets/63e8c4e78b497e3a5646b82f_water pot-min.png";
import macbook from "../assets/63e8c4e563db5560c31bbfce_leptop sleeve macbook-min.png";
import pro13 from "../assets/63e8c4e61eb4ad4af6e75689_macbook 13-min.png";
import homepod from "../assets/63e8c4e563db5507951bbfbe_homepad-mini-min.png";
import ipad from "../assets/63e8c4e64bd907adafd35b46_ipad mini-min.png";
import { BsStarFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

export const Sneakers = () => {
  return (
    <section className="grid xs:grid-cols-1 xm:grid-cols-2 grid-cols-2 lg:grid-cols-4 gap-5 p-5 lg:p-10 font-poppins">
      <div>
        <div className="bg-gray-100 rounded-lg h-60 relative overflow-hidden">
          <img
            className="object-contain w-full h-full hover:scale-125 duration-300"
            src={sleeve}
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
            src={airpods}
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
            src={laptop}
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
            src={bottle}
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
            src={macbook}
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
            src={pro13}
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
            src={homepod}
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
            src={ipad}
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
    </section>
  );
};
