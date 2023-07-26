import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="full">
      <div className="box">
        <h1 className="name" >LOGIN PAGE</h1>
        <div className="input">
          <label className="label">Name</label>
          <input placeholder="Enter Name" className="ip" />
        </div>
        <div className="input" >
          <label className="label1" >Password</label>
          <input placeholder="Password" className="ip1"/>
        </div>

        <button className="btn" onClick={handleClick}>LOGIN</button>
      </div>
    </div>
  );
}

export default Login;