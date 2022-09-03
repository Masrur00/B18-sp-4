import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editProducts, getProducts } from "../Redux/action";

const Editpage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productList = useSelector((state) => state.products);
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState(0);

  const updateHandler = () => {
    if (productTitle && productPrice) {
      const payload = {
        title: productTitle,
        price: productPrice,
      };

      dispatch(editProducts(id, payload))
        .then(() => dispatch(getProducts()))
        .then(() => navigate("/"));
    }
  };

  useEffect(() => {
    if (productList.length === 0) {
      dispatch(getProducts());
    }
  }, []);

  useEffect(() => {
    const product = productList.find((p) => p.id === Number(id));
    setProductTitle(product.title);
    setProductPrice(product.price);
  }, []);

  return (
    <div style={{ width: "fit-content", margin: "auto", fontSize: "20px" }}>
      <h3>Edit page</h3>
      <div>
        <label>Product Title</label>
        <input
          data-cy="edit-product-title"
          type="text"
          value={productTitle}
          onChange={(e) => setProductTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Product Price</label>
        <input
          data-cy="edit-product-price"
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        } />
      </div>
      <div style={{ textAlign: "right", padding: "5px 0" }}>
        <button data-cy="update-button" onClick={updateHandler}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Editpage;
