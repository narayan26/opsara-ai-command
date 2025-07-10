
import { Twitter, Linkedin, Github, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 py-16 px-6 md:px-8 lg:px-12 border-t border-neutral-800">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold text-primary mb-4">
              <span className="text-accent">OpSynth</span> AI
            </div>
            <p className="text-neutral-400 mb-6 max-w-md leading-relaxed">
              AI Control Plane for Hybrid Cloud. Reduce operational complexity and accelerate infrastructure management with natural language automation.
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
            <h4 className="font-semibold text-lg mb-6 text-white">Platform</h4>
            <ul className="space-y-3">
              <li><a href="/#features" className="text-neutral-400 hover:text-opsynth-400 transition-colors">Features</a></li>
              <li><Link to="/use-cases" className="text-neutral-400 hover:text-opsynth-400 transition-colors">Use Cases</Link></li>
              <li><a href="/#workflow" className="text-neutral-400 hover:text-opsynth-400 transition-colors">How It Works</a></li>
              <li><Link to="/app" className="text-neutral-400 hover:text-opsynth-400 transition-colors">Demo</Link></li>
              <li><Link to="/pricing" className="text-neutral-400 hover:text-opsynth-400 transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Solutions</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-opsynth-400 transition-colors">VMware Environments</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-opsynth-400 transition-colors">Kubernetes</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-opsynth-400 transition-colors">Nutanix</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-opsynth-400 transition-colors">Multi-Cloud</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-opsynth-400 transition-colors">Hybrid Infrastructure</a></li>
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-opsynth-400 transition-colors">About</a></li>
              <li><Link to="/careers" className="text-neutral-400 hover:text-opsynth-400 transition-colors">Careers</Link></li>
              <li><a href="#" className="text-neutral-400 hover:text-opsynth-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-opsynth-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-opsynth-400 transition-colors">Contact</a></li>
            </ul>
            
            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-neutral-400">
                <Mail size={16} />
                <span className="text-sm">hello@opsynth.ai</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-400">
                <MapPin size={16} />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-neutral-500 text-sm">
                &copy; {new Date().getFullYear()} OpSynth AI, Inc. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-neutral-500 text-sm">
                <span>•</span>
                <span>SOC2 Ready</span>
                <span>•</span>
                <span>HIPAA Compliant</span>
                <span>•</span>
                <span>FedRAMP Ready</span>
              </div>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-neutral-500 hover:text-opsynth-400 text-sm">Terms</a>
              <a href="#" className="text-neutral-500 hover:text-opsynth-400 text-sm">Privacy</a>
              <a href="#" className="text-neutral-500 hover:text-opsynth-400 text-sm">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
