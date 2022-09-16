import Cam from "../images/cam.png";
import Add from "../images/add.png";
import More from "../images/more.png";
import Messages from "./Messages.jsx";
import Input from "./Input.jsx";

const Chat = () => {
  return (
    <div className="flex-[2]">
      <div className="chatInfo h-[50px] bg-pink-600 flex items-center justify-between p-[10px] text-gray-50 font-thin">
        <span>Maun</span>
        <div className="chaticon flex gap-[10px]">
          <img src={Cam} alt="" className="h-6 cursor-pointer" />
          <img src={Add} alt="" className="h-6 cursor-pointer" />
          <img src={More} alt="" className="h-6 cursor-pointer" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
