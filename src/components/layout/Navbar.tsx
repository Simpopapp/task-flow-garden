import { useAuthStore } from "@/store/authStore";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { isAuthenticated, logout } = useAuthStore();

  return (
    <nav className="bg-white border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            TaskManager
          </Link>
          <div className="flex gap-4">
            {isAuthenticated ? (
              <>
                <Link to="/tasks" className="nav-link">
                  My Tasks
                </Link>
                <button onClick={logout} className="nav-link text-red-500">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="nav-link">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};