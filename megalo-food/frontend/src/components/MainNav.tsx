import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
  return (
    <Button
      variant="ghost"
      className="bg-orange-500 text-white rounded-full px-6 py-5"
    >
      Iniciar sesión
    </Button>
  );
};
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        <span className="flex space-x-2 items-center">
            {isAuthenticated ? ( 
            <UsernameMenu /> 
            ) : (
                <Button variant="ghost" className="font-bold hover:text-orange-500 hover:bg-white" onClick={async () => await loginWithRedirect()}>
                    Iniciar Sesión
                </Button>
            )}
        </span>
    )
}

export default MainNav;
