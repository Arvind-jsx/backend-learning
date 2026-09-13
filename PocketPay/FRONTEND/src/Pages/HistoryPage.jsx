import { Link } from "react-router-dom"



const HistoryPage = () => {
  return (
    <>
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
              <Link className="transition hover:text-white" to="/profile">
                Profile
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
                  History
                </p>
                <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                  Your Transactions
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
                      {/* {Data.name} */}
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      {/* {Data.email} */}
                    </p>
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-200 pt-6">
                  <p className="text-sm font-semibold text-slate-500">
                    Available balance
                  </p>
                  <p className="mt-1 text-4xl font-black tracking-tight text-emerald-700">
                    {/* ${Data.balance} */}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm">
                  <span className="text-slate-500">User ID</span>
                  <span className="font-bold text-slate-800">
                    {/* {Data.id} */}
                  </span>
                </div>
              </article>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default HistoryPage
