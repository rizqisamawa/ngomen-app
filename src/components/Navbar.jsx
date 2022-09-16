import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center bg-pink-600 h-[50px] p-[10px] justify-between text-white">
      <span className="font-bold">N'gomeng</span>
      <div className="flex gap-[10px] items-center">
        <img
          src="https://images.pexels.com/photos/11739206/pexels-photo-11739206.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="ava"
          className="bg-[#ddddf7] h-6 w-6 rounded-[50%] object-cover"
        />
        <span className="font-thin">Maun</span>
        <button className="bg-pink-500 text-xs rounded-md p-1">logout</button>
      </div>
    </div>
  );
};

export default Navbar;
