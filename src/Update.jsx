import React, { useState } from "react";
import Navbelow from "./Navbelow";

const Update = () => {
  const [val, setsliderscroll] = useState(false);

  const updateval = () => {
    setsliderscroll(!val);
  };

  return (
    <>
      <div className="w-2 mt-2">
        <button
          className=" bg-gray-300 px-6 py-2 rounded-md ml-3 text-white text-xs font-bold"
          onClick={updateval}
        >
          All{" "}
        </button>
        {val && (
          <>
            <Navbelow></Navbelow>
          </>
        )}
      </div>
    </>
  );
};

export default Update;
