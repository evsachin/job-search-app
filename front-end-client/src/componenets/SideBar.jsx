import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) return null;

  const commonLinks = [
    { to: "/profile", label: "Profile" },
    { to: "/settings", label: "Settings" },
  ];

  const adminLinks = [
    { to: "/admin/dashboard", label: "Admin Dashboard" },
    { to: "/admin/users", label: "Manage Users" },
  ];

  const jobSeekerLinks = [
    { to: "/home", label: "Home" },
    { to: "/saved-jobs", label: "Saved Jobs" },
    { to: "/analytics", label: "Analytics" },
  ];

  const links =
    user.role === "admin"
      ? [...adminLinks, ...commonLinks]
      : [...jobSeekerLinks, ...commonLinks];

  return (
    <aside className="w-60 h-full bg-gray-800 text-white p-4">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.to} className="mb-2">
              <Link
                to={link.to}
                className="block p-2 rounded hover:bg-gray-700"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
