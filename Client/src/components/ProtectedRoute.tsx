import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  component: React.ReactElement;
}

const ProtectedRoute = ({ component }:ProtectedRouteProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/sign-in");
    }
  }, []);
  return <>{component}</>;
};

export default ProtectedRoute;
