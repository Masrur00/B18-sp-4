import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import { getProducts } from "../Redux/action";
import "./Productpage.css";

const Productpage = () => {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const compare = (a, b) => {
    if (searchParams.get("sort") === "asc") return a.price - b.price;
    else if (searchParams.get("sort") === "desc") return b.price - a.price;
    else return 0;
  };

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts());
    }
    console.log(products.length);
  }, [dispatch, products.length]);

  return (
    <div style={{ width: "100%" }}>
      <div className="product-container">
        {products.length > 0 &&
          products
            .sort(compare)
            .map((item) => <ProductCard key={item.id} item={item} />)}
        {/* 
        1. Map through the product list items, and render them inside the "ProductCard.jsx", by passing the data through props
        2.  Use the inbuilt sort method before mapping through the data to show them in "asc" or "desc" order, based on URL Search Params 
        */}
      </div>
    </div>
  );
};

export default Productpage;
