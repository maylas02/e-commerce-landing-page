import React from "react";
import ecom from "../assets/final ecom.png";

export const Image = () => {
  return (
    <div className="relative text-green-950 font-roboto">
      <div className="absolute xs:top-5 xs:p-5 xm:top-10 sm:top-14 lg:top-20 lg:left-10">
        <div className="w-2/3">
          <h2 className="font-bold tracking-wide xs:text-lg xm:text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Shopping and Department Store.
          </h2>
          <p className="xs:text-xs xs:mt-3 xm:text-sm sm:text-base md:text-lg lg:text-2xl font-semibold lg:mt-10">
            Shopping is a bit of relaxing hobby for me, which is sometimes
            troubling for the bank balance.
          </p>
        </div>

        <div className="xs:mt-3">
          <button className="bg-green-950 text-white rounded-full hover:bg-stone-900 xs:px-3 xs:py-1 xs:text-xs xm:py-2 sm:px-5 sm:py-2 sm:text-base lg:text-lg lg:mt-3">
            Learn More
          </button>
        </div>
      </div>
      <img
        className="h-1/2 w-full xs:border xs:border-b-gray-100 xs:pb-10"
        src={ecom}
        alt=""
      />
    </div>
  );
};
