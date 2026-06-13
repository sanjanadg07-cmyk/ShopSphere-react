function ProductCard({ product, setCartCount, cartCount }) {
  return (
    <div
  style={{
  width: "100%",
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  padding: "15px",
  textAlign: "center",
  transition: "transform 0.2s ease",
  cursor: "pointer"
}}
onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
>
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          borderRadius: "10px"
        }}
      />

      <div
  style={{
    fontSize: "18px",
    fontWeight: "bold",
    color: "#B12704",
    margin: "10px 0"
  }}
>
  {product.price}
</div>

      <p>Best quality product</p>

      <h2>{product.price}</h2>

      <button
        onClick={() => setCartCount(cartCount + 1)}
        style={{
          backgroundColor: "#ffd814",
          border: "none",
          padding: "10px",
          width: "100%",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;