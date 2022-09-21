import React from "react";
import Bell from "./svg/Bell";
import Crown from "./svg/Crown";
import Gift from "./svg/Gift";
import NavIcon from "./svg/NavIcon";

export default function NavBar() {
  return (
    <nav className="w-full ">
      <div className="float-right flex items-center  my-1">
        <div className="mr-2 font-sans text-sm">Free trial ends in 2 days</div>
        <button className="bg-[#fbd6a8] text-[#ff9d25]  flex flex-row items-center px-2 py-1 rounded-sm mx-4 text-lg">
          <Crown />
          Buy Plan
        </button>
        <Gift />
        <Bell />
        <div className="flex items-center mx-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqum-KUGF97E4yWCBuANt1KfhnkC6pfRnmyA&usqp=CAU"
            className="h-8 w-8 rounded-full mx-3"
          />
          <div className="">Mukund Cake Shop</div>
        </div>
        <NavIcon />
      </div>
    </nav>
  );
}
