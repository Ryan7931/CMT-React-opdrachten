// Component voor één menu-item
function MenuItem({ item }) {
  return (
    <div className="menu-item">
      <img src={item.img} alt={item.title} className="menu-img" />
      <div className="menu-info">
        <h2>{item.title}</h2>
        <p className="menu-category">Categorie: {item.category}</p>
        <p className="menu-price">Prijs: €{item.price}</p>
        <p className="menu-desc">{item.desc}</p>
      </div>
    </div>
  );
}

export default MenuItem;
