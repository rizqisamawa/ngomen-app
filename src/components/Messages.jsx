import Message from "./Message.jsx";

const Messages = () => {
  return (
    <div
      className="messages bg-pink-50 p-[10px] overflow-y-scroll"
      style={{ height: "calc(100% - 100px)" }}
    >
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
