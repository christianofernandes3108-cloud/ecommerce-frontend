import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

export default function UserLayout() {
  const { user, logout } = useAuth();
  const { cart, clearCart } = useCart();

  function handleLogout() {
    clearCart();
    logout();
  }

  return (
    <>
      <div className="navbar">
        <span>Hi, {user.email}</span>
        <h3 style={{ color: "#2563eb" }}>BlueShop</h3>

        <div>
          <Link to="/">Shop</Link>
          <Link to="/cart">Cart ({cart.length})</Link>
          <button
            onClick={handleLogout}
            style={{
              background: "none",
              border: "none",
              color: "#2563eb",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <Outlet />
    </>
  );
}
