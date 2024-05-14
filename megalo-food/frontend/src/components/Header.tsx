import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import Logo from "../assets/logo.png";

const Header = () => {
  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <div className="border-b-2 border-b-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center" onClick={handleLogoClick}>
          <img src={Logo} alt="Logo" className="w-12 h-12 mr-2 opacity-90 cursor-pointer" />
          <Link
            to="/"
            className="text-4xl font-extrabold tracking-tight text-black opacity-90 font-raleway"
          >
            MegaloFood
          </Link>
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
