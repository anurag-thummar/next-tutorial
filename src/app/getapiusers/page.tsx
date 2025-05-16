// 'use client'
import Link from "next/link";
import DeleteUser from "../utils/DeleteUser";

// Fetch user list from API
async function getUsers() {
  const res = await fetch("http://127.0.0.1:3000/api/globalusers", {
    cache: "no-store", // optional: disables ISR caching in Next.js
  });
  const users = await res.json();
  return users;
}

export default async function GetGlobalUser() {
  const users = await getUsers();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Global Users</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        users.map((user: any) => (
          <div
            key={user.id}
            style={{
              marginBottom: "12px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link href={`/users/${user.id}`}>
              <strong>{user.name}</strong>
            </Link>
            <Link href={`/getapiusers/${user.id}/update`}>
              <button style={{ padding: "6px 10px" }}>Edit</button>
            </Link>
            <DeleteUser id={user.id}/>
          </div>
        ))
      )}
    </div>
  );
}



















