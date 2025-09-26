import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import animals from '../animals';
import './DetailPage.css';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const animal = animals.find(a => a.id === id);

  if (!animal) {
    return <div>Dier niet gevonden</div>;
  }

  return (
    <div className="detail-page">
      <button onClick={() => navigate(-1)}>Terug</button>
      <h1>{animal.name}</h1>
      <img src={animal.image} alt={animal.name} className="detail-img" />
      <p><strong>Soort:</strong> {animal.name}</p>
      <p><strong>Leefgebied:</strong> {animal.habitat}</p>
      <p><strong>Dieet:</strong> {animal.diet}</p>
      <p><strong>Beschrijving:</strong> {animal.description}</p>
    </div>
  );
}

export default DetailPage;
