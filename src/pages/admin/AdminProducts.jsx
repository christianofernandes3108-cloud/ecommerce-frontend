import { useEffect, useState } from "react";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

export default function AdminProducts() {
  // ✅ Lazy initialization (NO useEffect)
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem("admin_products");
    return stored ? JSON.parse(stored) : [];
  });

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // ✅ Legitimate side effect: persist products
  useEffect(() => {
    localStorage.setItem("admin_products", JSON.stringify(products));
  }, [products]);

  function addProduct(e) {
    e.preventDefault();

    setProducts((prev) => [
      ...prev,
      { id: Date.now(), name, price },
    ]);

    setName("");
    setPrice("");
  }

  function deleteProduct(id) {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Products</h1>

      <Card>
        <form onSubmit={addProduct} style={{ display: "flex", gap: "12px" }}>
          <input
            className="input"
            placeholder="Product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Button>Add</Button>
        </form>
      </Card>

      <div style={{ marginTop: "24px" }}>
        {products.map((p) => (
          <Card key={p.id} style={{ marginBottom: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
                {p.name} — ${p.price}
              </span>
              <Button
                variant="danger"
                onClick={() => deleteProduct(p.id)}
              >
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
