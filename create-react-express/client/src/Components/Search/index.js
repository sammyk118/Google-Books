import React, { useState } from "react";
import NavBar from "../NavBar";
import Jumbotron from "../Jumbotron";
import SearchBar from "../SearchBar";
import Table from "../Table";
import API from "../../utils/API";

function Search() {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");

    function handleInputChange(event) {
        const { value } = event.target;
        console.log(value);
        setSearch(value);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Search term:", search);
        API.googleBooks(search)
            .then(res => console.log("GoogleBooks response:", res.data))
            .catch(err => console.log(err));
    }
    // setBooks(res.data)  insert into stateful variable
    return (
        <div>
            <NavBar />
            <Jumbotron />
            <SearchBar onChange={handleInputChange} onClick={handleFormSubmit} 
            value={search} />
            <Table />
        </div>
    )
}

export default Search;
