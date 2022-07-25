import MainNav from "../MainNav";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserProfile, login } from "../../features/userSlice";
import './login.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { user } = useSelector(state => state.user)
    
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            login({
                email: email,
                password: password
            })
        )
    }
    if(user){
        if(!user.userProfile){
            let token = user.responseToken
            dispatch(getUserProfile(token))
        }else{
            return (<Navigate to="/user" replace/>)
        }
    }
    
    return (
        <>
        <MainNav />
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" type="submit" > 
                        <span>
                            Sign In
                        </span>
                    </button>
                </form>
            </section>
        </main>
        </>
    );
};

export default Login;