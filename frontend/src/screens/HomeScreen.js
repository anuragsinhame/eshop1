import React, { useEffect } from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import publicCss from "../public.module.css";

import ProductCard from "../components/ProductCard";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { listProducts } from "../actions/productActions";
// import data from "../data";  //local import commented

import { StoreConstants } from "../storeData";

export default function HomeScreen() {
  // const [products, setProduct] = useState([]);

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const dispatch = useDispatch();

  // Using useEffect hook to get data from backend whenever the component loads
  //useEffect runs during the mounting of component to the page
  // useEffect(() => {
  //   // created an asynchronous function as fetching data from backend will take time
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       // using axios to get data from backend api
  //       const { data } = await axios.get("/api/products");
  //       // setting the state of product array
  //       setProduct(data);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   // calling the fetchData method
  //   fetchData();
  // }, []);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      {/* Adding Slider */}
      <div className="row center">
        <Carousel infiniteLoop>
          {StoreConstants.sliderImages.map((image) => (
            <div key={image.id}>
              <img src={image.url} alt={image.alt} />
              <p className="legend">{image.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
      <div>
        <h1>Bestselling Products</h1>
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
      </div>
    </div>
  );
}
