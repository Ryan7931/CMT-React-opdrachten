import { useParams } from 'react-router-dom';

const books = [
  {
    id: 1,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    image: "/images/book-3.png",
    year: 2008,
    series: "The Hunger Games"
  },
  {
    id: 2,
    title: "Fantasia VI",
    author: "Geronimo Stilton",
    image: "/images/book-2.png",
    year: 2011,
    series: "Fantasia"
  },
  {
    id: 3,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    image: "/images/book-1.png",
    year: 1997,
    series: "Harry Potter"
  }
];

const BookDetail = () => {
  const { id } = useParams();
  const book = books.find(b => b.id === Number(id));

  if (!book) return <h2>Boek niet gevonden</h2>;

  return (
    <div className="book-detail-card">
      <img src={book.image} alt={book.title} className="book-img" style={{width:'200px'}} />
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p><strong>Uitgebracht:</strong> {book.year}</p>
      <p><strong>Serie:</strong> {book.series}</p>
    </div>
  );
};

export default BookDetail;
