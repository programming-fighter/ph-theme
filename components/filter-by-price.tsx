import React, { useRef } from "react";
import Taka from "../utils/taka";
const FilterByPrice = ({ setVal, val, id, setPage, setHasMore }: any) => {
  const inputRef = useRef<any>(null);

  const handleInputChange = () => {
    setTimeout(() => {
      setVal(inputRef.current.value);
      setPage(1);
      setHasMore(true);
    }, 1000);
  };

  return (
    <>
      <h1 className="font-medium text-[#252525] text-xl ">Filter by Price</h1>
      <div className="flex justify-between items-center">
        <label htmlFor="range" className=" mb-2 text-sm font-semibold">
          <Taka tk={0} />
        </label>
        <label htmlFor="range" className=" mb-2 text-sm font-semibold">
          <Taka tk={val} />
        </label>
      </div>
      <input
        min="0"
        max="10000"
        defaultValue={0}
        onChange={handleInputChange}
        id="range"
        type="range"
        className="mb-6 w-full h-2 rounded-lg bg-gray-300 lg:cursor-pointer focus:outline-none"
        ref={inputRef}
      ></input>
    </>
  );
};

export default FilterByPrice;
