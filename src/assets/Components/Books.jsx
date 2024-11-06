import { useEffect } from "react";
import { useState } from "react";
import Book from "./Book";

const Books = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);

  return (
    <div className=" py-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Books List</h2>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-12">
        {book.map((book) => (
          <Book book={book} key={book.id}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
