import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Movies = () => {
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState("");
  const [Search, setSearch] = useState("");
  const [Genre, setGenre] = useState("");
  const [Rating, setRating] = useState("");
  const [Page, setPage] = useState(1);
  const [TotalPages, setTotalPages] = useState(1);
  const navigate = useNavigate()

  useEffect(() => {
    const FetchData = async () => {
      try {
        const params = new URLSearchParams({ page: Page });
        if (Search) params.set("search", Search);
        if (Genre) params.set("genre", Genre);
        if (Rating) params.set("rating", Rating);
        const response = await fetch(`http://localhost:5000/movies?${params}`);
        const data = await response.json();
        setData(data.finalMovies);
        setTotalPages(data.totalPages);
        setError("");
      } catch (error) {
        console.error(error);
        setError("Could not load movies. Check that the server is running.");
      } finally {
        setLoading(false);
      }
    };

    FetchData();
  }, [Page, Genre, Rating, Search]);

  const FormHandler = (e) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 animate-fade-in-up">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
            Movie library
          </p>
          <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Find your next Movie
          </h1>
        </header>

        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_12px_40px_rgba(15,23,42,0.08)] animate-fade-in-up [animation-delay:120ms] sm:p-4">
          <form
            className="grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,1fr)_auto_auto]"
            onSubmit={FormHandler}
          >
            <label className="relative block">
              <span className="sr-only">Search movies</span>
              <input
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 pr-24 text-sm font-semibold text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                type="search"
                placeholder="Search movies..."
                value={Search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className="absolute right-1.5 top-1.5 h-9 rounded-lg bg-blue-600 px-4 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-100 active:scale-95"
                type="submit"
              >
                Search
              </button>
            </label>
            <label className="relative block">
              <span className="sr-only">Filter by genre</span>
              <select
                id="genre"
                value={Genre}
                aria-label="Filter by genre"
                onChange={(e) => {
                  setGenre(e.target.value);
                  setPage(1);
                }}
                className="h-12 w-full min-w-0 cursor-pointer appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 pr-10 text-sm font-bold text-slate-700 outline-none transition hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 sm:min-w-36"
              >
                <option value="">All genres</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Comedy">Comedy</option>
                <option value="Horror">Horror</option>
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                &#9662;
              </span>
            </label>
            <label className="relative block">
              <span className="sr-only">Filter by rating</span>
              <select
                id="rating"
                value={Rating}
                aria-label="Filter by rating"
                onChange={(e) => {
                  setRating(e.target.value);
                  setPage(1);
                }}
                className="h-12 w-full min-w-0 cursor-pointer appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 pr-10 text-sm font-bold text-slate-700 outline-none transition hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 sm:min-w-36"
              >
                <option value="">All ratings</option>
                <option value="5">5 stars</option>
                <option value="4">4 stars</option>
                <option value="3">3 stars</option>
                <option value="2">2 stars</option>
                <option value="1">1 star</option>
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                &#9662;
              </span>
            </label>
          </form>
        </div>

        <section className="grid grid-cols-1 gap-5 min-[420px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {Loading ? (
            Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="h-80 animate-pulse rounded-2xl bg-slate-100"

              />
            ))
          ) : Error ? (
            <p className="col-span-full rounded-xl border border-red-100 bg-red-50 p-5 text-center text-sm font-semibold text-red-600">
              {Error}
            </p>
          ) : Data.length === 0 ? (
            <p className="col-span-full py-16 text-center text-sm font-semibold text-slate-500">
              No movies found for these filters.
            </p>
          ) : (
            Data?.map?.((movie) => {
              return (
                <div
                  style={{
                    backgroundImage: `url(${movie.poster || movie.img})`,
                  }}
                  key={movie.id}
                  onClick={() => {
                    navigate(`movie/${movie.id}`)
                  }}
                  className="group relative flex h-80 min-w-0 cursor-pointer flex-col justify-end overflow-hidden rounded-2xl bg-slate-200 bg-cover bg-center bg-no-repeat p-5 text-white shadow-sm transition duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent transition duration-500 group-hover:from-blue-950/95" />
                  <div className="relative z-10 translate-y-2 transition duration-500 group-hover:translate-y-0">
                    <h2 className="line-clamp-2 text-lg font-black leading-tight drop-shadow-md">
                      {movie.title}
                    </h2>
                    <div className="mt-2 flex items-center justify-between gap-2 text-xs font-bold text-white/80">
                      <span>{movie.genre}</span>
                      <span className="rounded-full bg-white/15 px-2 py-1 text-white backdrop-blur-sm">
                        &#9733; {movie.rating}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </section>

        <div className="pageNation flex p-2.5 gap-2 items-center justify-center">
          <button
            onClick={() => {
              setPage(Page - 1);
            }}
            disabled={Page === 1}
          >
            prv
          </button>
          <h1 className=" text-2xl " >{Page}</h1>
          <button
            onClick={() => {
              setPage(Page + 1);
            }}
            disabled={Page >= TotalPages}
          >
            next
          </button>
        </div>
      </div>
    </main>
  );
};

export default Movies;
