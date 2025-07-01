import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Cloud, Shield, Zap } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const HeroSection = () => {
  return (
    <section className="py-12 md:py-20 px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              The AI Control Plane
              <span className="block gradient-text">for Hybrid Cloud</span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-300">
              OpSynth normalizes VMware, Nutanix, HPE, Dell, Kubernetes, and bare metal infrastructure into a unified AI-powered management layer. Control complex operations through natural language while maintaining enterprise security and compliance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Alert className="bg-gradient-to-r from-[#9b87f5]/20 to-[#9b87f5]/5 border border-[#9b87f5]/30 shadow-lg">
                <Server className="h-5 w-5 text-[#9b87f5]" />
                <AlertTitle className="text-[#9b87f5] ml-2">Unified Control</AlertTitle>
                <AlertDescription className="ml-2 text-neutral-300">
                  Single interface across VMware, Nutanix, HPE, Dell platforms
                </AlertDescription>
              </Alert>
              
              <Alert className="bg-gradient-to-r from-[#45a6ff]/20 to-[#45a6ff]/5 border border-[#45a6ff]/30 shadow-lg">
                <Cloud className="h-5 w-5 text-[#45a6ff]" />
                <AlertTitle className="text-[#45a6ff] ml-2">Multi-Tenant</AlertTitle>
                <AlertDescription className="ml-2 text-neutral-300">
                  Secure credential isolation and enterprise RBAC
                </AlertDescription>
              </Alert>
              
              <Alert className="bg-gradient-to-r from-[#ff7645]/20 to-[#ff7645]/5 border border-[#ff7645]/30 shadow-lg">
                <Zap className="h-5 w-5 text-[#ff7645]" />
                <AlertTitle className="text-[#ff7645] ml-2">Intent-Based</AlertTitle>
                <AlertDescription className="ml-2 text-neutral-300">
                  Natural language commands for complex operations
                </AlertDescription>
              </Alert>
              
              <Alert className="bg-gradient-to-r from-[#45ffa1]/20 to-[#45ffa1]/5 border border-[#45ffa1]/30 shadow-lg">
                <Shield className="h-5 w-5 text-[#45ffa1]" />
                <AlertTitle className="text-[#45ffa1] ml-2">Enterprise Ready</AlertTitle>
                <AlertDescription className="ml-2 text-neutral-300">
                  Audit logging, SSO integration, and compliance controls
                </AlertDescription>
              </Alert>
            </div>
            
            <div className="flex mt-2">
              <Button className="bg-opsynth-600 hover:bg-opsynth-700 text-white px-6 py-6 text-lg w-full sm:w-auto">
                <a href="https://forms.gle/KenQoq3VwLtZhSxk7" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  Join Interest List <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
            </div>
            
            <div className="pt-3">
              <p className="text-sm text-neutral-400">
                Trusted by enterprise infrastructure teams worldwide
              </p>
              <div className="flex flex-wrap gap-8 mt-3 opacity-70">
                <div className="h-8 w-auto text-neutral-400">Fortune 500 Financial Services</div>
                <div className="h-8 w-auto text-neutral-400">Global Manufacturing Leader</div>
                <div className="h-8 w-auto text-neutral-400">Healthcare Infrastructure Provider</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent1-500/10 to-opsynth-500/10 rounded-2xl blur-3xl -z-10"></div>
            <div className="bg-neutral-900 rounded-xl shadow-xl border border-neutral-800 overflow-hidden">
              {/* Header */}
              <div className="bg-neutral-800 px-4 py-3 border-b border-neutral-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-sm text-neutral-300 font-medium">OpSynth Control Plane</span>
                  </div>
                  <div className="text-xs text-neutral-400">vCenter Operations</div>
                </div>
              </div>

              {/* Control Interface */}
              <div className="p-4 space-y-4">
                {/* Command Input */}
                <div className="bg-neutral-800 rounded-lg p-3 border border-neutral-700">
                  <div className="text-opsynth-400 text-sm mb-2">Natural Language Command:</div>
                  <div className="text-white font-mono text-sm typing-animation">
                    "Create a SQL Server DB loan-db-008 instance based on the latest gold image, give it same high performance storage as loan-db-007, and ensure that only app-server-45 and app-server-46 have secure connectivity to the new VM"
                  </div>
                </div>

                {/* Execution Plan */}
                <div className="space-y-3">
                  <div className="text-accent1-400 text-sm font-medium">Execution Plan Generated:</div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-neutral-800/50 p-2 rounded border-l-4 border-green-500">
                      <span className="text-white text-sm">1. Validate gold image availability</span>
                      <span className="text-green-400 text-xs">✓ Complete</span>
                    </div>
                    <div className="flex items-center justify-between bg-neutral-800/50 p-2 rounded border-l-4 border-blue-500">
                      <span className="text-white text-sm">2. Clone storage profile from loan-db-007</span>
                      <span className="text-blue-400 text-xs">In Progress</span>
                    </div>
                    <div className="flex items-center justify-between bg-neutral-800/50 p-2 rounded border-l-4 border-neutral-600">
                      <span className="text-neutral-400 text-sm">3. Configure network security groups</span>
                      <span className="text-neutral-500 text-xs">Pending</span>
                    </div>
                  </div>
                </div>

                {/* Live Status */}
                <div className="bg-gradient-to-r from-opsynth-900/50 to-accent1-900/30 p-3 rounded-lg border border-accent1-800/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-accent1-300 text-sm font-medium">VM Deployment Status</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-green-400 text-xs">Active</span>
                    </div>
                  </div>
                  <div className="space-y-1 text-xs text-neutral-300">
                    <div>• SQL Server template: Windows 2022 + SQL 2022 Enterprise</div>
                    <div>• Storage: 2TB NVMe SSD provisioned (matching loan-db-007)</div>
                    <div>• Network: Isolated VLAN with firewall rules configured</div>
                  </div>
                </div>

                {/* Resource Overview */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-neutral-800/50 p-3 rounded-lg">
                    <div className="text-opsynth-400 text-xs mb-1">Cluster CPU</div>
                    <div className="text-white text-sm font-mono">67% utilized</div>
                    <div className="w-full bg-neutral-700 rounded-full h-1.5 mt-1">
                      <div className="bg-opsynth-500 h-1.5 rounded-full" style={{width: '67%'}}></div>
                    </div>
                  </div>
                  <div className="bg-neutral-800/50 p-3 rounded-lg">
                    <div className="text-accent1-400 text-xs mb-1">Memory</div>
                    <div className="text-white text-sm font-mono">82% utilized</div>
                    <div className="w-full bg-neutral-700 rounded-full h-1.5 mt-1">
                      <div className="bg-accent1-500 h-1.5 rounded-full" style={{width: '82%'}}></div>
                    </div>
                  </div>
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
