import logo from "@/assets/logo.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Company Logo" 
            className="h-16 w-auto transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
