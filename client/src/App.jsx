import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
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
    },
    {
      path: "/login",
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
