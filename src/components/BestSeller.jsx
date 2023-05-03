import React from "react";
import storeone from "../assets/63e8c4e62d65536b6a75698f_store one-min.png";
import storetwo from "../assets/63e8c4e74bd907803dd35b4f_store two-min.png";
import storethree from "../assets/63e8c4e668e3265021e48a0b_store three-min.png";
import storefour from "../assets/63e8c4e6eaf8537c8058cf04_store four-min.png";
import staples from "../assets/63e8c4e560afc2c49da53521_brand (3)-min.png";
import delivery from "../assets/63ea2d253a093c1dea9a21c7_Ellipse 287-1.png";
import bevmo from "../assets/63e8c4e51eb4ad92a3e75673_brand (7)-min.png";
import quicklly from "../assets/63ea2d25dddbd27c9eda91b5_Ellipse 287-3.png";
import { BsDot } from "react-icons/bs";
import { BsFillBookmarkHeartFill } from "react-icons/bs";

export const BestSeller = () => {
  return (
    <section className="mt-10 lg:p-10 p-5 font-poppins">
      <h1 className="text-2xl font-bold">Best Selling Store</h1>
      <div className="grid xs:grid-cols-1 xm:grid-cols-2 grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        <div className="">
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute z-10 bottom-5 left-5">
              <h1 className="font-bold text-lg">Staples</h1>
              <p className="text-sm mt-1 flex items-center">
                Bag <BsDot /> Perfume
              </p>
              <p className="mt-3 text-xs text-pink-500 flex items-center">
                <BsFillBookmarkHeartFill className="mr-3" />
                Delivery with in 24 hours
              </p>
            </div>
            <img
              className="object-contain hover:scale-110 bg-transparent pb-36 w-full h-full duration-500"
              src={storeone}
              alt=""
            />
            <img className="absolute bottom-28 left-6" src={staples} alt="" />
          </div>{" "}
        </div>
        <div className="">
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute z-10 bottom-5 left-5">
              <h1 className="font-bold text-lg">Now Delivery</h1>
              <p className="text-sm mt-1 flex items-center">
                Bag <BsDot /> Perfume
              </p>
              <p className="mt-3 text-xs text-pink-500 flex items-center">
                <BsFillBookmarkHeartFill className="mr-3" />
                Delivery with in 24 hours
              </p>
            </div>
            <img
              className="object-contain hover:scale-110 bg-transparent pb-36 w-full h-full duration-500"
              src={storetwo}
              alt=""
            />
            <img className="absolute bottom-28 left-6" src={delivery} alt="" />
          </div>{" "}
        </div>
        <div className="">
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute z-10 bottom-5 left-5">
              <h1 className="font-bold text-lg">Bevmo</h1>
              <p className="text-sm mt-1 flex items-center">
                Bag <BsDot /> Perfume
              </p>
              <p className="mt-3 text-xs text-pink-500 flex items-center">
                <BsFillBookmarkHeartFill className="mr-3" />
                Delivery with in 24 hours
              </p>
            </div>
            <img
              className="object-contain hover:scale-110 bg-transparent pb-36 w-full h-full duration-500"
              src={storethree}
              alt=""
            />
            <img className="absolute bottom-28 left-6" src={bevmo} alt="" />
          </div>{" "}
        </div>
        <div className="">
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute z-10 bottom-5 left-5">
              <h1 className="font-bold text-lg">Quicklly</h1>
              <p className="text-sm mt-1 flex items-center">
                Bag <BsDot /> Perfume
              </p>
              <p className="mt-3 text-xs text-pink-500 flex items-center">
                <BsFillBookmarkHeartFill className="mr-3" />
                Delivery with in 24 hours
              </p>
            </div>
            <img
              className="object-contain hover:scale-110 bg-transparent pb-36 w-full h-full duration-500"
              src={storefour}
              alt=""
            />
            <img className="absolute bottom-28 left-6" src={quicklly} alt="" />
          </div>{" "}
        </div>
      </div>
    </section>
  );
};
