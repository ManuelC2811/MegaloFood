const Footer = () => {
  return (
    <div className="bg-green-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          MegaloFood
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <span>Politica de Privacidad</span>
          <span>Terminos de nuestro Servicio</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
