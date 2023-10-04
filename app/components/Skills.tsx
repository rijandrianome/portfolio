import React from "react";

const Skills = () => {
  return (
    <>
      <h1 className="text-center">Top Skills</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="pl-8">
          <h1 className="pl-1 pt-2 sm:pt-5 text-black pt-5 ">
            PostgreSQL <span className=" text-xs text-gray-600"></span>
          </h1>
          <div className="mt-2 h-8 relative w-60 rounded-full overflow-hidden">
            <div className=" w-full h-full bg-gray-300 absolute "></div>
            <div className=" h-full bg-yellow-400 sm:bg-blue-500 absolute w-4/5"></div>
          </div>
        </div>
        <div className="pl-8">
          <h1 className="pl-1 pt-2 sm:pt-5 text-black pt-5 ">
            .Net MVC <span className=" text-xs text-gray-600"></span>
          </h1>
          <div className="mt-2 h-8 relative w-60 rounded-full overflow-hidden">
            <div className=" w-full h-full bg-gray-300 absolute "></div>
            <div className=" h-full bg-red-500 sm:bg-blue-400 absolute w-3/4"></div>
          </div>
        </div>
        <div className="pl-8">
          <h1 className="pl-1 pt-2 sm:pt-5 text-black pt-5 ">
            C# <span className=" text-xs text-gray-600"></span>
          </h1>
          <div className="mt-2 h-8 relative w-60 rounded-full overflow-hidden">
            <div className=" w-full h-full bg-gray-300 absolute "></div>
            <div className=" h-full bg-green-500 sm:bg-blue-500 absolute w-3/5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
