
import { AlertCircle, BarChart2, MessageSquare, Search, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Shield className="h-10 w-10 text-opsynth-400" />,
    title: "Unified Control Plane",
    description:
      "Centralize day-to-day operations across VMware, Nutanix, HPE, Dell, and bare metal infrastructure through a single interface.",
  },
  {
    icon: <Zap className="h-10 w-10 text-opsynth-400" />,
    title: "Multi-Language Automation",
    description:
      "Transform natural language commands into PowerShell, Python, Terraform, and vendor-specific scripts automatically.",
  },
  {
    icon: <BarChart2 className="h-10 w-10 text-opsynth-400" />,
    title: "Operational Optimization",
    description:
      "Reduce operational toil with intelligent capacity planning, cost optimization, and resource utilization insights.",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-opsynth-400" />,
    title: "Intent-Based Operations",
    description:
      "Execute complex infrastructure tasks through conversational commands that understand operational context and dependencies.",
  },
  {
    icon: <Search className="h-10 w-10 text-opsynth-400" />,
    title: "Cross-Platform Discovery",
    description:
      "Automatically discover and map dependencies across hybrid infrastructure to enable safe, coordinated operations.",
  },
  {
    icon: <AlertCircle className="h-10 w-10 text-opsynth-400" />,
    title: "Enterprise Governance",
    description:
      "Maintain compliance and audit trails while enabling self-service operations through role-based access controls.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 px-6 md:px-8 lg:px-12 bg-neutral-900 dark:bg-neutral-900">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Control. Automate. Optimize.</h2>
          <p className="text-lg text-neutral-300">
            OpSynth transforms complex infrastructure operations into simple, intelligent workflows that reduce operational overhead while maintaining enterprise security and compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-neutral-800 bg-neutral-900/50 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-400 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
