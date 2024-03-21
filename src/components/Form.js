import React, { useState } from "react";

const Form = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <form className="text-white absolute px-8 py-4 bg-black w-[36%] mx-auto my-auto flex flex-col justify-center content-center items-center opacity-90 translate-x-96 translate-y-36">
      {/* left-1/2 -translate-x-1/2 translate-y-1/2 */}
      <h1 className=" font-semibold  self-start p-2 m-2 text-3xl">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </h1>
      {!isSignInForm && (
        <input
          type="text"
          placeholder="Full Name"
          className={`p-2 m-2 w-full rounded-md bg-[#333] hover:bg-[#333333e5] leading-8`}
        />
      )}
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
        {isSignInForm ? "Sign In" : "Sign Up"}
      </button>
      <br />
      {/* {isSignInForm ? "Sign Up" : "Sign In"} */}

      {isSignInForm ? (
        <p className={`font-light self-start`}>
          New to Streamwise?{" "}
          <span
            className="underline font-bold cursor-pointer"
            onClick={toggleSignInForm}
          >
            Sign Up
          </span>
          .
        </p>
      ) : (
        <p className={`font-light self-start`}>
          Already a user?{" "}
          <span
            className="underline font-bold cursor-pointer"
            onClick={toggleSignInForm}
          >
            Sign In
          </span>
          .
        </p>
      )}
    </form>
  );
};

export default Form;
