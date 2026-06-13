import { useState } from "react";
import ProductCard from "./components/ProductCard";

function App() {

  const [cartCount, setCartCount] = useState(0);
  const [search, setSearch] = useState("");

  const products = [
    {
      name: "Smartphone",
      price: "₹29,999",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },

    {
      name: "Headphones",
      price: "₹2,999",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },

    {
      name: "Smart Watch",
      price: "₹4,999",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    }
  ];

  return (
    <div>

      {/* Navbar */}
      <header
        style={{
          backgroundColor: "#131921",
          color: "white",
          padding: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h1>ShopSphere</h1>

        <nav>
          <a href="#" style={{ color: "white", marginRight: "15px" }}>
            Home
          </a>

          <a href="#" style={{ color: "white", marginRight: "15px" }}>
            Products
          </a>

          <a href="#" style={{ color: "white" }}>
            Cart ({cartCount})
          </a>
        </nav>
      </header>

      {/* Search Bar */}
      <div
        style={{
          textAlign: "center",
          marginTop: "20px"
        }}
      >
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid gray"
          }}
        />
      </div>

      {/* Hero Section */}
      <div
        style={{
          textAlign: "center",
          padding: "50px"
        }}
      >
        <h2>Welcome to ShopSphere 🚀</h2>
        <p>Your one-stop shopping destination</p>
      </div>

      {/* Product Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "30px",
          padding: "20px"
        }}
      >
        {products
          .filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              cartCount={cartCount}
              setCartCount={setCartCount}
            />
          ))}
      </div>

    </div>
  );
}

export default App;