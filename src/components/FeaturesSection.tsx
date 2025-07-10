
import { MessageSquare, Code, BarChart3, Shield, Zap, Network, Database, GitBranch } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <MessageSquare className="h-8 w-8 text-opsynth-400" />,
    title: "Natural Language Operations",
    description: "Control your entire infrastructure through conversational AI. Execute complex workflows with simple commands like 'Restart all production VMs' or 'Scale API service to 10 replicas'.",
    category: "Core Platform"
  },
  {
    icon: <Code className="h-8 w-8 text-opsynth-400" />,
    title: "Multi-Language Script Generation",
    description: "Automatically generate PowerShell, Python, and Terraform scripts from natural language. Version-aware syntax with built-in validation and testing capabilities.",
    category: "Automation"
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-opsynth-400" />,
    title: "Unified Infrastructure Dashboards",
    description: "Centralized visibility across compute, storage, networking, and security. Real-time monitoring with AI-driven insights and anomaly detection.",
    category: "Observability"
  },
  {
    icon: <Shield className="h-8 w-8 text-opsynth-400" />,
    title: "Enterprise Security & Compliance",
    description: "RBAC, SSO integration with Okta/AD, comprehensive audit logging, and compliance enforcement across all infrastructure operations.",
    category: "Security"
  },
  {
    icon: <Network className="h-8 w-8 text-opsynth-400" />,
    title: "Multi-Platform Integration",
    description: "Native support for VMware vSphere, Kubernetes, Nutanix, NetApp, HPE, Dell, Cisco, and bare metal environments through a single control plane.",
    category: "Integration"
  },
  {
    icon: <Database className="h-8 w-8 text-opsynth-400" />,
    title: "RAG-Enhanced AI Context",
    description: "Leverages your existing documentation, logs, and knowledge bases to provide contextually accurate responses and recommendations.",
    category: "Intelligence"
  },
  {
    icon: <Zap className="h-8 w-8 text-opsynth-400" />,
    title: "Cost Optimization & Analytics",
    description: "Identify underutilized resources, recommend right-sizing, and provide capacity forecasting to optimize infrastructure costs.",
    category: "Optimization"
  },
  {
    icon: <GitBranch className="h-8 w-8 text-opsynth-400" />,
    title: "Workload Migration & DR",
    description: "Automate workload migrations across platforms using HCX, Nutanix Move, AWS MGN, and integrate with backup solutions like Cohesity and Veeam.",
    category: "Migration"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 px-6 md:px-8 lg:px-12 bg-neutral-950">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Enterprise-Grade Infrastructure Control
          </h2>
          <p className="text-xl text-neutral-300 leading-relaxed">
            OpSynth combines the power of generative AI with enterprise security and compliance requirements. 
            Manage hybrid infrastructure at scale with natural language commands, automated workflows, and unified visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-opsynth-600/10 rounded-lg group-hover:bg-opsynth-600/20 transition-colors">
                    {feature.icon}
                  </div>
                  <span className="text-xs text-opsynth-400 font-medium bg-opsynth-950/50 px-2 py-1 rounded">
                    {feature.category}
                  </span>
                </div>
                <CardTitle className="text-lg text-white group-hover:text-opsynth-300 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-400 text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Platform Integrations */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Supported Platforms & Integrations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            {[
              "VMware vSphere",
              "Kubernetes",
              "Nutanix",
              "NetApp ONTAP",
              "HPE GreenLake",
              "Dell APEX",
              "Cisco NSX",
              "Terraform",
              "PowerShell",
              "Cohesity",
              "Splunk",
              "GitHub Actions"
            ].map((platform, index) => (
              <div key={index} className="p-4 bg-neutral-900/50 rounded-lg border border-neutral-800 hover:border-opsynth-600/50 transition-colors">
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
