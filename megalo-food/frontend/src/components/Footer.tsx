const Footer = () => {
  return (
    <div className="bg-red-500 opacity-95 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold font-raleway tracking-tight">
          MegaloFood
        </span>
        <span className="text-white font-bold font-raleway tracking-tight flex gap-4">
          <span>Política de Privacidad</span>
          <span>Términos de nuestro Servicio</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
