import React, { useState } from "react";
import * as Unicons from "@iconscout/react-unicons";

const Dess3 = () => {
  const [currIndex, setcurrIndex] = useState("");

  const mouseEnter = (index) => {
    setcurrIndex(index);
  };
  const mouseOut = () => {
    setcurrIndex(null);
  };

    const [count, setCount] = useState(1);

    const increment = () => {
      setCount(count + 1);
    };

    const decrement = () => {
      setCount(count - 1);
    };

    const data = [
      {
        title: "$980.80",
        body: "SAMSUNG 75_ Class QN85C Neo QLED 4K Smart TV QN75QN85CAFXZA 2023",
        para: "store",
        image: "ss1.png",

      },
      {
        title: "$312.25",
        body: "Lenovo IdeaPad 1i 15.6_, Intel Core i5-1235U, 8GB RAM",
        image: "ss2.png",
      },
      {
        title: "$175.45",
        body: "instax mini Evo Instant Digital Camera, Black",
        image: "ss3.png",
      },
      {
        title: "$71.15",
        body: "Apple Watch Series 9 GPS 45mm Midnight Aluminum Case with Midnight Sport Band – M_L",
        image: "ss4.png",
      },
      {
        title: "$190.99",
        body: "Apple iPhone 15 Pro Max 256GB Natural Titanium",
        image: "ss5.png",
      },
      {
        title: "$316.66",
        body: "Apple AirPods Max – Pink",
        image: "ss6.png",
      },
    ];

    return (
      <>
        <div className="flex w-full h-full justify-center">
          <div className="grid  grid-4 sm:grid-cols-5 lg:grid-cols-6 mt-4 text-sm">
            {data.map((value, index) => (
              <div
                key={index}
                className="w-full h-full flex flex-col justify-start items-center bg-white hover:border border-black rounded-lg py-10 px-2  "
                onMouseEnter={() => {
                  mouseEnter(index);
                
                }}
                onMouseLeave={() => {
                  mouseOut();
                }}
              >
                <Unicons.UilHeart className="ml-40 w-8 h-5 text-black" />
                {index=== currIndex && (
                    <div className="absolute mt-7 flex flex-col justify-end items-end animate-bounce">
                    <Unicons.UilEye  className="ml-40 w-8 h-6 text-black" />
                    <Unicons.UilShoppingBag  className="ml-40 w-8 h-6 text-black" />
                    </div>
                )}
                
               
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-20 h-16 rounded cursor-pointer"
                />
                <h2 className="text-lg text-green-500 mr-32 mt-8 font-bold">
                  {value.title}
                </h2>
                <p className="hover:underline">{value.body}</p>
                {index === currIndex && (

                  <div className="relative grid  grid-1 sm:grid-cols-2 mt-4 text-sm gap-2 rounded-lg">
                      <div className="flex flex-row justify-center gap-2 text-base border-2 border-black rounded-lg">
                      
                      <button onClick={decrement}>-</button>
                        <h1>{count}</h1>
                        <button onClick={increment}>+</button>
                      </div>
                  
                    <div className="flex">
                      <button className=" bg-white text-black text-xs px-2 py-2 border-2 border-solid border-black rounded-lg hover:bg-black hover:text-white">Add to cart</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
export default Dess3;
