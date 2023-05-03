import React from "react";
import family from "../assets/63e8c4e55b939fea169c0292_faq-min.png";
import cellphone from "../assets/63e8c4e6707380718425e697_onlie payment-min.png";
import delivery from "../assets/63e8c4e544663ba3d0fd2bb8_home delivery-min.png";

export const Services = () => {
  return (
    <section className="mt-10 lg:p-10 p-5 font-poppins">
      <h1 className="text-2xl font-bold">Services To Help You Shop</h1>
      <div className="grid xs:grid-cols-1 xm:grid-cols-2 grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        <div>
          <div className="rounded-lg overflow-hidden relative">
            <div className="absolute z-10 pointer-events-none pl-7 pt-7">
              <h1 className="font-bold text-2xl w-2/3">
                Frequently Asked Questions
              </h1>

              <p className="mt-5 w-2/3">
                Updates on safe Shopping on our Stores
              </p>
            </div>
            <img
              className="w-full h-full object-contain hover:scale-110 bg-gray-100 pt-60 duration-200"
              src={family}
              alt=""
            />
          </div>{" "}
        </div>
        <div>
          <div>
            <div className="rounded-lg overflow-hidden relative">
              <div className="absolute z-10 pointer-events-none pl-7 pt-7">
                <h1 className="font-bold text-2xl w-2/3">
                  Online Payment Process
                </h1>

                <p className="mt-5 w-2/3">
                  Updates on safe Shopping on our Stores
                </p>
              </div>
              <img
                className="w-full h-full object-contain hover:scale-110 bg-gray-100 pt-60 duration-200"
                src={cellphone}
                alt=""
              />
            </div>{" "}
          </div>{" "}
        </div>
        <div>
          <div>
            <div className="rounded-lg overflow-hidden relative">
              <div className="absolute z-10 pointer-events-none pl-7 pt-7">
                <h1 className="font-bold text-2xl w-2/3">
                  Home Delivery Options
                </h1>

                <p className="mt-5 w-2/3">
                  Updates on safe Shopping on our Stores
                </p>
              </div>
              <img
                className="w-full h-full object-contain hover:scale-110 bg-gray-100 pt-60 duration-200"
                src={delivery}
                alt=""
              />
            </div>{" "}
          </div>{" "}
        </div>
      </div>
      <div className="border-b border-gray-200 lg:mt-20 mt-16"></div>
    </section>
  );
};
