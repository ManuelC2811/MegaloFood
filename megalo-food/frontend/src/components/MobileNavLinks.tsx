import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
    const { logout } = useAuth0();

    const handleLogout = async () => {
        await logout();
        window.location.assign(window.location.origin);
    };

    return(
        <>
            <Link to="/user-profile" className="flex bg-white items-center font-bold hover:text-blue-500">
                Perfil 
            </Link>
            <Button onClick={handleLogout} className="flex items-center px-3 font-bold hover:bg-gray-500">
                Cerrar Sesión
            </Button>
        </>
    )
}

export default MobileNavLinks;