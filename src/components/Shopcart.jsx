import React from "react";
import { BsCartDash } from "react-icons/bs";
import { IoBriefcaseOutline } from "react-icons/io5";
import { AiOutlineGift } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import stripe from "../assets/63eb1ce8816711ebecac46d8_stripe.png";
import visa from "../assets/63eb1ce82d440b7ab84a993f_visa.png";
import mastercard from "../assets/63eb1ce8f032504012a5896b_Mastercard.png";
import amazon from "../assets/63e8c4e48b497e6ce846b7ff_Amazon.png";
import klarna from "../assets/63eb1f054e419e42aca4a9a2_Klarna.png";
import paypal from "../assets/63eb1ce7c4510cf9a55828a0_PayPal.png";
import applepay from "../assets/63e8c4e4707380264b25e680_ApplePay.png";
import googleplay from "../assets/63eb1f55dc68c5ee83d0cbf8_GooglePay.png";

export const Shopcart = () => {
  return (
    <footer className="mt-10 lg:p-10 p-5 font-poppins">
      <div className="lg:flex lg:justify-between grid grid-cols-2">
        <div className="lg:w-1/3  flex flex-col text-center">
          <div className="flex text-lg lg:text-4xl font-bold">
            <BsCartDash className="mr-3" /> Shopcart
          </div>
          <div className="mt-5">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className="mt-10">
            <h1 className="font-bold">Accepted Payments</h1>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 mt-5">
            <h1>stripe</h1>
            <h1>visa</h1>
            <h1>mastercard</h1>
            <h1>amazon</h1>
            <h1>klarna</h1>
            <h1>paypal</h1>
            <h1>applepay</h1>
            <h1>googleplay</h1>
          </div>
        </div>

        <div className=" lg:w-1/6 text-center">
          <div>
            <h1 className="font-bold text-lg">Department</h1>
          </div>
          <div>
            <p className="mt-3 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Fashion
            </p>
            <p className="mt-1 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Education Product
            </p>
            <p className="mt-1 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Frozen Food
            </p>
            <p className="mt-1 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Beverages
            </p>
            <p className="mt-1 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Organic Grocery
            </p>
            <p className="mt-1 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Office Suplies
            </p>
            <p className="mt-1 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Beauty Products
            </p>
            <p className="mt-1 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Books
            </p>
            <p className="mt-1 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Electronics & Gadget
            </p>
            <p className="mt-1 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Travel Accessories
            </p>
            <p className="mt-1 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Fitness
            </p>
            <p className="mt-1 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Sneakers
            </p>
            <p className="mt-1 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Toys
            </p>
            <p className="mt-1 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Furniture
            </p>
          </div>
        </div>
        <div className=" lg:w-1/6 text-center">
          <div>
            <h1 className="font-bold text-lg">About Us</h1>
          </div>
          <div>
            <p className="mt-3 text-md hover:indent-8 duration-500 hover:text-orange-500">
              About Shopcart
            </p>
            <p className="mt-1 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Careers
            </p>
            <p className="mt-1 text-md hover:indent-8 duration-500 hover:text-orange-500">
              News & Blog
            </p>
            <p className="mt-1 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Help
            </p>
            <p className="mt-1 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Press Center
            </p>
            <p className="mt-1 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Shop By Location
            </p>
            <p className="mt-1 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Shopcart Brands
            </p>
            <p className="mt-1 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Affiliate & Partners
            </p>
            <p className="mt-1 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Ideas & Guides
            </p>
          </div>
        </div>
        <div className=" lg:w-1/6 text-center">
          <div>
            <h1 className="font-bold text-lg">Services</h1>
          </div>
          <div>
            <p className="mt-3 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Gift Card
            </p>
            <p className="mt-3 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Mobile App
            </p>
            <p className="mt-3 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Shipping & Delivery
            </p>
            <p className="mt-3 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Order Pickup
            </p>
            <p className="mt-3 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Account Signup
            </p>
          </div>
        </div>
        <div className="lg:w-1/6 text-center">
          <div>
            <h1 className="font-bold text-lg">Help</h1>
          </div>
          <div>
            <p className="mt-3 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Shopcart Help
            </p>
            <p className="mt-1 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Returns
            </p>
            <p className="mt-1 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Track Orders
            </p>
            <p className="mt-1 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Contact Us
            </p>
            <p className="mt-1 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Feedback
            </p>
            <p className="mt-1 text-md hover:indent-8 duration-500 hover:text-orange-500">
              Security & Fraud
            </p>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-200 mt-10"></div>
      <div className="lg:flex grid grid-cols-1 lg:justify-between mt-10">
        <ul className="flex lg:w-1/3 w-full justify-between">
          <li className="flex items-center">
            <IoBriefcaseOutline className="mr-2" /> Become Seller
          </li>
          <li className="flex items-center">
            <AiOutlineGift className="mr-2" /> Gift Cards
          </li>
          <li className="flex items-center">
            <FiHelpCircle className="mr-2" /> Help Center
          </li>
        </ul>
        <ul className="flex w-full lg:mt-0 mt-5 lg:w-1/3 justify-around">
          <li>Terms of Service</li>
          <li>Privacy and Policy</li>
        </ul>
        <ul>
          <li className="mt-5 lg:mt-0 text-center">
            All Right reserved by Evandel | 2022
          </li>
        </ul>
      </div>
    </footer>
  );
};
