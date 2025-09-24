const Book = ( { title, author, image } ) => {
    return (
        <section className="book">
            <img src={image} alt={title} style={{ width: '150px', height: 'auto' }} />
            <h2>{title}</h2>
            <h3>{author}</h3>
        </section>
    );
}

export const BookZevenZussen = () => (
    <section className="book">
        <img src="/images/book-3.png" alt="The hunger games" style={{ width: '150px', height: 'auto' }} />
        <h2>The hunger games</h2>
        <h3>Suzanne Collins</h3>
    </section>
);

export const BookLevenVanEenLoser = () => (
    <section className="book">
        <img src="/images/book-2.png" alt="Fantasia VI" style={{ width: '150px', height: 'auto' }} />
        <h2>Fantasia VI</h2>
        <h3>Geronimo Stilton</h3>
    </section>
);

export const BookHarryPotter = () => (
    <section className="book">
        <img src="/images/book-1.png" alt="Harry Potter and the sorcerer's stone" style={{ width: '150px', height: 'auto' }} />
        <h2>Harry Potter and the sorcerer's stone</h2>
        <h3>J.K. Rowling</h3>
    </section>
);

export default Book;