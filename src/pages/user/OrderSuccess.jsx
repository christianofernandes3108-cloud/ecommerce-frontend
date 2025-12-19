import { Link } from "react-router-dom";
import Button from "../../components/common/Button";

export default function OrderSuccess() {
  return (
    <div
      className="page"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
      }}
    >
      <div className="card" style={{ maxWidth: "480px", textAlign: "center" }}>
        <h1 style={{ marginBottom: "16px", color: "#2563eb" }}>
          Order Confirmed 🎉
        </h1>

        <p style={{ marginBottom: "24px" }}>
          Thank you for your purchase. Your order has been placed
          successfully and is being processed.
        </p>

        <Link to="/">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    </div>
  );
}
