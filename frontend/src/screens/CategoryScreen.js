import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProducts } from "../actions/categoryActions";

import publicCss from "../public.module.css";

import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import ProductCard from "../components/ProductCard";

export default function CategoryScreen(props) {
  const { catId, subCatId } = props.match.params;
  if (catId && !subCatId) {
    console.log("Only CatID1");
  } else if (catId && subCatId) {
    console.log("CatID and SubCat Id");
  }

  const productsData = useSelector((state) => state.categoryProductData);
  const { loading, categoryProducts, error } = productsData;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryProducts(catId, subCatId));
  }, [catId, dispatch, subCatId]);

  return (
    <div className="row center">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className={publicCss.productsBox}>
          {/* <Link to="/">Back to Result</Link> */}
          {categoryProducts.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
}
