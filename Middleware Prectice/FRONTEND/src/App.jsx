import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("Please enter your name and access movies");
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setData([]);
      setMessage("Please enter your name and access movies");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const url = new URL("http://localhost:5000/movies");
      url.searchParams.set("user", name.trim());

      if (genre) {
        url.searchParams.set("genre", genre);
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
      setData([]);
      setMessage("Unable to load movies right now.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-2xl font-bold text-slate-800">Movie Access</h1>

        <form onSubmit={fetchMovies} className="mb-6 flex flex-col gap-4 md:flex-row">
          <input
            type="text"
            placeholder="Type Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          >
            <option value="">select genre</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Horror">Horror</option>
            <option value="Thriller">Thriller</option>
          </select>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Submit
          </button>
        </form>

        {message && <p className="mb-4 text-sm text-red-500">{message}</p>}

        {loading ? (
          <h2 className="text-lg font-medium text-slate-600">Loading...</h2>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {data.map((movie) => (
              <div key={movie.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800">{movie.name}</h3>
                <p className="mt-2 text-sm text-slate-600">Genre: {movie.genre}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
