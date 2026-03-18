import axios from 'axios';
import React, { use } from 'react';

const booksPromise = axios.get('./booksData.json').then((response) => response.data);
console.log(booksPromise);
const ReadList = () => {
  const books = use(booksPromise);
  console.log(books);
  return (
    <div className="my-16">
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input type="radio" name="my_tabs_3" className="tab" aria-label="Read List" />
        <div className="tab-content bg-base-100 border-base-300 p-6">Read List</div>

        <input type="radio" name="my_tabs_3" className="tab" aria-label="Wishlist" defaultChecked />
        <div className="tab-content bg-base-100 border-base-300 p-6">Wishlist</div>
      </div>
    </div>
  );
};

export default ReadList;
