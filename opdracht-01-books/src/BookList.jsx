import { useState } from 'react';
import Book from './Book.jsx';

function BookList() {
  // Array van boeken in state
  const [books] = useState([
    {
      title: "The hunger games",
      author: "Suzanne Collins",
      image: "/images/book-3.png"
    },
    {
      title: "Fantasia VI",
      author: "Geronimo Stilton",
      image: "/images/book-2.png"
    },
    {
      title: "Harry Potter and the sorcerer's stone",
      author: "J.K. Rowling",
      image: "/images/book-1.png"
    }
  ]);

  return (
    <div className="book-list">
      {books.map((book, idx) => (
        <Book key={idx} title={book.title} author={book.author} image={book.image} />
      ))}
    </div>
  );
}

export default BookList;
