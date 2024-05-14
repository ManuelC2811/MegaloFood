import { Link, useNavigate } from "react-router-dom";

type Props = {
  total: number;
  city: string;
};

const SearchResultInfo = ({ total, city }: Props) => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate("/", { replace: true }); 
    window.location.reload();
  };

  return (
    <div className="text-xl font-bold font-raleway flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
      <span>
        {total} Restaurantes encontrados en {city}
        <Link
          to="/"
          className="ml-1 text-sm font-semibold underline cursor-pointer text-blue-500"
          onClick={handleClick}
        >
          Cambiar ubicación
        </Link>
      </span>
    </div>
  );
};

export default SearchResultInfo;