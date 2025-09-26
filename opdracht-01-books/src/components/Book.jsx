const Book = ( { title, author, image } ) => {
    return (
        <section className="book">
            <img src={image} alt={title} style={{ width: '150px', height: 'auto' }} />
            <h2>{title}</h2>
            <h3>{author}</h3>
        </section>
    );
}

export default Book;
