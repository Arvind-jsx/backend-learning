import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-emerald-950/80 px-5 py-4 backdrop-blur sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400 text-xl font-black text-emerald-950 shadow-lg shadow-emerald-950/40">
              P
            </span>
            <span className="text-lg font-bold tracking-tight">PocketPay</span>
          </div>
          <nav className="flex items-center gap-5 text-sm font-medium text-emerald-100 sm:gap-8">
            <Link
              to="/profile"
              className="transition tracking-[3px] hover:text-white"
            >
              Profile
            </Link>
            <Link
              to="/history"
              className="transition tracking-[3px] hover:text-white"
            >
              History
            </Link>
          </nav>
        </div>
      </header>

      <main className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-20">
        <div className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-teal-500/15 blur-3xl" />

        <section className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl">
              Send money To Another USER.
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-slate-300 sm:text-lg">
              Enter the amount and user id to make a payment.
            </p>
          </div>

          <form className="rounded-3xl border border-white/10 bg-white p-6 text-slate-900 shadow-2xl animate-fade-up shadow-black/25 sm:p-8">
            <div className="mb-7">
              <p className="text-sm font-semibold text-emerald-600">
                New payment
              </p>
              <h2 className="mt-1 text-2xl font-black tracking-tight">
                Send funds
              </h2>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="amount"
                  className="text-sm font-semibold text-slate-700"
                >
                  Amount
                </label>
                <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 transition focus-within:border-emerald-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-emerald-500/10">
                  <span className="pl-4 text-lg font-bold text-emerald-600">
                    $
                  </span>
                  <input
                    id="amount"
                    name="amount"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    required
                    className="w-full bg-transparent px-3 py-3.5 text-lg font-semibold outline-none placeholder:text-slate-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="user-id"
                  className="text-sm font-semibold text-slate-700"
                >
                  User ID
                </label>
                <input
                  id="user-id"
                  name="userId"
                  type="text"
                  placeholder="Enter user ID"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 hover:border-emerald-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 w-full rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/25 active:translate-y-0"
            >
              Submit payment
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
