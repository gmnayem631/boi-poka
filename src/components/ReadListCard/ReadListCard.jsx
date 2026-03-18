import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { IoDocumentText, IoPeopleOutline } from 'react-icons/io5';

const ReadListCard = ({ readBook }) => {
  console.log(readBook);
  const {
    image,
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
  } = readBook;
  return (
    <div className="work-sans my-3 flex w-full gap-6">
      {/* Image */}
      <div className="flex w-57 items-center justify-center rounded-2xl bg-gray-200 px-10 py-8">
        <img src={image} className="h-43 rounded-lg" alt="" />
      </div>

      {/* Content */}
      <div className="">
        <h3 className="playfair-display text-2xl font-bold">{bookName}</h3>
        <p className="font-medium">
          <small>By: {author}</small>
        </p>

        {/* Tags */}
        <div className="mt-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <p className="font-bold">Tag</p>
            {tags.map((tag, index) => (
              <div key={index} className="badge badge-soft badge-success font-semibold">
                #{tag}
              </div>
            ))}
          </div>

          <p className="flex items-center gap-2">
            <FaLocationDot />
            <span className="font-medium text-gray-600">Year of Publishing: </span>
            <span className="font-semibold">{yearOfPublishing}</span>
          </p>
        </div>

        <div className="mt-4 flex items-center gap-5">
          <p className="flex items-center gap-2">
            <IoPeopleOutline />
            <span className="font-medium text-gray-600">Publisher: </span>
            <span className="font-semibold">{publisher}</span>
          </p>

          <p className="flex items-center gap-2">
            <IoDocumentText />
            <span className="font-medium text-gray-600">Page </span>
            <span className="font-semibold">{totalPages}</span>
          </p>
        </div>
        <div className="my-4 border-t border-dashed border-gray-400"></div>
        <div className="flex items-center gap-5">
          <div className="badge badge-soft badge-primary font-semibold">Category {category}</div>
          <div className="badge badge-soft badge-warning font-semibold">Rating {rating}</div>
          <div className="badge badge-success rounded-full px-2 py-3 font-semibold text-white">
            View Details
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadListCard;
