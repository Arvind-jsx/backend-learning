const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const videos = [
  {
    id: 1,
    title: "React.js Complete Beginner Guide",
    channel: "CodeLab",
    views: 125000,
    uploadDate: "2026-01-15",
    duration: "18:42",
    category: "Programming",
    thumbnail: "https://picsum.photos/seed/react/500/300",
    description:
      "A beginner-friendly introduction to React components, props, state and hooks.",
  },

  {
    id: 2,
    title: "JavaScript Async Await Explained",
    channel: "DevSimplified",
    views: 89000,
    uploadDate: "2026-02-03",
    duration: "14:25",
    category: "JavaScript",
    thumbnail: "https://picsum.photos/seed/javascript/500/300",
    description:
      "Understand promises, async functions and await with practical examples.",
  },

  {
    id: 3,
    title: "Node.js Backend From Scratch",
    channel: "BackendLab",
    views: 210000,
    uploadDate: "2026-02-18",
    duration: "27:10",
    category: "Backend",
    thumbnail: "https://picsum.photos/seed/nodejs/500/300",
    description:
      "Learn how Node.js works and how to create your first backend server.",
  },

  {
    id: 4,
    title: "Express.js REST API Tutorial",
    channel: "BackendLab",
    views: 176000,
    uploadDate: "2026-03-01",
    duration: "22:35",
    category: "Backend",
    thumbnail: "https://picsum.photos/seed/express/500/300",
    description:
      "Build REST APIs using Express.js and understand routes, requests and responses.",
  },

  {
    id: 5,
    title: "MongoDB Explained for Beginners",
    channel: "DatabaseSchool",
    views: 143000,
    uploadDate: "2026-03-12",
    duration: "20:18",
    category: "Database",
    thumbnail: "https://picsum.photos/seed/mongodb/500/300",
    description:
      "Learn MongoDB fundamentals including documents, collections and queries.",
  },

  {
    id: 6,
    title: "How HTTP Actually Works",
    channel: "WebTheory",
    views: 97000,
    uploadDate: "2026-03-20",
    duration: "16:50",
    category: "Web Development",
    thumbnail: "https://picsum.photos/seed/http/500/300",
    description:
      "Understand browsers, servers, HTTP requests, responses, methods and status codes.",
  },

  {
    id: 7,
    title: "REST API Design Principles",
    channel: "BackendLab",
    views: 115000,
    uploadDate: "2026-04-02",
    duration: "19:32",
    category: "Backend",
    thumbnail: "https://picsum.photos/seed/restapi/500/300",
    description: "Learn how to structure clean and scalable REST APIs.",
  },

  {
    id: 8,
    title: "React Router Deep Dive",
    channel: "CodeLab",
    views: 132000,
    uploadDate: "2026-04-10",
    duration: "24:15",
    category: "React",
    thumbnail: "https://picsum.photos/seed/router/500/300",
    description:
      "Learn routing, dynamic routes, URL parameters and navigation in React applications.",
  },

  {
    id: 9,
    title: "Frontend vs Backend Explained",
    channel: "WebTheory",
    views: 305000,
    uploadDate: "2026-04-22",
    duration: "11:48",
    category: "Web Development",
    thumbnail: "https://picsum.photos/seed/frontend/500/300",
    description:
      "Understand how frontend and backend communicate and what each side is responsible for.",
  },

  {
    id: 10,
    title: "Git and GitHub for Developers",
    channel: "DevSimplified",
    views: 188000,
    uploadDate: "2026-05-01",
    duration: "21:05",
    category: "Tools",
    thumbnail: "https://picsum.photos/seed/github/500/300",
    description:
      "Learn Git fundamentals, commits, branches and working with GitHub.",
  },
];

app.get("/videos", (req, res) => {
  res.json(videos);
});

app.get("/videos/:id", (req, res) => {
  const videoID = Number(req.params.id);
  const Video = videos.find((p) => p.id === videoID);
  if (Video) {
    res.json(Video);
  } else {
    res.json("error");
  }
});

app.listen(5000, () => {
  console.log("server is running.......");
});
