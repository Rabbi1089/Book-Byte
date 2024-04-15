// eslint-disable-next-line react/prop-types
const BookReadedDisplay = ({readBook}) => {
    return (
        <div>
          <div className="card card-side bg-base-100 shadow-xl max-w-6xl mx-auto m-3 p-3">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{readBook.length}</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
        </div>
      );
    };
export default BookReadedDisplay;