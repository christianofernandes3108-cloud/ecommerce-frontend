import { useEffect, useState } from "react";
import { getProducts, saveProducts } from "../../services/productService";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProducts(getProducts());
  }, []);

  function addProduct(e) {
    e.preventDefault();
    const updated = [
      ...products,
      { id: Date.now(), name, price, image: "https://via.placeholder.com/500", description: "" },
    ];
    setProducts(updated);
    saveProducts(updated);
    setName("");
    setPrice("");
  }

  function deleteProduct(id) {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    saveProducts(updated);
  }

  return (
    <div>
      <h1>Products</h1>

      <Card>
        <form onSubmit={addProduct} style={{ display: "flex", gap: "12px" }}>
          <input className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
          <input className="input" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
          <Button>Add</Button>
        </form>
      </Card>

      {products.map((p) => (
        <Card key={p.id} style={{ marginTop: "12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{p.name} — ${p.price}</span>
            <Button variant="danger" onClick={() => deleteProduct(p.id)}>Delete</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
