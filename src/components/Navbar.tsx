
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-background/80 backdrop-blur-md sticky top-0 z-50 py-4 px-6 md:px-8 lg:px-12 border-b border-border">
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              <span className="text-accent">OpSynth</span> AI
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">Features</a>
            <a href="#use-cases" className="text-foreground/80 hover:text-foreground transition-colors">Use Cases</a>
            <a href="#workflow" className="text-foreground/80 hover:text-foreground transition-colors">How It Works</a>
            <Button size="sm" variant="outline" className="ml-2">
              Documentation
            </Button>
            <Button size="sm" className="bg-opsynth-600 hover:bg-opsynth-700">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 flex flex-col">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors py-2">Features</a>
            <a href="#use-cases" className="text-foreground/80 hover:text-foreground transition-colors py-2">Use Cases</a>
            <a href="#workflow" className="text-foreground/80 hover:text-foreground transition-colors py-2">How It Works</a>
            <Button variant="outline" className="w-full justify-start">
              Documentation
            </Button>
            <Button className="w-full justify-start bg-opsynth-600 hover:bg-opsynth-700">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
