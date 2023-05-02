import React, { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { RxCaretDown } from "react-icons/rx";
import { BsCartDash } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { TbShoppingCartPlus } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // <nav className="font-roboto">
    //   <div className="flex items-center bg-green-950 justify-between px-16  font-semibold tracking-wide text-sm py-1">
    //     <ul className="flex items-center bg-gray-200 px-3 py-1">
    //       <li className="mr-2">
    //         <BsTelephone />
    //       </li>
    //       <li>+001234567890</li>
    //     </ul>
    //     <ul className="flex text-xs items-center bg-gray-200 px-3 py-1 w-2/5 justify-between">
    //       <li>Get 50% Off on Selected Items</li>
    //       <li>|</li>
    //       <li>Shop Now</li>
    //     </ul>
    //     <ul className="flex items-center bg-gray-200 px-3 py-1 w-1/6 justify-between">
    //       <li>Eng</li>
    //       <li className="flex items-center">
    //         <button>
    //           <RxCaretDown />
    //         </button>
    //       </li>
    //       <li>Location</li>
    //       <li className="flex items-center">
    //         <button>
    //           <RxCaretDown />
    //         </button>
    //       </li>
    //     </ul>
    //   </div>

    //   <div className="flex justify-between px-16 w-full bg-gray-100 font-semibold">
    //     <ul className="bg-red-300 w-1/6 py-5">
    //       <li className="flex items-center text-3xl font-black tracking-wide">
    //         <BsCartDash className="mr-3 text-green-950" /> Shopcart
    //       </li>
    //     </ul>
    //     <ul className="flex items-center bg-red-300 w-3/5 justify-between px-5">
    //       <li className="flex items-center">
    //         Category <RxCaretDown />
    //       </li>
    //       <li>Deals</li>
    //       <li>What's new</li>
    //       <li>Delivery</li>
    //       <li>
    //         <input
    //           className="rounded-full px-5 py-2 placeholder:text-gray-400 placeholder:font-thin outline-blue-400"
    //           type="text"
    //           placeholder="Search Product"
    //         />
    //       </li>
    //     </ul>
    //     <ul className="flex bg-red-300 w-1/6 justify-between px-5">
    //       <li className="flex items-center">
    //         <VscAccount className="mr-2" /> Account
    //       </li>
    //       <li className="flex items-center">
    //         <TbShoppingCartPlus className="mr-2" /> Cart
    //       </li>
    //     </ul>
    //   </div>

    //   <div className="lg:hidden flex absolute top-7 right-10">
    //     <RxHamburgerMenu className="cursor-pointer" onClick={toggleMenu} />
    //   </div>

    //   {isMenuOpen && (
    //     <div className="md:flex w-full lg:hidden">
    //       <ul className="flex items-center bg-red-300 w-3/5 justify-between px-5">
    //         <li className="flex items-center">
    //           Category <RxCaretDown />
    //         </li>
    //         <li>Deals</li>
    //         <li>What's new</li>
    //         <li>Delivery</li>
    //         <li>
    //           <input
    //             className="rounded-full px-5 py-2 placeholder:text-gray-400 placeholder:font-thin outline-blue-400"
    //             type="text"
    //             placeholder="Search Product"
    //           />
    //         </li>
    //       </ul>
    //     </div>
    //   )}
    // </nav>
    <header>
      <nav className="font-roboto text-sm lg:p-0 p-2 bg-green-900 text-white">
        <div className="lg:flex lg:items-center lg:justify-between lg:px-10">
          <ul className="flex flex-col lg:flex-row lg:justify-between lg:w-1/2">
            <li className="flex justify-center items-center">
              <BsTelephone /> +001234567890
            </li>
            <li className="flex justify-center mt-2 mb-2 cursor-pointer">
              Get 50% Off on Selected Items | Shop Now
            </li>
          </ul>
          <ul className="flex gap-10 justify-center text-white">
            <li>
              <select
                className="bg-transparent cursor-pointer"
                name="language"
                id="language"
              >
                <option className="text-black" value="english">
                  English
                </option>
                <option className="text-black" value="filipino">
                  Filipino
                </option>
              </select>
            </li>
            <li>
              <select
                className="bg-transparent cursor-pointer"
                name="location"
                id="location"
              >
                <option className="text-black" value="usa">
                  USA
                </option>
                <option className="text-black" value="philippines">
                  Philippines
                </option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="font-roboto">
        <div className="flex justify-between px-5 py-5 lg:px-8">
          <ul>
            <li className="flex items-center text-3xl">
              <BsCartDash className="mr-2" /> Shopcart
            </li>
          </ul>
          <ul className="lg:flex lg:flex-row flex-col lg:justify-around justify-center items-center gap-5 hidden lg:w-3/5">
            <li>Category</li>
            <li>Deals</li>
            <li>What's New</li>
            <li>Delivery</li>
            <li>
              <input
                className="border px-5 py-2 rounded-full outline:border-amber-300"
                type="text"
                placeholder="Search Product"
              />
            </li>
          </ul>
          <ul className="flex lg:w-1/6 w-2/5 justify-between text-lg">
            <li className="flex items-center cursor-pointer hover:text-amber-500">
              <VscAccount className="mr-2" /> Account
            </li>
            <li className="flex items-center cursor-pointer hover:text-amber-500">
              <TbShoppingCartPlus className="mr-2" /> Cart
            </li>
          </ul>
          <ul className="flex items-center text-lg lg:hidden">
            <li className="cursor-pointer">
              <RxHamburgerMenu onClick={toggleMenu} />
            </li>
          </ul>
        </div>
        {isMenuOpen && (
          <div className="">
            <ul className="flex flex-col justify-center items-center gap-5">
              <li>Category</li>
              <li>Deals</li>
              <li>What's New</li>
              <li>Delivery</li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};
