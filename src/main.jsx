import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Dashboard from "./components/Dashboard/Dashboard";
import Book from "./components/Book/Book";
import ListedBooks from "./components/ListedBokks/ListedBooks";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Book />,
      },
      {
        path: "/listedbooks",
        element: <ListedBooks />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
