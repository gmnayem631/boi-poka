import React from "react";
import bannerImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div
      className="my-10 flex justify-between items-center w-3/4 mx-auto bg-[#F3F3F3] px-5 py-12
     rounded-3xl"
    >
      {/* Banner Content */}
      <div className="flex flex-col gap-5 ml-14 w-1/2">
        <h2 className="font-bold text-3xl md:text-4xl">
          Books to freshen up your bookshelf
        </h2>
        <div className="">
          <button className="btn bg-[#23be0a] text-white">View the List</button>
        </div>
      </div>
      <div className="">
        <img src={bannerImg} className="w-98 rounded-lg" alt="" />
      </div>
    </div>
  );
};

export default Banner;
