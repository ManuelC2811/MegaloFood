import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

import { useGetMyUser} from "@/api/MyUserApi";


const UsernameMenu = () => {
  const { user, logout } = useAuth0();
  useGetMyUser();
  const handleLogout = async () => {
    await logout();
    window.location.assign(window.location.origin);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold font-raleway hover:text-red-500 opacity-90 gap-2">
        <CircleUserRound className="text-red-500 opacity-90" />
        {user?.email}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link
            to="/manage-restaurant"
            className="font-bold font-raleway hover:text-red-500 opacity-90"
          >
            Manejo de Restaurante
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            to="/user-profile"
            className="font-bold font-raleway hover:text-red-500"
          >
            Perfil
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Button
            onClick={handleLogout}
            className="flex flex-1 font-bold font-raleway bg-red-500"
          >
            Cerrar Sesión
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
