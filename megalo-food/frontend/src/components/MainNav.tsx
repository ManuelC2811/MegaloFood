import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        <span className="flex space-x-2 items-center">
            {isAuthenticated ? ( 
            <UsernameMenu /> 
            ) : (
                <Button variant="ghost" className="bg-red-500 text-white font-bold hover:text-red-500 hover:bg-white rounded-full border border-red-500 px-4 py-2" onClick={async () => await loginWithRedirect()}>
                    Iniciar Sesion
                </Button>
            )}
        </span>
    )
}

export default MainNav;