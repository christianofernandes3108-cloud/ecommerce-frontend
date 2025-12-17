import { useCart } from "../../context/CartContext";
import Button from "../../components/common/Button";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="page">
      <h1 style={{ marginBottom: "24px" }}>Your Cart</h1>

      {cart.length === 0 && <p>Your cart is empty.</p>}

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
  );
}
