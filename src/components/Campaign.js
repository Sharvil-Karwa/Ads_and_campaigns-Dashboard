import React, { useEffect, useState } from "react";
import Item from "./Item";
import NavBar from "./Navbar";
import CheckboxIcon from "./svg/CheckboxIcon";
import PlusCircle from "./svg/PlusCircle";
import SearchIcon from "./svg/SearchIcon";
import { Link } from "react-router-dom";
import axios from "axios";

function Campaign() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    axios
      .get("https://zocket-task-backend.herokuapp.com/api/posts")
      .then((res) => {
        console.log(res);
        setMenu(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // async await with axios

  return (
    <div className="col-span-11 md:col-span-11 sm:col-span-11 flex flex-col">
      <NavBar />
      <div className="p-14 overflow-auto col-span-11 md:col-span-11 sm:col-span-11 flex flex-col">
        <div className="items-center">
          <div className="float-left">
            <div className="text-2xl font-bold">Your Campaigns</div>
            <div>Check the list of campaigns you created</div>
          </div>
          <div className="float-right">
            <Link to="/campaign">
              <button className="bg-blue-800 text-white p-2 rounded-md flex items-center">
                <PlusCircle />
                Create new campaign
              </button>
            </Link>
          </div>
        </div>
        <div className="m-5 bg-red border-solid border-[#DAE6FF] border-2 p-4 rounded-md">
          <div className="grid grid-cols-11 m-2">
            <div className="flex items-center boder-solid border-2 py-1 rounded-md col-span-3">
              <SearchIcon />
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
              <CheckboxIcon />
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
            {menu.map((item) => (
              <Item
                startDate={item.startDate}
                endDate={item.endDate}
                location={item.location}
                budget={item.budget}
                clicks={item.clicks}
                title={item.title}
                src={item.src}
                createdOn={item.createdOn}
                platform={item.platform}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campaign;
