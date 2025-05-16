"use client";

export default function Product({ price }) {
  return (
    <div>
      <button onClick={() => alert(price)}>Check Price</button>
    </div>
  );
}
