import React from  "react";
import Button from "../Button";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



const LogoutButton = ()=> {
    const navigate = useNavigate();
    const handleLogout=()=>{
        signOut(auth).then(()=>{
           toast.success("User Logged Out!");
           navigate("/");
        }).catch((error)=>{
          toast.success(error.message);
        })
       }
    

    return (
        <Button text={"Logout"} onClick={handleLogout}/>
    )
}


export default LogoutButton;