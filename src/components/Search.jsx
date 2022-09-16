import React from "react";

const Search = () => {
  return (
    <div className="border-b">
      <div className="p-[10px]">
        <input
          type="text"
          className="bg-transparent text-white outline-none placeholder-gray-50 font-thin"
          placeholder="Find a user"
        />
      </div>
      <div className="p-[10px] flex items-center gap-[10px] cursor-pointer text-white hover:bg-pink-600">
        <img
          src="https://images.pexels.com/photos/11739206/pexels-photo-11739206.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="ava"
          className="rounded-[50%] object-cover w-[50px] h-[50px]"
        />
        <div>
          <span className="text-lg font-medium">Maun</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
