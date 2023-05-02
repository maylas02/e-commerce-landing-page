import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Gadgets } from "./Gadgets";

export const Best = () => {
  const [activeCategory, setActiveCategory] = useState("");

  const handleClick = (category) => {
    setActiveCategory(category);
  };

  const isActive = (category) => {
    return activeCategory === category ? "bg-green-950 text-white" : "";
  };

  return (
    <section className="p-5 font-poppins mt-10">
      <h1 className="text-2xl font-bold pt-5 lg:pl-10">
        Today's Best Deals For You!
      </h1>
      <div className="grid grid-cols-3 lg:pl-10 lg:w-4/5 lg:grid-cols-8 gap-3 mt-5">
        <button
          className={`border border-black px-5 py-2 rounded-full cursor-pointer ${isActive(
            "/"
          )}`}
          onClick={() => handleClick("/")}
        >
          <NavLink to="/"> Gadgets</NavLink>
        </button>
        <button
          className={`border border-black px-5 py-2 rounded-full cursor-pointer ${isActive(
            "/fashion"
          )}`}
          onClick={() => handleClick("/fashion")}
        >
          <NavLink to="/fashion"> Fashion</NavLink>
        </button>
        <button
          className={`border border-black px-5 py-2 rounded-full cursor-pointer ${isActive(
            "/toys"
          )}`}
          onClick={() => handleClick("/toys")}
        >
          <NavLink to="/toys"> Toys</NavLink>
        </button>
        <button
          className={`border border-black px-5 py-2 rounded-full cursor-pointer ${isActive(
            "/education"
          )}`}
          onClick={() => handleClick("/education")}
        >
          <NavLink to="/education"> Education</NavLink>
        </button>
        <button
          className={`border border-black px-5 py-2 rounded-full cursor-pointer ${isActive(
            "/beauty"
          )}`}
          onClick={() => handleClick("/beauty")}
        >
          <NavLink to="/beauty"> Beauty</NavLink>
        </button>
        <button
          className={`border border-black px-5 py-2 rounded-full cursor-pointer ${isActive(
            "/fitness"
          )}`}
          onClick={() => handleClick("/fitness")}
        >
          <NavLink to="/fitness"> Fitness</NavLink>
        </button>
        <button
          className={`border border-black px-5 py-2 rounded-full cursor-pointer ${isActive(
            "/furniture"
          )}`}
          onClick={() => handleClick("/furniture")}
        >
          <NavLink to="/furniture"> Furniture</NavLink>
        </button>
        <button
          className={`border border-black px-5 py-2 rounded-full cursor-pointer ${isActive(
            "/sneakers"
          )}`}
          onClick={() => handleClick("/sneakers")}
        >
          <NavLink to="/sneakers"> Sneakers</NavLink>
        </button>
      </div>
    </section>
  );
};
