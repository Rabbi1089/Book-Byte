import { CiLocationOn } from "react-icons/ci";
import { IoIosContacts } from "react-icons/io";
import { FaRegFile } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookWished = ({ book }) => {
  const {
    bookName,
    tags,
    image,
    author,
    category,
    rating,
    bookId,
    yearOfPublishing,
    publisher,
    totalPages,
  } = book;

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl max-w-6xl mx-auto m-3 p-3">
        <figure>
          <div className=" h-[230px] w-[280px] ">
            <img
              role="presentation"
              className="object-cover  rounded dark:bg-gray-500 w-full h-full"
              src={image}
            />
          </div>
        </figure>
        <div className="card-body">
          <h3 className="text-2xl font-semibold">{bookName}</h3>
          <h3 className="text-sm font-semibold">By : {author}</h3>
          <div className="flex justify-start gap-6">
            <div className=" flex items-center ">
              <div>
                <p className=" font-bold max-w-[50px] gap-2">Tag :</p>
              </div>
              <div>
                <a className="text-primaryGreen font-semibold bg-gray-100 flex justify-start">
                  {tags.map((tag) => (
                    <p
                      key={tag}
                      className="gap-3 p-2 m-2 text-xs bg-bgGray rounded-lg"
                    >
                      {tag}
                    </p>
                  ))}
                </a>
              </div>
            </div>

            <div className=" flex items-center justify-center gap-1">
              <div>
                <CiLocationOn size={30} />
              </div>
              <div>
                <p>Year of Publishing: {yearOfPublishing}</p>
              </div>
            </div>
          </div>

          {/*  Publisher: section */}
          <div className="flex gap-9">
            <div className=" flex items-center justify-center gap-1 my-3">
              <div>
                <IoIosContacts size={30} />
              </div>
              <div>
                <p>Publisher: {publisher}</p>
              </div>
            </div>
            <div className=" flex items-center justify-center gap-1">
              <div>
                <FaRegFile size={30} />
              </div>
              <div>
                <p>Page : {totalPages}</p>
              </div>
            </div>
          </div>
          <hr />
          <div className=" flex justify-start">
            <div className="gap-3 p-2 m-2 text-xs  bg-secondaryColor rounded-lg text-white">
              Category: {category}{" "}
            </div>
            <div className="gap-3 p-2 m-2 text-xs  bg-pri2 rounded-lg text-white">
              Rating: {rating}{" "}
            </div>
            <div className="gap-3 p-2 m-2 text-xs bg-primaryGreen rounded-lg text-white">
              <Link>View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookWished;
