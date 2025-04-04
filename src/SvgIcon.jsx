import * as React from 'react';
export default function SvgIcon(props) {
  return (
    <svg
      {...props}
      fillRule="evenodd"
      clipRule="evenodd"
      imageRendering="optimizeQuality"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 332597 333333"
      width={props.isSmallScreen ? 30 : 50}
      height={50}
    >
      <path
        fill={props.color}
        d="M151444 5419C140355 1916 128560 0 116311 0 80573 0 48591 16155 27269 41534l54942 46222 69232-82338z"
      />
      <path
        fill={props.color}
        d="M27244 41534C10257 61747 0 87832 0 116286c0 21876 4360 39594 11517 55472l70669-84002-54942-46222z"
      />
      <path
        fill={props.color}
        d="M116311 71828c24573 0 44483 19910 44483 44483 0 10938-3957 20969-10509 28706 0 0 35133-41786 69232-82313-14089-27093-38510-47936-68048-57286L82186 87756c8166-9753 20415-15928 34125-15928z"
      />
      <path
        fill={props.color}
        d="M116311 160769c-24573 0-44483-19910-44483-44483 0-10863 3906-20818 10358-28555l-70669 84027c12072 26791 32159 48289 52851 75381l85891-102122c-8141 9628-20339 15752-33948 15752z"
      />
      <path
        fill={props.color}
        d="M148571 275014c38787-60663 84026-88210 84026-158728 0-19331-4738-37552-13080-53581L64393 247140c6578 8620 13206 17793 19683 27900 23590 36444 17037 58294 32260 58294 15172 0 8644-21876 32235-58320z"
      />
      <rect
        x="55000" // Adjust this value to fit the center
        y="60000" // Adjust this value to fit the center
        width="150000" // Adjust width as needed
        height="100000" // Adjust height as needed
        fill={props.color}
      />
    </svg>
  );
}
