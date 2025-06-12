import React from 'react';

const StepCard = ({ step, title, description }) => {
  return (
    <div className="w-full max-w-[600px] bg-gradient-to-br from-orange-400 via-orange-200 to-orange-200 rounded-[20px] px-6 pt-6 pb-5 shadow-md mb-6">
      
      {/* Top Row: Step and Title */}
      <div className="flex items-center justify-between flex-wrap gap-y-2">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-extrabold text-lg leading-none">
            {step}
          </div>
          <h3 className="text-xl font-bold text-black">{title}</h3>
        </div>

        {/* Arrow Icon */}
        <div className="shrink-0">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.75 15L16.25 22.5M23.75 15L16.25 7.5M23.75 15H6.25"
              stroke="#051414"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Description below step */}
      <p className="text-base text-left text-black mt-3 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default StepCard;
