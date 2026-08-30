const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const movies = [
  { id: 1, name: "Inception", genre: "Sci-Fi" },
  { id: 2, name: "Interstellar", genre: "Sci-Fi" },
  { id: 3, name: "The Dark Knight", genre: "Action" },
  { id: 4, name: "John Wick", genre: "Action" },
  { id: 5, name: "The Hangover", genre: "Comedy" },
  { id: 6, name: "Deadpool", genre: "Comedy" },
  { id: 7, name: "The Conjuring", genre: "Horror" },
  { id: 8, name: "It", genre: "Horror" },
  { id: 9, name: "Avengers: Endgame", genre: "Action" },
  { id: 10, name: "Spider-Man: No Way Home", genre: "Action" },
  { id: 11, name: "Parasite", genre: "Thriller" },
  { id: 12, name: "Shutter Island", genre: "Thriller" },
];

const checkUser = (req, res, next) => {
  const { user } = req.query;

  if (!user || user.trim() === "") {
    return res.status(400).json({ message: "Please enter your name and access movies" });
  }

  next();
};

app.get("/movies", checkUser, (req, res) => {
  const { genre } = req.query;

  if (genre) {
    const filteredMovies = movies.filter((movie) => movie.genre === genre);
    return res.json(filteredMovies);
  }

  res.json(movies);
});

app.listen(5000, () => {
  console.log("server is running");
});
