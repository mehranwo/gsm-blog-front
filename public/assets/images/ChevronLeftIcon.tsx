import React from "react";

const ChevronLeftIcon = ({fill ,className, iconFill}: {fill: string ,className: string,iconFill:string}) => {
  return (
    <svg
    className={className}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_418_8)">
        <rect x="6" y="2" width="24" height="24" rx="12" fill={fill} />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.6095 14.0001L20.4714 9.13812L19.5286 8.19531L13.7239 14.0001L19.5286 19.8048L20.4714 18.862L15.6095 14.0001Z"
          fill={iconFill}
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_418_8"
          x="0"
          y="0"
          width="36"
          height="36"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_418_8"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_418_8"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_418_8"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_418_8"
            result="effect2_dropShadow_418_8"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_418_8"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ChevronLeftIcon;
