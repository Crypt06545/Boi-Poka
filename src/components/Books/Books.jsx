import { useState, useEffect } from "react";
import Book from "../Book/Book";
const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="my-14 w-11/12 mx-auto">
      <h1 className="text-center text-2xl lg:text-4xl font-bold">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {books.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;

// {bookId: 16, bookName: "You Don't Know JS: Scope & Closures", author: 'Kyle Simpson', image: 'https://images-na.ssl-images-amazon.com/images/I/81zWsOMWE4L.jpg', review: 'An essential JavaScript book, covering in-depth kn… making it a must-read for JavaScript developers.', …}
// author
// :
// "Kyle Simpson"
// bookId
// :
// 16
// bookName
// :
// "You Don't Know JS: Scope & Closures"
// category
// :
// "JavaScript"
// image
// :
// "https://images-na.ssl-images-amazon.com/images/I/81zWsOMWE4L.jpg"
// publisher
// :
// "O'Reilly Media"
// rating
// :
// 4.7
// review
// :
// "An essential JavaScript book, covering in-depth knowledge on scopes and closures. Kyle Simpson unravels complex concepts, making it a must-read for JavaScript developers."
// tags
// :
// (2) ['JavaScript', 'Web Development']
// totalPages
// :
// 98
// yearOfPublishing
// :
// 2022
// [[Prototype]]
// :
// Object
