import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home";
import {Login} from "./pages/Login";
import {SignUp} from "./pages/SignUp";
import {Books} from "./pages/Books";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        index: true,
        path: "/books",
        Component: Books
      },
      {
        path: "/signup",
        Component: SignUp
      },
      {
        path: "/login",
        Component: Login
      },
    ]
  },

]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
