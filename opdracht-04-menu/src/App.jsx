import './App.css' // Importeer de CSS voor styling
import menu from './componenten/data' // Importeer de menu-data uit de nieuwe map
import MenuList from './componenten/MenuList' // Importeer de MenuList component uit de nieuwe map

function App() {
  return (
    <div className="menu-container"> {/* Hoofdcontainer voor de menukaart */}
      <h1>Opdracht 4 - Menu</h1> {/* Titel van de pagina */}
      {/* Geef de menu-data door aan MenuList */}
      <MenuList menu={menu} />
    </div>
  )
}

export default App // Exporteer de App component zodat deze gebruikt kan worden
