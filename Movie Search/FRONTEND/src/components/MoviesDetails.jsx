import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MoviesDetails = () => {
  const [Data, setData] = useState(null);
  const [Loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/movies/${id}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      {Loading ? (
        <div className="mx-auto max-w-5xl animate-pulse rounded-3xl bg-white p-6 shadow-lg">
          <div className="h-8 w-32 rounded bg-slate-200" />
          <div className="mt-6 grid gap-6 md:grid-cols-[280px_1fr]">
            <div className="h-[420px] rounded-2xl bg-slate-200" />
            <div className="space-y-4">
              <div className="h-10 w-2/3 rounded bg-slate-200" />
              <div className="h-5 w-1/3 rounded bg-slate-200" />
              <div className="h-5 w-1/2 rounded bg-slate-200" />
              <div className="h-24 w-full rounded bg-slate-200" />
            </div>
          </div>
        </div>
      ) : Data ? (
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200 sm:p-8">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            ← Back
          </button>

          <div className="grid gap-8 md:grid-cols-[280px_1fr]">
            <img
              src={Data.poster}
              alt={Data.title}
              className="h-[420px] w-full rounded-2xl object-cover shadow-lg"
            />

            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
                {Data.genre}
              </p>
              <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                {Data.title}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-600">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700">
                  ⭐ {Data.rating}
                </span>
                <span>{Data.releaseYear}</span>
                <span>{Data.duration} min</span>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-100 p-5">
                <h2 className="text-lg font-bold text-slate-900">Overview</h2>
                <p className="mt-3 leading-7 text-slate-700">{Data.description}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-xl rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-red-600">
          Movie not found.
        </div>
      )}
    </main>
  );
};

export default MoviesDetails;
