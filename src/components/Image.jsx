import React from "react";
import ecom from "../assets/final ecom.png";

export const Image = () => {
  return (
    <div className="relative text-green-950 font-roboto">
      <div className="absolute flex flex-col w-2/5 pl-10 inset-y-1/3 left-0">
        <div>
          <h2 className="font-black tracking-wide lg:text-7xl text-base">
            Shopping and Department Store.
          </h2>
          <p className="lg:mt-10 mt-2 lg:text-lg text-xs tracking-wide">
            Shopping is a bit of relaxing hobby for me, which is sometimes
            troubling for the bank balance.
          </p>
        </div>

        <div className="lg:mt-10 mt-5">
          <button className="bg-green-950 text-white lg:px-8 lg:py-3 rounded-full hover:bg-stone-900 text-xs lg:text-lg px-3 py-2">
            Learn More
          </button>
        </div>
      </div>
      <img className="h-1/2 w-full" src={ecom} alt="" />
    </div>
  );
};
