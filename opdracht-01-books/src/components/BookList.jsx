import { useState } from 'react';
import Book from './Book.jsx';

function BookList() {
  // Array van boeken in state
  const [books] = useState([
    {
      id: 1,
      title: "The Hunger Games",
      author: "Suzanne Collins",
      image: "/images/book-3.png",
      year: 2008,
      series: "The Hunger Games"
    },
    {
      id: 2,
      title: "Fantasia VI",
      author: "Geronimo Stilton",
      image: "/images/book-2.png",
      year: 2011,
      series: "Fantasia"
    },
    {
      id: 3,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      image: "/images/book-1.png",
      year: 1997,
      series: "Harry Potter"
    }
  ]);

  return (
    <div className="book-list">
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </div>
  );
}

export default BookList;
