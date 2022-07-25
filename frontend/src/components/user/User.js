import MainNav from "../MainNav";
import { Navigate } from 'react-router-dom';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './user.css';
import { updateUserProfile } from "../../features/userSlice";

function User() {
    const { user } = useSelector(state => state.user)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            updateUserProfile({
                token: user.token,
                firstName: firstName,
                lastName: lastName
            })
        )
        setIsShowing(false)
    }
    console.log(user)
    
    const [isShowing, setIsShowing] = useState(false);
    
    if(user === null){
        return <Navigate to="/" replace/>
    }else{
        return (
            <>
            <MainNav />
            <div className="modal-change-info" data-modal-open={isShowing}>
                <div className="inner-modal">
                    <button className="close-modal" onClick={() => setIsShowing(false)}><i className="fa fa-times-circle fa-lg"></i></button>
                    <h4>Update your information</h4>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <fieldset>
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" id="firstName" placeholder={user.userProfile.firstName} value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="firstName">Last Name:</label>
                            <input type="text" id="lastName" placeholder={user.userProfile.lastName} value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </fieldset>
                        <button className="transaction-button" type="submit">Update</button>
                    </form>
                </div>
            </div>
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />{user.userProfile.firstName} {user.userProfile.lastName}</h1>
                    <button className="edit-button" onClick={() => setIsShowing(true)}>Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
            </>
        );
    }
    
}

export default User;
