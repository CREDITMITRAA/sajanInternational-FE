import React from 'react';

const DownArrowIcon = ({ width = 20, height = 20, fill = "#061B4E" }) => (
  <svg width={width} height={height} viewBox="0 0 20 20" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5883 13.0893C10.432 13.2455 10.2201 13.3333 9.99915 13.3333C9.77818 13.3333 9.56625 13.2455 9.40998 13.0893L4.69581 8.37512C4.45274 8.14012 4.45274 7.75988 4.69581 7.51681C4.93888 7.27374 5.31912 7.27374 5.56219 7.51681L9.99915 11.9538L14.4361 7.51681C14.6792 7.27374 15.0595 7.27374 15.3025 7.51681C15.5456 7.75988 15.5456 8.14012 15.3025 8.38319L10.5883 13.0893Z"
      fill={fill}
    />
  </svg>
);

export default DownArrowIcon;
