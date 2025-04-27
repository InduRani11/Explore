import React from "react";
import { useParams } from "react-router";

export default function Product() {
  const params = useParams();
  console.log(params);
  const { productId } = params;

  const {
    name = "Not Found",
    price = 0,
    description = "",
    review = [],
  } = fullData[productId] ?? {};
  return (
    <div>
      Name: {name} <br />
      Price: {price} <br />
      Description: {description} <br />
    </div>
  );
}

const fullData = {
  product1: {
    name: "IPhone 99XRCB",
    price: 100,
    description: "This is product 1",
    review: [
      {
        name: "John Doe",
        rating: 5,
        comment: "This is a great product",
      },
      {
        name: "Jane Doe",
        rating: 4,
        comment: "This is a good product",
      },
    ],
  },
  product2: {
    name: "Samsung Galaxy S64 Hyper 4D",
    price: 200,
    description: "This is product 2",
    review: [
      {
        name: "John Doe",
        rating: 5,
        comment: "This is a great product",
      },
      {
        name: "Jane Doe",
        rating: 4,
        comment: "This is a good product",
      },
    ],
  },
  product3: {
    productId:20,
    name: "KOrean Jeans",
    price: 300,
    description: "This is product 3",
    review: [
      {
        name: "John Doe",
        rating: 5,
        comment: "This is a great product",
      },
      {
        name: "Jane Doe",
        rating: 4,
        comment: "This is a good product",
      },
    ],
  },
};

export function ProductReview() {
    const params = useParams();
  console.log(params);
  const { productId, reviewId } = params;
    // const { productId, reviewId } = useParams();
    const {
        review = [],
      } = fullData[productId] ?? {};
  return (
    <div>
      {JSON.stringify(review[reviewId]) ?? "Not Found"} <br />
    </div>
  )
}