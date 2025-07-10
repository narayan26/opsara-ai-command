
import { MessageCircle, Cog, Play, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Ask",
    description: "Describe what you need in plain English"
  },
  {
    icon: <Cog className="h-6 w-6" />,
    title: "Generate",
    description: "AI creates scripts and validates syntax"
  },
  {
    icon: <Play className="h-6 w-6" />,
    title: "Execute",
    description: "Run operations with safety checks"
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Monitor",
    description: "Track results and audit all actions"
  }
];

const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-20 md:py-28 px-6 md:px-8 lg:px-12">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            How OpSynth Works
          </h2>
          <p className="text-xl text-neutral-300 leading-relaxed">
            From natural language to infrastructure action in seconds, with full audit trails and safety validation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-opsynth-600/10 border-2 border-opsynth-600/30 rounded-full flex items-center justify-center mx-auto group-hover:bg-opsynth-600/20 group-hover:border-opsynth-600/50 transition-all duration-300">
                  <div className="text-opsynth-400 group-hover:text-opsynth-300 transition-colors">
                    {step.icon}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-opsynth-600/30 to-transparent -translate-x-8"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-opsynth-300 transition-colors">
                {step.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
