import React from "react";
import { useParams } from "react-router";
import { productsData } from "../constants/index";
// import { useCart } from "../contexts/CartContext";
// import productsData from "../constants";

export default function Product() {

  return (
    <div>
      <div className=" bg-slate-100 font-black p-9 rounded-2xl shadow ">

      </div>
      <button
        // onClick={() => addToCart(productData.product_id)}
        className="bg-[#FF9900] p-2 rounded-2xl shadow m-4"
      >
        Add To Cart
      </button>
    </div>
  );
}