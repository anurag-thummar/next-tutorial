// src/app/products/new/page.tsx
import ProductForm from '@/components/ProductForm';

export default function NewProductPage() {
  return (
    <main className="products-container">
      <h1>New Product</h1>
      <ProductForm />
    </main>
  );
}
