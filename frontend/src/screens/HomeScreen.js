import React from "react";
import ProductCard from "../components/ProductCard";
import data from "../data";

export default function HomeScreen() {
  return (
    <div className="row center">
      {data.products.map((product) => {
        return <ProductCard key={product._id} product={product} />;
      })}
    </div>
  );
}
