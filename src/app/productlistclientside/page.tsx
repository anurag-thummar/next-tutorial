"use client";
import React, { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {products.map((product, index) => (
        <div key={product.id}>
          <h4>
            <span>{index + 1}) </span>
            {product.title}, ${product.price}
          </h4>
        </div>
      ))}
    </>
  );
};

export default ProductList;
