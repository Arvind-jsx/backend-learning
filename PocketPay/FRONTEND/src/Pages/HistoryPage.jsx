import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUser } from "../context/useUser";

const HistoryPage = () => {
  const [Transactions, setTransactions] = useState([]);
  const { currentUser } = useUser();

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/transactions?userId=${currentUser.id}`,
        );
        const res = await response.json();
        setTransactions(res);
      } catch (error) {
        console.log(error);
      }
    };
    FetchData();
  }, [currentUser.id]);

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
              <article className="w-full overflow-hidden rounded-3xl border border-white/10 bg-white text-slate-900 shadow-2xl shadow-black/25">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-black tracking-tight">
                        Recent activity
                      </h2>
                      <p className="mt-1 text-sm text-slate-500">
                        Your latest wallet movements
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 divide-y divide-slate-100">
                    {Transactions.map((transaction, index) => {
                      const isOutgoing =
                        Number(transaction.senderId) === Number(currentUser.id);
                      const date = new Date(transaction.timestamp);

                      return (
                        <div
                          className="group flex items-center gap-4 rounded-2xl border border-transparent px-3 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-100 hover:bg-emerald-50/70 hover:shadow-lg hover:shadow-emerald-950/5 sm:px-4"
                          key={`${transaction.senderId}-${transaction.receiverId}-${transaction.timestamp}`}
                          style={{
                            animation: `fadeUp 0.45s ${index * 0.08}s both`,
                          }}
                        >
                          <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-lg font-black transition duration-300 group-hover:scale-110 ${
                              isOutgoing
                                ? "bg-rose-50 text-rose-600 group-hover:bg-rose-100"
                                : "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100"
                            }`}
                          >
                            {isOutgoing ? "-" : "+"}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                              <p className="font-bold text-slate-800">
                                {isOutgoing ? "Payment sent" : "Payment received"}
                              </p>
                              <span
                                className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                                  isOutgoing
                                    ? "bg-rose-100 text-rose-700"
                                    : "bg-emerald-100 text-emerald-700"
                                }`}
                              >
                                {isOutgoing ? "Outgoing" : "Incoming"}
                              </span>
                            </div>
                            <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500">
                              <span>
                                From <strong className="text-slate-700">{transaction.senderId}</strong>
                              </span>
                              <span>
                                To <strong className="text-slate-700">{transaction.receiverId}</strong>
                              </span>
                            </div>
                            <p className="mt-1 text-xs text-slate-400">
                              {date.toLocaleDateString()} at {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </p>
                          </div>

                          <div className="shrink-0 text-right">
                            <p
                              className={`text-base font-black sm:text-lg ${
                                isOutgoing ? "text-rose-600" : "text-emerald-600"
                              }`}
                            >
                              {isOutgoing ? "-" : "+"}${Number(transaction.amount).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default HistoryPage;
