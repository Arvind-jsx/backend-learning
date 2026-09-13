
export default function PaymentSuccess() {

  return (
    <div className=" w-full bg-none from-green-50 via-white to-white flex items-center justify-center p-6">
      <style>{`
        @keyframes ps-pop {
          0% { transform: scale(0.4); opacity: 0; }
          55% { transform: scale(1.08); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes ps-draw { to { stroke-dashoffset: 0; } }
        @keyframes ps-ripple {
          0% { transform: scale(0.9); opacity: 0.45; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes ps-fade-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .ps-badge { animation: ps-pop 0.55s cubic-bezier(0.34,1.56,0.64,1) both; }
        .ps-ring  { stroke-dasharray: 151; stroke-dashoffset: 151; animation: ps-draw 0.6s ease-out 0.15s forwards; }
        .ps-check { stroke-dasharray: 34; stroke-dashoffset: 34; animation: ps-draw 0.3s ease-out 0.7s forwards; }
        .ps-ripple-1 { animation: ps-ripple 1.6s ease-out 0.15s infinite; }
        .ps-ripple-2 { animation: ps-ripple 1.6s ease-out 0.75s infinite; }
        .ps-fade-1 { opacity: 0; animation: ps-fade-up 0.5s ease-out 0.9s forwards; }
        .ps-fade-2 { opacity: 0; animation: ps-fade-up 0.5s ease-out 1.05s forwards; }
        .ps-fade-3 { opacity: 0; animation: ps-fade-up 0.5s ease-out 1.2s forwards; }
        .ps-fade-4 { opacity: 0; animation: ps-fade-up 0.5s ease-out 1.35s forwards; }
      `}</style>

      <div className="w-full max-w-sm rounded-3xl bg-white border border-green-100 shadow-xl shadow-green-900/5 px-8 py-10 text-center">
        {/* icon */}
        <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
          <span className="ps-ripple-1 absolute inset-0 rounded-full bg-green-400"></span>
          <span className="ps-ripple-2 absolute inset-0 rounded-full bg-green-400"></span>
          <div className="ps-badge relative w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
            <svg viewBox="0 0 52 52" className="w-14 h-14">
              <circle
                className="ps-ring"
                cx="26"
                cy="26"
                r="24"
                fill="none"
                stroke="#16a34a"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                className="ps-check"
                fill="none"
                stroke="#16a34a"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 27l7 7 16-16"
              />
            </svg>
          </div>
        </div>

        <h1 className="ps-fade-1 text-xl font-semibold text-gray-900">
          Payment Successful
        </h1>
        <p className="ps-fade-2 mt-1 text-sm text-gray-500">
          Your transaction has been completed
        </p>
      </div>
    </div>
  );
}
