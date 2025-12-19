import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  function placeOrder(e) {
  e.preventDefault();

  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const newOrder = {
    id: Date.now(),
    userId: currentUser.id,
    items: cart,
    total: totalPrice,
    date: new Date().toISOString(),
  };

  orders.push(newOrder);
  localStorage.setItem("orders", JSON.stringify(orders));

  clearCart();
  navigate("/order-success");
}

  return (
    <div className="page">
      <h1 style={{ marginBottom: "32px" }}>Checkout</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "32px",
        }}
      >
        {/* SHIPPING FORM */}
        <div className="card">
          <h2 style={{ marginBottom: "20px" }}>Shipping Information</h2>

          <form onSubmit={placeOrder}>
            <input className="input" placeholder="Full name" required />
            <input className="input" placeholder="Email address" required />
            <input className="input" placeholder="Street address" required />
            <input className="input" placeholder="City" required />
            <input className="input" placeholder="Postal code" required />

            <Button type="submit" style={{ marginTop: "16px" }}>
              Place Order
            </Button>
          </form>
        </div>

        {/* ORDER SUMMARY */}
        <div className="card">
          <h2 style={{ marginBottom: "20px" }}>Order Summary</h2>

          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
          ))}

          <hr style={{ margin: "16px 0" }} />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
