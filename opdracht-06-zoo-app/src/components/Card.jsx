import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card({ animal }) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/detail/${animal.id}`)}>
      <img src={animal.image} alt={animal.name} className="card-img" />
      <h2>{animal.name}</h2>
      <p>{animal.description}</p>
    </div>
  );
}

export default Card;
