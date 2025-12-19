import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import { useCart } from "../../context/CartContext";
import Button from "../../components/common/Button";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const products = getProducts();
    const found = products.find((p) => p.id === Number(id));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProduct(found);
  }, [id]);

  if (!product) {
    return <p className="page">Product not found.</p>;
  }

  return (
    <div className="page">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "center",
        }}
      >
        <div className="card">
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", borderRadius: "16px" }}
          />
        </div>

        <div>
          <h1>{product.name}</h1>

          <p style={{ margin: "20px 0" }}>{product.description}</p>

          <p
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#2563eb",
              marginBottom: "32px",
            }}
          >
            ${product.price}
          </p>

          <Button onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
