import { useState } from "react";
import ProductCard from "./components/ProductCard";

function App() {

  const [cartCount, setCartCount] = useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");


  const products = [
    {
      name: "Smartphone",
      price: "₹29,999",
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },

    {
      name: "Headphones",
      price: "₹2,999",
      category:"Electronics",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },

    {
      name: "Smart Watch",
      price: "₹4,999",
      category:"Electronics",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
  name: "Makeup Kit",
  price: "₹999",
  category:"Beauty",
  image:
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
},
{
  name: "Home Decor",
  price: "₹1,499",
  category:"Home",
  image:
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
},
{
  name: "Bluetooth Speaker",
  price: "₹2,499",
  category:"Electronics",
  image:
    "https://images.unsplash.com/photo-1589003077984-894e133dabab"
},

    {
  name: "Fashion Wear",
  price: "₹1,999",
  category:"Fashion",
  image:
    "https://images.unsplash.com/photo-1483985988355-763728e1935b"
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
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
    flexWrap: "wrap"
  }}
>
  {["All", "Electronics", "Fashion", "Home", "Beauty"].map((cat) => (
    <button
      key={cat}
      onClick={() => setCategory(cat)}
      style={{
        padding: "10px 15px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor:
          category === cat ? "#febd69" : "#ddd"
      }}
    >
      {cat}
    </button>
  ))}
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
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px"
  }}
>
        {products
          .filter((product) => {
  const matchSearch = product.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchCategory =
    category === "All" || product.category === category;

  return matchSearch && matchCategory;
})
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