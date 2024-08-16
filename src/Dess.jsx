import React from "react";

const Dess = () => {
  const data = [
    {
      title: "Opportunity Discounts",
      body: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
    },
    {
      title: "Discount Codes",
      body: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
    },
    {
      title: "Free Delivery",
      body: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
    },
    {
      title: "Secure payment methods",
      body: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
    },
  ];

  return (
    <>
      <div className="w-full h-full ">
        <div className="grid  grid-2 sm:grid-cols-3 lg:grid-cols-4 bg-gray-100 mt-4 text-sm">
          {data.map((value, index) => (
            <div key={index} className="p-2 bg-white">
              <h2 className="text-base font-bold">{value.title}</h2>
              <p>{value.body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dess;
