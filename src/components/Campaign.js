import React from "react";
import Item from "./Item";

function Campaign() {
  return (
    <div className="p-14 overflow-auto flex flex-col">
      <div className="items-center">
        <div className="float-left">
          <div className="text-2xl font-bold">Your Campaigns</div>
          <div>Check the list of campaigns you created</div>
        </div>
        <div className="float-right">
          <button className="bg-blue-800 text-white p-2 rounded-md flex items-center">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M10.5 19.25C15.3125 19.25 19.25 15.3125 19.25 10.5C19.25 5.6875 15.3125 1.75 10.5 1.75C5.6875 1.75 1.75 5.6875 1.75 10.5C1.75 15.3125 5.6875 19.25 10.5 19.25Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 10.5H14"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 14V7"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Create new campaign
          </button>
        </div>
      </div>
      <div className="m-5 bg-red border-solid border-[#DAE6FF] border-2 p-4 rounded-md">
        <div className="grid grid-cols-11 m-2">
          <div className="flex items-center boder-solid border-2 py-1 rounded-md col-span-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-2"
            >
              <path
                d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
                stroke="#808080"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z"
                stroke="#808080"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Search for the campaign"
              className="outline-none border-none p-1 w-full"
            />
          </div>
          <div className="col-span-3" />
          <div className="col-span-4 flex items-center">
            <div className="relative lg:max-w-sm flex items-center mx-4">
              <label className="text-md mr-2">Platforms: </label>
              <select className=" font-semibold p-2.5  text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>All Platforms</option>
                <option>Lorem</option>
                <option>Ipsum</option>
                <option>Lorem Ipsum</option>
              </select>
            </div>
            <div className="relative lg:max-w-sm flex items-center mx-4">
              <label className="text-md mr-2">Status: </label>
              <select className="font-semibold  p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>All Status</option>
                <option>Lorem</option>
                <option>Ipsum</option>
                <option>Lorem Ipsum</option>
              </select>
            </div>
            <div className="relative lg:max-w-sm flex items-center">
              <select className="font-semibold p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Last 30 days</option>
                <option>Lorem</option>
                <option>Ipsum</option>
                <option>Lorem Ipsum</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-4 mx-2 bg-[#EAEAEA] p-2 rounded-md">
          <div className="col-span-1 flex items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="15"
                height="15"
                rx="2.5"
                stroke="#B3B3B3"
              />
            </svg>
            <div className="ml-2">On/Off</div>
          </div>
          <div className="col-span-3">Campaign</div>
          <div className="col-span-2">Date Range</div>
          <div className="col-span-1">Clicks</div>
          <div className="col-span-1">Budget</div>
          <div className="col-span-1">Location</div>
          <div className="col-span-1">Platform</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-1">Actions</div>
        </div>
        <div className="flex flex-col mx-2">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
}

export default Campaign;
