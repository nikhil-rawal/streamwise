import React from "react";

const Form = () => {
  return (
    <form className="text-white absolute px-8 py-4 bg-black w-4/12 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col justify-center content-center items-center opacity-90">
      <h1 className=" font-semibold  self-start p-2 m-2 text-3xl">Sign In</h1>
      <input
        type="text"
        placeholder="Email Address"
        className="p-2 m-2 w-full rounded-md bg-[#333] hover:bg-[#333333e5] leading-8"
      />
      <input
        type="text"
        placeholder="Password"
        className="p-2 m-2 w-full rounded-md bg-[#333] hover:bg-[#333333e5] leading-8"
      />
      <button className="bg-[#E50914] w-full rounded-md p-1 m-2 leading-8 hover:bg-[#e50914e8] my-6">
        Sign In
      </button>
      <br />
      <p className="font-light self-start">
        New to Streamwise?{" "}
        <span className="underline font-bold ">Sign up now</span>.
      </p>
    </form>
  );
};

export default Form;
