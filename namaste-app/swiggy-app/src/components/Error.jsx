import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Error = () => {
  const error = useRouteError();
  let title = "Unexpected Error";
  let message = "Something went wrong. Please try again later.";

  if (isRouteErrorResponse(error)) {
    title = `${error.status} - ${error.statusText}`;
    message = error.data?.message || message;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="error">
      <div>
        <h1 className="error-title">{title}</h1>
        <p className="error-message">{message}</p>
        <button
          className="header-login-btn"
          onClick={() => (window.location.href = "/")}
        >
          Home
          <span>
            <FaArrowRightLong />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Error;
