const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(booksController.remove);

// Matches with "/api/books/google"
router.get("/google/:title", function (req, res) {
  let url = "https://www.googleapis.com/books/v1/volumes?q=";
  let query = req.title;
  let key = "&key=AIzaSyByK7dx9Q35o7iCatSUJ3_6so-bMZrZq0k";
  axios.get(url + query + key)
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});


module.exports = router;
