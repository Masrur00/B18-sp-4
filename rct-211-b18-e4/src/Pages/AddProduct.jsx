import React from "react";
import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProducts, getProducts } from "../Redux/action";

const initialState = {
  title: "",
  category: "",
  imageSrc: "",
  price: 0,
};

const reducerFunction = (state, { type, payload }) => {
  switch (type) {
    case "title":
      return { ...state, title: payload };
    case "category":
      return { ...state, category: payload };
    case "image":
      return { ...state, imageSrc: payload };
    case "price":
      return { ...state, price: payload };
    default:
      return state;
  }
};

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productState, setProductState] = useReducer(
    reducerFunction,
    initialState
  );

  const addHandler = () => {
    console.log(productState);
    if (JSON.stringify(productState) !== JSON.stringify(initialState)) {
      dispatch(addProducts(productState)).then(() =>
        dispatch(getProducts()).then(() => navigate("/"))
      );
    }
  };
  return (
    <div>
      <h3>Add Product</h3>
      <div
        style={{
          textAlign: "left",
          fontSize: "19px",
          width: "fit-content",
          margin: "auto",
        }}
      >
        <div style={{ display: "flex", padding: "5px 0" }}>
          <label style={{ width: "160px" }}>Product title</label>
          <input
            data-cy="add-product-title"
            type="text"
            value={productState.title}
            onChange={(e) =>
              setProductState({ type: "title", payload: e.target.value })
            }
          />
        </div>
        <div style={{ display: "flex", padding: "5px 0" }}>
          <label style={{ width: "160px" }}>Product Category</label>

          <select
            data-cy="add-product-category"
            value={productState.category}
            onChange={(e) =>
              setProductState({ type: "category", payload: e.target.value })
            }
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Cosmetics">Cosmetics</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>
        <div style={{ display: "flex", padding: "5px 0" }}>
          <label style={{ width: "160px" }}>Product Image</label>
          <input
            data-cy="add-product-image"
            type="url"
            placeholder="Image URL"
            value={productState.imageSrc}
            onChange={(e) =>
              setProductState({ type: "image", payload: e.target.value })
            }
          />
        </div>
        <div style={{ display: "flex", padding: "5px 0" }}>
          <label style={{ width: "160px" }}>Product Price</label>
          <input
            data-cy="add-product-price"
            type="text"
            value={productState.price}
            onChange={(e) =>
              setProductState({ type: "price", payload: e.target.value })
            }
          />
        </div>
        <div style={{ textAlign: "right" }}>
          <button data-cy="add-product-button" onClick={addHandler}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
