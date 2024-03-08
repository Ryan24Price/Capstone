import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { UserProvider } from "../Context/UserContext";
import backgroundImage from "../assets/images/group105.jpg"; // Adjust the import path as needed

function LoginPage() {
  const pageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    // minWidth: "175vh",
  };
  const whiteBox = {
    background: "white",
    width: "fit-content",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div className="LoginPage" style={pageStyle}>
      <UserProvider>
        <div style={whiteBox}>
          <LoginForm />
        </div>
      </UserProvider>
    </div>
  );
}

export default LoginPage;
