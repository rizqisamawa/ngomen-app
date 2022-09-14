import ava from "../images/addAvatar.png";

const Register = () => {
  return (
    <div className="bg-pink-500 h-[100vh] flex items-center justify-center">
      <div className="bg-white px-[60px] py-[20px] flex flex-col gap-[10px] items-center rounded-xl">
        <span className="text-pink-500 font-bold text-[24px]">Ngomeng</span>
        <span className="text-pink-500 text-[12px]">Register</span>
        <form className="flex flex-col gap-[15px]">
          <input
            className="p-[15px] border-b border-pink-500 outline-pink-500 w-[300px]"
            type="text"
            placeholder="Short name"
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
            className="flex items-center gap-[10px] text-blue-900 text-[12px] cursor-pointer"
          >
            <img src={ava} alt="avatar" width={32} />
            <span>Add an avatar</span>
          </label>
          <button className="bg-pink-500 text-white p-[10px] font-bold border-none cursor-pointer rounded-md">
            Sign up
          </button>
        </form>
        <p className="text-blue-900 text-[12px] mt-[10px]">
          Do you have an account ? Login
        </p>
      </div>
    </div>
  );
};

export default Register;
