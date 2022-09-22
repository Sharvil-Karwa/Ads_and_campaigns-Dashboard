import React, { useState } from "react";
import PhoneCall from "./svg/PhoneCall";

function Feature2({ icon, title, content }) {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <button
      className={
        isActive
          ? "flex items-center px-2 py-2 border-2 border-blue-600 rounded-md m-2 hover:border-2 hover:border-blue-600"
          : "flex items-center px-2 py-2 border-2 border-[#F3F3F3] rounded-md m-2 hover:border-2 hover:border-blue-600"
      }
      onClick={toggleClass}
    >
      <div>
        {/* <img src={icon} className="w-16 h-16 mr-1 rounded-md" /> */}
        <PhoneCall />
      </div>
      <div className="flex flex-col text-left ml-2">
        <div className="font-semibold text-sm">{title}</div>
        <div className="text-xs">{content}</div>
      </div>
    </button>
  );
}

export default Feature2;
