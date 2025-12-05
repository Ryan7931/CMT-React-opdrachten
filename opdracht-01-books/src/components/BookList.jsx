import { useState } from 'react';
import Book from './Book.jsx';

function BookList() {
  const originalBooks = [
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
  ];

  const [books, setBooks] = useState(originalBooks);
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchInput(value);

    const filtered = originalBooks.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );

    setBooks(filtered);
  };

  return (
    <div>

      <input
        type="text"
        placeholder="Zoek op titel..."
        value={searchInput}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          fontSize: "16px"
        }}
      />

      <div className="book-list">
        {books.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
