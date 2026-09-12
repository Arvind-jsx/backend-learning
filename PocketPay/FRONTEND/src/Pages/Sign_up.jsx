import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/useUser";

const Sign_up = () => {
  const { setCurrentUser } = useUser();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Message, setMessage] = useState("");
  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name: Name.trim(),
      email: Email,
      password: Password,
    };
    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res = await response.json();
      if (!response.ok) {
        throw new Error(res.message || "Unable to create account");
      }
      setCurrentUser(res.user);

      localStorage.setItem("userEmail", Email.trim());
      navigate("/home");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-emerald-950 via-green-900 to-teal-800 px-4 py-8 sm:px-6">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-lime-300/15 blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-emerald-300/15 blur-3xl" />

      <section className="relative flex justify-center items-center w-fit max-w-5xl overflow-hidden rounded-3xl border border-white/15 bg-white/95 shadow-2xl shadow-emerald-950/40 animate-fade-up backdrop-blur-sm lg:grid-cols-[0.9fr_1.1fr]">
        <form
          onSubmit={HandleSubmit}
          className="flex flex-col gap-5 p-6 sm:p-10"
        >
          <div>
            <div className="mb-6 flex items-center gap-3 lg:hidden">
              <span className="text-lg font-bold text-emerald-950">
                PocketPay
              </span>
            </div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
              Get started
            </p>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">
              Create your account
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Start sending and receiving payments with confidence.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="group flex flex-col gap-2">
              <label
                className="text-sm font-semibold text-slate-700"
                htmlFor="name"
              >
                Full name
              </label>
              <input
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-emerald-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                type="text"
                value={Name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                id="name"
                name="name"
                placeholder="Enter Name"
                autoComplete="name"
                required
              />
            </div>
            <div className="group flex flex-col gap-2">
              <label
                className="text-sm font-semibold text-slate-700"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-emerald-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                type="email"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="email"
                name="email"
                placeholder="Enter Email"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold text-slate-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 hover:border-emerald-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                type="password"
                value={Password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password"
                name="password"
                placeholder="Create a password"
                required
              />
            </div>
          </div>
          <p className=" text-red-500 text-[10px] ">{Message ? Message : ""}</p>
          <button
            className="group relative overflow-hidden rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/30 focus:outline-none focus:ring-4 focus:ring-emerald-500/25 active:translate-y-0"
            type="submit"
          >
            <span className="relative z-10">Create account</span>
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
          </button>

          <p className="text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link
              className="font-bold text-emerald-700 transition hover:text-emerald-900"
              to="/login"
            >
              Log in
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Sign_up;
