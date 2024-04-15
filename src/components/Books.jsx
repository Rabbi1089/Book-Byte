import { useEffect, useState } from "react";
import BookWished from "./BookWished";
import { getReadBook } from "../utlis/localStroage";
import BookReadedDisplay from "./BookReadedDisplay";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [readBooks, setreadBooks] = useState([]);

  useEffect(() => {
    fetch("/Books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  useEffect(() => {
    const readBooks = getReadBook();
   // console.log(readBooks);
    if (readBooks.length > 0) {
      const Books = [];
      for (const id of readBooks) {
        const book = books.find((book) => book.bookId === id);

        if (book) {
          Books.push(book);
        }
      }
      setreadBooks(Books);
    }
  }, [books]);
  // console.log(books);

  return (
    <div className=" mt-12">

      <div className="gap-3">
        {readBooks.map((readBook) => (
          <BookReadedDisplay
            key={readBook.bookId}
            readBook={readBook}
          ></BookReadedDisplay>
        ))}
      </div>
    </div>
  );
};

export default Books;
