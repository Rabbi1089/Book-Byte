import { Outlet } from "react-router-dom";
import ListedBookHeader from "../components/ListedBookHeader";
import ReadWishedBook from "../components/ReadWishedBook";

const ListedBooks = () => {
  return (
    <div>
      <ListedBookHeader />
      <ReadWishedBook />
      <Outlet />
    </div>
  );
};

export default ListedBooks;
