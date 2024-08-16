import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
    //   .get('http://localhost:5000/books')

      .get('https://backendfinal-2.onrender.com/books')
      .then((res) => setBooks(res.data))
      .catch((err) => console.log('Error fetching books'));
  }, []);

  const bookList = books.length === 0
    ? 'There are no books!'
    : books.map((book, k) => <BookCard book={book} key={k} />);

  return (
    <div className="BookList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Books List</h2>
          </div>

          <div className="col-md-11">
            <Link to="/create-book" className="btn btn-outline-warning float-right">
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className="list">{bookList}</div>
      </div>
    </div>
  );
};

export default BookList;

/**
 * <!DOCTYPE html>
<html lang="en">
  <head>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="BookList">
      <div class="col-md-12">
        <br />
        <h2 class="display-4 text-center">Books List</h2>
      </div>
      <div class="col-md-11">
        <a class="btn btn-info float-right" href="/create-book"
          >+ Add New Book</a
        ><br /><br />
        <hr />
      </div>
      <div class="list">
        <div class="card-container">
          <img
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
            alt="Books"
            height="200"
          />
          <div class="desc">
            <h2><a href="/show-book/123id">React.JS 101</a></h2>
            <h3>Raymond Gallagher</h3>
            <p>Introduction to React.JS</p>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>

 */