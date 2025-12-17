import Card from "../../components/common/Card";

export default function AdminDashboard() {
  return (
    <div>
      <h1 style={{ marginBottom: "24px" }}>Dashboard</h1>

      <div className="grid">
        <Card>
          <h3>Total Products</h3>
          <p style={{ fontSize: "24px", fontWeight: 700 }}>12</p>
        </Card>

        <Card>
          <h3>Total Users</h3>
          <p style={{ fontSize: "24px", fontWeight: 700 }}>3</p>
        </Card>

        <Card>
          <h3>Orders</h3>
          <p style={{ fontSize: "24px", fontWeight: 700 }}>8</p>
        </Card>
      </div>
    </div>
  );
}
