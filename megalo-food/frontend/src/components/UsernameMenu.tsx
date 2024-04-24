import { useAuth0 } from "@auth0/auth0-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const UsernameMenu = () => {
    const { user, logout } = useAuth0();

    const handleLogout = async () => {
        await logout();
        window.location.assign(window.location.origin);
    };

    return(
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-blue-500 gap-2">
                <CircleUserRound className="text-blue-500" />
                {user?.email}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link to="/manage-restaurant" className="font-bold hover:text-blue-500">
                        Manejo de Restaurante
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to="/user-profile" className="font-bold hover:text-blue-500">
                        Perfil
                    </Link>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem>
                    <Button onClick={handleLogout} className="flex flex-1 font-bold bg-blue-500">
                        Cerrar Sesión
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};

export default UsernameMenu;