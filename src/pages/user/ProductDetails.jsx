import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <img src={product.image} alt={product.name} />
      <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
      <p className="mt-2">{product.description}</p>
      <p className="font-bold mt-2">${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-black text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
