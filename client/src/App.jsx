import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginPage from "./pages/LoginPage/LoginPage";
import "./global.css";
import ShoesPage from "./pages/shoesPage/ShoesPage.jsx";
import Add from "./add/Add.jsx";
import Shoe from "./pages/shoePage/shoePage.jsx";
function App() {
  const queryClient = new QueryClient();
  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
        </QueryClientProvider>
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
          path: "/shoes",
          element: <ShoesPage/>
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
          element: <Add/>
        },
        {
          path: "/shoe/:id",
          element: <Shoe/>
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
