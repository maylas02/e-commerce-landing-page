import React from "react";
import sofa from "../assets/pexels-martin-péchy-1866149 (1).jpg";
import books from "../assets/pexels-emily-768125 (1).jpg";
import shirts from "../assets/pexels-polina-tankilevitch-3735641.jpg";
import bag from "../assets/pexels-pixabay-159497.jpg";

export const Discount = () => {
  return (
    <section className="font-poppins lg:p-10 p-5 mt-10">
      <h1 className="font-bold text-2xl pt-5">Get Up To 70% Off</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        <div className="rounded-lg overflow-hidden relative">
          <div className="absolute z-10 pointer-events-none p-5">
            <h1 className="font-bold text-2xl">Save</h1>
            <h1 className="flex text-4xl text-orange-800 font-bold mt-2">
              <span className="text-2xl">$</span> 100
            </h1>
            <p className="mt-5 text-sm">
              Explore Our Furniture & Home Furnishing Range
            </p>
          </div>
          <img
            className="w-full h-full object-contain hover:scale-110 duration-300 bg-pink-100 pt-44"
            src={sofa}
            alt=""
          />
        </div>
        <div className="rounded-lg overflow-hidden relative">
          <div className="absolute z-10 pointer-events-none p-5">
            <h1 className="font-bold text-2xl">Save</h1>
            <h1 className="flex text-4xl text-orange-800 font-bold mt-2">
              <span className="text-2xl">$</span> 29
            </h1>
            <p className="mt-5 text-sm">
              Explore Our Furniture & Home Furnishing Range
            </p>
          </div>
          <img
            className="w-full h-full object-contain hover:scale-110 duration-300 bg-red-100 pt-44"
            src={books}
            alt=""
          />
        </div>
        <div className="rounded-lg overflow-hidden relative">
          <div className="absolute z-10 pointer-events-none p-5 text-sm">
            <h1 className="font-bold text-2xl">Save</h1>
            <h1 className="flex text-4xl text-orange-800 font-bold mt-2">
              <span className="text-2xl">$</span> 67
            </h1>
            <p className="mt-5">
              Explore Our Furniture & Home Furnishing Range
            </p>
          </div>
          <img
            className="w-full h-full object-contain hover:scale-110 duration-300 bg-gray-100 pt-44"
            src={shirts}
            alt=""
          />
        </div>
        <div className="rounded-lg overflow-hidden relative">
          <div className="absolute z-10 pointer-events-none p-5">
            <h1 className="font-bold text-2xl">Save</h1>
            <h1 className="flex text-4xl text-orange-800 font-bold mt-2">
              <span className="text-2xl">$</span> 59
            </h1>
            <p className="mt-5 text-sm">
              Explore Our Furniture & Home Furnishing Range
            </p>
          </div>
          <img
            className="w-full h-full object-contain hover:scale-110 duration-300 bg-green-100 pt-44"
            src={bag}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
