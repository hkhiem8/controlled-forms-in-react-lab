import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBook({
            ...newBook,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({ title: '', author: '' });
    };

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={newBook.title}
                            onChange={handleInputChange}
                            required />
                    </div>
                    <div>
                        <label>Author:</label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={newBook.author}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit">Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                <h3>Your Books</h3>
                {books.map((book, index) => (
                    <div key={index} className="bookCard">
                        <h4>{book.title} by {book.author}</h4>
                    </div>
                ))};
            </div>
        </div>
    );
};

export default Bookshelf;