import React from "react";
import Header from "./Header";
import Form from "./Form";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/23e51548-38c3-495f-897d-cf0a2eb11171/CA-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Streamwise backgound"
          className="brightness-50"
        />
      </div>
      <Form />
    </div>
  );
};

export default Login;
