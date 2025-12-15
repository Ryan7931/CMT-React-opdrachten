import React, { useState } from 'react';

const Book = ({ 
  title, 
  author, 
  image, 
  category, 
  description, 
  year, 
  pages 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const toggleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  return (
    <article className={`book ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="book-inner">
        
        <div className="book-front">
          <div className="book-img-wrap">
            <img src={image} alt={title} className="book-img" />
          </div>
          <div className="book-info">
            <h2 className="book-title">{title}</h2>
            <h3 className="book-author">{author}</h3>
            <p className="book-category">Categorie: {category}</p>

            <div className="favorite-section">
              <button onClick={toggleLike} className="heart-button">
                {liked ? '❤️' : '🤍'}
              </button>
              {liked && <p className="favorited-text">Toegevoegd aan favorieten</p>}
            </div>
          </div>
        </div>

        <div className="book-back">
          <h2>Details</h2>
          <p><strong>Publicatiejaar:</strong> {year}</p>
          <p><strong>Pagina's:</strong> {pages}</p>
          <p>{description}</p>
          <p style={{ fontStyle: 'italic', marginTop: '10px' }}>Klik op de kaart om terug te gaan</p>
        </div>

      </div>
    </article>
  );
};

export default Book;
