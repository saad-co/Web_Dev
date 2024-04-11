import React, { useState } from "react";

export default function Login() {
    const [loginData, setLoginData] = useState({ email: "", Password: "" })

    function handleSubmit() {
        console.log(loginData);
    }


    function handleChange(event) {
        const { name, value } = event.target;
        setLoginData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }



    return (
        <div className="login-container">
            <h1>
                Sign in to your account
            </h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    onChange={handleChange}
                    value={loginData.email}
                />
                <input
                    name="Password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={loginData.Password}
                />
                <button>Sign in</button>

            </form>
        </div>
    )
}