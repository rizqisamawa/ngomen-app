import React from "react";

const Message = () => {
  return (
    <div className="message flex gap-5 mb-5 flex-row-reverse">
      <div className="info flex flex-col text-gray-500 font-light">
        <img
          src="https://images.pexels.com/photos/11739206/pexels-photo-11739206.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="w-10 h-10 rounded-[50%] object-cover"
        />
        <span className="text-xs">just now</span>
      </div>
      <div className="content max-w-[80%] flex flex-col gap-[10px] items-end">
        <p className="bg-pink-500 text-white py-[10px] px-5 rounded-tr-lg rounded-br-lg rounded-bl-lg max-w-max">
          hello
        </p>
        <img
          src="https://images.pexels.com/photos/11739206/pexels-photo-11739206.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="w-2/4"
        />
      </div>
    </div>
  );
};

export default Message;
