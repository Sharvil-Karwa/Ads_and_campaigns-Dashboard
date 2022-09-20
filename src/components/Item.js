import React, { useState } from "react";
import MiniItem from "./MiniItem";

function Item() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="my-2">
      <div className="grid grid-cols-12 mt-1 p-2 items-center">
        <div className="col-span-1 flex items-center">
          <div class="form-check">
            <input
              class="h-4 w-4 border bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
            />
          </div>
          <div className="ml-2">
            <div className="flex flex-col ">
              <div className="flex">
                <label class="inline-flex relative items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={enabled}
                    readOnly
                  />
                  <div
                    onClick={() => {
                      setEnabled(!enabled);
                    }}
                    className="w-11 h-6 rounded-full peer bg-gray-200 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0F6EFF]"
                  ></div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <MiniItem />
        </div>
        <div className="col-span-2">25 jul 2020 - 01 Aug 2020</div>
        <div className="col-span-1">300</div>
        <div className="col-span-1">INR.3,400</div>
        <div className="col-span-1">Chennai</div>
        <div className="col-span-1">
          <svg
            width="26"
            height="18"
            viewBox="0 0 26 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.3301 3.88C25.3301 3.88 25.0802 2.12 24.3105 1.34C23.3409 0.32 22.2513 0.32 21.7415 0.26C18.173 0 12.805 0 12.805 0H12.795C12.795 0 7.4271 0 3.8385 0.26C3.3387 0.32 2.2491 0.32 1.2695 1.34C0.5098 2.12 0.2599 3.88 0.2599 3.88C0.2599 3.88 0 5.96 0 8.03V9.97C0 12.04 0.2599 14.11 0.2599 14.11C0.2599 14.11 0.5098 15.87 1.2795 16.65C2.2491 17.67 3.5286 17.64 4.0984 17.74C6.1476 17.94 12.795 18 12.795 18C12.795 18 18.1729 17.99 21.7515 17.73C22.2513 17.67 23.3409 17.67 24.3205 16.65C25.0902 15.87 25.3401 14.11 25.3401 14.11C25.3401 14.11 25.6 12.04 25.6 9.97V8.03C25.59 5.96 25.3301 3.88 25.3301 3.88ZM10.1561 12.32V5.13L17.0733 8.74L10.156 12.32H10.1561Z"
              fill="#E52D27"
            />
          </svg>
        </div>
        <div className="col-span-1">
          <span className="bg-green-300 text-green-900 rounded-full text-center py-1 px-4">
            Live
          </span>
        </div>
        <div className="col-span-1 flex items-center">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6026 3.15007L4.4188 10.7538C4.14755 11.0426 3.88505 11.6113 3.83255 12.0051L3.5088 14.8401C3.39505 15.8638 4.13005 16.5638 5.14505 16.3888L7.96255 15.9076C8.3563 15.8376 8.90755 15.5488 9.1788 15.2513L16.3626 7.64757C17.6051 6.33507 18.1651 4.83882 16.2313 3.01007C14.3063 1.19882 12.8451 1.83757 11.6026 3.15007Z"
              stroke="#0F6EFF"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.4038 4.4187C10.7801 6.8337 12.7401 8.67995 15.1726 8.92495"
              stroke="#0F6EFF"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.625 19.25H18.375"
              stroke="#0F6EFF"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-3"
          >
            <path
              d="M18.375 5.23242C15.4613 4.94367 12.53 4.79492 9.6075 4.79492C7.875 4.79492 6.1425 4.88242 4.41 5.05742L2.625 5.23242"
              stroke="#FC3F3F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.4375 4.34875L7.63 3.2025C7.77 2.37125 7.875 1.75 9.35375 1.75H11.6463C13.125 1.75 13.2387 2.40625 13.37 3.21125L13.5625 4.34875"
              stroke="#FC3F3F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.4937 7.99756L15.925 16.8088C15.8287 18.1826 15.75 19.2501 13.3087 19.2501H7.69122C5.24998 19.2501 5.17123 18.1826 5.07498 16.8088L4.50623 7.99756"
              stroke="#FC3F3F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.0387 14.4375H11.9524"
              stroke="#FC3F3F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.3125 10.9375H12.6875"
              stroke="#FC3F3F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Item;
