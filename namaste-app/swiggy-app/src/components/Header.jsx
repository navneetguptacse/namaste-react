import React from "react";
import { LOGO_URL } from "../data/static";

const Header = () => (
  <header className="app-header">
    <div className="header-main">
      <div className="header-logo">
        <img src={LOGO_URL} alt="Swiggy Logo" style={{ height: "36px" }} />
      </div>
      <button className="header-login-btn">Login</button>
    </div>
  </header>
);

export default Header;
