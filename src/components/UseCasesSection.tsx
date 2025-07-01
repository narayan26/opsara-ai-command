
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Server, Building, Cloud } from "lucide-react";

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24 px-6 md:px-8 lg:px-12">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Modern Enterprise Infrastructure</h2>
          <p className="text-lg text-neutral-300">
            OpSynth addresses the $130+ billion enterprise infrastructure market by unifying fragmented control planes across VMware, Nutanix, HPE, Dell, and bare metal systems.
          </p>
        </div>

        <Tabs defaultValue="enterprise" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3 bg-neutral-800">
              <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
              <TabsTrigger value="colocation">Colocation</TabsTrigger>
              <TabsTrigger value="managed">Managed Services</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="enterprise" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <Card className="border border-neutral-800 bg-neutral-900/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Building className="h-6 w-6 mr-2 text-opsynth-400" />
                      Enterprise Infrastructure
                    </CardTitle>
                    <CardDescription className="text-base text-neutral-400">
                      Fortune 500 companies with hybrid VMware and multi-vendor infrastructure
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-neutral-300">
                      Unify operations across VMware vCenter, Nutanix Prism, HPE GreenLake, and Dell APEX through a single AI-powered interface.
                    </p>
                    <ul className="space-y-2 text-neutral-300">
                      <li className="flex items-start">
                        <span className="text-opsynth-400 font-bold mr-2">•</span>
                        <span>Normalize SOAP, REST, and CLI APIs across all platforms</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-opsynth-400 font-bold mr-2">•</span>
                        <span>Reduce operational complexity from years to minutes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-opsynth-400 font-bold mr-2">•</span>
                        <span>Enterprise RBAC, audit logging, and compliance controls</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-r from-opsynth-600 to-accent1-600 p-px rounded-xl">
                  <div className="bg-neutral-900 rounded-xl p-6">
                    <div className="text-lg font-semibold mb-4">Customer Impact</div>
                    <p className="italic text-neutral-400 mb-6">
                      "OpSynth eliminated the need for custom integrations across our VMware and Nutanix environments. Our infrastructure team can now execute complex migrations and maintenance through natural language commands."
                    </p>
                    <div>
                      <p className="font-medium">Infrastructure Director</p>
                      <p className="text-sm text-neutral-500">Global Financial Services Company</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="colocation" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <Card className="border border-neutral-800 bg-neutral-900/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Server className="h-6 w-6 mr-2 text-opsynth-400" />
                      Colocation Providers
                    </CardTitle>
                    <CardDescription className="text-base text-neutral-400">
                      Data center operators managing multi-tenant infrastructure
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-neutral-300">
                      Provide unified management capabilities to customers across diverse hardware platforms while maintaining secure tenant isolation.
                    </p>
                    <ul className="space-y-2 text-neutral-300">
                      <li className="flex items-start">
                        <span className="text-opsynth-400 font-bold mr-2">•</span>
                        <span>Multi-tenant credential isolation and secure access</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-opsynth-400 font-bold mr-2">•</span>
                        <span>Support VMware, bare metal, and hybrid configurations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-opsynth-400 font-bold mr-2">•</span>
                        <span>White-label deployment options for customer portals</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-r from-opsynth-600 to-accent1-600 p-px rounded-xl">
                  <div className="bg-neutral-900 rounded-xl p-6">
                    <div className="text-lg font-semibold mb-4">Customer Impact</div>
                    <p className="italic text-neutral-400 mb-6">
                      "Our customers no longer need to learn multiple management interfaces. OpSynth provides a consistent experience whether they're managing VMware clusters or bare metal servers in our facilities."
                    </p>
                    <div>
                      <p className="font-medium">VP of Operations</p>
                      <p className="text-sm text-neutral-500">Leading Colocation Provider</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="managed" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <Card className="border border-neutral-800 bg-neutral-900/50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Cloud className="h-6 w-6 mr-2 text-opsynth-400" />
                      Managed Service Providers
                    </CardTitle>
                    <CardDescription className="text-base text-neutral-400">
                      MSPs delivering infrastructure services across multiple customer environments
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-neutral-300">
                      Scale operations across customer environments with unified automation and monitoring across all major infrastructure platforms.
                    </p>
                    <ul className="space-y-2 text-neutral-300">
                      <li className="flex items-start">
                        <span className="text-opsynth-400 font-bold mr-2">•</span>
                        <span>Standardize operations across diverse customer stacks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-opsynth-400 font-bold mr-2">•</span>
                        <span>Automated remediation and proactive maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-opsynth-400 font-bold mr-2">•</span>
                        <span>Comprehensive audit trails and compliance reporting</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-r from-opsynth-600 to-accent1-600 p-px rounded-xl">
                  <div className="bg-neutral-900 rounded-xl p-6">
                    <div className="text-lg font-semibold mb-4">Customer Impact</div>
                    <p className="italic text-neutral-400 mb-6">
                      "OpSynth enables our team to manage infrastructure for 50+ enterprise customers through a single interface. We've reduced our operational overhead by 60% while improving service quality."
                    </p>
                    <div>
                      <p className="font-medium">Chief Technology Officer</p>
                      <p className="text-sm text-neutral-500">Enterprise Managed Services Provider</p>
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
