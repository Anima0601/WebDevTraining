const express = require("express");
const app = express();
app.use(express.json());

let books = [ { id: 1, title: "The Alchemist", author: "Paulo Coelho", year: 1988, status: "available" },
  { id: 2, title: "1984", author: "George Orwell", year: 1949, status: "available" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, status: "issued" }
];
let nextId = 4;



app.get("/books", (req, res) => {
  res.json(books);
});

app.post("/books", (req, res) => {
  const book = { id: nextId++, ...req.body, status: "available" };
  books.push(book);
  res.json(book);
});

app.put("/books/:id/issue", (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (book) book.status = "issued";
  res.json(book || { error: "Not found" });
});

app.put("/books/:id/return", (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (book) book.status = "available";
  res.json(book || { error: "Not found" });
});


app.delete("/books/:id", (req, res) => {
  books = books.filter(b => b.id != req.params.id);
  res.json({ message: "Book deleted" });
});

app.listen(3000, () => console.log("Library API running on port 3000"));
