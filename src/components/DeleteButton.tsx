'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DeleteButton({ id }: { id: number }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onDelete() {
    if (!confirm('Really delete?')) return;
    setLoading(true);
    const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
    if (res.ok) router.push('/products');
    else {
      alert('Delete failed');
      setLoading(false);
    }
  }

  return (
    <button onClick={onDelete} disabled={loading}>
      {loading ? 'Deleting…' : 'Delete'}
    </button>
  );
}
