import React from "react";
import { LOGO_URL } from "../utils/static";

const Header = () => (
  <header className="app-header">
    <div className="header-main">
      <div className="header-logo">
        <a href="/">
          <img src={LOGO_URL} alt="Swiggy Logo" style={{ height: "36px" }} />
        </a>
      </div>
      <button className="header-login-btn">Login</button>
    </div>
  </header>
);

export default Header;
