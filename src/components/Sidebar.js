import React from "react";
import { Link } from "react-router-dom";
import Customers from "./svg/Customers";
import HomeIcon from "./svg/HomeIcon";
import Logo from "./svg/Logo";
import Product from "./svg/Product";
import Speaker from "./svg/Speaker";

function Sidebar() {
  return (
    <div className="col-span-1 md:col-span-1 sm:col-span-1">
      <aside class="w-20 h-screen fixed" aria-label="Sidebar">
        <div class="overflow-y-auto py-4 px-3 bg-gray-50  dark:bg-gray-800 h-full">
          <ul class="h-full">
            <li className="">
              <a
                href=""
                class="flex items-center justify-center p-2 text-base font-normal text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mb-8"
              >
                <Logo />
              </a>
            </li>

            <li className="flex flex-col items-center my-8">
              <Link
                to="/"
                class="flex items-center justify-center px-2 text-base font-normal text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <HomeIcon />
              </Link>
              <div class="text-white text-xs">Home</div>
            </li>
            <li className="flex flex-col items-center my-8">
              <Link
                to="/campaign"
                class="flex items-center justify-center px-2 text-base font-normal text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Speaker />
              </Link>
              <div class="text-white text-xs">Campaign</div>
            </li>
            <li className="flex flex-col items-center my-8">
              <Link
                to="/chooseProduct"
                class="flex items-center justify-center px-2 text-base font-normal text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Product />
              </Link>
              <div class="text-white text-xs">Products</div>
            </li>
            <li className="flex flex-col items-center my-8">
              <a
                href="#"
                class="flex items-center justify-center px-2 text-base font-normal text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Customers />
              </a>
              <div class="text-white text-xs">Customers</div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
