import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleAboutClick = () => {
    const aboutUs = document.getElementById("about-us");
    if (aboutUs) {
      aboutUs.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <UsernameMenu />
      ) : (
        <div>
          <button
            className="font-semibold font-raleway px-4 py-2 text-2sm"
            onClick={handleAboutClick}
          >
            Acerca de nosotros
          </button>{" "}
          <Button
            variant="ghost"
            className="bg-red-500 opacity-90 text-white font-semibold font-raleway hover:text-red-500 hover:bg-white rounded-full border border-red-500 px-4 py-2"
            onClick={async () => await loginWithRedirect()}
          >
            Iniciar Sesión
          </Button>
        </div>
      )}
    </span>
  );
};

export default MainNav;
