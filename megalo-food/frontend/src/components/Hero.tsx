//import hero from "../assets/hero.jpg";
import hero1 from "../assets/hero1.jpg";
const Hero = () => {
  return (
    <div className="relative w-full flex justify-center">
      <img
        src={hero1}
        className="w-full object-cover max-h-[550px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[550px]"
        alt=""
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </div>
  );
};
export default Hero;
4;
3;
