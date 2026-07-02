function ProtectedRoute({ islogin, children }) {
  if (islogin) {
    return children;
  }

  return <div>Please login first</div>;
}

export default ProtectedRoute;