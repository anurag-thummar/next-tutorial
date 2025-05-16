// src/app/products/page.tsx
import Link from 'next/link';
import pool from '@/lib/db';
import { Product } from '@/types';

export default async function ProductsPage() {
  let products: Product[] = [];

  try {
    const { rows } = await pool.query<Product>(
      'SELECT * FROM products ORDER BY id'
    );
    products = rows;
  } catch (err: any) {
    return (
      <main style={{ padding: 20 }}>
        <h1>Products</h1>
        <pre style={{ color: 'crimson' }}>
          🔴 DB error: {err.message}
        </pre>
      </main>
    );
  }

  return (
        <main className="products-container">
      <div className="products-header">
        <h1>Products</h1>
        <Link href="/products/new">+ Add Product</Link>
      </div>

      {products.length === 0 ? (
        <p>No products yet.</p>
      ) : (
        <ul className="product-list">
          {products.map((p) => (
            <li key={p.id} className="product-item">
              <Link href={`/products/${p.id}`}>{p.name}</Link>
              {/* <span>₹{p.price.toFixed(2)}</span> */}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
