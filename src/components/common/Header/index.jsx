import React from "react";
import "./styles.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  // console.log("currentPath", path);
  return (
    <div className="navbar">
      <div className="gradient"></div>
      <div className="links">
        <Link to="/" className={path == "/" ? "active" : ""}>
          Signup
        </Link>
        <Link to="/podcasts" className={path == "/podcasts" ? "active" : ""}>
          Podcasts
        </Link>
        <Link
          to="/create-a-podcast"
          className={path == "/create-a-podcast" ? "active" : ""}
        >
          Start A Podcasts
        </Link>
        <Link to="/profile" className={path == "/profile" ? "active" : ""}>
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Header;
