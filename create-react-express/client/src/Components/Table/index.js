import React from "react";
import "./style.css";

function Table(props) {
  
  
  return (
    <div className="card">
      <h5 className="card-header">{props.book.title}</h5>

      <div className="card-body">
        <h5 className="card-title">Authors: {props.book.authors.join(", ")}</h5>
        <p className="card-text"> {props.book.description}</p>
        <img src={props.book.image} alt={props.book.title} />
        <a rel="noopener noreferrer" target="_blank" href={props.book.link}> Click here to see the book </a>
        {props.status === "search" ?
          <button className="btn btn-primary" onClick={() => props.onClick(props.book)} > Save Book </button>
          :
          <button className="btn btn-danger"onClick={() => props.onClick(props.book)} > DELETE </button>
        }
      </div>
    </div>
  );
}

export default Table;

