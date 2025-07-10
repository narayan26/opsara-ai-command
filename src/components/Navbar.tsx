
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-background/80 backdrop-blur-md sticky top-0 z-50 py-4 px-6 md:px-8 lg:px-12 border-b border-border">
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-opsynth-600 flex items-center justify-center">
                <Terminal className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold">
                <span className="text-accent">OpSynth</span>
                <span className="text-primary"> AI</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#features" className="text-foreground/80 hover:text-foreground transition-colors font-medium">Features</a>
            <a href="/#use-cases" className="text-foreground/80 hover:text-foreground transition-colors font-medium">Use Cases</a>
            <a href="/#workflow" className="text-foreground/80 hover:text-foreground transition-colors font-medium">How It Works</a>
            <Link to="/app" className="text-foreground/80 hover:text-foreground transition-colors font-medium">Demo</Link>
            <Link to="/careers" className="text-foreground/80 hover:text-foreground transition-colors font-medium">Careers</Link>
            <Button size="sm" variant="outline" className="ml-4 border-opsynth-600 text-opsynth-400 hover:bg-opsynth-600/10">
              Documentation
            </Button>
            <Button size="sm" className="bg-opsynth-600 hover:bg-opsynth-700 text-white">
              <a href="https://forms.gle/KenQoq3VwLtZhSxk7" target="_blank" rel="noopener noreferrer">
                Join Interest List
              </a>
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
          <div className="md:hidden mt-4 py-4 space-y-4 flex flex-col border-t border-border">
            <a href="/#features" className="text-foreground/80 hover:text-foreground transition-colors py-2 font-medium">Features</a>
            <a href="/#use-cases" className="text-foreground/80 hover:text-foreground transition-colors py-2 font-medium">Use Cases</a>
            <a href="/#workflow" className="text-foreground/80 hover:text-foreground transition-colors py-2 font-medium">How It Works</a>
            <Link to="/app" className="text-foreground/80 hover:text-foreground transition-colors py-2 font-medium">Demo</Link>
            <Link to="/careers" className="text-foreground/80 hover:text-foreground transition-colors py-2 font-medium">Careers</Link>
            <Button variant="outline" className="w-full justify-start border-opsynth-600 text-opsynth-400 hover:bg-opsynth-600/10">
              Documentation
            </Button>
            <Button className="w-full justify-start bg-opsynth-600 hover:bg-opsynth-700 text-white">
              <a href="https://forms.gle/KenQoq3VwLtZhSxk7" target="_blank" rel="noopener noreferrer">
                Join Interest List
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
