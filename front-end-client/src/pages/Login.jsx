import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, googleLogin } from "../redux/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirectUser = (role) => {
    switch (role) {
      case "admin":
        navigate("/admin-dashboard");
        break;
      case "jobseeker":
        navigate("/dashboard");
        break;
      default:
        navigate("/unauthorized");
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(loginUser({ email, password })).unwrap();
      const role = result?.role || result?.user?.role || "jobseeker"; // Default fallback
      redirectUser(role);
    } catch (err) {
      alert(err?.message || "Login failed");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await dispatch(googleLogin()).unwrap();
      const role = result?.role || result?.user?.role || "jobseeker"; // Default fallback
      redirectUser(role);
    } catch (err) {
      alert(err?.message || "Google login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleEmailLogin}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full px-4 py-2 border rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full px-4 py-2 border rounded"
          required
        />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="my-4 text-center text-gray-500">or</div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign in with Google"}
        </button>
      </form>
    </div>
  );
};

export default Login;
