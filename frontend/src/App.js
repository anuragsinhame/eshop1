import React from "react";
import ProductCard from "./components/ProductCard";
import data from "./data";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            Eshop
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((product) => {
            return (
              <ProductCard
                key={product._id}
                name={product.name}
                image={product.image}
                description={product.description}
                rating={product.rating}
                price={product.price}
                id={product._id}
              />
            );
          })}
        </div>
      </main>
      <footer className="row center">All Rights Reserved</footer>
    </div>
  );
}

export default App;
