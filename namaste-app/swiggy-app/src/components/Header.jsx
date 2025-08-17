import React, { useState } from "react";
import { LOGO_URL } from "../utils/static";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  const changeLogin = () => {
    setIsLogin((isLogin) => !isLogin);
  };

  return (
    <header className="app-header">
      <div className="header-main">
        <div className="header-logo">
          <a href="/">
            <img src={LOGO_URL} alt="Swiggy Logo" style={{ height: "36px" }} />
          </a>
        </div>
        <div className="right-header">
          <div className="menu-container">
            <a href="/about">About</a>
            <a href="/about">Contact</a>
            <a href="/about">Cart</a>
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
