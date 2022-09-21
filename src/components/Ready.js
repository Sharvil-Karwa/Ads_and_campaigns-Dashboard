import React from "react";
import Card from "./Card";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";
import Bulb from "./svg/Bulb";
import ChooseProducts from "./svg/ChooseProducts";
import SettingLogo from "./svg/SettingLogo";
import ReadyToGo from "./svg/ReadyToGo";

function Ready() {
  return (
    <div className="col-span-11 md:col-span-11 sm:col-span-11 flex flex-col">
      <NavBar />
      <div className="p-14 overflow-auto col-span-11 md:col-span-11 sm:col-span-11 flex flex-col">
        <div className="float-left">
          <div className="text-2xl font-bold">Your Ad Campaign</div>
          <div>Launch your ad in just 4 easy steps</div>
        </div>
        <div className="grid grid-cols-12 p-5">
          <div className="col-span-3 flex flex-col items-center">
            <Bulb />
            <div className="text-sm">What do you want to do</div>
          </div>
          <div className="col-span-3 flex flex-col items-center">
            <ChooseProducts shade="#F29A2E" />
            <div className="text-sm">Chose product</div>
          </div>
          <div className="col-span-3 flex flex-col items-center">
            <SettingLogo shade="#F29A2E" />
            <div className="text-sm">Campaign settings</div>
          </div>
          <div className="col-span-3 flex flex-col items-center">
            <ReadyToGo shade="#F29A2E" />
            <div className="text-sm">Ready to go</div>
          </div>
        </div>
        <div className="p-5 border-2 border-[#F3F3F3]">
          <div className="flex ">
            <div className="font-lg font-bold mr-1 mb-2">Ready to go</div>
            <div className="font-md">(Step 4 of 4)</div>
          </div>
          <hr />
          <div className="grid grid-cols-4 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div>
          <Link to="">
            <button className="bg-[#0F6EFF] py-3 px-10 rounded-md float-right my-2 text-white">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Ready;
