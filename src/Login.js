import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
function Login() {
  const navigate = useNavigate();
  function handleSubmit() {
    navigate("/data");
  }
  return (
    <div className="login-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_yWgBblJmCtzKKH-r84z4l3QJv5GhajsKsjdN_giYcw&s"
        alt="logo"
        className="logo"
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          className="username"
          placeholder="Username"
          required
          onChange={this.handleChange}
        />
        <br />
        <input
          type="password"
          name="pwd"
          placeholder="Password"
          className="username"
          required
          onChange={this.handleChange}
        />
        <br />
        <button className="button" onSubmit={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
