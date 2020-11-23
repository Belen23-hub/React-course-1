import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {books} from './books';
import Book from './book';


function Booklist () {
  return (
    <section className="booklist">
    {books.map((book) => {
      return (
        <Book key={book.id} {...book}></Book>
      )
    })}
    </section>
  );
}


ReactDOM.render(<Booklist />, document.getElementById('root'));
