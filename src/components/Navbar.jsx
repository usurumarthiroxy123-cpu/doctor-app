import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <header>
      <div>Doctor App</div>

      <div>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/add-doctor")}>Add doctor</button>

        {/* Login / Logout toggle */}
        {!user ? (
          <button onClick={() => navigate("/login")}>
            Click to login
          </button>
        ) : (
          <button
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/login");
            }}
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
}

export default Navbar;