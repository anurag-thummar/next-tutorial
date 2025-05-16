'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import "../../../globals.css"

export default function UpdateUser() {
  const [user, setUser] = useState({ name: '', age: '', email: '' });
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`http://localhost:3000/api/globalusers/${params.id}`);
      const data = await res.json();
      setUser({ name: data.name, age: data.age, email: data.email });
    };
    fetchUser();
  }, [params.id]);

  const handleUpdate = async () => {
    const res = await fetch(`http://localhost:3000/api/globalusers/${params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const result = await res.json();
    if (result.success) {
      alert('User updated successfully');
      router.push('/getapiusers');
    } else {
      alert('Failed to update user');
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <input
        type="text"
        value={user.name}
        placeholder="Name"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="text"
        value={user.age}
        placeholder="Age"
        onChange={(e) => setUser({ ...user, age: e.target.value })}
      />
      <input
        type="email"
        value={user.email}
        placeholder="Email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}




