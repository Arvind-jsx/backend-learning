const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const movies = [
  {
    id: 1,
    title: "Inception",
    releaseDate: "2010-07-16",
    genre: ["Sci-Fi", "Thriller", "Action"],
    rating: 8.8,
    duration: "2h 28m",
    director: "Christopher Nolan",
    language: "English",
    poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    description:
      "A skilled thief who steals secrets through dreams is given a chance to erase his past by planting an idea inside someone's mind.",
  },

  {
    id: 2,
    title: "Interstellar",
    releaseDate: "2014-11-07",
    genre: ["Sci-Fi", "Drama", "Adventure"],
    rating: 8.7,
    duration: "2h 49m",
    director: "Christopher Nolan",
    language: "English",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description:
      "A group of explorers travels through a mysterious wormhole in search of a new home for humanity.",
  },

  {
    id: 3,
    title: "The Dark Knight",
    releaseDate: "2008-07-18",
    genre: ["Action", "Crime", "Drama"],
    rating: 9.0,
    duration: "2h 32m",
    director: "Christopher Nolan",
    language: "English",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description:
      "Batman faces a criminal mastermind whose chaotic methods push Gotham City and its heroes to their limits.",
  },

  {
    id: 4,
    title: "The Matrix",
    releaseDate: "1999-03-31",
    genre: ["Sci-Fi", "Action"],
    rating: 8.7,
    duration: "2h 16m",
    director: "Lana Wachowski, Lilly Wachowski",
    language: "English",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    description:
      "A computer programmer discovers that the world he knows is an artificial reality controlled by machines.",
  },

  {
    id: 5,
    title: "Parasite",
    releaseDate: "2019-05-30",
    genre: ["Drama", "Thriller", "Comedy"],
    rating: 8.5,
    duration: "2h 12m",
    director: "Bong Joon-ho",
    language: "Korean",
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    description:
      "A struggling family slowly becomes involved with a wealthy household, leading to an unexpected chain of events.",
  },

  {
    id: 6,
    title: "Whiplash",
    releaseDate: "2014-10-10",
    genre: ["Drama", "Music"],
    rating: 8.5,
    duration: "1h 47m",
    director: "Damien Chazelle",
    language: "English",
    poster: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    description:
      "A young jazz drummer enters an intense relationship with an uncompromising music instructor.",
  },

  {
    id: 7,
    title: "Fight Club",
    releaseDate: "1999-10-15",
    genre: ["Drama", "Thriller"],
    rating: 8.8,
    duration: "2h 19m",
    director: "David Fincher",
    language: "English",
    poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4L1e5bG2I.jpg",
    description:
      "An unhappy office worker forms an underground fighting club that develops into something much larger and more dangerous.",
  },

  {
    id: 8,
    title: "The Shawshank Redemption",
    releaseDate: "1994-09-23",
    genre: ["Drama"],
    rating: 9.3,
    duration: "2h 22m",
    director: "Frank Darabont",
    language: "English",
    poster: "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    description:
      "A banker sentenced to prison for a crime he claims he did not commit builds an unlikely friendship and holds onto hope.",
  },

  {
    id: 9,
    title: "The Godfather",
    releaseDate: "1972-03-24",
    genre: ["Crime", "Drama"],
    rating: 9.2,
    duration: "2h 55m",
    director: "Francis Ford Coppola",
    language: "English",
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    description:
      "The aging head of a powerful crime family prepares to pass control of his empire to his reluctant son.",
  },

  {
    id: 10,
    title: "Pulp Fiction",
    releaseDate: "1994-10-14",
    genre: ["Crime", "Drama", "Thriller"],
    rating: 8.9,
    duration: "2h 34m",
    director: "Quentin Tarantino",
    language: "English",
    poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    description:
      "Several interconnected stories involving criminals, unexpected encounters, and dark humor unfold across Los Angeles.",
  },

  {
    id: 11,
    title: "Spirited Away",
    releaseDate: "2001-07-20",
    genre: ["Animation", "Fantasy", "Adventure"],
    rating: 8.6,
    duration: "2h 5m",
    director: "Hayao Miyazaki",
    language: "Japanese",
    poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    description:
      "A young girl enters a mysterious spirit world and must find the courage to save her parents and return home.",
  },

  {
    id: 12,
    title: "Your Name",
    releaseDate: "2016-08-26",
    genre: ["Animation", "Romance", "Fantasy"],
    rating: 8.4,
    duration: "1h 46m",
    director: "Makoto Shinkai",
    language: "Japanese",
    poster: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    description:
      "Two teenagers mysteriously begin experiencing each other's lives despite living far apart.",
  },

  {
    id: 13,
    title: "Dune",
    releaseDate: "2021-09-03",
    genre: ["Sci-Fi", "Adventure", "Drama"],
    rating: 8.0,
    duration: "2h 35m",
    director: "Denis Villeneuve",
    language: "English",
    poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    description:
      "A young nobleman is drawn into a dangerous struggle over the most valuable resource in the universe.",
  },

  {
    id: 14,
    title: "Oppenheimer",
    releaseDate: "2023-07-21",
    genre: ["Drama", "History"],
    rating: 8.6,
    duration: "3h 0m",
    director: "Christopher Nolan",
    language: "English",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    description:
      "The story of physicist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
  },

  {
    id: 15,
    title: "Joker",
    releaseDate: "2019-10-04",
    genre: ["Crime", "Drama", "Thriller"],
    rating: 8.4,
    duration: "2h 2m",
    director: "Todd Phillips",
    language: "English",
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    description:
      "A lonely man struggling to find his place in society gradually transforms into a symbol of chaos.",
  },

  {
    id: 16,
    title: "Avengers: Endgame",
    releaseDate: "2019-04-26",
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.4,
    duration: "3h 1m",
    director: "Anthony Russo, Joe Russo",
    language: "English",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    description:
      "The surviving heroes attempt one final mission to reverse the devastating events that changed their universe.",
  },

  {
    id: 17,
    title: "Blade Runner 2049",
    releaseDate: "2017-10-06",
    genre: ["Sci-Fi", "Drama", "Mystery"],
    rating: 8.0,
    duration: "2h 44m",
    director: "Denis Villeneuve",
    language: "English",
    poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    description:
      "A young blade runner uncovers a long-buried secret that leads him toward a former police officer who disappeared decades earlier.",
  },

  {
    id: 18,
    title: "The Prestige",
    releaseDate: "2006-10-20",
    genre: ["Drama", "Mystery", "Thriller"],
    rating: 8.5,
    duration: "2h 10m",
    director: "Christopher Nolan",
    language: "English",
    poster: "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFhL7B3kJw0r7B.jpg",
    description:
      "Two rival magicians become obsessed with creating the greatest illusion while their competition turns increasingly dangerous.",
  },

  {
    id: 19,
    title: "Gone Girl",
    releaseDate: "2014-10-03",
    genre: ["Mystery", "Thriller", "Drama"],
    rating: 8.1,
    duration: "2h 29m",
    director: "David Fincher",
    language: "English",
    poster: "https://image.tmdb.org/t/p/w500/lv5xShBIDPe7m4ufdlV0m6M0w4p.jpg",
    description:
      "When a woman disappears on her wedding anniversary, suspicion falls on her husband as the investigation exposes hidden secrets.",
  },

  {
    id: 20,
    title: "Weathering with You",
    releaseDate: "2019-07-19",
    genre: ["Animation", "Fantasy", "Romance"],
    rating: 8.0,
    duration: "1h 52m",
    director: "Makoto Shinkai",
    language: "Japanese",
    poster: "https://image.tmdb.org/t/p/w500/qgrN7q6E5f0QKqz3y1qKqf3pQJQ.jpg",
    description:
      "A runaway teenager in Tokyo meets a mysterious girl who seems to have the power to influence the weather.",
  },
];

app.get("/movies", (req, res) => {
  res.json(movies);
  console.log("Movies data sent successfully");
});

app.get("/movies/:id", (req, res) => {
  const movieID = Number(req.params.id);
  const movie = movies.find((p) => p.id === movieID);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ error: "Movie not found" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
