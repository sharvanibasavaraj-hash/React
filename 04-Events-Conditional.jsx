import { useState } from "react";

function LoginApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Login System</h1>

      {isLoggedIn ? (
        <h2>Welcome! You are logged in.</h2>
      ) : (
        <h2>Please login to continue.</h2>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default LoginApp;