import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishlist } from "../utlis/localStroage";
import BookWished from "./BookWished";

const WishBooks = () => {
  const [wishBook, setWishBook] = useState([]);
  const books = useLoaderData();
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
    <div className=" gap-3">
      <h1>wishBook : {wishBook.length}</h1>
      {wishBook.map((book, index) => (
        <BookWished key={index} book={book}></BookWished>
      ))}
    </div>
  );
};

export default WishBooks;
