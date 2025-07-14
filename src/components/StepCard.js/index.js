import React from 'react';

const StepCard = ({ step, title, description }) => {
  return (
    <div className="w-full max-w-[600px] bg-gradient-to-br from-orange-400 via-orange-200 to-orange-200 rounded-[20px] px-6 pt-6 pb-5 shadow-md mb-6">

      {/* Top Row: Step and Title */}
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center gap-2">
          <div
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center font-extrabold text-lg leading-none"
            style={{ color: '#051414' }}
          >
            {step}
          </div>
          <h3
            className="text-sm md:text-base md:text-2xl font-bold"
            style={{ color: '#051414' }}
          >
            {title}
          </h3>
        </div>

        {/* Arrow Icon */}
        <div className="shrink-0">
          <svg
            width="24"
            height="24"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.75 15L16.25 22.5M23.75 15L16.25 7.5M23.75 15H6.25"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="miter"
            />
          </svg>
        </div>

      </div>

      {/* Description below step */}
      <p
        className="text-sm md:text-base text-left mt-3 leading-relaxed"
        style={{ color: '#051414' }}
      >
        {description}
      </p>
    </div>
  );
};

export default StepCard;
