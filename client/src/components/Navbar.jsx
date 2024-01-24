import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userProvider";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser({
      username: "",
      _id: "",
    });

    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-[#E1B7C5] w-[100%] top-0 z-50 left-0 flex flex-wrap items-center justify-center p-4 gap-[20px]">
      <Link to="/" className="text-white">
        {" "}
        Home
      </Link>
      <Link to="/login" className="text-white">
        {" "}
        Login
      </Link>
      <Link to="/register" className="text-white">
        {" "}
        Register
      </Link>
      {user._id ? user.username : "Not Logged in"}
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}