import React, { useState } from "react";
import Header from "../components/common/Header";
import SignupForm from "../components/SignupAndSignInComponent/SignupForm";
import LoginForm from "../components/SignupAndSignInComponent/LoginForm";

const SignUpPage = () => {
  const [flag, setFlag] = useState(false);

  return (
    <div>
      <Header />
      <div className="input-wrapper">
        {!flag ? <h1>Signup</h1> : <h1>Login</h1>}
        {!flag ? <SignupForm /> : <LoginForm/>}
        {!flag ? (
          <p >Already have an account? Click here to <span onClick={()=> setFlag(!flag)}>Login</span>.</p>
        ) : (
          <p >Don't have an account? <span  onClick={()=> setFlag(!flag)}>Sign up</span></p>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;
