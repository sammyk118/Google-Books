## Google Books App
This full stack application uses react, express, mongoose, and axios to let the user search for books, view a book's basic information, save books to a database, and view saved books.

[Deployed Site](https://ancient-woodland-82489.herokuapp.com/)

# Search Page
![search](./client/public/booksaved.png)

# Saved Page
![saved](./client/public/booksearch.png)

## Technologies Used
- React
- Express
- MongoDB
- Axios
- Bootstrap


Axios makes a request for the Google books API
```javascript
router.get("/google", function (req, res) {
  console.log("Backend req variable:", req.query.q);
  
  let url = "https://www.googleapis.com/books/v1/volumes?q=";
  let query = req.query.q;
  let key = "&key=AIzaSyByK7dx9Q35o7iCatSUJ3_6so-bMZrZq0k";
  axios.get(url + query + key)
    .then(({ data: { items } }) => {
      let specificData = items.map(bookObj => {
        const bookImg = (bookObj.volumeInfo.imageLinks === undefined ? "" : `${bookObj.volumeInfo.imageLinks.thumbnail}`);

        let parsedBook = {
          title: bookObj.volumeInfo.title,
          authors: bookObj.volumeInfo.authors,
          description: bookObj.volumeInfo.description,
          image: bookImg,
          link: bookObj.volumeInfo.infoLink
        }
        return parsedBook;
      });
      res.json(specificData);
    })

```

Mongoose database stores saved books
```javascript
const bookSchema = new Schema({
    title: { 
        type: String,
        unique: true
    },
    authors: {type: Array},
    description: { type: String },
    image: { type: String },
    link: { type: String }
})
```

## Authors

**Sammy Kroner**

[LinkedIn](www.linkedin.com/in/samuel-kroner-44aa11169)

[GitHub](https://github.com/sammyk118)

**Ron Arjay Caluag**
[Github](https://github.com/ArjayCaluag)

**Rand Hale**
[Github](https://github.com/prophetrandl)
