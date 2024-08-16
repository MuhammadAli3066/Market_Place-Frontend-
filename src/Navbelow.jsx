import React from "react";
import * as Unicons from "@iconscout/react-unicons";
const Sliderscrol = () => {
  return (
    <>
      <div className="absolute flex top-48 bottom-48 h-1/2 overflow-scroll z-10 justify-center bg-white">
        <div className="flex flex-col  justify-start items-start w-3/4 text-xs font-semibold cursor-pointer rounded-md">
          <a className="flex w-full text-start py-2 rounded-md hover:bg-[#f6f6f6]">
            <Unicons.UilMobileAndroid className=" justify-start w-8 h-6 text-gray-400" />
            Electronis
          </a>
          <a className="flex w-full text-start py-2 rounded-md hover:bg-[#f6f6f6]">
            <Unicons.UilGrin className=" justify-start w-8 h-6 text-gray-400" />
            Grocery & Fruits
          </a>
          <a className=" flex w-full text-start  py-2 rounded-md hover:bg-[#f6f6f6]">
            <Unicons.UilBedDouble className=" justify-start w-8 h-6 text-gray-400" />
            Home & Furniture
          </a>
          <a className="flex w-full text-start py-2 rounded-md hover:bg-[#f6f6f6]">
            <Unicons.UilHeart className=" justify-start w-8 h-6 text-gray-400" />
            Fashion & Accessories
          </a>
          <a className="flex w-full text-start py-2 rounded-md hover:bg-[#f6f6f6]">
            <Unicons.UilMoneyWithdraw className=" justify-start w-8 h-6 text-gray-400" />
            Beauty & Personal Care
          </a>
          <a className="flex w-full text-start py-2 rounded-md hover:bg-[#f6f6f6]">
            <Unicons.UilNinja className=" justify-start w-8 h-6 text-gray-400" />
            Pets
          </a>
          <a className="flex w-full text-start py-2 rounded-md hover:bg-[#f6f6f6]">
            <Unicons.UilKid className=" justify-start w-8 h-6 text-gray-400" />
            Baby & Kids
          </a>
          <a className="flex w-full text-start py-2 rounded-md hover:bg-[#f6f6f6]">
            <Unicons.UilDiceSix className=" justify-start w-8 h-6 text-gray-400" />
            Toys & Vedio Games
          </a>
          <a className="flex w-full text-start py-2 rounded-md hover:bg-[#f6f6f6]">
            <Unicons.UilMedkit className=" justify-start w-8 h-6 text-gray-400" />
            Health & Wellness
          </a>
          <a className="flex w-full text-start py-2 rounded-md hover:bg-[#f6f6f6]">
            <Unicons.UilHouseUser className=" justify-start w-8 h-6 text-gray-400" />
            Household & Essential
          </a>
          <a className="flex w-full text-start py-2 rounded-md hover:bg-[#f6f6f6]">
            <Unicons.UilGameStructure className=" justify-start w-8 h-6 text-gray-400" />
            Patio & Garden
          </a>
          <a className="flex w-full text-start py-2 rounded-md hover:bg-[#f6f6f6]">
            <Unicons.UilTableTennis className=" justify-start w-8 h-6 text-gray-400" />
            Sport & Outdoor
          </a>
        </div>
      </div>
    </>
  );
};

export default Sliderscrol;
