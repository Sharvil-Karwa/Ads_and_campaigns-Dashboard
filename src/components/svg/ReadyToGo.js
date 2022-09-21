import React from "react";

function ReadyToGo({ shade }) {
  return (
    <div>
      <svg
        width="44"
        height="44"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.938232 12.2839C0.938232 5.83475 6.16629 0.606689 12.6154 0.606689C19.0646 0.606689 24.2926 5.83475 24.2926 12.2839C24.2926 18.733 19.0646 23.9611 12.6154 23.9611C6.16629 23.9611 0.938232 18.733 0.938232 12.2839ZM11.9487 17.2827L18.6727 8.87775L17.4569 7.90513L11.7252 15.0698L7.66448 11.6858L6.66774 12.8819L11.9487 17.2827Z"
          fill={shade}
        />
      </svg>
    </div>
  );
}

export default ReadyToGo;
