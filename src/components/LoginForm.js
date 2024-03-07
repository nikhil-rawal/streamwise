import React from "react";

const LoginForm = () => {
  return (
    <form className="relative p-4 bg-black w-4/12 top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col justify-center content-center items-center">
      <h1 className="text-white font-semibold justify-left p-2 m-2">Sign In</h1>
      <input
        type="text"
        placeholder="Email Address"
        className="p-2 m-2 w-8/12 rounded-sm bg-[#333]"
      />
      <input
        type="text"
        placeholder="Password"
        className="p-2 m-2 w-8/12 rounded-sm bg-[#333]"
      />
      <button className="bg-white w-3/12 rounded-sm p-1 m-2">Submit</button>
    </form>
  );
};

export default LoginForm;
