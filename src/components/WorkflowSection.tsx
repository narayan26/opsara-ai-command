
import { Button } from "@/components/ui/button";
import { Bot, Cpu, Layers, MessageCircle, ArrowRight, Shield, Database } from "lucide-react";

const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-16 md:py-24 px-6 md:px-8 lg:px-12 bg-neutral-950/50">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How OpSynth Works</h2>
          <p className="text-lg text-neutral-300">
            OpSynth abstracts vendor-specific complexity through unified control, observation, automation, and remediation across your entire hybrid infrastructure.
          </p>
        </div>

        <div className="space-y-24">
          {/* Step 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-opsynth-900/50 text-opsynth-300 text-sm font-medium border border-opsynth-700/50">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-opsynth-600 text-white mr-2">1</span>
                  Connect
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Unified Infrastructure Integration</h3>
                <p className="text-lg text-neutral-300">
                  OpSynth connects to your entire hybrid infrastructure through secure, multi-tenant integrations that normalize vendor-specific protocols.
                </p>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-center">
                    <span className="text-opsynth-400 mr-2">✓</span>
                    <span>VMware: vCenter SOAP APIs, PowerCLI, PyVMOMI integration</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsynth-400 mr-2">✓</span>
                    <span>Nutanix: Prism Central REST APIs and orchestration</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsynth-400 mr-2">✓</span>
                    <span>HPE GreenLake, Dell APEX: OAuth-secured OpenAPIs</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsynth-400 mr-2">✓</span>
                    <span>Bare Metal: Redfish, IPMI, and custom protocols</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent1-500/10 to-opsynth-500/10 rounded-full blur-3xl -z-10"></div>
                <div className="bg-neutral-900 rounded-xl shadow-xl p-6 max-w-md border border-neutral-800">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="font-semibold">Infrastructure Platforms</h4>
                    <Shield className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-neutral-800 rounded-lg">
                      <Cpu className="h-8 w-8 text-blue-500 mr-3" />
                      <div>
                        <p className="font-medium">VMware vCenter</p>
                        <p className="text-sm text-neutral-400">SOAP APIs, PowerCLI</p>
                      </div>
                      <div className="ml-auto">
                        <span className="px-2 py-1 text-xs bg-green-900 text-green-300 rounded-full">Connected</span>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-neutral-800 rounded-lg">
                      <Database className="h-8 w-8 text-purple-500 mr-3" />
                      <div>
                        <p className="font-medium">Nutanix Prism</p>
                        <p className="text-sm text-neutral-400">REST APIs, Terraform</p>
                      </div>
                      <div className="ml-auto">
                        <span className="px-2 py-1 text-xs bg-green-900 text-green-300 rounded-full">Connected</span>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-neutral-800 rounded-lg">
                      <Bot className="h-8 w-8 text-green-500 mr-3" />
                      <div>
                        <p className="font-medium">HPE GreenLake</p>
                        <p className="text-sm text-neutral-400">OAuth OpenAPIs</p>
                      </div>
                      <div className="ml-auto">
                        <span className="px-2 py-1 text-xs bg-green-900 text-green-300 rounded-full">Connected</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent1-500/10 to-opsynth-500/10 rounded-full blur-3xl -z-10"></div>
                  <div className="bg-neutral-900 rounded-xl shadow-xl p-6 border border-neutral-800">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-opsynth-900 p-2 rounded">
                          <Layers className="h-6 w-6 text-opsynth-400" />
                        </div>
                        <div>
                          <p className="font-medium">HybridInfraGraph Analysis</p>
                          <p className="text-sm text-neutral-400">
                            Real-time dependency mapping across VMware cluster prod-west-01, Nutanix block storage, and HPE compute nodes.
                          </p>
                        </div>
                      </div>
                      
                      <div className="h-px bg-neutral-700 my-4"></div>
                      
                      <div className="font-mono text-sm bg-neutral-800 p-3 rounded border border-neutral-700 mb-4">
                        <p className="font-semibold mb-2 text-opsynth-300">Infrastructure Context:</p>
                        <ul className="space-y-1 list-disc pl-5 text-neutral-300">
                          <li>Cluster capacity: 67% CPU, 82% memory utilization</li>
                          <li>Storage: Nutanix RF3 with 15% free capacity</li>
                          <li>Network: 10Gb uplinks showing 45% utilization</li>
                          <li>Dependencies: 23 VMs with anti-affinity rules</li>
                        </ul>
                      </div>
                      
                      <div className="bg-opsynth-900/30 p-3 rounded-lg border border-opsynth-800">
                        <p className="font-medium text-opsynth-200 mb-2">AI Recommendation:</p>
                        <p className="text-neutral-300 text-sm">
                          Optimal migration window: 2:00-4:00 AM PST. Suggested host order based on workload affinity and resource availability.
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
                  Analyze
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">HybridInfraGraph Intelligence</h3>
                <p className="text-lg text-neutral-300">
                  OpSynth builds a real-time dependency graph that maps operational context across all platforms, enabling intelligent automation and optimization.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-opsynth-400 mr-2">✓</span>
                    <span>Cross-platform dependency mapping and impact analysis</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsynth-400 mr-2">✓</span>
                    <span>Resource optimization recommendations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsynth-400 mr-2">✓</span>
                    <span>Predictive maintenance and capacity planning</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsynth-400 mr-2">✓</span>
                    <span>Compliance and security posture analysis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-opsynth-900/50 text-opsynth-300 text-sm font-medium border border-opsynth-700/50">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-opsynth-600 text-white mr-2">3</span>
                  Execute
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Intent-Based Operations</h3>
                <p className="text-lg text-neutral-300">
                  Transform natural language commands into precise infrastructure operations across all platforms with enterprise-grade security and audit trails.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-opsynth-400 mr-2">✓</span>
                    <span>Natural language to infrastructure operations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsynth-400 mr-2">✓</span>
                    <span>Multi-step workflow orchestration and rollback</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsynth-400 mr-2">✓</span>
                    <span>Enterprise RBAC and credential isolation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsynth-400 mr-2">✓</span>
                    <span>Complete audit logging and compliance reporting</span>
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
                    <span className="ml-2 text-xs text-neutral-400">Infrastructure Command Center</span>
                  </div>

                  <div className="space-y-4">
                    <div className="text-white font-mono text-sm">
                      <span className="text-opsynth-400">user@opsynth:</span> Scale out the web tier VMs across availability zones
                    </div>
                    <div className="text-white font-mono text-sm">
                      <span className="text-accent1-400">opsynth &gt;</span> Analyzing current deployment...
                    </div>
                    <div className="bg-neutral-800 p-3 rounded border border-neutral-700">
                      <div className="text-white font-mono text-sm mb-2">
                        <span className="text-green-400">✓</span> Found 6 web-tier VMs in single AZ
                      </div>
                      <div className="text-white font-mono text-sm mb-2">
                        <span className="text-blue-400">→</span> Creating 3 VMs in AZ-B, 3 VMs in AZ-C
                      </div>
                      <div className="text-white font-mono text-sm">
                        <span className="text-yellow-400">⚡</span> Updating load balancer configuration...
                      </div>
                    </div>
                    <div className="text-white font-mono text-sm">
                      <span className="text-accent1-400">opsynth &gt;</span> <span className="text-green-400">Operation completed successfully</span>
                    </div>
                    <div className="flex items-center bg-neutral-800/50 p-2 rounded-lg">
                      <div className="text-neutral-400 line-through text-sm mr-2">Manual vCenter Tasks</div>
                      <div className="text-white">→</div>
                      <div className="text-opsynth-400 ml-2 text-sm">Natural Language Commands</div>
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
