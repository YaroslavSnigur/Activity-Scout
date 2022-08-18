import React, { useState, useEffect } from "react";
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
        });
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

            <div className="signup-container">
                <div className="sign-up-close-button-container"><div onClick={() => { props.setShowSignUp({ showSignUp: false }); }} className="sign-up-close-button">X</div></div>
                <div>
                    <form autoComplete="off" onSubmit={handleSubmit} className="signup-form-container">
                        <div className="signup-form-row">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={userSignUp.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="signup-form-row">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={userSignUp.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="signup-form-row">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={userSignUp.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="signup-form-row">
                            <label>Confirm</label>
                            <input
                                type="password"
                                name="confirm"
                                value={userSignUp.confirm}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div><button className="sign-up-form-button" type="submit" disabled={disable} >
                            Sign Up
                        </button></div>
                    </form>
                </div>
                <div className="sign-up-error-message"><p >&nbsp;{userSignUp.error}</p></div>
            </div>

        </div>
    )


}

export default SignUpForm;
