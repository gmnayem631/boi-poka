import React from 'react';
import { BiStar } from 'react-icons/bi';
import { Link } from 'react-router';

const BookCard = ({ book }) => {
  // console.log(book);
  const { bookId, image, tags, bookName, author, category, rating } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 my-8 w-96 rounded-2xl border p-3 shadow-sm">
        <figure className="bg-[#F3F3F3] py-4">
          <img src={image} className="h-40" alt="Shoes" />
        </figure>

        <div className="card-body">
          <div className="mt-4 font-semibold">
            {tags.map((tag, index) => (
              <div key={index} className="badge badge-soft badge-success work-sans">
                {tag}
              </div>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p className="work-sans font-medium">By: {author}</p>
          <div className="border-t border-dashed border-gray-400"></div>
          <div className="work-sans mt-4 flex items-center justify-between">
            <div className="">{category}</div>
            <div className="flex items-center gap-2">
              {rating} <BiStar></BiStar>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
