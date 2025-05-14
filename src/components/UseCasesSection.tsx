
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Server, Database, Cpu } from "lucide-react";

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24 px-6 md:px-8 lg:px-12">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for modern operations teams</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Whether you're managing internal infrastructure or providing GPUaaS to customers, Opsara helps you maintain reliability at scale.
          </p>
        </div>

        <Tabs defaultValue="enterprise" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
              <TabsTrigger value="provider">Service Provider</TabsTrigger>
              <TabsTrigger value="cloud">Cloud Customer</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="enterprise" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <Card className="border border-neutral-200 dark:border-neutral-800 bg-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Server className="h-6 w-6 mr-2 text-opsara-600" />
                      Enterprise GPU Infrastructure
                    </CardTitle>
                    <CardDescription className="text-base">
                      For companies running internal ML/AI infrastructure
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-neutral-700 dark:text-neutral-300">
                      Opsara helps internal SRE teams maintain reliability of GPU clusters supporting critical AI/ML workloads.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-opsara-600 font-bold mr-2">•</span>
                        <span>Reduce MTTR for GPU infrastructure issues by 75%</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-opsara-600 font-bold mr-2">•</span>
                        <span>Maintain high availability for AI model training and serving</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-opsara-600 font-bold mr-2">•</span>
                        <span>Improve resource optimization through proactive monitoring</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-opsara-600 hover:bg-opsara-700">Learn More</Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-r from-opsara-600 to-accent1-600 p-px rounded-xl">
                  <div className="bg-card rounded-xl p-6">
                    <div className="text-lg font-semibold mb-4">Customer story</div>
                    <p className="italic text-neutral-600 dark:text-neutral-400 mb-6">
                      "Opsara helped our AI infrastructure team reduce alert fatigue by 85% and improve our incident resolution times significantly. Our ML teams can focus on building better models without worrying about infrastructure reliability."
                    </p>
                    <div>
                      <p className="font-medium">Sarah Chen</p>
                      <p className="text-sm text-neutral-500">VP of AI Infrastructure, Morgan Stanley</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="provider" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <Card className="border border-neutral-200 dark:border-neutral-800 bg-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Database className="h-6 w-6 mr-2 text-opsara-600" />
                      GPU Service Providers
                    </CardTitle>
                    <CardDescription className="text-base">
                      For companies offering GPUaaS to external customers
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-neutral-700 dark:text-neutral-300">
                      Opsara helps service providers deliver reliable GPU infrastructure at scale to maintain customer satisfaction.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-opsara-600 font-bold mr-2">•</span>
                        <span>Maintain industry-leading SLAs for GPU availability</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-opsara-600 font-bold mr-2">•</span>
                        <span>Proactively identify and resolve customer-impacting issues</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-opsara-600 font-bold mr-2">•</span>
                        <span>Optimize fleet utilization without sacrificing reliability</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-opsara-600 hover:bg-opsara-700">Learn More</Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-r from-opsara-600 to-accent1-600 p-px rounded-xl">
                  <div className="bg-card rounded-xl p-6">
                    <div className="text-lg font-semibold mb-4">Customer story</div>
                    <p className="italic text-neutral-600 dark:text-neutral-400 mb-6">
                      "As a GPU cloud provider, our customers expect 99.9% uptime. Opsara helps us maintain that SLA by coordinating our incident response and helping us resolve issues before customers even notice them."
                    </p>
                    <div>
                      <p className="font-medium">Michael Torres</p>
                      <p className="text-sm text-neutral-500">CTO, CoreWeave</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cloud" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <Card className="border border-neutral-200 dark:border-neutral-800 bg-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Cpu className="h-6 w-6 mr-2 text-opsara-600" />
                      Cloud GPU Customers
                    </CardTitle>
                    <CardDescription className="text-base">
                      For organizations using cloud GPU instances
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-neutral-700 dark:text-neutral-300">
                      Opsara helps teams running on cloud providers optimize their GPU resources and maintain application reliability.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-opsara-600 font-bold mr-2">•</span>
                        <span>Quickly identify issues in cloud-based ML pipelines</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-opsara-600 font-bold mr-2">•</span>
                        <span>Maximize GPU utilization while controlling costs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-opsara-600 font-bold mr-2">•</span>
                        <span>Improve coordination between ML and operations teams</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-opsara-600 hover:bg-opsara-700">Learn More</Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-r from-opsara-600 to-accent1-600 p-px rounded-xl">
                  <div className="bg-card rounded-xl p-6">
                    <div className="text-lg font-semibold mb-4">Customer story</div>
                    <p className="italic text-neutral-600 dark:text-neutral-400 mb-6">
                      "Our ML startup is running production models on cloud GPUs. Opsara helped us improve reliability while reducing our on-call burden by 70%. It's like having an extra SRE on the team."
                    </p>
                    <div>
                      <p className="font-medium">Aditya Patel</p>
                      <p className="text-sm text-neutral-500">CTO, AI Health Technologies</p>
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
