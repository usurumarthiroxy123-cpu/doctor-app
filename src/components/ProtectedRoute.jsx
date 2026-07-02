import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const islogin = localStorage.getItem("islogin") === "true";

  return islogin ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;