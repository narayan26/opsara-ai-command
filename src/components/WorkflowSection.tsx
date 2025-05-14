
import { Button } from "@/components/ui/button";
import { AlertCircle, BrainCircuit, Layers, MessageCircle } from "lucide-react";

const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-16 md:py-24 px-6 md:px-8 lg:px-12 bg-neutral-50 dark:bg-neutral-900">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How Opsara Works</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Opsara integrates with your existing tools and processes to provide real-time context and recommendations during incidents.
          </p>
        </div>

        <div className="space-y-24">
          {/* Step 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-opsara-100 text-opsara-800 text-sm font-medium">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-opsara-600 text-white mr-2">1</span>
                  Connect
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Connect your data sources</h3>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                  Opsara connects to your alerting tools, communication platforms, and knowledge bases through simple, secure integrations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-opsara-600 mr-2">✓</span>
                    <span>Monitoring systems (Datadog, New Relic, Prometheus)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsara-600 mr-2">✓</span>
                    <span>Chat platforms (Slack, MS Teams, Discord)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsara-600 mr-2">✓</span>
                    <span>Ticketing systems (Jira, ServiceNow, Linear)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsara-600 mr-2">✓</span>
                    <span>Documentation (Confluence, Notion, GitHub)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent1-500/10 to-opsara-500/10 rounded-full blur-3xl -z-10"></div>
                <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-xl p-6 max-w-md">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="font-semibold">Integrations</h4>
                    <Button variant="outline" size="sm">+ Add New</Button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
                      <AlertCircle className="h-8 w-8 text-red-500 mr-3" />
                      <div>
                        <p className="font-medium">Datadog</p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">Alert and metric data</p>
                      </div>
                      <div className="ml-auto">
                        <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Connected</span>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
                      <MessageCircle className="h-8 w-8 text-blue-500 mr-3" />
                      <div>
                        <p className="font-medium">Slack</p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">Team communication</p>
                      </div>
                      <div className="ml-auto">
                        <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Connected</span>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
                      <Layers className="h-8 w-8 text-purple-500 mr-3" />
                      <div>
                        <p className="font-medium">Jira</p>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">Ticket tracking</p>
                      </div>
                      <div className="ml-auto">
                        <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">Connected</span>
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
                  <div className="absolute inset-0 bg-gradient-to-r from-accent1-500/10 to-opsara-500/10 rounded-full blur-3xl -z-10"></div>
                  <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-xl p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-opsara-100 dark:bg-opsara-900 p-2 rounded">
                          <BrainCircuit className="h-6 w-6 text-opsara-600" />
                        </div>
                        <div>
                          <p className="font-medium">Alert Pattern Analysis</p>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            Detected recurring memory allocation failures across 3 GPU nodes in cluster prod-ml-east.
                          </p>
                        </div>
                      </div>
                      
                      <div className="h-px bg-neutral-200 dark:bg-neutral-700 my-4"></div>
                      
                      <div className="font-mono text-sm bg-neutral-100 dark:bg-neutral-800 p-3 rounded border border-neutral-200 dark:border-neutral-700 mb-4">
                        <p className="font-semibold mb-2">Related context:</p>
                        <ul className="space-y-1 list-disc pl-5">
                          <li>Similar to INC-2347 from last month</li>
                          <li>Affects TensorFlow workloads specifically</li>
                          <li>Memory fragmentation present in logs</li>
                          <li>Started after latest CUDA driver update</li>
                        </ul>
                      </div>
                      
                      <div className="bg-opsara-50 dark:bg-opsara-900/30 p-3 rounded-lg border border-opsara-100 dark:border-opsara-800">
                        <p className="font-medium text-opsara-800 dark:text-opsara-200 mb-2">Recommended action:</p>
                        <p className="text-neutral-700 dark:text-neutral-300">
                          Rollback CUDA driver to v11.8 on affected nodes and increase GPU memory padding parameter to 512MB.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-opsara-100 text-opsara-800 text-sm font-medium">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-opsara-600 text-white mr-2">2</span>
                  Analyze
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Understand the context</h3>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                  Opsara uses advanced AI to analyze alerts, conversations, and knowledge bases to build comprehensive context during incidents.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-opsara-600 mr-2">✓</span>
                    <span>Correlate related alerts across systems</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsara-600 mr-2">✓</span>
                    <span>Extract key information from conversations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsara-600 mr-2">✓</span>
                    <span>Find similar historical incidents</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsara-600 mr-2">✓</span>
                    <span>Surface relevant documentation and runbooks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-opsara-100 text-opsara-800 text-sm font-medium">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-opsara-600 text-white mr-2">3</span>
                  Respond
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Take action with confidence</h3>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                  Opsara provides clear, actionable recommendations and automates routine tasks to help you resolve incidents faster.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-opsara-600 mr-2">✓</span>
                    <span>Automated incident summaries for stakeholders</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsara-600 mr-2">✓</span>
                    <span>Step-by-step resolution guidance</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsara-600 mr-2">✓</span>
                    <span>Automated runbook execution for common issues</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-opsara-600 mr-2">✓</span>
                    <span>Post-incident analysis and learnings</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button className="bg-opsara-600 hover:bg-opsara-700">
                    Request Demo
                  </Button>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent1-500/10 to-opsara-500/10 rounded-full blur-3xl -z-10"></div>
                <div className="terminal-window">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-xs text-neutral-400">slack-channel: #incident-gpu-cluster</span>
                  </div>

                  <div className="space-y-4">
                    <div className="text-white font-mono text-sm">
                      <span className="text-opsara-400">@channel:</span> CRITICAL ALERT - GPU node failures in prod-ml-east
                    </div>
                    <div className="text-white font-mono text-sm">
                      <span className="text-yellow-400">dan:</span> Anyone know what's happening with the gpu cluster?
                    </div>
                    <div className="text-white font-mono text-sm">
                      <span className="text-green-400">lisa:</span> Looking into it. Seeing OOM errors in the logs.
                    </div>
                    <div className="text-white font-mono text-sm">
                      <span className="text-accent1-400">opsara &gt;</span> <span className="bg-neutral-800 p-1">INCIDENT SUMMARY</span>
                    </div>
                    <div className="bg-neutral-800 p-3 rounded border border-neutral-700">
                      <p className="text-white font-mono text-sm mb-2">• 3 GPU nodes failing in prod-ml-east</p>
                      <p className="text-white font-mono text-sm mb-2">• Root cause: Memory leak in TensorFlow containers</p>
                      <p className="text-white font-mono text-sm mb-2">• Similar to incident INC-2347 (resolved by CUDA rollback)</p>
                      <p className="text-white font-mono text-sm">• Recommended action: Rollback CUDA drivers to v11.8</p>
                    </div>
                    <div className="text-white font-mono text-sm">
                      <span className="text-yellow-400">dan:</span> @lisa let's try the CUDA rollback like opsara suggests
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
