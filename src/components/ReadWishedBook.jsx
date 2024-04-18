import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ReadWishedBook = () => {
  const [tabIndex, setTabIndex] = useState(0);
  //const booksRead = useLoaderData();
  //console.log(booksRead);

  return (
    <div>
      <h1 className=" text-sm text-center">
        Click below to see read or whitelisted Book.
      </h1>
      <div className="flex justify-center items-center -mx-4 overflow-x-auto lg:max-w-6xl  lg:mt-2 overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800 ">
        <Link
          to="readbooks"
          onClick={() => setTabIndex(0)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0
              ? "border-2 border-b-0 scale-105 font-bold"
              : "border-b"
          }  rounded-t-lg`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read</span>
        </Link>
        <Link
          to="WishBooks"
          onClick={() => setTabIndex(1)}
          rel="noopener noreferrer"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1
              ? "border-2 border-b-0 scale-105 font-bold"
              : "border-b"
          }  rounded-t-lg`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist</span>
        </Link>
      </div>
    </div>
  );
};

export default ReadWishedBook;
