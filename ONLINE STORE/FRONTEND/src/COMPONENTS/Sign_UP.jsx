import { useState } from "react";

const Sign_UP = () => {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Role, setRole] = useState("");
    const [Message, setMessage] = useState("")
    const [AC, setAC] = useState("")


    const HandleSubmit = async (e) => {
        e.preventDefault();
        setMessage("")
        const body = {
            name: Name.trim(),
            email: Email,
            role: Role,
            access_code: AC
        }
        try {
            const response = await fetch("http://localhost:5000/signup", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            })
            const res = await response.json()
            setMessage(res.message)
        } catch (error) {
            console.log(error)
        }

        setName("")
        setEmail("")

    }


    return (
        <div className="flex justify-center items-center  h-screen">
            <form onSubmit={HandleSubmit} className="flex flex-col gap-4 p-4">
                <input
                    value={Name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    type="text"
                    placeholder="Username"
                    className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
                />
                <input
                    value={Email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
                />
                <select
                    className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
                    value={Role}
                    onChange={(e) => {
                        setRole(e.target.value);
                    }}
                >
                    <option value="user">
                        user
                    </option>
                    <option value="admin">admin</option>
                </select>
                {Role === "admin" ? (
                    <input
                        value={AC}
                        onChange={(e) => {
                            setAC(e.target.value);
                        }}
                        type="text"
                        placeholder="ACCESS CODE ?"
                        className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
                    />
                ) : (
                    ""
                )}
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
                >
                    Sign Up
                </button>
                {Message ? (<p className=" text-red-500 ">{Message}</p>) : ""}
            </form>
        </div>
    );
};

export default Sign_UP;
