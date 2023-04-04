import React from "react";

function File() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <rect width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_379_2599)">
        <path
          d="M5.0026 18.3371C4.54427 18.3371 4.15205 18.174 3.82594 17.8479C3.49927 17.5212 3.33594 17.1287 3.33594 16.6704V3.33708C3.33594 2.87874 3.49927 2.48624 3.82594 2.15958C4.15205 1.83347 4.54427 1.67041 5.0026 1.67041H11.6693L16.6693 6.67041V16.6704C16.6693 17.1287 16.5062 17.5212 16.1801 17.8479C15.8534 18.174 15.4609 18.3371 15.0026 18.3371H5.0026ZM10.8359 7.50374V3.33708H5.0026V16.6704H15.0026V7.50374H10.8359Z"
          fill="white"
        />
      </g>
    </svg>
  );
}

export default File;
