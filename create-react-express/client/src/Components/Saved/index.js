import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import Table from "../Table";
import API from "../../utils/API";

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

    function deleteBook(id) {

    }

    return (
        <div>
            <NavBar />
            <header className="text-center my-5">
                <h1>Saved Books</h1>
            </header>
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
    )
}

export default Saved;