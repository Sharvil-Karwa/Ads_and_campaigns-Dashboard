import React, { useState } from "react";
import MiniItem from "./MiniItem";
import Facebook from "./svg/Facebook";
import Google from "./svg/Google";
import Youtube from "./svg/Youtube";

function Item({
  src,
  createdOn,
  title,
  startDate,
  endDate,
  location,
  budget,
  clicks,
  platform,
}) {
  const [enabled, setEnabled] = useState(false);
  var date = new Date(startDate);
  var date2 = new Date(endDate);

  var platformIcon;

  switch (platform) {
    case 1:
      platformIcon = <Youtube />;
      break;
    case 2:
      platformIcon = <Facebook />;
      break;
    case 3:
      platformIcon = <Google />;
      break;
    default:
      platformIcon = <Youtube />;
      break;
  }

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
          <MiniItem src={src} createdOn={createdOn} title={title} />
        </div>
        <div className="col-span-2">
          {date.getDate()}/{date.getMonth()}/{date.getFullYear()} -{" "}
          {date2.getDate()}/{date2.getMonth()}/{date2.getFullYear()}
        </div>
        <div className="col-span-1">{clicks}</div>
        <div className="col-span-1">INR.{budget}</div>
        <div className="col-span-1">{location}</div>
        <div className="col-span-1">{platformIcon}</div>
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
