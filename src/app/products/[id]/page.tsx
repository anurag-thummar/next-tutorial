// src/app/products/[id]/page.tsx
import Link from 'next/link';
import pool from '@/lib/db';
import { Product } from '@/types';
import DeleteButton from '@/components/DeleteButton';

interface Params { params: { id: string } }

export default async function ProductPage({ params: { id } }: Params) {
  let product: Product | null = null;

  try {
    const { rows } = await pool.query<Product>(
      'SELECT * FROM products WHERE id = $1',
      [id]
    );
    if (rows.length === 0) throw new Error('Not found');
    product = rows[0];
  } catch (err: any) {
    return (
      <main style={{ padding: 20 }}>
        <h1>Product Detail</h1>
        <pre style={{ color: 'crimson' }}>
          🔴 {err.message}
        </pre>
      </main>
    );
  }

  return (
      <main className="product-detail products-container">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* <p><strong>₹{product.price.toFixed(2)}</strong></p> */}
      <div className="actions">
        <Link href={`/products/${id}/edit`}>Edit</Link>
        <DeleteButton id={product.id} />
      </div>
    </main>
  );
}
