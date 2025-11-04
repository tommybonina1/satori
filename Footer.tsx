const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6 mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center mb-8">
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-primary-foreground/80">
              donovantylert@gmail.com<br />
              tommybonina@gmail.com<br />
              (571) 888-6128
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Satori Mentors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
