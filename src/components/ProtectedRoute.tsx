// components/ProtectedRoute.js
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  //   const isAuthenticated = useSelector(
  //     (state: any) => state.auth.isAuthenticated,
  //   );
  const isLoggedIn = useSelector((state: any) => state.quiz.isLoggedIn);

  // If authenticated, render child routes (Outlet); otherwise, redirect to login
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
