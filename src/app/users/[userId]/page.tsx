import getUsers from "../../../../services/getUsers";

export default async function Page(props) {
  const users = await getUsers();
  const currentId = parseInt(props.params.userId); // Ensure it's a number
  const userData = users[currentId - 1]; // assuming user IDs are sequential and 1-indexed

  if (!userData) {
    return <div>User not found</div>;
  }

  console.log(userData);

  return (
    <div>
      <h3>User Detail Page</h3>
      <h4>Id: {userData.id}</h4>
      <h4>Name: {userData.name}</h4>
      <h4>Website: {userData.website}</h4>
    </div>
  );
}

export async function generateStaticParams() {
  const users = await getUsers();

  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
