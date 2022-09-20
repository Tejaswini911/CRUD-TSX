
import { Link, Route, Outlet, Routes } from "react-router-dom";
import './Auth.css';


function Auth() {
  return (
    <>
    <div className="App body">
 
    <div className="container my-3">
    <ul className="nav nav-tabs nav-fill">
      <li className="nav-item">
        <Link className="nav-link" to={"/sign-up"}>
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/login"}>
          Login
        </Link>
      </li>
    </ul>
    </div>
    <Outlet />
    </div>
    </>
  )
}

export default Auth