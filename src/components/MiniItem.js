import React from "react";

function MiniItem() {
  return (
    <div className="flex items-center">
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
    </div>
  );
}

export default MiniItem;
