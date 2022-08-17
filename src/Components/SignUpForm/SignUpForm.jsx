import React, { useState, useEffect } from 'react'
import "./SignUpForm.css";


function SignUpForm(props) {
    const [userSignUp, setUserSignUp] = useState({
        name: "",
        email: "",
        password: "",
        confirm: "",
        error: "",
    });

    const handleChange = (evt) => {
        setUserSignUp({
            ...userSignUp,
            [evt.target.name]: evt.target.value,
            error: "",
        })
    };

    console.log(userSignUp.password);
    console.log(userSignUp.confirm);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const fetchResponse = await fetch("/users/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: userSignUp.name,
                    email: userSignUp.email,
                    password: userSignUp.password,
                }),
            });

      if (!fetchResponse.ok) throw new Error("fetch failed - Bad request");

      let token = await fetchResponse.json();
      localStorage.setItem("token", token);
            const userDoc = JSON.parse(atob(token.split(".")[1])).user;
            props.setUserInState(userDoc);

        } catch (err) {
            console.log("SignupForm error", err);
            console.log(err.message);
            setUserSignUp({ error: "Sign Up Failed - Try Again" });
        }
    };

    const disable = userSignUp.password !== userSignUp.confirm;

    return (
        <div className="signup-popup" style={{ display: props.showSignUp ? "flex" : "none" }}>
            <div onClick={() => { props.setShowSignUp({ showSignUp: false }); }}>x</div>
            <div>
                <form autoComplete="off" onSubmit={handleSubmit} className="signup-form-container">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={userSignUp.name}
                        onChange={handleChange}
                        required
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={userSignUp.email}
                        onChange={handleChange}
                        required
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={userSignUp.password}
                        onChange={handleChange}
                        required
                    />
                    <label>Confirm</label>
                    <input
                        type="password"
                        name="confirm"
                        value={userSignUp.confirm}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" disabled={disable}>
                        SIGN UP
                    </button>
                </form>
            </div>
            <p className="error-message">&nbsp;{userSignUp.error}</p>
        </div>
    )
}

export default SignUpForm;
