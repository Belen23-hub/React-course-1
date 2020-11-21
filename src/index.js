import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const books = [

  { id: 1,
    img: "https://m.media-amazon.com/images/I/71hKtvn3gXL._AC_UY218_.jpg",
    title:'The Guardians: A Novel',
    author: 'John Grisham',
},
{   id: 2,
    img: "https://m.media-amazon.com/images/I/81XvmM2fYJL._AC_UY218_.jpg",
    title:'Squeeze me: A Novel',
    author: 'Carl Hiaasen',
},
{   id: 3,
    img: "https://m.media-amazon.com/images/I/71xgVzCVapL._AC_UY218_.jpg",
    title:'It All Comes Back to You: A Book Club Recommendation!',
    author: ' Beth Duke ',
},
];


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

const Book = ({img,title,author}) => {
  const clickHandler = (e) =>{
    console.log(e)
    console.log(e.target)
    alert('Hello ')
  }
  const complexExample = (author) => {
    console.log(author);
  }
  return (
    <article className="book" onMouseOver={()=> {console.log(title)}}>
    <img src={img} alt=''/>
    <h1 onClick={() => console.log(title)}>{title}</h1>
    <h4>{author}</h4>
    <button type="buttom" onClick={ clickHandler}>Example</button>
    <button type="button" onClick={() => complexExample(author)}>More complex example</button>
  </article>
  )
}

ReactDOM.render(<Booklist />, document.getElementById('root'));
