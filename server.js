// Import Express
const express = require("express");
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory array to store books
let books = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 2, title: "Atomic Habits", author: "James Clear" }
];

// GET - Fetch all books
app.get("/books", (req, res) => {
  res.json(books);
});

// POST - Add a new book
app.post("/books", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: "Title and author are required" });
  }
  const newBook = {
    id: books.length + 1,
    title,
    author
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT - Update a book by ID
app.put("/books/:id", (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;

  const book = books.find(b => b.id === parseInt(id));
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (title) book.title = title;
  if (author) book.author = author;

  res.json(book);
});

// DELETE - Remove a book by ID
app.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  books = books.filter(b => b.id !== parseInt(id));
  res.json({ message: "Book deleted successfully" });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
