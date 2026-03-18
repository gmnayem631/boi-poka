import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { getStoredBook } from '../../utilities/addToDb';
import ReadListCard from '../../components/ReadListCard/ReadListCard';

const booksPromise = axios.get('./booksData.json').then((response) => response.data);

const ReadList = () => {
  const books = use(booksPromise);
  const [readList, setReadList] = useState([]);

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const myReadList = books.filter((book) => convertedStoredBooks.includes(book.bookId));
    setReadList(myReadList);
  }, []);

  return (
    <div className="my-16">
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input type="radio" name="my_tabs_3" className="tab" aria-label="Read List" />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {readList.map((readBook) => (
            <ReadListCard key={readBook.bookId} readBook={readBook}></ReadListCard>
          ))}
        </div>

        <input type="radio" name="my_tabs_3" className="tab" aria-label="Wishlist" defaultChecked />
        <div className="tab-content bg-base-100 border-base-300 p-6">Wishlist</div>
      </div>
    </div>
  );
};

export default ReadList;
