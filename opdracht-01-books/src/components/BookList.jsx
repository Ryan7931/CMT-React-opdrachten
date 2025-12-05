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
      series: "The Hunger Games",
      category: "Avontuur"
    },
    {
      id: 2,
      title: "Fantasia VI",
      author: "Geronimo Stilton",
      image: "/images/book-2.png",
      year: 2011,
      series: "Fantasia",
      category: "Fantasy"
    },
    {
      id: 3,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      image: "/images/book-1.png",
      year: 1997,
      series: "Harry Potter",
      category: "Fantasy"
    }
  ];

  const [books, setBooks] = useState(originalBooks);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  const categories = [
    'Alle',
    'Fantasy',
    'Avontuur',
    'Sciencefiction',
    'Thriller',
    'Romance'
  ];

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchInput(value);

    const filtered = originalBooks.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );

    setBooks(filtered);
  };

  const filterHandler = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category === 'Alle') {
      setBooks(originalBooks);
    } else {
      const filtered = originalBooks.filter(book => book.category === category);
      setBooks(filtered);
    }
  };

  return (
    <div>

      {/* zoekbalk */}
      <input
        type="text"
        placeholder="Zoek op titel..."
        value={searchInput}
        onChange={handleChange}
      />

      {/* categorie filter */}
      <div className="filter">
        <label htmlFor="category">Filter op categorie: </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={filterHandler}
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* boeken tonen */}
      <div className="book-list">
        {books.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
