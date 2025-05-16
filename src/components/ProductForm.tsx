// 'use client';
// import { useState, FormEvent } from 'react';
// import { useRouter } from 'next/navigation';
// import { Product } from '@/types';

// interface Props {
//   initialData?: Omit<Product, 'id' | 'created_at'>;
//   productId?: number;
// }

// export default function ProductForm({ initialData, productId }: Props) {
//   const [form, setForm] = useState({
//     name: initialData?.name || '',
//     description: initialData?.description || '',
//     price: initialData?.price.toString() || '',
//   });
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   async function handleSubmit(e: FormEvent) {
//     e.preventDefault();
//     setLoading(true);
//     const method = productId ? 'PUT' : 'POST';
//     const url = productId ? `/api/products/${productId}` : '/api/products';

//     const res = await fetch(url, {
//       method,
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         name: form.name,
//         description: form.description,
//         price: parseFloat(form.price),
//       }),
//     });

//     if (res.ok) router.push('/products');
//     else {
//       alert('Save failed');
//       setLoading(false);
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name<br/>
//         <input
//           value={form.name}
//           onChange={e => setForm({...form, name: e.target.value})}
//           required
//         />
//       </label>
//       <br/>
//       <label>
//         Description<br/>
//         <textarea
//           value={form.description}
//           onChange={e => setForm({...form, description: e.target.value})}
//         />
//       </label>
//       <br/>
//       <label>
//         Price<br/>
//         <input
//           type="number"
//           step="0.01"
//           value={form.price}
//           onChange={e => setForm({...form, price: e.target.value})}
//           required
//         />
//       </label>
//       <br/>
//       <button type="submit" disabled={loading}>
//         {loading ? 'Saving…' : 'Save'}
//       </button>
//     </form>
//   );
// }











// src/components/ProductForm.tsx
'use client';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '@/types';

interface Props {
  initialData?: Omit<Product, 'id' | 'created_at'>;
  productId?: number;
}

export default function ProductForm({ initialData, productId }: Props) {
  const [form, setForm] = useState({
    name: initialData?.name || '',
    description: initialData?.description || '',
    price: initialData?.price.toString() || '',
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    const method = productId ? 'PUT' : 'POST';
    const url = productId ? `/api/products/${productId}` : '/api/products';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        description: form.description,
        price: parseFloat(form.price),
      }),
    });

    if (res.ok) router.push('/products');
    else {
      alert('Save failed');
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
      <label>
        Name
        <input
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
        />
      </label>

      <label>
        Description
        <textarea
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />
      </label>

      <label>
        Price
        <input
          type="number"
          step="0.01"
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
          required
        />
      </label>

      <button type="submit" disabled={loading}>
        {loading ? 'Saving…' : 'Save'}
      </button>
    </form>
  );
}
