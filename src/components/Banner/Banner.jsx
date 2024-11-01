const Banner = () => {
  return (
    <div className="mt-7 w-11/12 mx-auto rounded-3xl shadow-xl p-10">
      <div className="lg:flex justify-between items-center space-y-8 lg:space-y-0 lg:space-x-10">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold text-white leading-tight">
            Books to Freshen Up <br /> Your Bookshelf
          </h1>
          <p className="text-lg text-gray-200 max-w-lg">
            Discover a curated collection of books designed to transform and
            inspire your reading journey. Dive into new worlds and ideas!
          </p>
          <button className="btn bg-[#23BE0A] text-white px-8 py-3 mt-4 hover:bg-green-800 transition-colors shadow-lg rounded-full">
            View The List
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="./banner.png"
            alt="Banner"
            className="max-w-xs md:max-w-md rounded-lg shadow-xl transform transition hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
