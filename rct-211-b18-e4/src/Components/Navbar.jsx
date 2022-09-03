import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      // className="navbar-container"
      style={{ display: "flex", padding: "0 10px", position: "relative" }}
    >
      <div
        // className="navbar-header"
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          width: "100%",
          textAlign: "center",
          padding: "10px",
        }}
      >
        Product Dashboard
      </div>
      <div
        style={{ position: "absolute", right: "30px", top: "2px" }}
        // className="add-product"
      >
        {/* Link the button to the /add route, when the user clicks on the button */}
        <Link to="/add">
          <button data-cy="add-product-navbar-button" className="button-5">
            Add Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
