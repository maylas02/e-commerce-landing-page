import React from "react";
import couch from "../assets/63e8c4e6cd3678e82164f755_furniture village-min.png";
import shirts from "../assets/63e8c4e6037f3b456acf2024_Fashion world-min.png";

export const Trending = () => {
  return (
    <section className="p-5 lg:p-10 mt-5 font-poppins">
      <h1 className="text-2xl font-bold">Trending Products For You!</h1>
      <div className="grid xs:grid-cols-1 xm:grid-cols-2 grid-cols-2 mt-5 gap-5">
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute z-10 bottom-5 left-5">
            <h1 className="font-bold lg:text-2xl text-lg">Furniture Village</h1>
            <p className="text-sm mt-1">Delivery with in 24 hours</p>
            <button className="mt-5 bg-gray-950 text-white px-5 py-2 rounded-full hover:bg-green-950 duration-500">
              Shop Now
            </button>
          </div>
          <img
            className="object-contain hover:scale-110 bg-gray-100 pb-44 w-full h-full duration-500"
            src={couch}
            alt=""
          />
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute z-10 bottom-5 left-5">
            <h1 className="font-bold lg:text-2xl text-lg">Fashion World</h1>
            <p className="text-sm mt-1">Delivery with in 24 hours</p>
            <button className="mt-5 bg-gray-950 text-white px-5 py-2 rounded-full hover:bg-green-950 duration-500">
              Shop Now
            </button>
          </div>
          <img
            className="object-contain hover:scale-110 bg-gray-100 pb-44 w-full h-full duration-500"
            src={shirts}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
