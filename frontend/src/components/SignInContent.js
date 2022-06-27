import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../assets/css/signInContent.css';
import { Navigate } from "react-router-dom";
import { login } from "../actions/auth";



function SignInContent(props) {
    const form = useRef();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        dispatch(login(username, password))
        .then(() => {
            props.history.push("/user");
            window.location.reload();
        })
        .catch(() => {
            setLoading(false);
        });
        
    };
    if (isLoggedIn) {
        return <Navigate to="/user" />;
    }
    return (
        <>
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleLogin} ref={form}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={username} onChange={onChangeUsername} />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={onChangePassword}/>
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" disabled={loading}> 
                {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>
                    Sign In
                </span>
            </button>
            {message && (
                <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                        {message}
                    </div>
                </div>
            )}
            </form>
        </section>
        </>
    );
}

export default SignInContent;
