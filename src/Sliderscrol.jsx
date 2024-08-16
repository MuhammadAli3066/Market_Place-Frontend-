import React from "react";
import Slider from "./Silder";
import * as Unicons from "@iconscout/react-unicons";
const Sliderscrol = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col justify-start items-start px-2 w-1/5 border-solid border-[#d1d1d1] border-2 font-semibold cursor-pointer rounded-md">
          <a className="flex w-full text-start py-4 rounded-md hover:bg-[#f6f6f6]">
            <Unicons.UilMobileAndroid className=" justify-start w-8 h-6 text-gray-400" />
            Electronis
          </a>
          <a className="flex w-full text-start py-4 rounded-md hover:bg-[#f6f6f6]">
            <Unicons.UilGrin className=" justify-start w-8 h-6 text-gray-400" />
            Grocery & Fruits
          </a>
          <a className=" flex w-full text-start  py-4 rounded-md hover:bg-[#f6f6f6]">
            <Unicons.UilBedDouble className=" justify-start w-8 h-6 text-gray-400" />
            Home & Furniture
          </a>
          <a className="flex w-full text-start py-4 rounded-md hover:bg-[#f6f6f6]">
            <Unicons.UilHeart className=" justify-start w-8 h-6 text-gray-400" />
            Fashion & Accessories
          </a>
          <a className="flex w-full text-start py-4 rounded-md hover:bg-[#f6f6f6]">
            <Unicons.UilMoneyWithdraw className=" justify-start w-8 h-6 text-gray-400" />
            Beauty & Personal Care
          </a>
          <a className="flex w-full text-start py-4 rounded-md hover:bg-[#f6f6f6]">
            <Unicons.UilNinja className=" justify-start w-8 h-6 text-gray-400" />
            Pets
          </a>
          <a className="flex w-full text-start py-4 rounded-md hover:bg-[#f6f6f6]">
            <Unicons.UilKid className=" justify-start w-8 h-6 text-gray-400" />
            Baby & Kids
          </a>
          <a className="flex w-full text-start py-4 rounded-md hover:bg-[#f6f6f6]">
            <Unicons.UilDiceSix className=" justify-start w-8 h-6 text-gray-400" />
            Toys & Vedio Games
          </a>
          <a className="flex w-full text-start py-4 rounded-md hover:bg-[#f6f6f6]">
            <Unicons.UilMedkit className=" justify-start w-8 h-6 text-gray-400" />
            Health & Wellness
          </a>
          <a className="flex w-full text-start py-4 rounded-md hover:bg-[#f6f6f6]">
            <Unicons.UilHouseUser className=" justify-start w-8 h-6 text-gray-400" />
            Household & Essential
          </a>
          <a className="flex w-full text-start py-4 rounded-md hover:bg-[#f6f6f6]">
            <Unicons.UilGameStructure className=" justify-start w-8 h-6 text-gray-400" />
            Patio & Garden
          </a>
          <a className="flex w-full text-start py-4 rounded-md hover:bg-[#f6f6f6]">
            <Unicons.UilTableTennis className=" justify-start w-8 h-6 text-gray-400" />
            Sport & Outdoor
          </a>

          <hr className="w-full border-t border-gray-300" />

          <a className="w-full text-start py-4 rounded-md hover:bg-[#f6f6f6]">
            New Arrivals
          </a>
          <a className="w-full text-start py-4 rounded-md hover:bg-[#f6f6f6]">
            Best Seller Porducts
          </a>
          <a className="w-full text-start py-4 rounded-md hover:bg-[#f6f6f6]">
            50% Sale Porduct
          </a>
        </div>

        <div className="flex-col w-4/6">
          <Slider></Slider>
        </div>
      </div>
    </>
  );
};

export default Sliderscrol;
