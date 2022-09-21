import React from "react";
import Feature from "./Feature";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";
import Bulb from "./svg/Bulb";
import SettingLogo from "./svg/SettingLogo";
import ChooseProductS from "./svg/ChooseProducts";
import ReadyToGo from "./svg/ReadyToGo";

function Settings() {
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
          <div className="col-span-3 flex flex-col  items-center">
            <ChooseProductS shade="#F29A2E" />
            <div className="text-sm">Chose product</div>
          </div>
          <div className="col-span-3 flex flex-col items-center">
            <SettingLogo shade="#F29A2E" />
            <div className="text-sm">Campaign settings</div>
          </div>
          <div className="col-span-3 flex flex-col items-center">
            <ReadyToGo shade="#ABB5C2" />
            <div className="text-sm">Ready to go</div>
          </div>
        </div>
        <div className="p-5 border-2 border-[#F3F3F3]">
          <div className="flex ">
            <div className="font-lg font-bold mr-1 mb-2">Campaign Settings</div>
            <div className="font-md">(Step 3 of 4)</div>
          </div>
          <hr />
          <div>
            <div>
              <div className="flex items-center my-2">
                <span className="bg-blue-700 text-white py-1 px-3 rounded-full  font-serif">
                  1
                </span>
                <div className="underline ml-2 font-semibold">
                  Budget and dates info
                </div>
              </div>
              <div className="my-4 mx-8">
                <div className="font-semibold">Budget Timeline</div>
                <div className="rounded-full">
                  <button className="bg-blue-700 rounded-full px-2 py-1 mr-2 text-white">
                    Lifetime
                  </button>
                  <button className="bg-gray-300 rounded-full px-2 py-1">
                    Daily
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 my-4 ml-8 mr-16">
                <div className="flex flex-col">
                  <label className="font-semibold">Start Date</label>
                  <input
                    type="date"
                    className="border-2 border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-semibold">End Date</label>
                  <input
                    type="date"
                    className="border-2 border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>

              <div className="ml-8 mr-16">
                <label for="default-range" className="block mb-2 font-semibold">
                  Default range
                </label>
                <input
                  id="default-range"
                  type="range"
                  value="50"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
            <div className="my-8">
              <div className="flex items-center my-2">
                <span className="bg-blue-700 text-white py-1 px-3 rounded-full  font-serif">
                  2
                </span>
                <div className="underline ml-2 font-semibold">
                  Location Info
                </div>
              </div>
              <div className="my-4 mx-8">
                <div className="font-semibold">Location Type</div>
                <div className="rounded-full">
                  <button className="bg-blue-700 rounded-full px-2 py-1 mr-2 text-white">
                    Location
                  </button>
                  <button className="bg-gray-300 rounded-full px-2 py-1">
                    Radius
                  </button>
                </div>
              </div>

              <div className=" my-4 ml-8 mr-16">
                <div className="flex flex-col">
                  <label className="font-semibold">Select Location</label>
                  <input
                    type="text"
                    className="border-2 border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>

              <div className="ml-8 mr-16">
                <label for="default-range" className="block mb-2 font-semibold">
                  Default range
                </label>
                <input
                  id="default-range"
                  type="range"
                  value="50"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <Link to="/readyToGo">
          <button className="bg-[#0F6EFF] py-3 px-10 rounded-md float-right my-2 text-white">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Settings;
