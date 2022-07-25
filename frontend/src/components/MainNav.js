import './mainNav.css';
import argentBankLogo from '../assets/images/argentBankLogo.png'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/userSlice";
import { Navigate } from 'react-router-dom';

function MainNav() {
    const { user } = useSelector(state => state.user)
    const dispatch = useDispatch();
    // console.log(user)
    return (
        <>
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            {user ?(
                user.userProfile ? (
                    <div className="login-block">
                        <div className="login-user">
                            <i className="fa fa-user-circle"></i> 
                            {user.userProfile.firstName}
                        </div>
                        <div className="login-logout">
                            <i className="fa fa-sign-out"></i>
                            <button onClick={() => 
                                {
                                    dispatch(logout());
                                    <Navigate to="/" replace/>
                                }
                            }>Logout</button>
                        </div>
                    </div>
                ):(
                    <div>
                        <Link to="/login" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </Link>
                    </div>
                )
                
            ):(
                <div>
                    <Link to="/login" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            )}
        </nav>
        </>
    );
}


export default MainNav;
