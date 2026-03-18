import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
  const { id } = useParams();
  const allBooks = useLoaderData();

  const singleBook = allBooks.find((book) => book.bookId === parseInt(id));

  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = singleBook;
  return (
    <div className="my-16 flex justify-around gap-12">
      {/* Image */}
      <div className="flex w-1/2 items-center justify-center rounded-2xl bg-[#F3F3F3] p-18">
        <img src={image} className="h-112 rounded-lg" alt="" />
      </div>
      {/* content */}
      <div className="work-sans w-1/2">
        <h2 className="playfair-display text-3xl font-bold">{bookName}</h2>
        <p className="font-medium">
          <small>By: {author}</small>
        </p>
        <div className="my-4 border-t border-dashed border-gray-400"></div>
        <p className="">{category}</p>
        <div className="mt-4 border-t border-dashed border-gray-400"></div>
        <p className="mt-6 text-justify">
          <span className="font-bold">Review: </span> {review}
        </p>

        {/* Tags */}
        <div className="mt-7 flex items-center gap-4">
          <p className="font-bold">Tag</p>
          {tags.map((tag, index) => (
            <div key={index} className="badge badge-soft badge-success font-bold">
              {tag}
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-dashed border-gray-400"></div>

        <div className="w-75 rounded-lg py-4">
          <div className="space-y-2 text-gray-800">
            <p>
              <span className="font-medium text-gray-600">Number of Pages: </span>
              <span className="font-semibold">{totalPages}</span>
            </p>
            <p>
              <span className="font-medium text-gray-600">Publisher: </span>
              <span className="font-semibold">{publisher}</span>
            </p>
            <p>
              <span className="font-medium text-gray-600">Year of Publishing: </span>
              <span className="font-semibold">{yearOfPublishing}</span>
            </p>
            <p>
              <span className="font-medium text-gray-600">Rating: </span>
              <span className="font-semibold">{rating}</span>
            </p>
          </div>

          <div className="mt-4 flex gap-3">
            <button className="cursor-pointer rounded-md border px-4 py-2 text-gray-700 hover:bg-gray-200">
              Read
            </button>
            <button className="cursor-pointer rounded-md bg-teal-500 px-4 py-2 text-white hover:bg-teal-600">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
