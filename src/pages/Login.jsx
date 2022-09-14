const Login = () => {
  return (
    <div className="bg-pink-500 h-[100vh] flex items-center justify-center">
      <div className="bg-white px-[60px] py-[20px] flex flex-col gap-[10px] items-center rounded-xl">
        <span className="text-pink-500 font-bold text-[24px]">Ngomeng</span>
        <span className="text-pink-500 text-[12px]">Login</span>
        <form className="flex flex-col gap-[15px]">
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
        </form>
        <p className="text-blue-900 text-[12px] mt-[10px]">
          You don't have an account ? Register
        </p>
      </div>
    </div>
  );
};

export default Login;
