import React, { useState, useRef } from "react";
import { validateData } from "../utils/validate";

const Form = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    validateData(email.current.value, password.current.value);
  };

  const email = useRef(null);
  const password = useRef(null);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="text-white absolute px-8 py-4 bg-black w-[36%] mx-auto my-auto flex flex-col justify-center content-center items-center opacity-90 translate-x-96 translate-y-36"
    >
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
        ref={email}
        type="text"
        placeholder="Email Address"
        className="p-2 m-2 w-full rounded-md bg-[#333] hover:bg-[#333333e5] leading-8"
      />
      <input
        ref={password}
        type="text"
        placeholder="Password"
        className="p-2 m-2 w-full rounded-md bg-[#333] hover:bg-[#333333e5] leading-8"
      />
      <button
        className="bg-[#E50914] w-full rounded-md p-1 m-2 leading-8 hover:bg-[#e50914e8] my-6"
        onClick={handleButtonClick}
      >
        {isSignInForm ? "Sign In" : "Sign Up"}
      </button>
      <br />
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
