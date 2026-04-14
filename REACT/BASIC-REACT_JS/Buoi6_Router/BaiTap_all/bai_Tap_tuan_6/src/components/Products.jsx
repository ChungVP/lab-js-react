import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div>
      <h2>Products</h2>
      <nav>
        <ul>
          <li>
            <Link to="/products/1">Iphone</Link>
          </li>
          <li>
            <Link to="/products/2">Samsung</Link>
          </li>
          <li>
            <Link to="/products/3">Laptop</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Products;
