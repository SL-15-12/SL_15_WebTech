function Books({book,author})
{
    return(

        <section className="ksiazki">
            <h1>Ksiażki</h1>
            <p>Książki: {book}</p>
            <p>Autor: {author}</p>
        </section>

    )
}

export default Books;