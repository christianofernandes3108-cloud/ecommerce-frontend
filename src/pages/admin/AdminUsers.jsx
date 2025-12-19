import { useEffect, useState } from "react";
import Card from "../../components/common/Card";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUsers(JSON.parse(localStorage.getItem("users")) || []);
  }, []);

  return (
    <div>
      <h1 style={{ marginBottom: "24px" }}>Users</h1>

      <div className="grid">
        {users.map((u) => (
          <Card key={u.id}>
            <h3>{u.name} {u.surname}</h3>
            <p>{u.email}</p>
            <p>{u.phone}</p>
            <p><strong>{u.role}</strong></p>
          </Card>
        ))}
      </div>
    </div>
  );
}
