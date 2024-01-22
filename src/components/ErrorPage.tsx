import React from "react";
import { useHistory } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>500 - Internal Server Error</h1>
      <p>Sorry, something went wrong on our end. Please try again later.</p>
      <p>
        Click{" "}
        <a href="#" onClick={handleClick}>
          here
        </a>{" "}
        to return home.
      </p>
    </div>
  );
};

export default ErrorPage;
