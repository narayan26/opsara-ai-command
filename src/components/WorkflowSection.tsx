
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Code, Play, Shield, CheckCircle, BarChart3 } from "lucide-react";

const workflowSteps = [
  {
    step: 1,
    icon: <MessageCircle className="h-8 w-8 text-opsynth-400" />,
    title: "Natural Language Command",
    description: "Type your infrastructure request in plain English",
    example: "\"Restart all production VMs in the web-tier cluster\"",
    details: "OpSynth's AI understands context, infrastructure topology, and your organization's naming conventions to interpret commands accurately."
  },
  {
    step: 2,
    icon: <Code className="h-8 w-8 text-opsynth-400" />,
    title: "Intelligent Script Generation",
    description: "AI generates platform-specific scripts with validation",
    example: "PowerShell, Python, or Terraform code with error handling",
    details: "Version-aware syntax generation that adapts to your specific infrastructure platforms and configurations."
  },
  {
    step: 3,
    icon: <Shield className="h-8 w-8 text-opsynth-400" />,
    title: "Security & Compliance Check",
    description: "RBAC validation and risk assessment before execution",
    example: "Verify permissions, check maintenance windows, validate impact",
    details: "Built-in safeguards ensure operations comply with your organization's policies and don't violate security constraints."
  },
  {
    step: 4,
    icon: <Play className="h-8 w-8 text-opsynth-400" />,
    title: "Controlled Execution",
    description: "Execute with confirmation, rollback capabilities",
    example: "Staged rollout with progress monitoring and automatic rollback",
    details: "Smart execution with progress tracking, error handling, and the ability to pause or rollback operations when needed."
  },
  {
    step: 5,
    icon: <BarChart3 className="h-8 w-8 text-opsynth-400" />,
    title: "Real-time Monitoring",
    description: "Track progress and impact across all affected systems",
    example: "Live dashboard showing VM status, resource utilization, alerts",
    details: "Comprehensive monitoring of operation progress with real-time updates and impact analysis."
  },
  {
    step: 6,
    icon: <CheckCircle className="h-8 w-8 text-opsynth-400" />,
    title: "Audit & Documentation",
    description: "Automatic logging and documentation generation",
    example: "Complete audit trail with before/after states and compliance reports",
    details: "Every operation is logged with full context, making it easy to track changes and maintain compliance."
  }
];

const deploymentModes = [
  {
    name: "SaaS Hosted",
    description: "Fully managed cloud service with enterprise SLA",
    features: ["Automatic updates", "24/7 monitoring", "Enterprise support"],
    suitable: "Organizations prioritizing ease of use and quick deployment"
  },
  {
    name: "Cloud-Prem Connected",
    description: "Container in your VPC with access to OpSynth service",
    features: ["Your VPC", "Outbound connectivity", "Managed updates"],
    suitable: "Hybrid cloud environments with connectivity requirements"
  },
  {
    name: "On-Premises Connected",
    description: "Deployed in your datacenter with outbound access",
    features: ["Your infrastructure", "Outbound only", "Controlled updates"],
    suitable: "On-premises environments with internet access"
  },
  {
    name: "Air-Gapped",
    description: "Completely offline deployment with manual updates",
    features: ["Zero connectivity", "Manual updates", "Full control"],
    suitable: "High-security environments with strict isolation requirements"
  }
];

const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-20 md:py-28 px-6 md:px-8 lg:px-12 bg-neutral-950">
      <div className="container max-w-7xl mx-auto">
        {/* How It Works */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            How OpSynth Works
          </h2>
          <p className="text-xl text-neutral-300 leading-relaxed">
            From natural language to infrastructure action in six intelligent steps. 
            Every operation is secure, auditable, and reversible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {workflowSteps.map((step, index) => (
            <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300 group relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-opsynth-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {step.step}
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-opsynth-600/10 rounded-lg group-hover:bg-opsynth-600/20 transition-colors">
                    {step.icon}
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-opsynth-300 transition-colors">
                    {step.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-neutral-400 leading-relaxed">
                  {step.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-neutral-900/50 rounded-lg p-3">
                  <p className="text-sm text-neutral-300 font-mono">
                    {step.example}
                  </p>
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {step.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Deployment Modes */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Flexible Deployment Options
          </h2>
          <p className="text-xl text-neutral-300 leading-relaxed">
            Choose the deployment model that matches your security requirements and infrastructure constraints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deploymentModes.map((mode, index) => (
            <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-white group-hover:text-opsynth-300 transition-colors">
                  {mode.name}
                </CardTitle>
                <CardDescription className="text-neutral-400 leading-relaxed text-sm">
                  {mode.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-neutral-300 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {mode.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-neutral-400 flex items-center gap-2">
                        <div className="w-1 h-1 bg-opsynth-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-neutral-300 mb-2">Best For:</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {mode.suitable}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compliance & Security */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Enterprise Security & Compliance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { name: "SOC2 Type 2", status: "Compliant" },
              { name: "ISO 27001", status: "Compliant" },
              { name: "HIPAA", status: "Ready" },
              { name: "FedRAMP", status: "Ready" },
              { name: "PCI-DSS", status: "Compliant" },
              { name: "GDPR", status: "Compliant" },
              { name: "SSO/SAML", status: "Supported" },
              { name: "RBAC", status: "Built-in" }
            ].map((cert, index) => (
              <div key={index} className="p-4 bg-neutral-900/50 rounded-lg border border-neutral-800 hover:border-opsynth-600/50 transition-colors">
                <div className="text-sm font-medium text-white">{cert.name}</div>
                <Badge variant="outline" className="mt-1 text-xs border-green-600 text-green-400">
                  {cert.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
