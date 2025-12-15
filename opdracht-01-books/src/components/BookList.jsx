import { useState } from 'react';
import Book from './Book.jsx';
import { originalBooks } from './category.js'; 

function BookList() {
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
    const value = e.target.value;
    setSearchInput(value);

    const filtered = originalBooks.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );

    const finalFiltered = selectedCategory === 'Alle'
      ? filtered
      : filtered.filter(book => book.category === selectedCategory);

    setBooks(finalFiltered);
  };

  const filterHandler = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    const filteredByCategory = category === 'Alle'
      ? originalBooks
      : originalBooks.filter(book => book.category === category);

    const finalFiltered = searchInput
      ? filteredByCategory.filter(book =>
          book.title.toLowerCase().includes(searchInput.toLowerCase())
        )
      : filteredByCategory;

    setBooks(finalFiltered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Zoek op titel..."
        value={searchInput}
        onChange={handleChange}
        style={{ marginBottom: '10px', padding: '5px', width: '200px' }}
      />

      <div className="filter" style={{ marginBottom: '20px' }}>
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

      <div className="book-list" style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '20px' 
      }}>
        {books.map((book) => (
          <Book
            key={book.id}
            {...book}
            description={book.description}
            year={book.year}
            pages={book.pages}
          />
        ))}
      </div>
    </div>
  );
}

export default BookList;
