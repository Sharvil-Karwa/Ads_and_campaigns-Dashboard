import React from "react";
import Feature2 from "./Feature2";
import NavBar from "./Navbar";
import Bulb from "./svg/Bulb";
import { Link } from "react-router-dom";
import ChooseProducts from "./svg/ChooseProducts";
import SettingLogo from "./svg/SettingLogo";
import ReadyToGo from "./svg/ReadyToGo";

function Campaign() {
  const featureData = [
    {
      icon: "https://cdn.shopify.com/s/files/1/0521/3929/4884/products/RedVelvetCake2.jpg?v=1632143753",
      title: "Get Leads as calls",
      content: "Reach broad audience and get leads as calls",
    },
    {
      icon: "https://cdn.shopify.com/s/files/1/0521/3929/4884/products/RedVelvetCake2.jpg?v=1632143753",
      title: "Get Leads as Facebook Messages",
      content: "Get more FB messages from Leads",
    },
    {
      icon: "https://cdn.shopify.com/s/files/1/0521/3929/4884/products/RedVelvetCake2.jpg?v=1632143753",
      title: "Increase page followers",
      content: "Encourage people to follow your page",
    },
    {
      icon: "https://cdn.shopify.com/s/files/1/0521/3929/4884/products/RedVelvetCake2.jpg?v=1632143753",
      title: "Get Customer Leads",
      content: "Reach broad audience and get leads as calls",
    },
    {
      icon: "https://cdn.shopify.com/s/files/1/0521/3929/4884/products/RedVelvetCake2.jpg?v=1632143753",
      title: "Get more Youtube views",
      content: "Increase organic views on your Youtube videos",
    },
    {
      icon: "https://cdn.shopify.com/s/files/1/0521/3929/4884/products/RedVelvetCake2.jpg?v=1632143753",
      title: "Get more Website Traffic",
      content: "Get the right traffic to your website",
    },
    {
      icon: "https://cdn.shopify.com/s/files/1/0521/3929/4884/products/RedVelvetCake2.jpg?v=1632143753",
      title: "Increase Live store traffic",
      content: "Drive visits to local store",
    },
    {
      icon: "https://cdn.shopify.com/s/files/1/0521/3929/4884/products/RedVelvetCake2.jpg?v=1632143753",
      title: "Increase App Installs",
      content: "Get more installs for your app",
    },
    {
      icon: "https://cdn.shopify.com/s/files/1/0521/3929/4884/products/RedVelvetCake2.jpg?v=1632143753",
      title: "Increase the catelogue sales",
      content: "Get more customers to your store",
    },
  ];

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
            <ChooseProducts shade="#ABB6C2" />
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
              What do you want to do?
            </div>
            <div className="font-md">(Step 1 of 4)</div>
          </div>
          <hr />
          <div className="grid grid-cols-3 gap-3">
            {featureData.map((feature) => (
              <Feature2
                title={feature.title}
                content={feature.content}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
        <div>
          <Link to="/chooseProduct">
            <button className="bg-[#0F6EFF] py-3 px-10 rounded-md float-right my-2 text-white">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Campaign;
