
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Server, 
  HardDrive, 
  Container, 
  Shield, 
  Monitor, 
  Wrench, 
  DollarSign, 
  ArrowRightLeft, 
  Database 
} from "lucide-react";

const useCases = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Automate",
    description: "Schedule and bulk execute scripts across your infrastructure. Orchestrate complex workflows with natural language commands.",
    examples: [
      "Schedule daily restart of all dev VMs at 2am",
      "Run Terraform script across all web servers",
      "Execute bulk configuration changes"
    ],
    integrations: ["Terraform Cloud", "GitHub Actions", "Jenkins", "PowerCLI"],
    tiers: ["Essentials", "Pro", "Enterprise AI"],
    color: "bg-green-500"
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Infrastructure Provisioning",
    description: "Create and configure new infrastructure resources across multiple platforms with intelligent templates.",
    examples: [
      "Provision 5 Ubuntu VMs in Cluster-A with 8GB RAM",
      "Create new Kubernetes namespace with RBAC",
      "Deploy multi-tier application stack"
    ],
    integrations: ["Aria Automation", "Nutanix Calm", "Kubernetes YAML", "NetApp ONTAP"],
    tiers: ["Pro", "Enterprise AI"],
    color: "bg-blue-500"
  },
  {
    icon: <HardDrive className="h-6 w-6" />,
    title: "VM Lifecycle Management",
    description: "Complete virtual machine lifecycle operations including creation, modification, snapshots, and power management.",
    examples: [
      "Snapshot all production VMs before patch Tuesday",
      "Tag containers with end-of-life labels",
      "Clone VM template for testing environment"
    ],
    integrations: ["PowerCLI", "Kubernetes CLI", "vSphere APIs"],
    tiers: ["Essentials", "Pro", "Enterprise AI"],
    color: "bg-purple-500"
  },
  {
    icon: <Container className="h-6 w-6" />,
    title: "Kubernetes Operations",
    description: "Native Kubernetes cluster management with deployment scaling, pod lifecycle, and resource optimization.",
    examples: [
      "Scale api-service to 5 replicas",
      "Delete all CrashLoopBackOff pods",
      "Update deployment with new image version"
    ],
    integrations: ["Kubernetes CLI", "ArgoCD", "Helm"],
    tiers: ["Essentials", "Pro", "Enterprise AI"],
    color: "bg-cyan-500"
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Backup & Disaster Recovery",
    description: "Comprehensive backup and DR operations with integration to enterprise backup solutions.",
    examples: [
      "Check last backup status of app-db VM",
      "Trigger Veeam restore for web-tier",
      "Validate DR runbook procedures"
    ],
    integrations: ["Veeam APIs", "Cohesity REST API", "Rubrik CDM", "VMware SRM"],
    tiers: ["Pro", "Enterprise AI"],
    color: "bg-orange-500"
  },
  {
    icon: <Monitor className="h-6 w-6" />,
    title: "Monitoring & Logging",
    description: "Unified monitoring and log analysis across all infrastructure platforms with AI-powered insights.",
    examples: [
      "Show critical events from vCenter in last 24 hours",
      "Parse Splunk logs for repeated login failures",
      "Generate infrastructure health report"
    ],
    integrations: ["Splunk", "ELK Stack", "VMware Aria Ops", "Fluentd"],
    tiers: ["Essentials", "Pro", "Enterprise AI"],
    color: "bg-yellow-500"
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Upgrade & Patch Management",
    description: "Coordinated upgrade and patching across infrastructure platforms with compliance tracking.",
    examples: [
      "List ESXi hosts that need patching",
      "Run vCenter upgrade from 7.0 to 8.0",
      "Schedule maintenance windows for clusters"
    ],
    integrations: ["vLCM", "Aria Suite Lifecycle", "Red Hat Satellite"],
    tiers: ["Pro", "Enterprise AI"],
    color: "bg-indigo-500"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Security & Compliance",
    description: "Apply security policies, manage RBAC, audit configurations, and enforce compliance standards.",
    examples: [
      "List VMs with open SSH port",
      "Apply RBAC for storage admin group",
      "Generate compliance audit report"
    ],
    integrations: ["NSX Manager", "Okta", "Active Directory", "NetApp SnapCenter"],
    tiers: ["Pro", "Enterprise AI"],
    color: "bg-red-500"
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Cost Optimization",
    description: "Identify underutilized resources, recommend right-sizing, and forecast capacity requirements.",
    examples: [
      "Show hosts running under 20% CPU for 7 days",
      "Recommend downsizing for QA VMs",
      "Generate 30-day capacity forecast"
    ],
    integrations: ["VMware Aria Cost", "Nutanix Prism Analytics", "Azure Cost Management"],
    tiers: ["Enterprise AI"],
    color: "bg-emerald-500"
  },
  {
    icon: <ArrowRightLeft className="h-6 w-6" />,
    title: "Workload Migration",
    description: "Automate workload migrations across platforms and clouds with intelligent planning and execution.",
    examples: [
      "Migrate VMs from Cluster-A to Cluster-B using HCX",
      "Plan migration to AWS for app-group-1",
      "Execute zero-downtime application migration"
    ],
    integrations: ["VMware HCX", "AWS MGN", "Nutanix Move"],
    tiers: ["Enterprise AI"],
    color: "bg-pink-500"
  }
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-20 md:py-28 px-6 md:px-8 lg:px-12 bg-background">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Ten Core Use Cases for Infrastructure Teams
          </h2>
          <p className="text-xl text-neutral-300 leading-relaxed">
            OpSynth is organized around the most common infrastructure operations that IT teams perform daily. 
            Each use case includes natural language controls, automated workflows, and deep integrations with your existing tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 ${useCase.color} rounded-lg text-white`}>
                    {useCase.icon}
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-opsynth-300 transition-colors">
                    {useCase.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-neutral-400 leading-relaxed">
                  {useCase.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Example Commands */}
                <div>
                  <h4 className="text-sm font-medium text-neutral-300 mb-2">Example Commands:</h4>
                  <ul className="space-y-1">
                    {useCase.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-neutral-400 bg-neutral-900/50 rounded px-3 py-1 font-mono">
                        "{example}"
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Integrations */}
                <div>
                  <h4 className="text-sm font-medium text-neutral-300 mb-2">Key Integrations:</h4>
                  <div className="flex flex-wrap gap-1">
                    {useCase.integrations.map((integration, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-neutral-700 text-neutral-400">
                        {integration}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Available Tiers */}
                <div>
                  <h4 className="text-sm font-medium text-neutral-300 mb-2">Available in:</h4>
                  <div className="flex gap-1">
                    {useCase.tiers.map((tier, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-opsynth-600/20 text-opsynth-400 border-opsynth-600/30">
                        {tier}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Tiers Summary */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Pricing Tiers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-opsynth-400">Essentials</CardTitle>
                <CardDescription>Up to 100 resources • $25/resource</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-400">Core operations, monitoring, and VM/K8s lifecycle management.</p>
              </CardContent>
            </Card>
            <Card className="glass-card border-opsynth-600">
              <CardHeader>
                <CardTitle className="text-opsynth-400">Pro</CardTitle>
                <CardDescription>Up to 1,000 resources • $50/resource</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-400">Advanced provisioning, backup/DR, security, and patch management.</p>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-opsynth-400">Enterprise AI</CardTitle>
                <CardDescription>5,000+ resources • $85/resource</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-400">Full platform including cost optimization and workload migration.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
