import React, { Suspense } from 'react';
import BookCard from '../Book/BookCard';

const Books = ({ books }) => {
  return (
    <div className="my-20">
      <h3 className="text-center text-4xl font-bold">Books</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
