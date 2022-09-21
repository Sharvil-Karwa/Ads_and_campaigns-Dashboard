import React from "react";

function Feature() {
  return (
    <button className="flex items-center px-2 py-1 border-2 border-[#F3F3F3] rounded-md m-2 hover:border-2 hover:border-blue-600">
      <div>
        <img
          src="https://www.labonelfinebaking.shop/wp-content/uploads/2021/02/CLASSIC-CHOCOLATE-CAKE-768x768.jpg"
          className="w-16 h-16 mr-1 rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <div className="font-semibold text-sm">Blueberry Cake Campaign</div>
        <div className="text-xs">Started on 14th July</div>
      </div>
    </button>
  );
}

export default Feature;
