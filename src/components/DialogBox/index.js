import React from "react";

const ThankYouDialogue = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 w-full overflow-y-auto">
      <div className="relative bg-white rounded-3xl max-w-md w-full mx-4 sm:mx-auto my-4 sm:my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 cursor-pointer"
          aria-label="Close dialog"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="w-full px-6 py-8 bg-green-100 text-center rounded-3xl">
          <h2 className="text-green-800 text-xl font-bold font-['Inter'] mb-2">
            Thank you!
          </h2>
          <p className="text-green-800 text-sm font-medium">
            Your message has been successfully submitted. We’ll get back to you soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouDialogue;
