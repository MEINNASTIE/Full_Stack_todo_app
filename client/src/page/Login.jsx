import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/userProvider";

export default function Login() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      username,
      password,
    };
    const response = await axios.post("http://localhost:5000/api/auth/login", body);
    console.log("🚀 ~ response:", response);

    if (response.data.success) {
      setUser(response.data.user);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/");
    }
  };

  return (
    <form
      className="flex flex-col items-center justify-center min-h-screen "
      onSubmit={handleSubmit}
    >
      <div className="p-6 bg-white rounded shadow-md">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4  border rounded focus:outline-none focus:shadow-outline text-white"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 text-white border rounded focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="w-full p-3 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </div>
    </form>
  );
}