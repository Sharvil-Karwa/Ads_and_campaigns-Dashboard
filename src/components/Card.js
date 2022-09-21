import React from "react";

function Card() {
  return (
    <div className="p-4 border-2 border-[#cccccc] rounded-md">
      <div className="flex items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqum-KUGF97E4yWCBuANt1KfhnkC6pfRnmyA&usqp=CAU"
          className="h-10 w-10 rounded-full mr-2"
        />
        <div>
          <div className="font-semibold text-[#2B23A5]">Mukund Cake Shop</div>
          <div className="text-sm">Sponsored</div>
        </div>
      </div>
      <div className="my-2">
        We are the best bakery around you. Please like my page to get updates on
        exciting offers and discounts
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2014/02/16/14/11/muffins-267299__340.jpg"
        className="mb-1"
      />
      <div className="flex items-center justify-between">
        <div className="font-semibold text-[#2B23A5] text-sm">
          Mukund Cake Shop
        </div>
        <button className="bg-[#F6F7F9] border-2 border-[#CED0D4] py-1 px-3 rounded-md">
          Like
        </button>
      </div>
      <div className="flex items-center justify-between my-2">
        <buuton className="p-2 my-1 mr-2 bg-blue-200 text-[#0F6EFF] rounded-md">
          Change Image
        </buuton>
        <button className="p-2 my-1  bg-blue-200 text-[#0F6EFF] rounded-md">
          Change Text
        </button>
      </div>
    </div>
  );
}

export default Card;
