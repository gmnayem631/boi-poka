import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { getStoredBook } from '../../utilities/addToDb';
import ReadListCard from '../../components/ReadListCard/ReadListCard';

const booksPromise = axios.get('./booksData.json').then((response) => response.data);

const ReadList = () => {
  const books = use(booksPromise);
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState('');

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const myReadList = books.filter((book) => convertedStoredBooks.includes(book.bookId));
    setReadList(myReadList);
  }, []);

  const handleSort = (type) => {
    setSort(type);
    if (type === 'pages') {
      const sortedByPages = [...readList].sort((a, b) => a.totalPages - b.totalPages);
      setReadList(sortedByPages);
    }
    if (type === 'ratings') {
      const sortedByRatings = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedByRatings);
    }
  };

  return (
    <div className="my-16">
      <h2 className="work-sans mb-9 rounded-2xl bg-[#F3F3F3] py-9 text-center text-2xl font-bold">
        Books
      </h2>

      <div className="work-sans text-center">
        <details className="dropdown">
          <summary className="btn m-1 rounded-lg bg-[#23BE0A] font-semibold text-white">
            Sort By: <span className="font-bold">{sort && sort.toUpperCase()} (Low to High)</span>
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort('pages')}>Number of Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort('ratings')}>Ratings</a>
            </li>
          </ul>
        </details>
      </div>
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
