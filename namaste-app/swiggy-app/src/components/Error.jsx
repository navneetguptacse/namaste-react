import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText, error } = useRouteError();
  // console.log(error);

  return (
    <div>
      <h2>
        {status} - {statusText}
      </h2>
      <p>{error.message}</p>
    </div>
  );
};

export default Error;
