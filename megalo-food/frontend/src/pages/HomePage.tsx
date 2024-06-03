import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faCheckCircle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import landingImage from "../assets/landing.png";
import aboutUsImage from "../assets/AcercaDe.png";
import appDownloadImage from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-10"></div>
      <div id="about-us" className="grid md:grid-cols-2 ml-20 mr-20">
        <div className="flex flex-col items-start justify-center gap-4">
          <h2 className="text-4xl font-bold font-raleway">
            Acerca de nosotros
          </h2>
          <p className="text-lg max-w-xl tracking-tighter font-raleway">
            Bienvenido a <strong>MegaloFood</strong>, tu destino culinario en
            línea para sabores auténticos y experiencias gastronómicas
            inolvidables. Nuestro objetivo es proporcionar a los restaurantes
            una herramienta intuitiva y eficaz para gestionar sus pedidos a
            domicilio, optimizando la comunicación con sus clientes y agilizando
            los procesos logísticos con sus propios equipos de reparto. Al mismo
            tiempo, buscamos brindar a los usuarios una experiencia fluida y
            segura al realizar sus pedidos desde la comodidad de sus hogares.
          </p>
        </div>
        <div className="text-right mt-4 md:mt-0">
          <img src={aboutUsImage} alt="Descripción de la imagen" />
        </div>
      </div>

      <div className="flex flex-col items-center mt-6">
        <h2 className="text-3xl font-bold font-raleway mb-8">
          ¿Quieres vender en MegaloFood?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 w-full md:px-20">
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md font-raleway bg-red-100">
            <FontAwesomeIcon
              icon={faClipboardList}
              size="2x"
              className="mb-2 text-red-500"
            />
            <h3 className="text-xl font-bold">Pasos</h3>
            <p className="text-left font-raleway mt-2">
              - Regístrate en nuestra plataforma.
              <br />
              - Completa tu perfil de restaurante.
              <br />
              - Verifica tu cuenta.
              <br />- ¡Empieza a recibir pedidos!
            </p>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md font-raleway bg-red-100">
            <FontAwesomeIcon
              icon={faCheckCircle}
              size="2x"
              className="mb-2 text-red-500"
            />
            <h3 className="text-xl font-bold">Requisitos</h3>
            <p className="text-left mt-2">
              - Licencia de operación válida.
              <br />
              - Menú digitalizado.
              <br />
              - Equipo de entrega propio.
              <br />- Cumplimiento con normas sanitarias.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-md font-raleway bg-red-100">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
              className="mb-2 text-red-500"
            />
            <h3 className="text-xl font-bold">Contacto</h3>
            <p className="text-left mt-2">
              - Email: contacto@megalofood.com
              <br />- Teléfono: +57 123 456 789
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5 mt-6">
        <img src={landingImage} alt="" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter font-raleway">
            <span>Pide tu comida aún</span>
            <span className="text-red-500"> más rápido!</span>
          </span>
          <span className="font-raleway font-semibold">
            Descarga MegaloFood para pescar más rápido!
          </span>
          <img src={appDownloadImage} alt="Imagen de descarga de aplicación" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
