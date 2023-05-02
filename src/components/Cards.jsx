import React from "react";
import cards from "../assets/63e8c4e768e3260571e48a0c_visa card-min.png";

export const Cards = () => {
  return (
    <section className="flex justify-around bg-pink-300 p-10 font-poppins mt-10">
      <div>
        <h1 className="lg:text-6xl text-3xl font-bold">Get 5% Cash Back</h1>
        <p className="mt-5">on Shopcart.com</p>
        <button className="px-5 py-2 rounded-full bg-green-950 text-white mt-5 hover:bg-gray-950">
          Learn More
        </button>
      </div>
      <div>
        <img className="lg:flex hidden" src={cards} alt="" />
      </div>
    </section>
  );
};
