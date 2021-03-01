const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const axios = require("axios");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(booksController.remove);

// Matches with "/api/books/google"
router.get("/google", function (req, res) {
  console.log("Backend req variable:", req.query.q);
  
  let url = "https://www.googleapis.com/books/v1/volumes?q=";
  let query = req.query.q;
  let key = "&key=AIzaSyByK7dx9Q35o7iCatSUJ3_6so-bMZrZq0k";
  axios.get(url + query + key)
    .then(({ data: { items } }) => {
      let specificData = items.map(bookObj => {
        return { 
          title: bookObj.volumeInfo.title,
          authors: bookObj.volumeInfo.authors,
          description: bookObj.volumeInfo.description,
          image: bookObj.volumeInfo.imageLinks.thumbnail,
          link: bookObj.volumeInfo.infoLink
        }
      })
      res.json(specificData);
    })
    .catch(err => res.status(422).json(err));
});


module.exports = router;
