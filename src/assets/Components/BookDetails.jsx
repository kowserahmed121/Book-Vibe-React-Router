import { useLoaderData, useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";
const BookDetails = () => {
  const { booksId } = useParams();
  const bookData = useLoaderData();
  const id = parseInt(booksId);
  const book = bookData.find((item) => item.id === id);

  const {
    book_name,
    author,
    book_img,
    rating,
    total_page,
    type,
    tags,
    summary,
  } = book;
  return (
    <div className="flex w-full items-center">
      <div className="w-1/2">
        <img src={book_img} alt={book_name} />
      </div>
      <div className="w-1/2 space-y-4 mt-10">
        <h2 className="text-6xl font-bold">{book_name}</h2>
        <h3 className="text-xl font-semibold">By: {author}</h3>
        <div className="divider"></div>
        <p className="text-2xl">{type}</p>
        <div className="divider"></div>
        <div>
          <p className="text-xl text-justify">
            <span className="text-xl font-bold">Summary : </span> {summary}{" "}
          </p>
        </div>
        <div className="flex gap-5 items-center">
          <p className="text-xl font-bold">Tag :</p>
          {tags.map((tag, idx) => (
            <div
              key={idx}
              className="bg-green-50 text-green-600 p-2 rounded-lg font-bold"
            >
              #{tag}
            </div>
          ))}
        </div>
        <div className="divider"></div>
        <div className="space-y-3 text-xl font-semibold">
          <p>Number of Page : {total_page} page</p>
          <p className="flex items-center gap-2">
            Ratting this book : {rating} <FaRegStar />
          </p>
        </div>
        <div className="divider"></div>
        <div className="flex gap-6 ">
          <a className="btn btn-accent">Mark As Read</a>
          <a className="btn btn-info"> Add To Wishlist</a>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
