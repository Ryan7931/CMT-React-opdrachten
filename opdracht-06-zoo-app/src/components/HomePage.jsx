import React from 'react';
import animals from '../animals';
import Card from './Card';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <h1>Dieren in de dierentuin</h1>
      <div className="card-list">
        {animals.map(animal => (
          <Card key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
