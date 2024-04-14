import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const BookCart = ({ book }) => {
  const { bookName, tags, image, author, category, rating, bookId } = book;
  //console.log(image);

  return (
    <div className="shadow rounded-md">
      <Link
        to={`/book/${bookId}`}
        rel="noopener noreferrer"
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={image}
        />
        <div className="p-6 space-y-2">
          <a className="text-primaryGreen font-semibold bg-gray-100 flex">
            {tags.map((tag) => (
              <p
                key={tag}
                className="gap-3 p-2 m-2 text-xs bg-bgGray rounded-lg"
              >
                {tag}
              </p>
            ))}
          </a>
          <h3 className="text-2xl font-semibold">{bookName}</h3>
          <h3 className=" text-xl font-semibold p-3 mb-5 border-b-2 border-dashed">
            By : {author}
          </h3>
          <div className="flex text-center justify-between">
            <div>
              <p>{category}</p>
            </div>
            {/* rating start here */}
            <div className="flex items-center gap-2">
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                {rating}
              </p>
              <div className="p">
                <CiStar />
              </div>
            </div>
            {/* rating end here */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCart;
