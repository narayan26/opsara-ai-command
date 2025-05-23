
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Server, Database, Cpu } from "lucide-react";

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24 px-6 md:px-8 lg:px-12">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for the AI-native era</h2>
          <p className="text-lg text-neutral-300">
            Whether you're managing internal infrastructure or providing GPUaaS to customers, OpSynth helps you maintain reliability at scale.
          </p>
        </div>

        <Tabs defaultValue="enterprise" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3 bg-neutral-800">
              <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
              <TabsTrigger value="provider">Service Provider</TabsTrigger>
              <TabsTrigger value="hyperscaler">Hyperscaler</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="enterprise" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <Card className="border border-neutral-800 bg-neutral-900/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Server className="h-6 w-6 mr-2 text-opsynth-400" />
                      Enterprise GPU Infrastructure
                    </CardTitle>
                    <CardDescription className="text-base text-neutral-400">
                      For companies running internal ML/AI infrastructure
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-neutral-300">
                      OpSynth helps internal SRE teams maintain reliability of GPU clusters supporting critical AI/ML workloads.
                    </p>
                    <ul className="space-y-2 text-neutral-300">
                      <li className="flex items-start">
                        <span className="text-opsynth-400 font-bold mr-2">•</span>
                        <span>Reduce MTTR for GPU infrastructure issues by 75%</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-opsynth-400 font-bold mr-2">•</span>
                        <span>Maintain high availability for AI model training and serving</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-opsynth-400 font-bold mr-2">•</span>
                        <span>Improve resource optimization through proactive monitoring</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-opsynth-600 hover:bg-opsynth-700">Learn More</Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-r from-opsynth-600 to-accent1-600 p-px rounded-xl">
                  <div className="bg-neutral-900 rounded-xl p-6">
                    <div className="text-lg font-semibold mb-4">Customer story</div>
                    <p className="italic text-neutral-400 mb-6">
                      "OpSynth helped our AI infrastructure team reduce alert fatigue by 85% and improve our incident resolution times significantly. Our ML teams can focus on building better models without worrying about infrastructure reliability."
                    </p>
                    <div>
                      <p className="font-medium">SRE Manager</p>
                      <p className="text-sm text-neutral-500">Fortune 500 Financial Institution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="provider" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <Card className="border border-neutral-800 bg-neutral-900/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Database className="h-6 w-6 mr-2 text-opsynth-400" />
                      GPU Service Providers
                    </CardTitle>
                    <CardDescription className="text-base text-neutral-400">
                      For companies offering GPUaaS to external customers
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-neutral-300">
                      OpSynth helps service providers deliver reliable GPU infrastructure at scale to maintain customer satisfaction.
                    </p>
                    <ul className="space-y-2 text-neutral-300">
                      <li className="flex items-start">
                        <span className="text-opsynth-400 font-bold mr-2">•</span>
                        <span>Maintain industry-leading SLAs for GPU availability</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-opsynth-400 font-bold mr-2">•</span>
                        <span>Proactively identify and resolve customer-impacting issues</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-opsynth-400 font-bold mr-2">•</span>
                        <span>Optimize fleet utilization without sacrificing reliability</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-opsynth-600 hover:bg-opsynth-700">Learn More</Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-r from-opsynth-600 to-accent1-600 p-px rounded-xl">
                  <div className="bg-neutral-900 rounded-xl p-6">
                    <div className="text-lg font-semibold mb-4">Customer story</div>
                    <p className="italic text-neutral-400 mb-6">
                      "As a GPU cloud provider, our customers expect 99.9% uptime. OpSynth helps us maintain that SLA by coordinating our incident response and helping us resolve issues before customers even notice them."
                    </p>
                    <div>
                      <p className="font-medium">VP of Operations</p>
                      <p className="text-sm text-neutral-500">Leading GPU Cloud Provider</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="hyperscaler" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <Card className="border border-neutral-800 bg-neutral-900/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Cpu className="h-6 w-6 mr-2 text-opsynth-400" />
                      Hyperscaler GPU Environments
                    </CardTitle>
                    <CardDescription className="text-base text-neutral-400">
                      For GPU environments on AWS, Azure, Google Cloud, etc.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-neutral-300">
                      OpSynth helps teams running on hyperscaler platforms optimize their GPU resources and maintain application reliability.
                    </p>
                    <ul className="space-y-2 text-neutral-300">
                      <li className="flex items-start">
                        <span className="text-opsynth-400 font-bold mr-2">•</span>
                        <span>Quickly identify issues in cloud-based ML pipelines</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-opsynth-400 font-bold mr-2">•</span>
                        <span>Maximize GPU utilization while controlling costs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-opsynth-400 font-bold mr-2">•</span>
                        <span>Improve coordination between ML and operations teams</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-opsynth-600 hover:bg-opsynth-700">Learn More</Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-r from-opsynth-600 to-accent1-600 p-px rounded-xl">
                  <div className="bg-neutral-900 rounded-xl p-6">
                    <div className="text-lg font-semibold mb-4">Customer story</div>
                    <p className="italic text-neutral-400 mb-6">
                      "Our ML platform runs on AWS and Azure GPU instances. OpSynth helped us improve reliability while reducing our on-call burden by 70%. The ability to correlate issues across multiple cloud providers has been invaluable."
                    </p>
                    <div>
                      <p className="font-medium">Lead SRE</p>
                      <p className="text-sm text-neutral-500">AI Health Technologies Startup</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default UseCasesSection;
