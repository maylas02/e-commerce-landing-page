import React from "react";
import staples from "../assets/63e8c4e560afc2c49da53521_brand (3)-min.png";
import sprouts from "../assets/63e8c4e58b497e41aa46b801_brand (8)-min.png";
import outlet from "../assets/63e8c4e5eaf8533b0958cefe_brand (5)-min.png";
import stones from "../assets/63e8c4e454ac2e9d497cb531_brand (6)-min.png";
import basement from "../assets/63e8c4e4707380971125e685_brand (4)-min.png";
import store from "../assets/63e8c4e460afc2193aa53511_brand (2)-min.png";
import target from "../assets/63e8c4e4c21faa5e03c209c5_brand (1)-min.png";
import bevmo from "../assets/63e8c4e51eb4ad92a3e75673_brand (7)-min.png";

export const Choose = () => {
  return (
    <section className="mt-10 lg:p-10 p-5 text-2xl font-poppins">
      <h1 className="font-bold">Choose By Brand</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        <div className="hover:border hover:border-black flex rounded-lg justify-center items-center p-3 bg-gray-200 hover:static border-transparent border">
          <div className="mr-5">
            <img
              className="hover:scale-110 duration-100"
              src={staples}
              alt=""
            />
          </div>
          <div>
            <h1 className="font-bold text-base">Staples</h1>
            <p className="text-xs">Delivery with in 24 hours</p>
          </div>
        </div>
        <div className="hover:border hover:border-black flex rounded-lg justify-center items-center p-3 bg-gray-200 hover:static border-transparent border">
          <div className="mr-5">
            <img
              className="hover:scale-110 duration-100"
              src={sprouts}
              alt=""
            />
          </div>
          <div>
            <h1 className="font-bold text-base">Sprouts</h1>
            <p className="text-xs">Delivery with in 24 hours</p>
          </div>
        </div>
        <div className="hover:border hover:border-black flex rounded-lg justify-center items-center p-3 bg-gray-200 hover:static border-transparent border">
          <div className="mr-5">
            <img className="hover:scale-110 duration-100" src={outlet} alt="" />
          </div>
          <div>
            <h1 className="font-bold text-base">Grocery outlet</h1>
            <p className="text-xs">Delivery with in 24 hours</p>
          </div>
        </div>
        <div className="hover:border hover:border-black flex rounded-lg justify-center items-center p-3 bg-gray-200 hover:static border-transparent border">
          <div className="mr-5">
            <img className="hover:scale-110 duration-100" src={stones} alt="" />
          </div>
          <div>
            <h1 className="font-bold text-base">Mollie stones</h1>
            <p className="text-xs">Delivery with in 24 hours</p>
          </div>
        </div>
        <div className="hover:border hover:border-black flex rounded-lg justify-center items-center p-3 bg-gray-200 hover:static border-transparent border">
          <div className="mr-5">
            <img
              className="hover:scale-110 duration-100"
              src={basement}
              alt=""
            />
          </div>
          <div>
            <h1 className="font-bold text-base">Sports Basement</h1>
            <p className="text-xs">Delivery with in 24 hours</p>
          </div>
        </div>
        <div className="hover:border hover:border-black flex rounded-lg justify-center items-center p-3 bg-gray-200 hover:static border-transparent border">
          <div className="mr-5">
            <img className="hover:scale-110 duration-100" src={store} alt="" />
          </div>
          <div>
            <h1 className="font-bold text-base">Container Store</h1>
            <p className="text-xs">Delivery with in 24 hours</p>
          </div>
        </div>
        <div className="hover:border hover:border-black flex rounded-lg justify-center items-center p-3 bg-gray-200 hover:static border-transparent border">
          <div className="mr-5">
            <img className="hover:scale-110 duration-100" src={target} alt="" />
          </div>
          <div>
            <h1 className="font-bold text-base">Target</h1>
            <p className="text-xs">Delivery with in 24 hours</p>
          </div>
        </div>
        <div className="hover:border hover:border-black flex rounded-lg justify-center items-center p-3 bg-gray-200 hover:static border-transparent border">
          <div className="mr-5">
            <img className="hover:scale-110 duration-100" src={bevmo} alt="" />
          </div>
          <div>
            <h1 className="font-bold text-base">Bevmo!</h1>
            <p className="text-xs">Delivery with in 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};
