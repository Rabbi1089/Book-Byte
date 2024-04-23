const Banner = () => {
  return (
    <div>
      <div className="container lg:w-full p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="hero h-auto lg:max-h-[570px] bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/vsGVgD5/banner.jpg"
              className=" w-fit p-2 lg:w-1/3 rounded-lg shadow-2xl"
              style={{ weight: "318px", height: "394px" }}
            />
            <div className="w-full lg:w-2/3">
              <h1 className=" text-2xl lg:text-5xl font-bold w-[526px] h-[168px]">
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
    </div>
  );
};

export default Banner;
