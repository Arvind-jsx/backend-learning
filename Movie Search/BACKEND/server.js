const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const movies = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    rating: 4.8,
    releaseYear: 2010,
    duration: 148,
    description:
      "A skilled thief enters the dreams of others to steal valuable secrets.",
    poster: "https://image.tmdb.org/t/p/original/oYuLEW9W2QG21abDynamic.jpg", // High-res poster
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action",
    rating: 4.9,
    releaseYear: 2008,
    duration: 152,
    description:
      "Batman faces a dangerous criminal mastermind who throws Gotham into chaos.",
    poster:
      "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Sci-Fi",
    rating: 4.8,
    releaseYear: 2014,
    duration: 169,
    description:
      "A group of astronauts travels through a wormhole searching for a new home.",
    poster:
      "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 4,
    title: "The Shawshank Redemption",
    genre: "Drama",
    rating: 4.9,
    releaseYear: 1994,
    duration: 142,
    description:
      "A wrongly imprisoned man builds an unlikely friendship while holding onto hope.",
    poster:
      "https://image.tmdb.org/t/p/original/9cqNldDUt2BmyLAgjAcflzyEK4J.jpg",
  },
  {
    id: 5,
    title: "Avengers: Endgame",
    genre: "Action",
    rating: 4.7,
    releaseYear: 2019,
    duration: 181,
    description:
      "The Avengers attempt to reverse the devastating events caused by Thanos.",
    poster:
      "https://image.tmdb.org/t/p/original/or06FN3Dka5tukKFAvgM9ABALfl.jpg",
  },
  {
    id: 6,
    title: "The Hangover",
    genre: "Comedy",
    rating: 4.2,
    releaseYear: 2009,
    duration: 100,
    description:
      "Three friends wake up after a wild night in Las Vegas with no memory of what happened.",
    poster:
      "https://image.tmdb.org/t/p/original/ulzhLuWrPK0BhP6xFiFYfqFNZzc.jpg",
  },
  {
    id: 7,
    title: "Parasite",
    genre: "Thriller",
    rating: 4.6,
    releaseYear: 2019,
    duration: 132,
    description:
      "A struggling family slowly becomes involved with a wealthy household.",
    poster:
      "https://image.tmdb.org/t/p/original/7IiTqvZ2fHGiKAVvFX9eGIckzP.jpg",
  },
  {
    id: 8,
    title: "The Conjuring",
    genre: "Horror",
    rating: 4.3,
    releaseYear: 2013,
    duration: 112,
    description:
      "Paranormal investigators help a family experiencing terrifying supernatural events.",
    poster: "https://image.tmdb.org/t/p/original/wVYREutmaster.jpg",
  },
  {
    id: 9,
    title: "The Matrix",
    genre: "Sci-Fi",
    rating: 4.7,
    releaseYear: 1999,
    duration: 136,
    description:
      "A hacker discovers that the reality he knows is actually an elaborate simulation.",
    poster:
      "https://image.tmdb.org/t/p/original/f89U3HXqMQLEvNrmh2mCf9zld1f.jpg",
  },
  {
    id: 10,
    title: "Forrest Gump",
    genre: "Drama",
    rating: 4.8,
    releaseYear: 1994,
    duration: 142,
    description:
      "A kind-hearted man experiences extraordinary moments throughout American history.",
    poster:
      "https://image.tmdb.org/t/p/original/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
  },
  {
    id: 11,
    title: "Spider-Man: No Way Home",
    genre: "Action",
    rating: 4.6,
    releaseYear: 2021,
    duration: 148,
    description:
      "Spider-Man faces villains from different realities after a spell goes wrong.",
    poster:
      "https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
  },
  {
    id: 12,
    title: "The Grand Budapest Hotel",
    genre: "Comedy",
    rating: 4.4,
    releaseYear: 2014,
    duration: 100,
    description:
      "A hotel concierge and his lobby boy become involved in a mysterious inheritance.",
    poster:
      "https://image.tmdb.org/t/p/original/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
  },
  {
    id: 13,
    title: "Get Out",
    genre: "Horror",
    rating: 4.5,
    releaseYear: 2017,
    duration: 104,
    description:
      "A young man discovers disturbing secrets while visiting his girlfriend's family.",
    poster:
      "https://image.tmdb.org/t/p/original/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
  },
  {
    id: 14,
    title: "Joker",
    genre: "Thriller",
    rating: 4.5,
    releaseYear: 2019,
    duration: 122,
    description:
      "A troubled man gradually descends into a dark transformation in Gotham City.",
    poster:
      "https://image.tmdb.org/t/p/original/udDclSubH19JPB-40x8v97a89N1.jpg",
  },
  {
    id: 15,
    title: "Gladiator",
    genre: "Action",
    rating: 4.7,
    releaseYear: 2000,
    duration: 155,
    description:
      "A betrayed Roman general fights his way back toward revenge and justice.",
    poster:
      "https://image.tmdb.org/t/p/original/ty8TwsBuNMuEFx8jLOEXYyKJivF.jpg",
  },
  {
    id: 16,
    title: "La La Land",
    genre: "Drama",
    rating: 4.3,
    releaseYear: 2016,
    duration: 128,
    description:
      "A musician and an aspiring actress struggle to balance love and ambition.",
    poster:
      "https://image.tmdb.org/t/p/original/uDO8zWDhfWwo0LE4tEw82z2B1M.jpg",
  },
  {
    id: 17,
    title: "Toy Story",
    genre: "Comedy",
    rating: 4.5,
    releaseYear: 1995,
    duration: 81,
    description: "Toys secretly come to life whenever humans leave the room.",
    poster:
      "https://image.tmdb.org/t/p/original/uXDfiVeKiV2mvDRiO2j0yabA8xJ.jpg",
  },
  {
    id: 18,
    title: "A Quiet Place",
    genre: "Horror",
    rating: 4.4,
    releaseYear: 2018,
    duration: 90,
    description:
      "A family survives in silence while mysterious creatures hunt by sound.",
    poster:
      "https://image.tmdb.org/t/p/original/nAU74GmpUk7t5moE6vUzobA4P8E.jpg",
  },
  {
    id: 19,
    title: "Mad Max: Fury Road",
    genre: "Action",
    rating: 4.6,
    releaseYear: 2015,
    duration: 120,
    description:
      "Two survivors escape across a dangerous wasteland controlled by a tyrant.",
    poster:
      "https://image.tmdb.org/t/p/original/8tZYtuYiY9pWhmF1wpyH2vEVVf1.jpg",
  },
  {
    id: 20,
    title: "Whiplash",
    genre: "Drama",
    rating: 4.7,
    releaseYear: 2014,
    duration: 106,
    description:
      "A young drummer pushes himself to extreme limits under a demanding instructor.",
    poster:
      "https://image.tmdb.org/t/p/original/7fn624j5lj3xTme2SgiLCeMYmSu.jpg",
  },
  {
    id: 21,
    title: "The Truman Show",
    genre: "Sci-Fi",
    rating: 4.6,
    releaseYear: 1998,
    duration: 103,
    description:
      "A man slowly discovers that his entire life is being broadcast to the world.",
    poster:
      "https://image.tmdb.org/t/p/original/vu29WFiTF2jR2t5P8yNCtm9TVUd.jpg",
  },
  {
    id: 22,
    title: "Knives Out",
    genre: "Thriller",
    rating: 4.5,
    releaseYear: 2019,
    duration: 130,
    description:
      "A detective investigates the mysterious death of a wealthy novelist.",
    poster:
      "https://image.tmdb.org/t/p/original/pThyQovXQrw2m0s9x8WvYsAcLmp.jpg",
  },
  {
    id: 23,
    title: "Superbad",
    genre: "Comedy",
    rating: 4.1,
    releaseYear: 2007,
    duration: 113,
    description:
      "Two high-school friends attempt to make their final days before graduation memorable.",
    poster:
      "https://image.tmdb.org/t/p/original/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg",
  },
  {
    id: 24,
    title: "Alien",
    genre: "Horror",
    rating: 4.6,
    releaseYear: 1979,
    duration: 117,
    description:
      "A spaceship crew encounters a deadly extraterrestrial creature.",
    poster:
      "https://image.tmdb.org/t/p/original/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
  },
  {
    id: 25,
    title: "Dune",
    genre: "Sci-Fi",
    rating: 4.6,
    releaseYear: 2021,
    duration: 155,
    description:
      "A young heir travels to a dangerous desert planet at the center of a political conflict.",
    poster:
      "https://image.tmdb.org/t/p/original/d5N022wSuA53925P2VDFvGfqy26.jpg",
  },
  {
    id: 26,
    title: "John Wick",
    genre: "Action",
    rating: 4.4,
    releaseYear: 2014,
    duration: 101,
    description:
      "A retired assassin returns to his violent past after a personal tragedy.",
    poster:
      "https://image.tmdb.org/t/p/original/fZPSw911f9Y4fZwhCGioRZ8ChZ.jpg",
  },
  {
    id: 27,
    title: "The Social Network",
    genre: "Drama",
    rating: 4.3,
    releaseYear: 2010,
    duration: 120,
    description:
      "The story of the creation of a revolutionary social networking platform.",
    poster:
      "https://image.tmdb.org/t/p/original/n0ybibhJtQ5icDqioUzKWFiogN0.jpg",
  },
  {
    id: 28,
    title: "Her",
    genre: "Sci-Fi",
    rating: 4.4,
    releaseYear: 2013,
    duration: 126,
    description:
      "A lonely writer develops an unusual relationship with an advanced operating system.",
    poster:
      "https://image.tmdb.org/t/p/original/yk49ST2Fi4QbKO8H1VJ3eMZaT1i.jpg",
  },
  {
    id: 29,
    title: "Scream",
    genre: "Horror",
    rating: 4.2,
    releaseYear: 1996,
    duration: 111,
    description:
      "A mysterious masked killer terrorizes a small town while targeting teenagers.",
    poster:
      "https://image.tmdb.org/t/p/original/17Z14n8Y96zYwK9W0aKkR05kC50.jpg",
  },
  {
    id: 30,
    title: "The Wolf of Wall Street",
    genre: "Comedy",
    rating: 4.5,
    releaseYear: 2013,
    duration: 180,
    description:
      "A stockbroker rises rapidly through the world of finance while living an extravagant life.",
    poster:
      "https://image.tmdb.org/t/p/original/pESpCYw9v6rmB8DBiHKZalRYiG5.jpg",
  },
];

app.get("/movies", (req, res) => {
  const search = req.query.search ? String(req.query.search).toLowerCase() : "";
  const rating = req.query.rating ? Number(req.query.rating) : 0;
  const genre = req.query.genre;
  const page = Number(req.query.page) || 1;

  const filteredList =
    search || rating || genre
      ? movies.filter((movie) => {
          const SearchMovie = search
            ? movie.title.toLowerCase().includes(search.toLowerCase())
            : true;
          const MatchesGenre = genre ? movie.genre === genre : true;
          const MatchesRating = rating ? movie.rating >= rating : true;

          return SearchMovie && MatchesGenre && MatchesRating;
        })
      : movies;

  const limit = 10;
  const start = (page - 1) * limit;
  const end = start + limit;

  const finalMovies = filteredList.slice(start, end);
  const totalPages = Math.max(1, Math.ceil(filteredList.length / limit));

  res.json({ finalMovies, totalPages });
});

app.get("/movies/:id", (req, res) => {
  const movieId = Number(req.params.id);
  if (movieId) {
    const movie = movies.find((movie) => movie.id === movieId);
    res.json(movie);
  } else {
    res.json("maa chuda");
  }
});

app.listen(5000, () => {
  console.log("server is running");
});
