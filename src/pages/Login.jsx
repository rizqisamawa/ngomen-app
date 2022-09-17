import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <div className="bg-pink-500 h-screen flex items-center justify-center">
      <div className="bg-white px-[60px] py-5 flex flex-col gap-[10px] items-center rounded-xl">
        <span className="text-pink-500 font-bold text-2xl">N'gomeng</span>
        <span className="text-pink-500 text-xs">Login</span>
        <form onSubmit={loginHandler} className="flex flex-col gap-[15px]">
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
          <button className="bg-pink-500 text-white p-[10px] font-bold border-none cursor-pointer rounded-md">
            Sign in
          </button>
          {err && <span>Something went wrong </span>}
        </form>
        <p className="text-blue-900 text-xs mt-[10px]">
          You don't have an account ? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
