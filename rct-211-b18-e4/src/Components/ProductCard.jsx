import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div
      data-cy={`product-card-${item.id}`}
      key={item.id}
      style={{
        border: "1px solid black",
        borderRadious: "5px",
        padding: "10px",
        width: "300px",
      }}
    >
      <div data-cy="product-card-name">{item.name}</div>
      <div data-cy="product-card-category">{item.category}</div>
      <div style={{ height: "210px" }}>
        <img
          data-cy="product-card-image"
          src={`${item.imageSrc}`}
          alt="Product"
          style={{ width: "100%", height: "inherit" }}
        />
      </div>
      <div data-cy="product-card-price" style={{ paddingTop: "5px" }}>
        € {item.price}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Add a onClick handler for delete functionality */}
        <button
          data-cy="delete-button"
          // onClick={() => deleteHandler(item.id)}
        >
          Delete Product
        </button>
        {/* Link the Edit button to '/edit/:id' route, so that the user is navigate to the Edit page on button click */}
        <Link to={`edit/${item.id}`}>
          <button data-cy="edit-button">Edit Product</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
