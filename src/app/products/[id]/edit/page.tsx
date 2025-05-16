// src/app/products/[id]/edit/page.tsx
import ProductForm from '@/components/ProductForm';
import pool from '@/lib/db';
import { Product } from '@/types';

interface Params { params: { id: string } }

// Return only the fields needed for editing (exclude id and created_at)
async function fetchProduct(
  id: string
): Promise<Omit<Product, 'id' | 'created_at'>> {
  const { rows } = await pool.query<Product>(
    'SELECT id, name, description, price FROM products WHERE id = $1',
    [id]
  );
  if (rows.length === 0) throw new Error('Product not found');
  // Destructure and return only name, description, price
  const { name, description, price } = rows[0];
  return { name, description: description || '', price };
}

export default async function EditProductPage({ params: { id } }: Params) {
  let initData: Omit<Product, 'id' | 'created_at'>;

  try {
    initData = await fetchProduct(id);
  } catch (err: any) {
    return (
      <main style={{ padding: 20 }}>
        <h1>Edit Product</h1>
        <p style={{ color: 'crimson' }}>🔴 {err.message}</p>
      </main>
    );
  }

  return (
    <main className="products-container">
      <h1>Edit Product</h1>
      <ProductForm initialData={initData} productId={parseInt(id, 10)} />
    </main>
  );
}
