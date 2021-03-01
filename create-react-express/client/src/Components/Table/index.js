import React from "react";
import "./style.css";

function Table({ book }) {
  return (
    <div className="card">
      <h5 className="card-header">Results</h5>

      <div className="card-body">
        <h5 className="card-title"> {book.title}</h5>
        <p className="card-text"> {book.description}</p>
        <img src = {book.image} alt = "thumbnail"/>  
        <a href={book.link}> Click here to see the book </a> 
      </div>
    </div>
  );
}

export default Table;
