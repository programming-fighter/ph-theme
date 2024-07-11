import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <div className="grid grid-cols-5 lg:gap-8 sm:container px-5 bg-white">
      <div className="lg:col-span-1 lg:block hidden">
        <div className="flex gap-3 py-10">
          <span className="text-base text-gray-500">Home</span>
          <span className="text-base font-medium text-gray-500">/</span>
          <span className="text-base text-gray-600 font-bold">Search</span>
        </div>

        <div className="mt-10 ">
          <h1 className="mb-10 text-2xl text-gray-700 font-medium">Category</h1>

          <Skeleton height={"200px"} />
        </div>
        <div className="bg-gray-100 border-2 border-gray-200 my-6 p-4">
          <Skeleton />
        </div>
        <div className="bg-gray-100 border-2 border-gray-200 p-4">
          <Skeleton />
        </div>
      </div>

      <div className="col-span-5 lg:col-span-4 w-full">
        <div className="flex justify-between py-10">
          <div>
            <h1 className="text-3xl lg:block hidden font-semibold">Products</h1>
            <div className="lg:cursor-pointer border-2 border-gray-100 rounded-lg justify-between px-3 w-32 py-2 lg:hidden items-center flex gap-3">
              <button className="text-xl">`Filter`</button>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 lg:gap-5 md:grid-cols-3 md:gap-3 xl:grid-cols-4 grid-cols-2 gap-2">
          <div className="flex flex-col gap-5">
            <Skeleton height={"400px"} />
            <Skeleton height={"200px"} />
          </div>
          <div className="flex flex-col gap-5">
            <Skeleton height={"400px"} />
            <Skeleton height={"200px"} />
          </div>
          <div className="flex flex-col gap-5">
            <Skeleton height={"400px"} />
            <Skeleton height={"200px"} />
          </div>
          <div className="flex flex-col gap-5">
            <Skeleton height={"400px"} />
            <Skeleton height={"200px"} />
          </div>

          {/* <Skeleton height={"600px"} />
          <Skeleton height={"600px"} />
          <Skeleton height={"600px"} /> */}
        </div>
      </div>
    </div>
  );
};

export default Loading;
