import React from "react";
import furniture from "../assets/pexels-pixabay-276583-removebg-preview (1).png";
import bag from "../assets/pexels-mim-fathi-10919291-removebg-preview.png";
import books from "../assets/pexels-martin-de-arriba-7171398-removebg-preview.png";
import tech from "../assets/pexels-wallace-chuck-3587478-removebg-preview.png";
import sneakers from "../assets/pexels-mnz-1598505-removebg-preview.png";
import travel from "../assets/pexels-dids-1447474__1_-removebg-preview.png";

export const Categories = () => {
  return (
    <section className="mt-10 font-poppins">
      <h1 className="pl-5 lg:pl-10 pt-10 text-2xl font-poppins font-bold">
        Shop Our Top Categories
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-6 lg:p-10 p-5 gap-4 cursor-pointer">
        <div className="bg-gray-500 flex justify-center rounded-lg overflow-hidden lg:h-auto h-80">
          <div className="absolute mt-5 text-white text-2xl">Furniture</div>
          <img
            className="hover:scale-125 w-full h-full hover:duration-300 object-contain"
            src={furniture}
            alt=""
          />
        </div>

        <div className="flex justify-center bg-orange-300 rounded-lg overflow-hidden">
          <div className="absolute mt-5 text-white text-2xl">Hand Bag</div>
          <img
            className="object-contain hover:scale-125 w-full h-full hover:duration-300 "
            src={bag}
            alt=""
          />
        </div>

        <div className="flex justify-center bg-red-800 rounded-lg overflow-hidden">
          <div className="absolute mt-5 text-white text-2xl">Books</div>
          <img
            className="object-contain hover:scale-125 w-full h-full hover:duration-300  mr-10 mb-10"
            src={books}
            alt=""
          />
        </div>
        <div className="flex justify-center bg-green-400 rounded-lg overflow-hidden">
          <div className="absolute mt-5 text-white text-2xl">Tech</div>
          <img
            className="object-contain hover:scale-125 w-full h-full hover:duration-300 "
            src={tech}
            alt=""
          />
        </div>
        <div className="flex justify-center bg-red-200 rounded-lg overflow-hidden lg:h-auto h-80">
          <div className="absolute mt-5 text-white text-2xl">Sneakers</div>
          <img
            className="object-contain hover:scale-125 w-full h-full hover:duration-300 "
            src={sneakers}
            alt=""
          />
        </div>
        <div className="flex justify-center bg-orange-300 rounded-lg overflow-hidden">
          <div className="absolute mt-5 text-white text-2xl">Travel</div>
          <img
            className="object-contain ml-10 hover:scale-125 w-full h-full hover:duration-300 "
            src={travel}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
