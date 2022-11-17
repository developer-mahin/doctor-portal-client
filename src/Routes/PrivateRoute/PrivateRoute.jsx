import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import BigSpinner from "../../components/Spinner/BigSpinner/BigSpinner";
import { AuthContext } from "../../context/AuthContext/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="h-[500px] flex justify-center items-center text-3xl">
        <h2><BigSpinner></BigSpinner></h2>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
