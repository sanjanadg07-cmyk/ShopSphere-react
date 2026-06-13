import { useState } from "react";

function App() {

  const [cartCount, setCartCount] = useState(0);

  return (
    <div>

      {/* Navbar */}
      <header style={{
        backgroundColor: "#131921",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>

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

      {/* Hero Section */}
      <div style={{
        textAlign: "center",
        padding: "50px"
      }}>
        <h2>Welcome to ShopSphere 🚀</h2>
        <p>Your one-stop shopping destination</p>
      </div>

      {/* Product Section */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "30px",
        padding: "20px"
      }}>

        {[
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

        ].map((product, index) => (

          <div
            key={index}
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

        ))}

      </div>

    </div>
  );
}

export default App;