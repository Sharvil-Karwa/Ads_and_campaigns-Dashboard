import React from "react";
import Feature from "./Feature";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";
import Bulb from "./svg/Bulb";
import Speaker from "./svg/Speaker";
import ReadyToGo from "./svg/ReadyToGo";
import SettingLogo from "./svg/SettingLogo";
import ChooseProducts from "./svg/ChooseProducts";

function ChooseProduct() {
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
            <SettingLogo shade="#ABB5C2" />
            <div className="text-sm">Campaign settings</div>
          </div>
          <div className="col-span-3 flex flex-col items-center">
            <ReadyToGo shade="#ABB5C2" />
            <div className="text-sm">Ready to go</div>
          </div>
        </div>
        <div className="p-5 border-2 border-[#F3F3F3]">
          <div className="flex ">
            <div className="font-lg font-bold mr-1 mb-2">
              Choose the Product
            </div>
            <div className="font-md">(Step 2 of 4)</div>
          </div>
          <hr />
          <div className="grid grid-cols-3 gap-3">
            <div className="flex items-center">
              <Feature />
              <div class="form-check">
                <input
                  class="h-4 w-4 border bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="flex items-center">
              <Feature />
              <div class="form-check">
                <input
                  class="h-4 w-4 border bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="flex items-center">
              <Feature />
              <div class="form-check">
                <input
                  class="h-4 w-4 border bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="flex items-center">
              <Feature />
              <div class="form-check">
                <input
                  class="h-4 w-4 border bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="flex items-center">
              <Feature />
              <div class="form-check">
                <input
                  class="h-4 w-4 border bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="flex items-center">
              <Feature />
              <div class="form-check">
                <input
                  class="h-4 w-4 border bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="flex items-center">
              <Feature />
              <div class="form-check">
                <input
                  class="h-4 w-4 border bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="flex items-center">
              <Feature />
              <div class="form-check">
                <input
                  class="h-4 w-4 border bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="flex items-center">
              <Feature />
              <div class="form-check">
                <input
                  class="h-4 w-4 border bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link to="/campaignSettings">
            <button className="bg-[#0F6EFF] py-3 px-10 rounded-md float-right my-2 text-white">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ChooseProduct;
