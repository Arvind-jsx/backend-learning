import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "./context/DataContext.jsx";

const App = () => {
  const [Name, setName] = useState("");
  const [AccessCode, setAccessCode] = useState("");
  const { setData, message, setMessage } = useData();
  const navigate = useNavigate();

  const FormHandler = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!Name.trim() || !AccessCode.trim()) {
      setMessage("Please fill in all fields");
      return;
    }

    try {
      const body = {
        name: Name.trim(),
        accessCode: AccessCode.trim(),
      };

      const SendData = await fetch("http://localhost:5000/studentPortal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const response = await SendData.json();

      if (!SendData.ok) {
        setMessage(response.message || "Something went wrong");
        return;
      }

      const studentData = {
        ...response.data,
        name: body.name,
        accessCode: body.accessCode,
        studentId: "STU-2026-104",
        department: "Computer Science",
        semester: "6th Semester",
        gpa: "3.9",
        email: "student@portal.edu",
        advisor: "Dr. Sarah Khan",
        status: "Active",
      };

      setData(studentData);
      setMessage(response.message || "Access granted");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      setMessage("Something went wrong");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <form
        onSubmit={FormHandler}
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200"
      >
        <h1 className="mb-6 text-2xl font-bold text-slate-800">Student Portal</h1>

        <div className="space-y-4">
          <input
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />

          <input
            type="text"
            placeholder="Enter Access Code"
            value={AccessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-500"
          >
            Submit
          </button>
        </div>

        {message ? (
          <p
            className={`mt-4 text-sm font-medium ${
              message === "Access granted" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        ) : null}
      </form>
    </div>
  );
};

export default App;
