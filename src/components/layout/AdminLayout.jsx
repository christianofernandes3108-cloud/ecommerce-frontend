import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function AdminLayout() {
  const { logout } = useAuth();

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* SIDEBAR */}
      <aside
        style={{
          width: "260px",
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(16px)",
          padding: "32px 24px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: "#2563eb", marginBottom: "32px" }}>
          Admin Panel
        </h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/products">Products</Link>
          <Link to="/admin/users">Users</Link>
          <Link to="/admin/orders">Orders</Link>

          <button
            onClick={logout}
            style={{
              marginTop: "40px",
              background: "none",
              border: "none",
              color: "#ef4444",
              fontWeight: 600,
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* CONTENT */}
      <main className="page">
        <Outlet />
      </main>
    </div>
  );
}
