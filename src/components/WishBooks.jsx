import { useEffect, useState } from "react";
//import { useLoaderData } from "react-router-dom";
import { getWishlist } from "../utlis/localStroage";
import BookWished from "./BookWished";

const WishBooks = () => {
  const [books, setBooks] = useState([]);
  const [wishBook, setWishBook] = useState([]);

  useEffect(() => {
    fetch("/Books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  //const books = useLoaderData();
  //console.log(books);
  useEffect(() => {
    const stroedwBook = getWishlist();
    if (stroedwBook.length > 0) {
      const wBooks = [];
      for (const id of stroedwBook) {
        const book = books.find((book) => book.bookId === id);

        if (book) {
          wBooks.push(book);
        }
      }
      setWishBook(wBooks);
    }
  }, [books]);

  return (
    <div className="gap-3">
      {wishBook.map((book, index) => (
        <BookWished key={index} book={book}></BookWished>
      ))}
    </div>
  );
};

export default WishBooks;
