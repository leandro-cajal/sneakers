import React from 'react';

const Spinner = ({ size = 12, color = 'currentColor' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`animate-spin h-${size} w-${size}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 6.627 5.373 12 12 12v-4c-2.561 0-4.899-.98-6.686-2.709l-2.828 2.828z"
    ></path>
  </svg>
);

export default Spinner;
