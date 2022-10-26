import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs";
import CheckOut from "../components/CheckOut";
import CourseDetails from "../components/CourseDetails";
import Courses from "../components/Courses";
import FAQ from "../components/FAQ";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Main from "../layouts/Main";
import RequireAuth from "./RequireAuth";

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
        loader: () => fetch("https://codism-co-server.vercel.app/categories"),
      },
      {
        path: "/course/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(`https://codism-co-server.vercel.app/course/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: (
          <RequireAuth>
            <CheckOut />
          </RequireAuth>
        ),
        loader: ({ params }) =>
          fetch(`https://codism-co-server.vercel.app/course/${params.id}`),
      },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: () =>
          fetch("https://codism-co-server-mottalib68.vercel.app/blogs"),
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
