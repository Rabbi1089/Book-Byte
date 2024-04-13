import ReactDOM from "react-dom/client";
import * as React from "react";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import ListedBooks from "./pages/ListedBooks.jsx";
import ToRead from "./pages/ToRead.jsx";
import Home from "./pages/Home.jsx";
import BookDetail from "./components/BookDetail.jsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
        loader: () => fetch("Books.json"),
      },

      {
        path: "book/:id",
        element: <BookDetail />,
        loader: () => fetch("Books.json"),
      },

      {
        path: "/ListedBooks",
        element: <ListedBooks />,
      },

      {
        path: "/ToRead",
        element: <ToRead />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
