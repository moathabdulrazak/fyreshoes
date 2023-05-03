import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import "./global.css";
function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar/>
          <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/gigs",
        },
        {
          path: "/mygigs",
        },
        {
          path: "/orders",
        },
        {
          path: "/messages",
        },
        {
          path: "/message/:id",
        },
        {
          path: "/add",
        },
        {
          path: "/gig/:id",
        },
      ],
    },
    {
      path: "/register",
      element: <RegisterPage/>
    },
    {
      path: "/login",
      element: <LoginPage/>
    },
    {
      path: "/pay/:id",
    },
    {
      path: "/success",
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
