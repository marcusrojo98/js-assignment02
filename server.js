const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' }
];

// GET /books
app.get('/books', (req, res) => {
    res.json(books);
});

// PUT /books
app.put('/books', (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.status(201).json({ message: 'Book added successfully', book: newBook });
});

// DELETE /books
app.delete('/books', (req, res) => {
    books = [];
    res.json({ message: 'All books deleted successfully' });
});

// GET /books/author/:author
app.get('/books/author/:author', (req, res) => {
    const author = req.params.author;
    const authorBooks = books.filter(book => book.author === author);
    res.json(authorBooks);
});

// POST /books/author
app.post('/books/author', (req, res) => {
    const author = req.body.author;
    const authorBooks = books.filter(book => book.author === author);
    res.json(authorBooks);
});

// PUT /books/author
app.put('/books/author', (req, res) => {
    const { author, newAuthor } = req.body;
    books.forEach(book => {
        if (book.author === author) {
            book.author = newAuthor;
        }
    });
    res.json({ message: 'Author updated successfully' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
