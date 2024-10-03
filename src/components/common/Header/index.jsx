import React from "react";
import "./styles.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  // console.log("currentPath", path);
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
    <div className="navbar">
      <div className="gradient"></div>
      <div className="links"> 
        <Link to="/podcasts" className={path == "/podcasts" ? "active" : ""}>
          Podcasts
        </Link>
        <Link
          to="/create-a-podcast"
          className={path == "/create-a-podcast" ? "active" : ""}
        >
          Start A Podcast
        </Link>
        <Link to="/profile" className={path == "/profile" ? "active" : ""}>
          Profile
        </Link>
        {
         auth.currentUser && auth.currentUser.uid ? <p onClick={handleLogout}>Logout</p> : <Link to="/" className={path == "/" ? "active" : ""}>
        Signup
      </Link>
      } 
      </div>
    </div>
  );
};

export default Header;
