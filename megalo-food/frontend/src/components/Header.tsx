import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-4xl font-extrabold tracking-tight text-black opacity-90 font-raleway"
        >
          MegaloFood
        </Link>
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
