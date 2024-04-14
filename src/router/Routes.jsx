import { createBrowserRouter } from "react-router-dom";
import ListedBooks from "../pages/ListedBooks.jsx";
import ToRead from "../pages/ToRead";
import Home from "../pages/Home.jsx";
import BookDetail from "../components/BookDetail.jsx";
import MainLayout from "../layout/MainLayout.jsx";
import WishBooks from "../components/WishBooks.jsx";
import ReadBooks from "../components/ReadBooks.jsx";
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
        loader: () => fetch("Books.json"),
        children: [
          {
            path: "WishBooks",
            element: <WishBooks />,
            loader: () => fetch("Books.json"),
          },

          {
            path: "ReadBooks",
            element: <ReadBooks />,
          },
        ],
      },

      {
        path: "/ToRead",
        element: <ToRead />,
      },
    ],
  },
]);
