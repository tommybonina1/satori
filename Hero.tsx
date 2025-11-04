import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="flex items-center justify-center pt-24 pb-8 px-6">
      <div className="container mx-auto text-center">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <img 
            src={logo} 
            alt="Company Logo" 
            className="h-56 md:h-72 w-auto mx-auto mb-6"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
