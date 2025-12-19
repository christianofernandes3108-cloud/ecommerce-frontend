import { useEffect, useState } from "react";
import Card from "../../components/common/Card";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOrders(JSON.parse(localStorage.getItem("orders")) || []);
  }, []);

  return (
    <div>
      <h1 style={{ marginBottom: "24px" }}>All Orders</h1>

      {orders.length === 0 && <p>No orders placed yet.</p>}

      {orders.map((order) => (
        <Card key={order.id} style={{ marginBottom: "16px" }}>
          <p>
            <strong>Order ID:</strong> {order.id}
          </p>
          <p>
            <strong>User ID:</strong> {order.userId}
          </p>
          <p>
            <strong>Total:</strong> ${order.total.toFixed(2)}
          </p>
        </Card>
      ))}
    </div>
  );
}
