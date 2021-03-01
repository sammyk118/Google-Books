import axios from "axios";

export default {
    
    // Get all books from db
    getBooks: function () {
        return axios.get("/api/books");
    },

    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    },

    // Attempting query to Google Books
    googleBooks: function (query) {
        console.log("Frontend API title:", query);
        return axios.get("/api/books/google", { params: { q: query } });
    }
}