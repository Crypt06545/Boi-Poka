import { IoStarHalf } from "react-icons/io5";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, tags } = book;
  return (
    <div className=" bg-base-100 border border-gray-200 p-4 rounded-2xl">
      <div className="flex justify-center items-center rounded-2xl bg-[#F3F3F3] p-4">
        <img className="h-56 object-cover" src={image} alt={bookName} />
      </div>
      <div className="space-y-3 flex justify-between flex-col mt-4">
        <div>
          <h2 className="card-title">{bookName}</h2>
          <p>By: {author}</p>
        </div>
        <div className="border-t border-dashed border-gray-200 mt-10"></div>
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="border-2 p-2 rounded-lg text-[#23BE0A] border-gray-300"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="flex items-center text-xl">
          <p className="m-1">Rating: {rating}</p>
          <IoStarHalf className="text-[#23BE0A]" />
        </div>
      </div>
    </div>
  );
};

export default Book;
