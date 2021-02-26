const axios  = require("axios");
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);
router.get("/google", function (req, res) {
  let url = "https://www.googleapis.com/books/v1/volumes?q=";
  let query = { params: req.query };
  let key = "&key=AIzaSyByK7dx9Q35o7iCatSUJ3_6so-bMZrZq0k";
  axios.get(url + query + key)
  .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
})

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
