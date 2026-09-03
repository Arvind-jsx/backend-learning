import { Navigate } from "react-router-dom";
import { useData } from "./context/DataContext.jsx";

const Dashboard = () => {
  const { data } = useData();

  if (!data) {
    return <Navigate to="/" replace />;
  }

  const student = {
    name: data.name || "Unknown Student",
    accessCode: data.accessCode || "N/A",
    studentId: data.studentId || "STU-2026-104",
    department: data.department || "Computer Science",
    semester: data.semester || "6th Semester",
    gpa: data.gpa || "3.9",
    email: data.email || "student@portal.edu",
    advisor: data.advisor || "Dr. Sarah Khan",
    status: data.status || "Active",
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6 text-slate-800">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Student Portal
            </p>
            <h1 className="mt-2 text-3xl font-bold">Dashboard</h1>
          </div>
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            {student.status}
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-indigo-50 p-6">
            <p className="text-sm uppercase tracking-wide text-indigo-600">Student Name</p>
            <h2 className="mt-2 text-2xl font-bold">{student.name}</h2>
          </div>

          <div className="rounded-2xl bg-slate-100 p-6">
            <p className="text-sm uppercase tracking-wide text-slate-500">Access Code</p>
            <h2 className="mt-2 text-2xl font-bold">{student.accessCode}</h2>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-sm text-slate-500">Student ID</p>
            <p className="mt-2 text-lg font-semibold">{student.studentId}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-sm text-slate-500">Department</p>
            <p className="mt-2 text-lg font-semibold">{student.department}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-sm text-slate-500">Semester</p>
            <p className="mt-2 text-lg font-semibold">{student.semester}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4">
            <p className="text-sm text-slate-500">GPA</p>
            <p className="mt-2 text-lg font-semibold">{student.gpa}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Email</p>
            <p className="mt-2 font-medium">{student.email}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Advisor</p>
            <p className="mt-2 font-medium">{student.advisor}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Attendance</p>
            <p className="mt-2 font-medium">92%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
