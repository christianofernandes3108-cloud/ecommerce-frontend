import { useState } from "react";
import Card from "../../components/common/Card";

export default function OrderHistory() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const [orders] = useState(() => {
    const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
    return allOrders.filter((o) => o.userId === currentUser.id);
  });

  return (
    <div className="page">
      <h1 style={{ marginBottom: "24px" }}>My Orders</h1>

      {orders.length === 0 && <p>No orders yet.</p>}

      {orders.map((order) => (
        <Card key={order.id} style={{ marginBottom: "16px" }}>
          <p>
            <strong>Order ID:</strong> {order.id}
          </p>
          <p>
            <strong>Date:</strong>{" "}
            {new Date(order.date).toLocaleDateString()}
          </p>
          <p>
            <strong>Total:</strong> ${order.total.toFixed(2)}
          </p>
        </Card>
      ))}
    </div>
  );
}