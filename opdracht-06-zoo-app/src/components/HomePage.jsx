import React, { useState } from 'react';
import animals from '../animals';
import Card from './Card';
import './HomePage.css';

function HomePage() {
  const originalAnimals = animals;

  const [animalList, setAnimalList] = useState(originalAnimals);
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchInput(value);

    const filtered = originalAnimals.filter((animal) =>
      animal.name.toLowerCase().includes(value.toLowerCase())
    );

    setAnimalList(filtered);
  };

  return (
    <div className="homepage">
      <h1>Dieren in de dierentuin</h1>

      <input
        type="text"
        placeholder="Zoek op diernaam..."
        value={searchInput}
        onChange={handleChange}
        className="search-input"
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
          fontSize: "16px",
          borderRadius: "8px"
        }}
      />

      <div className="card-list">
        {animalList.map(animal => (
          <Card key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
