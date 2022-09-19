import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`flex gap-5 mb-5 flex-row-reverse ${
        message.senderId === currentUser.uid && "owner"
      }`}
    >
      <div className="flex flex-col text-gray-500 font-light">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
          className="w-10 h-10 rounded-[50%] object-cover"
        />
        <span className="text-xs">just now</span>
      </div>
      <div className="max-w-[80%] flex flex-col gap-[10px] items-end">
        <p className="bg-pink-500 text-white py-[10px] px-5 rounded-tr-lg rounded-br-lg rounded-bl-lg max-w-max">
          {message.text}
        </p>

        {message.img && <img src={message.img} alt="" className="w-2/4" />}
      </div>
    </div>
  );
};

export default Message;
