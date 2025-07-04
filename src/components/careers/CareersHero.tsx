
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap, Globe } from "lucide-react";

const CareersHero = () => {
  return (
    <section className="pt-24 pb-16 px-6 md:px-8 lg:px-12 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-opsynth-600/10 border border-opsynth-600/20 rounded-full px-4 py-2 mb-8">
            <Zap className="h-4 w-4 text-opsynth-400" />
            <span className="text-sm text-opsynth-300">We're Hiring</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
            Build the Future of
            <span className="block text-opsynth-400">Infrastructure Intelligence</span>
          </h1>
          
          <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
            Join OpSynth and help enterprise teams control, automate, and optimize their hybrid cloud infrastructure through the power of AI.
          </p>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-opsynth-600 hover:bg-opsynth-700 text-white font-medium px-8 py-3"
              onClick={() => document.getElementById('job-openings')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 rounded-xl bg-neutral-900/50 border border-neutral-800">
            <Users className="h-12 w-12 text-opsynth-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Founding Team Impact</h3>
            <p className="text-neutral-400">Shape product, architecture, and culture from the ground up as an early team member.</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-neutral-900/50 border border-neutral-800">
            <Zap className="h-12 w-12 text-opsynth-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cutting-Edge Tech</h3>
            <p className="text-neutral-400">Work with LLMs, infrastructure APIs, and the latest cloud-native technologies.</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-neutral-900/50 border border-neutral-800">
            <Globe className="h-12 w-12 text-opsynth-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Remote</h3>
            <p className="text-neutral-400">Join our distributed team and work from anywhere with flexible, hybrid options.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersHero;
