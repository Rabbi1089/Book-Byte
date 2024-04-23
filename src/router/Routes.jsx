import { createBrowserRouter } from "react-router-dom";
import ListedBooks from "../pages/ListedBooks.jsx";
import ToRead from "../pages/ToRead";
import Home from "../pages/Home.jsx";
import BookDetail from "../components/BookDetail.jsx";
import MainLayout from "../layout/MainLayout.jsx";
import WishBooks from "../components/WishBooks.jsx";
import Books from "../components/Books.jsx";
import Main from "../pages/Main.jsx";
import ErrorPage from "../components/ErrorPage.jsx";
import Contact from "../components/Contact.jsx";
import { BarChart } from "recharts";
import BarChart2 from "../components/BarChart2/BarChart2.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
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
          },

          {
            path: "",
            element: <Books />,
          },
        ],
      },

      {
        path: "/ToRead",
        element: <BarChart2 />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/barchart2",
        element: <BarChart2 />,
      },
    ],
  },
]);
