import React from "react";
import Img from "../images/img.png";
import Attach from "../images/attach.png";

const Input = () => {
  return (
    <div className="h-[50px] p-[10px] bg-pink-600 flex justify-between">
      <input
        type="text"
        placeholder="Type something..."
        className=" w-9/12 border-none outline-none text-sm rounded"
      />
      <div className="flex items-center gap-[10px]">
        <img src={Attach} alt="" className="h-6 cursor-pointer" />
        <input type="file" className="hidden" id="file" />
        <label htmlFor="file">
          <img src={Img} alt="" className="h-6 cursor-pointer" />
        </label>
        <button className="text-white px-4 py-1 bg-pink-500">send</button>
      </div>
    </div>
  );
};

export default Input;
