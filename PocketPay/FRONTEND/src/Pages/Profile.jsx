import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mosaic } from "react-loading-indicators";
import { useUser } from "../context/useUser";

const Profile = () => {
  const email = localStorage.getItem("userEmail");
  const navigate = useNavigate();
  const { setCurrentUser } = useUser();
  const [Data, setData] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [errorMessage, setError] = useState("");

  const handleSignOut = () => {
    localStorage.removeItem("userEmail");
    setCurrentUser(null);
    navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!email) {
        navigate("/");
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:5000/profile?email=${encodeURIComponent(email)}`,
        );
        const res = await response.json();

        if (!response.ok) {
          throw new Error(res.message || "Unable to load profile");
        }

        setData(res);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [email, navigate]);

  return (
    <>
      {Loading ? (
        <div className="flex min-h-screen items-center justify-center bg-slate-950 px-5 text-center text-white">
          <Mosaic color="#32cd32" size="medium" text="" textColor="" />
        </div>
      ) : errorMessage || !Data ? (
        <main className="flex min-h-screen items-center justify-center bg-slate-950 px-5 text-center text-white">
          <div>
            <h1 className="text-2xl font-black">Unable to load profile</h1>
            <p className="mt-2 text-slate-400">
              {errorMessage || "Profile data is unavailable"}
            </p>
            <button
              className="mt-6 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-700"
              onClick={handleSignOut}
              type="button"
            >
              Return to sign up
            </button>
          </div>
        </main>
      ) : (
        <div className="min-h-screen bg-slate-950 text-white">
          <header className="border-b border-white/10 bg-emerald-950/80 px-5 py-4 backdrop-blur sm:px-8">
            <div className="mx-auto flex max-w-6xl items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400 text-xl font-black text-emerald-950 shadow-lg shadow-emerald-950/40">
                  P
                </span>
                <span className="text-lg font-bold tracking-tight">
                  PocketPay
                </span>
              </div>
              <nav className="flex items-center gap-5 text-sm font-medium text-emerald-100 sm:gap-8">
                <Link className="transition hover:text-white" to="/home">
                  Send money
                </Link>
                <Link className="transition hover:text-white" to="/history">
                  History
                </Link>
              </nav>
            </div>
          </header>

          <main className="relative overflow-hidden px-5 py-10 sm:px-8 sm:py-16">
            <div className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-teal-500/15 blur-3xl" />

            <section className="relative mx-auto flex max-w-2xl flex-col items-center animate-fade-up">
              <div className="mb-8 text-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[3px] text-emerald-300">
                    Account overview
                  </p>
                  <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
                    Your profile
                  </h1>
                </div>
              </div>

              <div className="w-full">
                <article className="w-full rounded-3xl border border-white/10 bg-white p-6 text-slate-900 shadow-2xl shadow-black/25 sm:p-8">
                  <div className="flex items-center gap-4">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-400 text-xl font-black text-emerald-950">
                      A
                    </span>
                    <div>
                      <h2 className="text-2xl font-black tracking-tight">
                        {Data.name}
                      </h2>
                      <p className="mt-1 text-sm text-slate-500">
                        {Data.email}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-slate-200 pt-6">
                    <p className="text-sm font-semibold text-slate-500">
                      Available balance
                    </p>
                    <p className="mt-1 text-4xl font-black tracking-tight text-emerald-700">
                      ${Data.balance}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm">
                    <span className="text-slate-500">User ID</span>
                    <span className="font-bold text-slate-800">{Data.id}</span>
                  </div>

                  <button
                    className="mt-6 w-full rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/25"
                    onClick={handleSignOut}
                    type="button"
                  >
                    Sign out
                  </button>
                </article>
              </div>
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Profile;
