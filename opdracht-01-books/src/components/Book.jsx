import React from 'react';
import { useNavigate } from 'react-router-dom';

const Book = ({ id, title, author, image, category }) => {
  const navigate = useNavigate();
  return (
    <section className="book-card" onClick={() => navigate(`/book/${id}`)} style={{cursor:'pointer'}}>
      <div className="book-img-wrap">
        <img src={image} alt={title} className="book-img" />
      </div>
      <div className="book-info">
        <h2 className="book-title">{title}</h2>
        <h3 className="book-author">{author}</h3>

        <p className="book-category">Categorie: {category}</p>
      </div>
    </section>
  );
};

export default Book;
