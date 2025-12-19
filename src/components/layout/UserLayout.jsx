import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

export default function UserLayout() {
  const { logout, user } = useAuth();
  const { cart, clearCart } = useCart();

  function handleLogout() {
    clearCart();
    logout();
  }

  return (
    <>
      <div className="navbar">
        <h3 style={{ color: "#2563eb" }}>BlueShop</h3>

        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link to="/">Shop</Link>
          <Link to="/orders">Orders</Link>

          {/* CART ICON */}
          <Link to="/cart" className="cart-icon">
            🛒
            {cart.length > 0 && (
              <span className="cart-badge">{cart.length}</span>
            )}
          </Link>

          {/* USER AVATAR */}
          <div className="avatar">
            {user?.avatar?.startsWith("data:image") ? (
              <img src={user.avatar} alt="Profile" />
            ) : (
              user?.avatar
            )}
          </div>

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
