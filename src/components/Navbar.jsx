import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="flex items-center bg-pink-600 h-[50px] p-[10px] justify-between text-white">
      <span className="font-bold">N'gomeng</span>
      <div className="flex gap-[10px] items-center">
        <img
          src={currentUser.photoURL}
          alt="profile"
          className="bg-[#ddddf7] h-6 w-6 rounded-[50%] object-cover"
        />
        <span className="font-thin">{currentUser.displayName}</span>
        <button
          onClick={() => signOut(auth)}
          className="bg-pink-500 text-xs rounded-md p-1"
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
