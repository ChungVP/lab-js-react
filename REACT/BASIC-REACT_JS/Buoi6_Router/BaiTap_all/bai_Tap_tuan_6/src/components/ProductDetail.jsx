import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div>
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
      <button onClick={handleCheckout}>Mua hàng</button>
    </div>
  );
}

export default ProductDetail;
