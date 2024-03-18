import React, {useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {NavBar} from "../components/common/NavBar";


export const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/books")
  }, []);
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  );
};
