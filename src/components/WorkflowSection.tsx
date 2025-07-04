
import { Button } from "@/components/ui/button";
import { Bot, Cpu, Layers, MessageCircle, ArrowRight, Shield, Database, Settings, Code, BarChart3 } from "lucide-react";

const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-16 md:py-24 px-6 md:px-8 lg:px-12 bg-neutral-950/50">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How OpSynth Works</h2>
          <p className="text-lg text-neutral-300">
            OpSynth unifies control, automation, and optimization across your entire hybrid infrastructure through intelligent orchestration and natural language operations.
          </p>
        </div>

        <div className="space-y-24">
          {/* Step 1: Control */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-opsynth-900/50 text-opsynth-300 text-sm font-medium border border-opsynth-700/50">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-opsynth-600 text-white mr-2">1</span>
                  Control
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Unified Infrastructure Control</h3>
                <p className="text-lg text-neutral-300">
                  OpSynth connects to your entire hybrid infrastructure through secure, multi-tenant integrations that normalize day-to-day operations across all major platforms.
                </p>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-center">
                    <span className="text-opsynth-400 mr-2">✓</span>
                    <span>VMware vCenter: VM lifecycle, storage, networking operations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsynth-400 mr-2">✓</span>
                    <span>Nutanix Prism: Cluster management and resource allocation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsynth-400 mr-2">✓</span>
                    <span>HPE/Dell: Compute provisioning and maintenance workflows</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsynth-400 mr-2">✓</span>
                    <span>Bare Metal: Hardware management and OS deployment</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent1-500/10 to-opsynth-500/10 rounded-full blur-3xl -z-10"></div>
                <div className="bg-neutral-900 rounded-xl shadow-xl p-6 max-w-md border border-neutral-800">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="font-semibold">Infrastructure Control</h4>
                    <Settings className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-neutral-800 rounded-lg">
                      <Cpu className="h-8 w-8 text-blue-500 mr-3" />
                      <div>
                        <p className="font-medium">Daily Operations</p>
                        <p className="text-sm text-neutral-400">VM provisioning, migrations</p>
                      </div>
                      <div className="ml-auto">
                        <span className="px-2 py-1 text-xs bg-green-900 text-green-300 rounded-full">Active</span>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-neutral-800 rounded-lg">
                      <Database className="h-8 w-8 text-purple-500 mr-3" />
                      <div>
                        <p className="font-medium">Resource Management</p>
                        <p className="text-sm text-neutral-400">Storage, compute allocation</p>
                      </div>
                      <div className="ml-auto">
                        <span className="px-2 py-1 text-xs bg-green-900 text-green-300 rounded-full">Active</span>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-neutral-800 rounded-lg">
                      <Shield className="h-8 w-8 text-green-500 mr-3" />
                      <div>
                        <p className="font-medium">Security & Compliance</p>
                        <p className="text-sm text-neutral-400">RBAC, audit logging</p>
                      </div>
                      <div className="ml-auto">
                        <span className="px-2 py-1 text-xs bg-green-900 text-green-300 rounded-full">Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Automate */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent1-500/10 to-opsynth-500/10 rounded-full blur-3xl -z-10"></div>
                  <div className="bg-neutral-900 rounded-xl shadow-xl p-6 border border-neutral-800">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-opsynth-900 p-2 rounded">
                          <Code className="h-6 w-6 text-opsynth-400" />
                        </div>
                        <div>
                          <p className="font-medium">Multi-Language Code Generation</p>
                          <p className="text-sm text-neutral-400">
                            Natural language commands automatically converted to PowerShell, Python, Terraform, and vendor APIs.
                          </p>
                        </div>
                      </div>
                      
                      <div className="h-px bg-neutral-700 my-4"></div>
                      
                      <div className="font-mono text-sm bg-neutral-800 p-3 rounded border border-neutral-700 mb-4">
                        <p className="font-semibold mb-2 text-opsynth-300">Generated Scripts:</p>
                        <ul className="space-y-1 list-disc pl-5 text-neutral-300">
                          <li>PowerShell: New-VM cmdlets with storage config</li>
                          <li>Python: PyVMOMI automation scripts</li>
                          <li>Terraform: Resource definitions and dependencies</li>
                          <li>Ansible: Playbooks for configuration management</li>
                        </ul>
                      </div>
                      
                      <div className="bg-opsynth-900/30 p-3 rounded-lg border border-opsynth-800">
                        <p className="font-medium text-opsynth-200 mb-2">Automation Status:</p>
                        <p className="text-neutral-300 text-sm">
                          Workflow orchestration across 3 platforms, 15-step automation sequence executing with rollback capabilities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-opsynth-900/50 text-opsynth-300 text-sm font-medium border border-opsynth-700/50">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-opsynth-600 text-white mr-2">2</span>
                  Automate
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Intelligent Workflow Automation</h3>
                <p className="text-lg text-neutral-300">
                  Transform natural language commands into executable code across PowerShell, Python, Terraform, and vendor-specific APIs with intelligent orchestration.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-opsynth-400 mr-2">✓</span>
                    <span>Multi-language code generation from natural language</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsynth-400 mr-2">✓</span>
                    <span>Cross-platform workflow orchestration and dependencies</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsynth-400 mr-2">✓</span>
                    <span>Automated rollback and error handling capabilities</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsynth-400 mr-2">✓</span>
                    <span>Infrastructure as Code generation and management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3: Optimize */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-opsynth-900/50 text-opsynth-300 text-sm font-medium border border-opsynth-700/50">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-opsynth-600 text-white mr-2">3</span>
                  Optimize
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Operational Intelligence & Optimization</h3>
                <p className="text-lg text-neutral-300">
                  Reduce operational toil through intelligent capacity planning, cost optimization, and automated resource utilization insights across your hybrid infrastructure.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-opsynth-400 mr-2">✓</span>
                    <span>Automated capacity planning and resource optimization</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsynth-400 mr-2">✓</span>
                    <span>Cost analysis and rightsizing recommendations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsynth-400 mr-2">✓</span>
                    <span>Operational toil reduction through intelligent automation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsynth-400 mr-2">✓</span>
                    <span>Performance monitoring and proactive optimization</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent1-500/10 to-opsynth-500/10 rounded-full blur-3xl -z-10"></div>
                <div className="terminal-window">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-xs text-neutral-400">Infrastructure Optimization Center</span>
                  </div>

                  <div className="space-y-4">
                    <div className="text-white font-mono text-sm">
                      <span className="text-opsynth-400">admin@opsynth:</span> Optimize our database tier costs
                    </div>
                    <div className="text-white font-mono text-sm">
                      <span className="text-accent1-400">opsynth &gt;</span> Analyzing resource utilization...
                    </div>
                    <div className="bg-neutral-800 p-3 rounded border border-neutral-700">
                      <div className="text-white font-mono text-sm mb-2">
                        <span className="text-green-400">✓</span> Found 12 over-provisioned DB VMs
                      </div>
                      <div className="text-white font-mono text-sm mb-2">
                        <span className="text-blue-400">→</span> Potential savings: $48K/month
                      </div>
                      <div className="text-white font-mono text-sm">
                        <span className="text-yellow-400">⚡</span> Generating rightsizing plan...
                      </div>
                    </div>
                    <div className="text-white font-mono text-sm">
                      <span className="text-accent1-400">opsynth &gt;</span> <span className="text-green-400">Optimization plan ready for approval</span>
                    </div>
                    <div className="flex items-center bg-neutral-800/50 p-2 rounded-lg">
                      <div className="text-neutral-400 line-through text-sm mr-2">Manual Capacity Planning</div>
                      <div className="text-white">→</div>
                      <div className="text-opsynth-400 ml-2 text-sm">Intelligent Optimization</div>
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

export default WorkflowSection;
