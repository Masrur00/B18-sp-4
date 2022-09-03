import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-header" style={{ display: "inline-block" }}>
        <h2>Product Dashboard</h2>
      </div>
      <div style={{ display: "inline-block" }} className="add-product">
        {/* Link the button to the /add route, when the user clicks on the button */}
        <button data-cy="add-product-navbar-button" className="button-5">
          Add Product
        </button>
      </div>
    </div>
  );
};

export default Navbar;
