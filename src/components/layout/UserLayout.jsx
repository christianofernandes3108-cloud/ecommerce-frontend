import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function UserLayout() {
  const { user, logout } = useAuth();

  return (
    <div>
      <nav className="flex justify-between p-4 bg-black text-white">
        <span>Welcome, {user?.name}</span>
        <button onClick={logout}>Logout</button>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
