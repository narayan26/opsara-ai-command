
import { MessageSquare, Code, BarChart3, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <MessageSquare className="h-8 w-8 text-opsynth-400" />,
    title: "Natural Language Control",
    description: "Execute complex infrastructure tasks through simple chat commands. 'Restart all production VMs' or 'Scale API service to 10 replicas'."
  },
  {
    icon: <Code className="h-8 w-8 text-opsynth-400" />,
    title: "Automated Script Generation",
    description: "Generate PowerShell, Python, and Terraform scripts from natural language. Version-aware syntax with built-in validation."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-opsynth-400" />,
    title: "Unified Infrastructure View",
    description: "Single dashboard for compute, storage, networking, and security across VMware, Kubernetes, Nutanix, and more."
  },
  {
    icon: <Shield className="h-8 w-8 text-opsynth-400" />,
    title: "Enterprise Security",
    description: "RBAC, SSO integration, comprehensive audit logging, and compliance enforcement for all operations."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 px-6 md:px-8 lg:px-12 bg-neutral-950">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Infrastructure Control, Simplified
          </h2>
          <p className="text-xl text-neutral-300 leading-relaxed">
            Reduce operational toil and accelerate infrastructure management with AI-powered automation and unified visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-opsynth-600/10 rounded-lg group-hover:bg-opsynth-600/20 transition-colors">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-opsynth-300 transition-colors">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-400 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Platform Support */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Supported Platforms</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              "VMware vSphere",
              "Kubernetes",
              "Nutanix",
              "NetApp",
              "Cisco NSX",
              "Terraform"
            ].map((platform, index) => (
              <div key={index} className="p-3 bg-neutral-900/50 rounded-lg border border-neutral-800 hover:border-opsynth-600/50 transition-colors">
                <span className="text-sm text-neutral-300 font-medium">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
