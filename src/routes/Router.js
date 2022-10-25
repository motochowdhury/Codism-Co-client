import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs";
import Courses from "../components/Courses";
import FAQ from "../components/FAQ";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
