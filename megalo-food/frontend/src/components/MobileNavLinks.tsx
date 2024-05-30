import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();

  const handleLogout = async () => {
    await logout();
    window.location.assign(window.location.origin);
  };

  return (
    <>
      <Link
        to="/order-status"
        className="flex bg-white items-center font-semibold text-black font-raleway hover:text-gray-500"
      >
        Mis pedidos
      </Link>
      <Link
        to="/user-profile"
        className="flex bg-white items-center font-semibold text-black font-raleway hover:text-gray-500"
      >
        Perfil
      </Link>
      <Link
        to="/manage-restaurant"
        className="flex bg-white items-center font-semibold text-black font-raleway hover:text-gray-500"
      >
        Manejo de restaurante
      </Link>
      <Button
        onClick={handleLogout}
        className="flex items-center px-3 font-semibold font-raleway bg-red-500 opacity-90 hover:bg-white hover:text-red-500 border border-red-500"
      >
        Cerrar Sesión
      </Button>
    </>
  );
};

export default MobileNavLinks;
