import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <div className="flex">
      <h1 className="text-3xl bg-red-600 font-bold">
        Something went wrong!!!!
      </h1>
      <button onClick={handleGoBack} className="bg-red-600 rounded-lg">
        Go To Home
      </button>
    </div>
  );
};

export default ErrorPage;
