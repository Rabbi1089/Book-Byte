import { useLoaderData, useParams } from "react-router-dom";
//import toast, { Toaster } from "react-hot-toast";
import { saveReadBook, savedWishlist } from "../utlis/localStroage";

const BookDetail = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.bookId === idInt);
  //console.log(book);
  const {
    bookName,
    tags,
    image,
    author,
    category,
    rating,
    bookId,
    review,
    totalPages,
    yearOfPublishing,
    publisher,
  } = book;

  const handleReadButton = () => {
    saveReadBook(bookId);
    //console.log(saveReadBook);
    // toast.success("successfully added to Booklist");
  };

  const handleWishlist = () => {
    savedWishlist(bookId);
  };
  return (
    <div className="max-w-6xl mx-auto">
      <div className="hero max-h-auto">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="bg-base-200 flex justify-center p-6 w-1/2 rounded-lg">
            <img src={image} style={{ weight: "318px", height: "394px" }} />
          </div>
          <div className="w-1/2 my-4 py-8 px-4 ">
            <h3 className="text-2xl font-semibold mx-3">{bookName}</h3>
            <h3 className=" text-xl font-semibold p-3 mb-5">By : {author}</h3>
            <hr />
            <p className=" m-3">{category}</p>
            <hr />
            <p className=" m-3">{review}</p>
            <div className="flex justify-start items-center  mx-3">
              <p className=" font-bold">Tag</p>
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
            </div>
            <h3 className=" text-[16px] m-1">
              Number of Pages :{" "}
              <span className=" mx-4 font-bold">{totalPages}</span>
            </h3>
            <h3 className=" text-[16px] m-1">
              Publisher : <span className=" mx-4 font-bold">{publisher}</span>
            </h3>
            <h3 className=" text-[16px] m-1">
              Year of Publishing :
              <span className=" mx-4 font-bold">{yearOfPublishing}</span>
            </h3>
            <h3 className=" text-[16px] m-1">
              Rating : <span className=" mx-4 font-bold">{rating}</span>
            </h3>
            <div className="gap-3 lg:gap-5">
              <a
                onClick={handleReadButton}
                className="btn  bg-white text-black"
              >
                Read
              </a>
              <a
                onClick={handleWishlist}
                className="btn text-white bg-secondaryColor border-white m-4"
              >
                Wishlist
              </a>
              {/* <Toaster /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
