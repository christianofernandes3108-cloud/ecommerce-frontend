import { useCart } from "../../context/CartContext";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  return (
    <div className="page">
      <h1 style={{ marginBottom: "32px" }}>Your Cart</h1>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "32px",
          }}
        >
          {/* CART ITEMS */}
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="card"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "16px",
                }}
              >
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                </div>

                <Button
                  variant="danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div className="card">
            <h2 style={{ marginBottom: "20px" }}>Order Summary</h2>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "24px",
                fontWeight: 700,
              }}
            >
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <Link to="/checkout">
              <Button style={{ width: "100%" }}>
                    Proceed to Checkout
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
