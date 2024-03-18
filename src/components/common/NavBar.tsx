import {Link, useNavigate} from "react-router-dom";
import React from "react";
import Cookies from "js-cookie";

import {UserLoginResponse} from "../../types/UserLoginResponse";

export const NavBar = () => {

  const navigation = useNavigate();

  const Auth = () => {
    return <>
      <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 p-10">
        Sign up
      </Link>
      <Link to={"/login"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 p-10">Login</Link>
    </>
  }

  const LoggedIn = () => {
    const user = JSON.parse(localStorage.getItem("user") as string) as UserLoginResponse
    console.log(user)

    const onLogout = () => {
      Cookies.remove("token")
      navigation("/login")
    };
    return <>
      <p className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 p-10">
        Hello {user.username}
      </p>
      <button onClick={onLogout} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 p-10">logout
      </button>
    </>
  }

  return <div>
    <Link to={"/books"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 p-10">Books
    </Link>
    {Cookies.get("token") ? <LoggedIn/> : <Auth/>}

  </div>
}