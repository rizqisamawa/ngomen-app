import { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whetever the group already exists, if it does, then add the user to the group
    const combineId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combineId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combineId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combineId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combineId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combineId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combineId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {}

    setUser(null);
    setUsername("");
  };

  return (
    <div className="border-b">
      <div className="p-[10px]">
        <input
          type="text"
          className="bg-transparent text-white outline-none placeholder-gray-50 font-thin"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span className="text-red-500">User not found</span>}
      {user && (
        <div
          onClick={handleSelect}
          className="p-[10px] flex items-center gap-[10px] cursor-pointer text-white hover:bg-pink-600"
        >
          <img
            src={user.photoURL}
            alt="ava"
            className="rounded-[50%] object-cover w-[50px] h-[50px]"
          />
          <div>
            <span className="text-lg font-medium">{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
