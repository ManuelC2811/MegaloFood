import hero1 from "../assets/hero1.jpg";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="relative">
      <img src={hero1} className="w-full max-h-[550px] object-cover" alt="" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="md:px-32  rounded-lg shadow-md py-8 flex flex-col gap-5 text-center relative z-10">
          <h1 className="text-5xl font-extrabold tracking-tight text-white font-raleway">
            Pesca tu comida favorita hoy
          </h1>
          <span className="text-xl font-raleway font-semibold text-white">
            Comida a solo un click de distancia
          </span>
          <SearchBar
            placeHolder="Buscar por ciudad o localidad"
            onSubmit={handleSearchSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
