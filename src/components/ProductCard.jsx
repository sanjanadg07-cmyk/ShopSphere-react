function ProductCard({ product, setCartCount, cartCount }) {
  return (
    <div
      style={{
        width: "250px",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        padding: "15px",
        textAlign: "center"
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          borderRadius: "10px"
        }}
      />

      <h3>{product.name}</h3>

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