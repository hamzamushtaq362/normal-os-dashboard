import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-4xl font-bold">
        <span className="text-purple-600">COMING</span>
        <span className="text-gray-500"> SOON</span>
      </h1>
      <p className="text-lg mt-4 text-purple-400">76%</p>
      <div className="mt-8">
        {/* Add your loading indicator or progress bar here */}
      </div>
    </div>
  );
};

export default ComingSoon;
