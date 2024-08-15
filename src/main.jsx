import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./layout/Layout";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./components/Home/Home";
import AuthProvider from "./providers/AuthProvider";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        
        path:"login",
        element:<Login></Login>
      },
      {path:"signup",
        element:<SignUp></SignUp>
      }
    ]
  },

 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
    <AuthProvider>
    <RouterProvider router={router} />
      </AuthProvider>
      
    </NextUIProvider>
  </React.StrictMode>
);
