import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {jwtDecode} from "jwt-decode";
import { logout } from "../redux/authSlice";

const Navbar = () => {
  const token =
    useSelector((state) => state.auth.token) || localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let role = null;
  if (token) {
    try {
      const decoded = jwtDecode(token);
      role = decoded.role;
    } catch (err) {
      console.error("Invalid token:", err);
    }
  }

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">
        JobFinder
      </Link>
      <div className="flex gap-4 items-center">
        {role === "admin" && (
          <>
            <Link to="/home" className="hover:text-blue-600">
              Dashboard
            </Link>
            <Link to="/analytics" className="hover:text-blue-600">
              Analytics
            </Link>
            <Link to="/settings" className="hover:text-blue-600">
              Settings
            </Link>
          </>
        )}
        {role === "jobseeker" && (
          <>
            <Link to="/home" className="hover:text-blue-600">
              Jobs
            </Link>
            <Link to="/saved-jobs" className="hover:text-blue-600">
              Saved
            </Link>
            <Link to="/profile" className="hover:text-blue-600">
              Profile
            </Link>
          </>
        )}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
