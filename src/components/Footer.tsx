const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Bubba. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;