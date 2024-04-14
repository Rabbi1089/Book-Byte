import { useLoaderData } from "react-router-dom";
import BookCart from "../components/BookCart";

const Home = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <div className="mx-auto">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 ">
        <div className="hero max-h-[570px] bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/vsGVgD5/banner.jpg"
              className="w-1/3 rounded-lg shadow-2xl"
              style={{ weight: "318px", height: "394px" }}
            />
            <div className="w-2/3">
              <h1 className="text-5xl font-bold w-[526px] h-[168px]">
                Book Haven: Explore Worlds Within Pages
              </h1>
              <a
                href="/ListedBooks"
                className="btn bg-primaryGreen  border-primaryGreen text-white font-bold my-2"
              >
                View The List
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 ">
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {books &&
              books.map((book) => (
                <BookCart key={book.bookId} book={book}></BookCart>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
