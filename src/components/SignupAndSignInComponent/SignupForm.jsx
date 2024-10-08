import React, { useState } from "react";
import InputComponent from "../common/Input";
import Button from "../common/Button";
import { auth, db, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import  {setUser}  from "../../redux/slices/userSlice";
import { toast } from "react-toastify";
import Loader from "../common/Loader";


const SignupForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = async () => {
    setLoading(true);
    if (password === confirmPassword && password.length>=6) {
      try {
        // creating user acc
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log("user",user);

        // saving user details
        await setDoc(doc(db,"users",user.uid),{
            name:fullName,
            email:user.email,
            uid:user.uid,
        });
        
        // save the user in redux, call the action
        dispatch(
          setUser({
            name:fullName,
            email:user.email,
            uid:user.uid,
        })
        );
        toast.success("User has been created!");
        setLoading(false);
        navigate("/profile");

      } catch (e) {
        toast.error(e.message);
        setLoading(false);
        console.log("error", e);
      }
    } else{
     
     
      if(password!=confirmPassword){
        toast.error("please make sure your password and confirm pasword matches!")
      }else if(password.length<6){
        toast.error("Please make sure your password is more than 6 digits long!")
      }
      setLoading(false);
    }
  };

  return (
    <>
      <InputComponent
        state={fullName}
        setState={setFullName}
        placeholder={"FullName"}
        type="text"
        required={true}
      />
      <InputComponent
        state={email}
        setState={setEmail}
        placeholder={"Email"}
        type="email"
        required={true}
      />
      <InputComponent
        state={password}
        setState={setPassword}
        placeholder={"Password"}
        type="password"
        required={true}
      />
      <InputComponent
        state={confirmPassword}
        setState={setConfirmPassword}
        placeholder={"Confirm Password"}
        type="password"
        required={true}
      />
      <Button text={!loading?"Signup":'Loading...'} onClick={handleSignup}  disabled={loading}/>
    </>
  );
};

export default SignupForm;
