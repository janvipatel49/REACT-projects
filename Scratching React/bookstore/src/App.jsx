import React, { useState } from "react";
import "./App.css";

function App() {
  const [showAuthors, setShowAuthors] = useState(false);

  const books = [
    {
      name: "Atomic Habits",
      author: "James Clear",
      description: "A practical guide to building good habits and breaking bad ones.",
      price: "₹399",
      image:
        "https://covers.openlibrary.org/b/isbn/9780735211292-M.jpg"
    },
    {
      name: "The Alchemist",
      author: "Paulo Coelho",
      description: "A beautiful story about dreams, goals and finding your purpose.",
      price: "₹350",
      image:
        "https://covers.openlibrary.org/b/isbn/9780061122415-M.jpg"
    },
    {
      name: "Ikigai",
      author: "Hector Garcia",
      description: "Discover the Japanese secret to a happy and meaningful life.",
      price: "₹299",
      image:
        "https://covers.openlibrary.org/b/isbn/9780143452741-M.jpg"
    },
    {
      name: "Verity",
      author: "Colleen Hoover",
      description: "A thrilling mystery story filled with secrets and twists.",
      price: "₹450",
      image:
        "https://covers.openlibrary.org/b/isbn/9781538724736-M.jpg"
    },
    {
      name: "Harry Potter",
      author: "J.K. Rowling",
      description: "A magical adventure about friendship, courage and wizardry.",
      price: "₹499",
      image:
        "https://covers.openlibrary.org/b/isbn/9780590353427-M.jpg"
    },
    {
      name: "The Hobbit",
      author: "J.R.R. Tolkien",
      description: "An exciting fantasy adventure of Bilbo Baggins.",
      price: "₹399",
      image:
        "https://covers.openlibrary.org/b/isbn/9780547928227-M.jpg"
    },
    {
      name: "It Ends With Us",
      author: "Colleen Hoover",
      description: "An emotional story about love, relationships and choices.",
      price: "₹420",
      image:
        "https://covers.openlibrary.org/b/isbn/9781501110368-M.jpg"
    },
    {
      name: "The Psychology of Money",
      author: "Morgan Housel",
      description: "Simple lessons about money, wealth and better decisions.",
      price: "₹380",
      image:
        "https://covers.openlibrary.org/b/isbn/9780857197689-M.jpg"
    }
  ];

  const authors = [
    {
      name: "James Clear",
      books: "Atomic Habits"
    },
    {
      name: "Paulo Coelho",
      books: "The Alchemist"
    },
    {
      name: "Hector Garcia",
      books: "Ikigai"
    },
    {
      name: "Colleen Hoover",
      books: "Verity, It Ends With Us"
    },
    {
      name: "J.K. Rowling",
      books: "Harry Potter"
    },
    {
      name: "J.R.R. Tolkien",
      books: "The Hobbit"
    },
    {
      name: "Morgan Housel",
      books: "The Psychology of Money"
    },
    {
      name: "Agatha Christie",
      books: "Murder on the Orient Express"
    }
  ];

  return (
    <div className="page">

      <div className="bookstore">

        {/* Header */}
        <header>
          <h1>📚 Bookstore</h1>
          <p>Discover your next favorite book</p>
        </header>

        {/* Toggle */}
        <div className="toggle">

          <button
            className={!showAuthors ? "active" : ""}
            onClick={() => setShowAuthors(false)}
          >
            Books
          </button>

          <button
            className={showAuthors ? "active" : ""}
            onClick={() => setShowAuthors(true)}
          >
            Authors
          </button>

        </div>

        {/* BOOKS */}
        {!showAuthors && (
          <div className="book-grid">

            {books.map((book, index) => (
              <div className="book-card" key={index}>

                <img
                  src={book.image}
                  alt={book.name}
                />

                <h2>{book.name}</h2>

                <p className="author">
                  By {book.author}
                </p>

                <p className="description">
                  {book.description}
                </p>

                <div className="bottom">

                  <span className="price">
                    {book.price}
                  </span>

                  <button className="buy-btn">
                    Buy Now
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

        {/* AUTHORS */}
        {showAuthors && (
          <div className="author-grid">

            {authors.map((author, index) => (
              <div className="author-card" key={index}>

                <div className="author-icon">
                  👤
                </div>

                <h2>{author.name}</h2>

                <p>
                  <b>Books:</b> {author.books}
                </p>

              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default App;