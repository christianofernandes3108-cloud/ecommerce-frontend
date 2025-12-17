import Card from "../../components/common/Card";

export default function AdminUsers() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <p>No users found.</p>;
  }

  return (
    <div>
      <h1 style={{ marginBottom: "24px" }}>Registered Users</h1>

      <div className="grid">
        <Card>
          <h3 style={{ marginBottom: "10px" }}>
            {user.name} {user.surname}
          </h3>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>Phone:</strong> {user.phone}
          </p>

          <p>
            <strong>Role:</strong>{" "}
            <span style={{ color: "#2563eb", fontWeight: 600 }}>
              {user.role}
            </span>
          </p>
        </Card>
      </div>
    </div>
  );
}
