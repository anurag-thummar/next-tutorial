import React from "react";
import Product from "./product";

async function productlist() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
}

export default async function page() {
  const products = await productlist();
  return (
    <>
      <h1>Product list</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h3>Name: {product.title}</h3>
          <Product price={product.price} />
        </div>
      ))}
    </>
  );
}
