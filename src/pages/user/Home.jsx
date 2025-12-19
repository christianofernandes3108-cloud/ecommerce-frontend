import { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import { useCart } from "../../context/CartContext";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProducts(getProducts());
  }, []);

  return (
    <div className="page">
      <h1 style={{ marginBottom: "30px" }}>Discover Products</h1>

      <div className="grid">
        {products.map((product) => (
          <Card key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", borderRadius: "14px" }}
            />
            <h3>{product.name}</h3>
            <p>${product.price}</p>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Link to={`/product/${product.id}`}>View</Link>
              <Button onClick={() => addToCart(product)}>Add</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
