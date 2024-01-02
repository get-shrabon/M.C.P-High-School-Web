import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/HomePage/Home";
import About from "./Components/AboutPage/About";
import Ourteacher from "./Components/OurTeacherPage/Ourteacher";
import Blogs from "./Components/BlogsPage/Blogs";
import Contact from "./Components/ContactPage/Contact";
import { HelmetProvider } from "react-helmet-async";
import TeacherDetails from "./Components/Teachers/TeacherDetails";
import AuthProvider from "./Providers/AuthProvider";
import SignUp from "./Components/SignUpAndIn/SignUp";
import Login from "./Components/SignUpAndIn/Login";
import ErrorPage from "./Components/Root/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/teachers",
        element: <Ourteacher></Ourteacher>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/singleTeacher/:id",
        element: <TeacherDetails></TeacherDetails>,
        loader: () => fetch("Teachers-Data.json"),
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path:"/login",
        element:<Login></Login>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
