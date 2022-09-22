import React from "react";

function MiniItem({ src, title, createdOn }) {
  var date = new Date(createdOn);
  return (
    <div className="flex items-center">
      <div>
        <img src={src} className="w-16 h-16 mr-1 rounded-md" />
      </div>
      <div className="flex flex-col">
        <div className="font-semibold text-sm">{title}</div>
        <div className="text-xs">
          Started on {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
        </div>
      </div>
    </div>
  );
}

export default MiniItem;
