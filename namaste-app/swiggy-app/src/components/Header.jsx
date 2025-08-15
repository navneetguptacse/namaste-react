import React from "react";
import { Logo } from "../data/restaurants";

const Header = () => (
  <header className="app-header">
    <div className="header-main">
      <div className="header-logo">
        <img src={Logo} alt="Swiggy Logo" style={{ height: "36px" }} />
      </div>
      <button className="header-login-btn">Login</button>
    </div>
  </header>
);

export default Header;
