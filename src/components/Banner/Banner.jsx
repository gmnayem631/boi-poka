import React from 'react';
import bannerImg from '../../assets/books.jpg';

const Banner = () => {
  return (
    <div className="mx-auto my-10 flex w-3/4 items-center justify-between rounded-3xl bg-[#F3F3F3] px-5 py-12">
      {/* Banner Content */}
      <div className="ml-14 flex w-1/2 flex-col gap-5">
        <h2 className="text-3xl font-bold md:text-4xl">Books to freshen up your bookshelf</h2>
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
