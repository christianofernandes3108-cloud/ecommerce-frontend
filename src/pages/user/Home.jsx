import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div className="page">
      <h1 style={{ marginBottom: "30px" }}>
        Discover Premium Products
      </h1>

      <div className="grid">
        {products.map((product) => (
          <Card key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                borderRadius: "14px",
                marginBottom: "16px",
              }}
            />

            <h3>{product.name}</h3>
            <p style={{ margin: "10px 0", fontWeight: 600 }}>
              ${product.price}
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link to={`/product/${product.id}`}>
                View Details
              </Link>
              <Button onClick={() => addToCart(product)}>
                Add
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
