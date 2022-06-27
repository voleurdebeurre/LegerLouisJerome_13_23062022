import '../assets/css/user.css';
import MainNav from '../components/MainNav';
import Footer from '../components/Footer';
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

function User() {
    const { user: currentUser } = useSelector((state) => state.auth);
    
    if (!currentUser) {
        return <Navigate to="/login" />;
    }
    return (
        <>
        <MainNav />
        {console.log(currentUser)}
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{currentUser.firstName}</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            {/* <h2 className="sr-only">Accounts</h2>
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
            </section> */}
        </main>
        <Footer />
        </>
    );
}

export default User;
