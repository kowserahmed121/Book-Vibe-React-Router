/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { id, book_name, author, book_img, rating, type, tags } = book;
  return (
    <Link to={`books/${id}`}>
      <div className="space-y-4 border-2 rounded-lg">
        <div className="card bg-base-100 p-4 ">
          <figure className="bg-gray-100">
            <img className="w-[166px]" src={book_img} alt={book_name} />
          </figure>
          <div className="py-6 space-y-4">
            <div className="flex gap-5">
              {tags.map((tag, idx ) => (
                <div key={idx} className="bg-green-50 text-green-600 p-2 rounded-lg font-bold">
                  {tag}
                </div>
              ))}
            </div>
            <h2 className="text-xl font-semibold">{book_name}</h2>
            <p>By : {author}</p>
            <div className="divider"></div>
            <div className="card-actions justify-between">
              <div>{type}</div>
              <div className="flex items-center gap-2">
                {rating} <FaRegStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
