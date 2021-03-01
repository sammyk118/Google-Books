import React from "react";
import "./style.css";

function Table(props) {
  return (
    <div className="card">
      <h5 className="card-header">Results</h5>

      <div className="card-body">
        <h5 className="card-title"> {props.book.title}</h5>
        <p className="card-text"> {props.book.description}</p>
        <img src = {props.book.image} alt = "thumbnail"/>  
        <a href={props.book.link}> Click here to see the book </a> 
        <button onClick = {()=> props.onClick(props.book)} > Save Book </button>
      </div>
    </div>
  );
}

export default Table;
