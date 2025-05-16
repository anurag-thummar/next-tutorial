"use client";
import { useState } from "react";
import "../globals.css"; 

export default function Page() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:3000/api/globalusers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age, email }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("New user added successfully!");
    } else {
      alert("Failed to add user.");
    }

    console.log(data);
    return data;
  };

  return (
    <div className="add-user-container">
      <h2>Add User Page</h2>
      <input
        type="text"
        value={name}
        placeholder="Enter a name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={age}
        placeholder="Enter age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="email"
        value={email}
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Add user</button>
    </div>
  );
}
