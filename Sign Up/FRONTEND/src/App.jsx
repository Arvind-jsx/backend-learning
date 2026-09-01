import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const formHandler = async (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedEmail || !password) {
      setMessage("please fill all the inputs");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setMessage(data.message);
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      setMessage(error.message);
      console.error("Signup error:", error);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-indigo-950/40 backdrop-blur-md sm:p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Create account</h1>
          <p className="mt-2 text-sm text-slate-300">Sign up to get started</p>
        </div>

        <form
          className="space-y-5"
          onSubmit={(e) => {
            formHandler(e);
          }}
        >
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">Name</label>
            <input
              className="w-full rounded-xl border border-slate-600 bg-slate-950/40 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">Email</label>
            <input
              className="w-full rounded-xl border border-slate-600 bg-slate-950/40 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">Password</label>
            <input
              className="w-full rounded-xl border border-slate-600 bg-slate-950/40 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button
            className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 px-4 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:from-indigo-400 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            type="submit"
          >
            Sign Up
          </button>

          {message ? (
            <p
              className={`text-center text-sm font-medium ${
                message.toLowerCase().includes("successful")
                  ? "text-emerald-400"
                  : "text-red-400"
              }`}
            >
              {message}
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default App;
