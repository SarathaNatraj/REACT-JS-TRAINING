//Login.tsx
import { useLoginContext } from "../context/useLoginContext";
export const Login = () => {
    const { loggedIn, setLoggedIn } = useLoginContext()
    return (
        <>
            <div className="pageLayout">
                <div>
                    <h3>Login</h3>
                </div>
                {loggedIn &&
                    <div><h3>User is Logged in</h3></div>
                }
                <div>
                    <button onClick={() => setLoggedIn(!loggedIn)}>{loggedIn ? 'Logout' : 'Login'}</button>
                </div>
            </div>
        </>
    );
};
