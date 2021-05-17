import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
// import data from "../data";  //local import commented

export default function HomeScreen() {
  const [products, setProduct] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Using useEffect hook to get data from backend whenever the component loads
  useEffect(() => {
    // created an asynchronous function as fetching data from backend will take time
    const fetchData = async () => {
      try {
        setLoading(true);
        // using axios to get data from backend api
        const { data } = await axios.get("/api/products");
        // setting the state of product array
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // calling the fetchData method
    fetchData();
  }, []);

  return (
    <div className="row center">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })
      )}
    </div>
  );
}
