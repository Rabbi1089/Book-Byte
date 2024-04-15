import { IoIosArrowDropdown } from "react-icons/io";
const ListedBookHeader = () => {
  return (
    <div className=" max-w-6xl mx-auto">
      <h2 className="text-center text-6xl tracking-tighter font-bold bg-bgGray m-4 p-5">
        Books
      </h2>
      <div className="flex items-center justify-center">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1">
            Short-By
            <IoIosArrowDropdown size={30} />

          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a >Rating</a>
            </li>
            <li>
              <a>Number Of page</a>
            </li>
            <li>
              <a>Published year</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListedBookHeader;
