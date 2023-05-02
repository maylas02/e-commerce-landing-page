import React from "react";
import sofa from "../assets/pexels-mike-b-198272.jpg";

export const Cashback = () => {
  return (
    <section className="mt-10 transform transition duration-100 overflow-hidden w-full relative">
      <div className="absolute bg-green-950 text-white top-2 right-12 lg:top-20 lg:right-20 w-96 h-auto p-10 font-poppins">
        <h1 className="lg:text-5xl text-xl font-bold">
          Get 5% Cash Back On $200
        </h1>
        <p className="mt-5 lg:text-xl text-sm">
          Shopping is a bit of relaxing hobby for me, which is sometimes
          troubling for the bank balance.
        </p>
        <button className="lg:mt-10 mt-5 px-4 py-2 border border-white lg:px-7 lg:py-4 rounded-full hover:bg-gray-950 hover:border-transparent duration-500">
          Learn More
        </button>
      </div>
      <img className="" src={sofa} alt="" />
    </section>
  );
};
