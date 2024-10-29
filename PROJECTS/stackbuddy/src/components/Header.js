import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import envrionment from "../environment";
function Header() {

    const loginStatus = useSelector((state) => state.auth.isLoggedIn)
    const user = useSelector((state) => state.auth.user.userData)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function logout(){
        dispatch(authActions.logout())
        navigate('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark" style={{ backgroundColor: '#3f4156', color: '#dde5e5' }}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="/images/logo.png" alt="" width="250px" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="px-5">
                        <input className="form-control me-2 py-3" size="50" type="search" placeholder="Search for rooms" />
                    </form>
                    <ul className="navbar-nav ms-auto">
                        {
                            loginStatus ? <>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <img src={`${envrionment.picUrl}/${user.profilepic}`} alt="" className="rounded-circle border border-info border-2" style={{ width: '50px' }} />
                                    </a>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {user?.firstname}
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/edit-profile">Settings</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
                                    </ul>
                                </li>
                            </> : <>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <img src="/images/no-profile-image.jpg" alt="" className="rounded-circle border border-info border-2" style={{ width: '50px' }} />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                            </>
                        }

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;