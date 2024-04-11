import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-10">
        <h1 className="text-5xl font-bold tracking-tight text-red-600 font-raleway">
          Pesca tu comida favorita hoy
        </h1>
        <span className="text-xl font-raleway">
          Comida a solo un click de distancia
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} alt="" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter font-raleway">
            Pide tu comida aún mas rápido!
          </span>
          <span className="font-raleway">
            Descarga MegaloFood para pescar mas rápido!
          </span>
          <img src={appDownloadImage} alt="Imagen de descarga de aplicación" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
