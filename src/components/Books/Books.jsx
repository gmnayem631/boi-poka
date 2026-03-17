import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ books }) => {
  console.log(books);
  return (
    <div className="my-10">
      <h3 className="text-center text-4xl font-bold">Books</h3>

      <Suspense>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
