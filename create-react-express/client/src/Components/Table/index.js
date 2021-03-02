import React from "react";
import "./style.css";

function Table(props) {
  return (
    <div className="card">
      <h5 className="card-header">Results</h5>

      <div className="card-body">
        <h5 className="card-title"> {props.book.title}</h5>
        <p className="card-text"> {props.book.description}</p>
        <img src={props.book.image} alt={props.book.title} />
        <a rel="noopener noreferrer" target="_blank" href={props.book.link}> Click here to see the book </a>
        {props.status === "search" ?
          <button onClick={() => props.onClick(props.book)} > Save Book </button>
          :
          <button onClick={() => props.onClick(props.book)} > DELETE </button>
        }
      </div>
    </div>
  );
}

export default Table;
