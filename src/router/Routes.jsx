import { createBrowserRouter } from "react-router-dom";
import ListedBooks from "../pages/ListedBooks.jsx";
import ToRead from "../pages/ToRead";
import Home from "../pages/Home.jsx";
import BookDetail from "../components/BookDetail.jsx";
import MainLayout from "../layout/MainLayout.jsx";
export const router = createBrowserRouter([
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
