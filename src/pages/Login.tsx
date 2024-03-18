import {LoginForm} from "../components/auth/LoginForm";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get("token")) {
      navigate("/books")
    }
  }, []);


  return (
    <>
      {Cookies.get("token") ? <></> : <LoginForm/>}
    </>
  );
};
