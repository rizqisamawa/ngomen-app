import ava from "../images/addAvatar.png";
import { useState } from "react";
import { auth, storage, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="bg-pink-500 h-screen flex items-center justify-center">
      <div className="bg-white px-[60px] py-5 flex flex-col gap-[10px] items-center rounded-xl">
        <span className="text-pink-500 font-bold text-[24px]">N'gomeng</span>
        <span className="text-pink-500 text-[12px]">Register</span>
        <form onSubmit={registerHandler} className="flex flex-col gap-[15px]">
          <input
            className="p-[15px] border-b border-pink-500 outline-pink-500 w-[300px]"
            type="text"
            placeholder="Display name"
          />
          <input
            className="p-[15px] border-b border-pink-500 outline-pink-500 w-[300px]"
            type="email"
            placeholder="Email"
          />
          <input
            className="p-[15px] border-b border-pink-500 outline-pink-500 w-[300px]"
            type="password"
            placeholder="Password"
          />
          <input
            style={{ display: "none" }}
            className="p-[15px] border-b border-pink-500 outline-pink-500 w-[300px]"
            type="file"
            id="file"
          />
          <label
            htmlFor="file"
            className="flex items-center gap-[10px] text-blue-900 text-xs cursor-pointer"
          >
            <img src={ava} alt="avatar" width={32} />
            <span>Add an avatar</span>
          </label>
          <button
            disabled={loading}
            className="bg-pink-500 text-white p-[10px] font-bold border-none cursor-pointer rounded-md"
          >
            Sign up
          </button>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong </span>}
        </form>
        <p className="text-blue-900 text-xs mt-[10px]">
          Do you have an account ? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
