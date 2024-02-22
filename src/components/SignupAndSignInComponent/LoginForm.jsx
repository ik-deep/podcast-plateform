import React, { useState } from 'react'
import InputComponent from "../common/Input";
import Button from "../common/Button";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth,db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { setUser } from '../../redux/slices/userSlice';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    if (email && password) {
      try {
        // creating user acc
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        const userDoc = await getDoc(doc(db,"user",user.uid));
        const userData = userDoc.data();
        console.log("userData",userData);


        // save the user in redux, call the action
        dispatch(
          setUser({
            name:userData.name,
            email:user.email,
            uid:user.uid,
        })
        );
        toast.success("Login Successful!");
        setLoading(false);
        navigate("/profile");

      } catch (e) {
        toast.error(e.message);
        setLoading(false);
        console.log("error", e.message);
      }
    } else{
      toast.error("Make sure email and password are not empty");
     setLoading(false);
    }
  };

  return (
    <>
   
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
       
       <Button text={!loading?"Login":"Loading..."} onClick={handleLogin}  disabled={loading}/>
    </>
  )
}

export default LoginForm