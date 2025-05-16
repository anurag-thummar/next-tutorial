// src\app\getapiusers\[id]\page.tsx

async function getUser(id: string) {
  const res = await fetch(`http://127.0.0.1:3000/api/globalusers/${id}`);
  const user = await res.json();
  return user
}

export default async function GlobalUserPage({ params }: { params: { id: string } }) {
  const user = await getUser(params.id);

  return (
    <div>
      <h2>Global User Detail</h2>
      <p>ID: {user.id}</p>
      <p>Age: {user.age}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
