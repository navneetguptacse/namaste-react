import React, { useState } from "react";
import { LOGO_URL } from "../utils/static";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  const changeLogin = () => {
    setIsLogin((isLogin) => !isLogin);
  };

  return (
    <header className="app-header">
      <div className="header-main">
        <div className="header-logo">
          <Link to="/">
            <img src={LOGO_URL} alt="Swiggy Logo" style={{ height: "36px" }} />
          </Link>
        </div>
        <div className="right-header">
          <div className="menu-container">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart">Cart</Link>
          </div>
          <button className="header-login-btn" onClick={changeLogin}>
            {isLogin ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
