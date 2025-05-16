"use client";

export default function DeleteUser(props) {
  const userId = props.id;

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/globalusers/${userId}`,
        { method: "DELETE" }
      );
      const result = await response.json();

      if (response.ok) {
        alert("User deleted successfully");
      } else {
        alert(`Failed to delete user: ${result.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("An error occurred while deleting the user.");
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
}
