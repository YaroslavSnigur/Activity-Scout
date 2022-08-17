import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm(props) {
  const [userLoggedIn, setUserLoggedIn] = useState({
    email: "",
    password: "",
    error: "",
  });

  const handleChange = (evt) => {
    setUserLoggedIn({
      ...userLoggedIn,
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  console.log(userLoggedIn.email);
  console.log(userLoggedIn.password);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      // 1. POST our new user info to the server
      const fetchResponse = await fetch("/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userLoggedIn.email,
          password: userLoggedIn.password,
        }),
      });

      // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
      if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");

      let token = await fetchResponse.json(); // 3. decode fetch response: get jwt token from srv
      localStorage.setItem("token", token); // 4. Stick token into localStorage

      const userDoc = JSON.parse(atob(token.split(".")[1])).user; // 5. Decode the token + put user document into state
      props.setUserInState(userDoc);
    } catch (err) {
      console.log("LoginForm error", err);
      console.log(err.message);
      setUserLoggedIn({ error: "Log In Failed - Try Again" });
    }
  };

  return (
    <div
      className="login-popup"
      style={{ display: props.showLogin ? "flex" : "none" }}
    >
      <div
        onClick={() => {
          props.setShowLogin({ showLogin: false });
        }}
      >
        x
      </div>
      <div onSubmit={handleSubmit}>
        <form autoComplete="off" className="login-form-container">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={userLoggedIn.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={userLoggedIn.password}
            onChange={handleChange}
            required
          />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{userLoggedIn.error}</p>
    </div>
  );
}

export default LoginForm;
