import { useState } from "react";

function Conditional() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>My Website</h1>

      {isLoggedIn ? (
        <h2>Welcome back, User!</h2>
      ) : (
        <h2>Please log in.</h2>
      )}

      {isLoggedIn && <p>You can now access your dashboard.</p>}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Conditional;