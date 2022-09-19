import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useState, useEffect } from "react";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div>
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <div
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
            className="p-[10px] flex items-center gap-[10px] cursor-pointer text-white hover:bg-pink-600"
          >
            <img
              src={chat[1].userInfo.photoURL}
              alt="ava"
              className="rounded-[50%] object-cover w-[50px] h-[50px]"
            />
            <div>
              <span className="text-lg font-medium">
                {chat[1].userInfo.displayName}
              </span>
              <p className="text-sm text-gray-50">
                {chat[1].userInfo.lastMessage?.text}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
