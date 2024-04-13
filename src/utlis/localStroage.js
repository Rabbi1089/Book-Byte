import toast from "react-hot-toast";
export const getReadBook = () => {
  const ListedBook = localStorage.getItem("read-book");
  if (ListedBook) {
    return JSON.parse(ListedBook);
  }
  return [];
};

export const saveReadBook = (id) => {
  const ListedBooks = getReadBook();
  const idInt = parseInt(id);
  const exits = ListedBooks.find((bookId) => bookId === idInt);
  //console.log(exits);
  if (!exits) {
    ListedBooks.push(id);
    localStorage.setItem("read-book", JSON.stringify(ListedBooks));
    toast.success("successfully added to Booklist");
  } else {
    toast.error("already added");
  }
};

export const getWishlist = () => {
  const wishedBook = localStorage.getItem("wish-book");
  if (wishedBook) {
    return JSON.parse(wishedBook);
  }
  return [];
};

export const savedWishlist = (id) => {
  const wishedBooks = getWishlist();
  const idInt = parseInt(id);
  const getReadBooks = getReadBook();
  const alreadyRead = getReadBooks.find((bookId) => bookId === idInt);
  if (alreadyRead) {
    toast.error("This book already read !");
  } else {
    const exits = wishedBooks.find((bookId) => bookId === idInt);
    //console.log(exits);
    if (!exits) {
      wishedBooks.push(id);
      localStorage.setItem("wish-book", JSON.stringify(wishedBooks));
      toast.success("successfully added to Wishlist");
    } else {
      toast.error("already added");
    }
  }
};
