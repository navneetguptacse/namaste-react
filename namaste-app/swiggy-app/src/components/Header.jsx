import React, { useState } from "react";
import { LOGO_URL } from "../utils/static";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import useStatus from "../hooks/useStatus";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { status } = useStatus();

  const changeLogin = () => {
    setIsLogin((isLogin) => !isLogin);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center">
              <img src={LOGO_URL} alt="Swiggy Logo" className="h-9 w-auto" />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              <Link
                to="/"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
              >
                Contact
              </Link>
              <Link
                to="/cart"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
              >
                Cart
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-semibold transition-colors duration-200 flex items-center gap-2"
                onClick={changeLogin}
              >
                {isLogin ? "Logout" : "Login"}
              </button>

              {isLogin && (
                <FaUser
                  className={`text-xl ${
                    status ? "text-orange-500" : "text-gray-400"
                  }`}
                />
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-orange-500">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
