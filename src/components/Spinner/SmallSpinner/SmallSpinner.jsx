import React from "react";

const SmallSpinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-6 h-6 border-4 border-dashed rounded-full animate-spin border-teal-600"></div>
    </div>
  );
};

export default SmallSpinner;
