import React from "react";

export default function NavBar() {
  return (
    <nav className="w-full">
      <div className="float-right flex items-center  my-1">
        <div className="mr-2 font-sans text-sm">Free trial ends in 2 days</div>
        <button className="bg-[#fbd6a8] text-[#ff9d25]  flex flex-row items-center px-2 py-1 rounded-sm mx-4 text-lg">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M4.3526 5.67214L8.11136 0.00170898L12.1033 5.67214L8.11136 8.79088L4.3526 5.67214Z"
              fill="#FF8C00"
            />
            <path
              d="M0 2.46582L1.03451 11.3201H11.9198L0 2.46582Z"
              fill="#FEC400"
            />
            <path
              d="M16 2.66748L14.9894 11.3199H4.35199L16 2.66748Z"
              fill="#EDA500"
            />
            <path
              d="M14.8562 12.0635H1.2356V15.0002H14.8562V12.0635Z"
              fill="#FF8C00"
            />
          </svg>
          Buy Plan
        </button>
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-3"
        >
          <path
            d="M16.6417 8.33325H3.30835V14.9999C3.30835 17.4999 4.14168 18.3333 6.64168 18.3333H13.3084C15.8084 18.3333 16.6417 17.4999 16.6417 14.9999V8.33325Z"
            stroke="#1B3F67"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.9166 5.83341V6.66675C17.9166 7.58341 17.475 8.33341 16.25 8.33341H3.74998C2.47498 8.33341 2.08331 7.58341 2.08331 6.66675V5.83341C2.08331 4.91675 2.47498 4.16675 3.74998 4.16675H16.25C17.475 4.16675 17.9166 4.91675 17.9166 5.83341Z"
            stroke="#1B3F67"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.69998 4.16662H5.09998C4.81665 3.85828 4.82498 3.38328 5.12498 3.08328L6.30832 1.89995C6.61665 1.59162 7.12498 1.59162 7.43332 1.89995L9.69998 4.16662Z"
            stroke="#1B3F67"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.8917 4.16662H10.2917L12.5584 1.89995C12.8667 1.59162 13.375 1.59162 13.6834 1.89995L14.8667 3.08328C15.1667 3.38328 15.175 3.85828 14.8917 4.16662Z"
            stroke="#1B3F67"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.45001 8.33325V12.6166C7.45001 13.2833 8.18335 13.6749 8.74168 13.3166L9.52501 12.7999C9.80835 12.6166 10.1667 12.6166 10.4417 12.7999L11.1833 13.2999C11.7333 13.6666 12.475 13.2749 12.475 12.6083V8.33325H7.45001Z"
            stroke="#1B3F67"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle cx="17.5" cy="3.5" r="3" fill="#FF5050" stroke="white" />
        </svg>

        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-3"
        >
          <path
            d="M10.0167 2.42505C7.25834 2.42505 5.01668 4.66672 5.01668 7.42505V9.83338C5.01668 10.3417 4.80001 11.1167 4.54168 11.55L3.58335 13.1417C2.99168 14.125 3.40001 15.2167 4.48335 15.5834C8.07501 16.7834 11.95 16.7834 15.5417 15.5834C16.55 15.25 16.9917 14.0584 16.4417 13.1417L15.4833 11.55C15.2333 11.1167 15.0167 10.3417 15.0167 9.83338V7.42505C15.0167 4.67505 12.7667 2.42505 10.0167 2.42505Z"
            stroke="#1B3F67"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M11.5583 2.6667C11.3 2.5917 11.0333 2.53337 10.7583 2.50003C9.95831 2.40003 9.19164 2.45837 8.47498 2.6667C8.71664 2.05003 9.31664 1.6167 10.0166 1.6167C10.7166 1.6167 11.3166 2.05003 11.5583 2.6667Z"
            stroke="#1B3F67"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.5167 15.8833C12.5167 17.2583 11.3917 18.3833 10.0167 18.3833C9.33333 18.3833 8.7 18.1 8.25 17.65C7.8 17.2 7.51666 16.5666 7.51666 15.8833"
            stroke="#1B3F67"
            stroke-width="1.5"
            stroke-miterlimit="10"
          />
          <circle cx="13.5" cy="3.5" r="3" fill="#FF5050" stroke="white" />
        </svg>

        <div className="flex items-center mx-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqum-KUGF97E4yWCBuANt1KfhnkC6pfRnmyA&usqp=CAU"
            className="h-8 w-8 rounded-full mx-3"
          />
          <div className="">Mukund Cake Shop</div>
        </div>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-3"
        >
          <path
            d="M18.0645 17.6761L15.9265 13.4116L13.7898 17.6761"
            stroke="#1B3F67"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.1794 16.917H17.6951"
            stroke="#1B3F67"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.9265 21.0012C14.9231 21.0012 13.9422 20.7036 13.1078 20.1461C12.2735 19.5887 11.6232 18.7963 11.2392 17.8692C10.8552 16.9422 10.7548 15.9221 10.9505 14.9379C11.1463 13.9538 11.6295 13.0498 12.339 12.3402C13.0485 11.6307 13.9525 11.1475 14.9367 10.9517C15.9209 10.756 16.941 10.8564 17.868 11.2404C18.7951 11.6244 19.5874 12.2747 20.1449 13.109C20.7024 13.9434 20.9999 14.9243 20.9999 15.9277C20.9999 17.2733 20.4654 18.5637 19.514 19.5152C18.5625 20.4666 17.2721 21.0012 15.9265 21.0012V21.0012Z"
            stroke="#1B3F67"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.04285 1.02819H7.95721C10.0249 1.02819 11.0243 2.02627 10.9732 4.04415V7.95851C11.05 8.37134 11.0251 8.79667 10.9007 9.19774C10.7763 9.59881 10.5561 9.96357 10.2592 10.2605C9.96227 10.5574 9.59752 10.7776 9.19645 10.902C8.79538 11.0264 8.37005 11.0513 7.95721 10.9745H4.04285C2.02497 11.0154 1.02689 10.016 1.02689 7.94828V4.03393C0.968215 3.62466 1.00586 3.20734 1.13684 2.81518C1.26782 2.42303 1.48852 2.06685 1.78137 1.77499C2.07422 1.48313 2.43114 1.26365 2.82375 1.134C3.21635 1.00435 3.63379 0.968121 4.04285 1.02819V1.02819Z"
            stroke="#1B3F67"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.02747 4.87354H3.97253"
            stroke="#1B3F67"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.99048 4.1936V4.87092"
            stroke="#1B3F67"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.00775 4.86328C7.02248 5.68654 6.71018 6.48206 6.13932 7.07544C5.56846 7.66881 4.78562 8.01164 3.9624 8.02876"
            stroke="#1B3F67"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.0276 8.02881C7.66191 8.01829 7.30389 7.92146 6.98274 7.74623C6.6616 7.571 6.38643 7.32233 6.17969 7.02051"
            stroke="#1B3F67"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.02686 14.011C1.02619 14.9292 1.20654 15.8385 1.5576 16.6869C1.90866 17.5353 2.42354 18.3062 3.07279 18.9554C3.72204 19.6047 4.49292 20.1196 5.34134 20.4706C6.18976 20.8217 7.09906 21.002 8.01724 21.0014L6.96932 19.2506"
            stroke="#1B3F67"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 8.01846C21.0007 7.10028 20.8203 6.19098 20.4693 5.34256C20.1182 4.49415 19.6033 3.72326 18.9541 3.07401C18.3048 2.42476 17.534 1.90988 16.6855 1.55882C15.8371 1.20776 14.9278 1.02741 14.0096 1.02808L15.0588 2.77631"
            stroke="#1B3F67"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </nav>
  );
}
