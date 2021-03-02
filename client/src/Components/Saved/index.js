import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import Table from "../Table";
import API from "../../utils/API";
import "./style.css";

function Saved() {
    const [saved, setSaved] = useState([]);

    useEffect(() => {
        loadBooks();
    }, []);

    function loadBooks() {
        API.getBooks()
            .then((res) => setSaved(res.data))
            .catch((err) => console.log(err));
    }

    function deleteBook(book) {
        const bookId = book._id;
        // console.log(bookId);
        API.deleteBook(bookId)
            .then(() => loadBooks())
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <NavBar />
            <header className="text-center my-5">
                <h1>Saved Books</h1>
            </header>
            <div className="container">
                <h5 className="card-header trimcolor">Results</h5>
                {saved.map((book, index) => {
                    return <Table
                        book={book}
                        onClick={deleteBook}
                        key={index}
                        id={book._id}
                        status="saved"
                    />
                })}
            </div>
        </div>
    )
}

export default Saved;