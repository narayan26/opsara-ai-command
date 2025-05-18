
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Terminal, LifeBuoy, Bell, AlertCircle, CheckCircle } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-opsynth-900/50 text-opsynth-300 text-sm font-medium border border-opsynth-700/50">
              <span className="flex h-2 w-2 rounded-full bg-opsynth-500 mr-2"></span>
              SRE Assistant
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              AI-powered
              <span className="block gradient-text">SRE Assistant</span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-300">
              OpSynth helps SRE teams reduce toil, improve SLAs, and scale operations by automating incident management, alert correlation, and service reviews.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Alert className="bg-gradient-to-r from-[#9b87f5]/20 to-[#9b87f5]/5 border border-[#9b87f5]/30 shadow-lg">
                <LifeBuoy className="h-5 w-5 text-[#9b87f5]" />
                <AlertTitle className="text-[#9b87f5] ml-2">24/7 Coverage</AlertTitle>
                <AlertDescription className="ml-2 text-neutral-300">
                  Scale your SRE team with a digital agent that never sleeps.
                </AlertDescription>
              </Alert>
              
              <Alert className="bg-gradient-to-r from-[#45a6ff]/20 to-[#45a6ff]/5 border border-[#45a6ff]/30 shadow-lg">
                <Bell className="h-5 w-5 text-[#45a6ff]" />
                <AlertTitle className="text-[#45a6ff] ml-2">Alert Correlation</AlertTitle>
                <AlertDescription className="ml-2 text-neutral-300">
                  Reduce noise and identify root causes faster.
                </AlertDescription>
              </Alert>
              
              <Alert className="bg-gradient-to-r from-[#ff7645]/20 to-[#ff7645]/5 border border-[#ff7645]/30 shadow-lg">
                <AlertCircle className="h-5 w-5 text-[#ff7645]" />
                <AlertTitle className="text-[#ff7645] ml-2">Incident Management</AlertTitle>
                <AlertDescription className="ml-2 text-neutral-300">
                  Automate triage and coordinate response.
                </AlertDescription>
              </Alert>
              
              <Alert className="bg-gradient-to-r from-[#45ffa1]/20 to-[#45ffa1]/5 border border-[#45ffa1]/30 shadow-lg">
                <CheckCircle className="h-5 w-5 text-[#45ffa1]" />
                <AlertTitle className="text-[#45ffa1] ml-2">Service Reviews</AlertTitle>
                <AlertDescription className="ml-2 text-neutral-300">
                  Daily and monthly insights to improve reliability.
                </AlertDescription>
              </Alert>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-opsynth-600 hover:bg-opsynth-700 text-white px-6 py-6 text-lg">
                <a href="https://forms.gle/KenQoq3VwLtZhSxk7" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Join Interest List <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
              <Button variant="outline" className="px-6 py-6 text-lg border-neutral-700 hover:bg-neutral-800">
                View Demo
              </Button>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-neutral-400">
                Trusted by SREs at forward-thinking companies
              </p>
              <div className="flex flex-wrap gap-8 mt-4 opacity-70">
                <div className="h-8 w-auto text-neutral-400">Fortune 500 Tech</div>
                <div className="h-8 w-auto text-neutral-400">Global Financial Institution</div>
                <div className="h-8 w-auto text-neutral-400">Leading GPU Provider</div>
                <div className="h-8 w-auto text-neutral-400">Top Cloud Service Provider</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent1-500/10 to-opsynth-500/10 rounded-2xl blur-3xl -z-10"></div>
            <div className="terminal-window">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs text-neutral-400">opsynth-assistant</span>
              </div>

              <div className="space-y-4">
                <div className="text-white font-mono text-sm">
                  <span className="text-opsynth-400">alert:</span> High GPU memory utilization detected on cluster gpu-prod-04
                </div>
                <div className="text-white font-mono text-sm">
                  <span className="text-accent1-400">opsynth &gt;</span> Summarizing alert pattern...
                </div>
                <div className="bg-neutral-900 p-3 rounded border border-neutral-800">
                  <div className="text-white font-mono text-sm typing-animation">
                    SUMMARY: 3 related incidents detected in the last 24h. Memory leak likely in container tensorflow-serving-7f8d9c. Similar issue occurred last week (INC-7823) and was resolved by restarting affected pods.
                  </div>
                </div>
                <div className="text-white font-mono text-sm">
                  <span className="text-accent1-400">opsynth &gt;</span> Recommended action?
                </div>
                <div className="text-white font-mono text-sm cursor-blink">
                  Rolling restart of tensorflow-serving pods with memory limits increased to 24GB. Issue tracking PR #4372 will provide permanent fix in next release.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
