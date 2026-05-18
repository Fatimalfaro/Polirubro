import { Navigate, Outlet } from "react-router";
import { useAppContext } from "../../context/AppContext"

const ProtectorRutas = () => {
  const { usuario } = useAppContext();
  
  if (usuario !== "admin") {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectorRutas;
