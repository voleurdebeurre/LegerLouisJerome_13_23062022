import '../assets/css/App.css';
import MainNav from '../components/MainNav';
import SignInContent from '../components/SignInContent';

function SignIn() {
    return (
        <>
        <MainNav />
        <main className="main bg-dark">
            <SignInContent />
        </main>
        </>
    );
}

export default SignIn;
