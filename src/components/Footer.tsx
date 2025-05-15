
import { Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 py-12 px-6 md:px-8 lg:px-12 border-t border-neutral-800">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-primary mb-4">
              <span className="text-accent">OpSynth</span> AI
            </div>
            <p className="text-neutral-300 mb-6 max-w-md">
              Synthesized Operations for AI Apps. Less chaos, more clarity during critical incidents.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-500 hover:text-opsynth-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-500 hover:text-opsynth-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-neutral-500 hover:text-opsynth-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-neutral-400 hover:text-opsynth-400 transition-colors">Features</a></li>
              <li><a href="#use-cases" className="text-neutral-400 hover:text-opsynth-400 transition-colors">Use Cases</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-opsynth-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-opsynth-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-opsynth-400 transition-colors">API</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-opsynth-400 transition-colors">About</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-opsynth-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-opsynth-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-opsynth-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} OpSynth AI, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-neutral-500 hover:text-opsynth-400 text-sm">Terms</a>
            <a href="#" className="text-neutral-500 hover:text-opsynth-400 text-sm">Privacy</a>
            <a href="#" className="text-neutral-500 hover:text-opsynth-400 text-sm">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
