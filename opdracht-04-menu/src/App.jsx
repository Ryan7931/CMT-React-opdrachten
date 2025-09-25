import './App.css' // Importeer de CSS voor styling
import menu from './data' // Importeer de menu-data uit data.js

function App() {
  return (
    <div className="menu-container"> {/* Hoofdcontainer voor de menukaart */}
      <h1>Opdracht 4 - Menu</h1> {/* Titel van de pagina */}
      <div className="menu-list"> {/* Grid-container voor alle menu-items */}
        {/* We gebruiken .map om elk menu-item uit data.js te tonen */}
        {menu.map(item => (
          <div key={item.id} className="menu-item"> {/* Eén gerecht-kaart */}
            {/* Afbeelding van het gerecht, uit de public/images map */}
            <img src={item.img} alt={item.title} className="menu-img" />
            <div className="menu-info"> {/* Info-sectie van het gerecht */}
              <h2>{item.title}</h2> {/* Naam van het gerecht */}
              {/* Categorie en prijs worden netjes weergegeven */}
              <p className="menu-category">Categorie: {item.category}</p> {/* Categorie van het gerecht */}
              <p className="menu-price">Prijs: €{item.price}</p> {/* Prijs van het gerecht */}
              {/* Korte beschrijving van het gerecht */}
              <p className="menu-desc">{item.desc}</p> {/* Beschrijving van het gerecht */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App // Exporteer de App component zodat deze gebruikt kan worden
