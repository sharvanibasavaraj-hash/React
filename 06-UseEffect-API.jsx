import { useState, useEffect } from "react";

function UserDirectory() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.log("Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading users...</h2>;
  }

  return (
    <div>
      <h1>User Directory</h1>

      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>City: {user.address.city}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default UserDirectory;