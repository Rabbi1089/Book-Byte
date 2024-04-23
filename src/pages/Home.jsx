import { useLoaderData } from "react-router-dom";
import BookCart from "../components/BookCart";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/Books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Banner />
      </div>

      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 ">
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <BookCart key={book.bookId} book={book}></BookCart>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
