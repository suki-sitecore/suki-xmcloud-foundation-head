import React from 'react';

export const HeaderTop = (): JSX.Element => {
  return (
    <div className="header-top">
      <div className="header-top-left">
        <ul className="header-top-links">
          <li>
            <a href="#">Services & Events</a>
          </li>
          <li>
            <a href="#">MECCA Memo</a>
          </li>
          <li>
            <a href="#">Stores</a>
          </li>
        </ul>
      </div>
      <div className="header-top-main">
        <div className="header-top-logo">
          <a href="/">
            <img
              src="https://contenthub-delivery.mecca.com/api/public/content/mecca-logo-black-outline-1FSgra4HSU6S4DsMHBbDVQ.png?v=be5cf298"
              alt="MECCA Logo will take you to homepage on click"
            />
          </a>
        </div>
      </div>
      <div className="header-top-right">
        <ul className="header-top-icon-links">
          <li>
            <a href="#">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                aria-label="Account"
                focusable="false"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.99991 1.47783C6.03038 1.47783 4.43376 3.12754 4.43376 5.16256C4.43376 7.19758 6.03038 8.84728 7.99991 8.84728C9.96944 8.84728 11.5661 7.19758 11.5661 5.16256C11.5661 3.12754 9.96944 1.47783 7.99991 1.47783ZM3.00348 5.16256C3.00348 2.31136 5.24046 0 7.99991 0C10.7594 0 12.9963 2.31136 12.9963 5.16256C12.9963 8.01376 10.7594 10.3251 7.99991 10.3251C5.24046 10.3251 3.00348 8.01376 3.00348 5.16256Z"
                  fill="black"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.99991 10.3251C4.25909 10.3251 1.43027 12.9681 1.43027 16H0C0 11.9383 3.69305 8.84728 7.99991 8.84728C12.3075 8.84728 16 11.9489 16 16H14.5697C14.5697 12.9773 11.74 10.3251 7.99991 10.3251Z"
                  fill="black"
                ></path>
              </svg>
              <span className="visually-hidden">Account</span>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                aria-label="Wishlist"
                focusable="false"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.4402 1.86302C10.6138 1.92224 9.59734 2.38159 8.52558 3.60994L7.99811 4.21447L7.47063 3.60994C6.39874 2.38143 5.38283 1.92225 4.55741 1.86316C3.73339 1.80417 2.98176 2.13467 2.40592 2.71602C1.22185 3.91144 0.933686 5.97422 2.28295 7.35323L7.99773 12.6336L13.7138 7.34372C15.0664 5.96966 14.7794 3.90999 13.5942 2.71529C13.0178 2.1344 12.2652 1.80388 11.4402 1.86302ZM14.5895 1.77097C16.1864 3.38059 16.6914 6.29089 14.6992 8.29811L14.6889 8.30845L7.99848 14.5L1.30683 8.31705L1.29575 8.30583C-0.689688 6.29453 -0.185805 3.38342 1.40983 1.7725C2.22539 0.949129 3.36323 0.417922 4.65865 0.510653C5.77092 0.590272 6.91236 1.12302 7.99812 2.17315C9.08412 1.12292 10.2261 0.590263 11.3388 0.510516C12.6346 0.417647 13.7732 0.948271 14.5895 1.77097Z"
                  fill="black"
                ></path>
              </svg>
              <span className="visually-hidden">Wishlist</span>
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                aria-label="Bag"
                focusable="false"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.5 6H1.5V15H14.5V6ZM0 4.5V16.5H16V4.5H0Z"
                  fill="black"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.23223 2.73223C5.76339 3.20107 5.5 3.83696 5.5 4.5H4C4 3.43913 4.42143 2.42172 5.17157 1.67157C5.92172 0.921427 6.93913 0.5 8 0.5C9.06087 0.5 10.0783 0.921427 10.8284 1.67157C11.5786 2.42172 12 3.43913 12 4.5H10.5C10.5 3.83696 10.2366 3.20107 9.76777 2.73223C9.29893 2.26339 8.66304 2 8 2C7.33696 2 6.70107 2.26339 6.23223 2.73223Z"
                  fill="black"
                ></path>
              </svg>
              <span className="visually-hidden">Bag</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
