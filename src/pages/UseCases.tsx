
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Database, Shield, Zap, GitBranch, Monitor, Settings, Wrench, DollarSign, Code } from "lucide-react";

const useCases = [
  {
    icon: <Code className="h-8 w-8 text-opsynth-400" />,
    title: "Infrastructure Automation",
    description: "Bring in your existing scripts and generate new PowerShell, Python, and Terraform code with natural language commands.",
    example: "Generate a PowerShell script to restart all VMs with tag 'dev'"
  },
  {
    icon: <Database className="h-8 w-8 text-opsynth-400" />,
    title: "Resource Provisioning",
    description: "Create VMs, containers, storage volumes, and network segments using natural language commands.",
    example: "Provision 5 Ubuntu VMs in Cluster-A with 8GB RAM"
  },
  {
    icon: <Settings className="h-8 w-8 text-opsynth-400" />,
    title: "Lifecycle Management",
    description: "Manage VM and container lifecycles with power operations, tagging, and snapshot management.",
    example: "Snapshot all production VMs before patch Tuesday"
  },
  {
    icon: <GitBranch className="h-8 w-8 text-opsynth-400" />,
    title: "Kubernetes Operations",
    description: "Scale deployments, manage pods, and handle container orchestration tasks effortlessly.",
    example: "Scale api-service to 5 replicas"
  },
  {
    icon: <Zap className="h-8 w-8 text-opsynth-400" />,
    title: "Backup & Disaster Recovery",
    description: "Integrate with Cohesity, Veeam, and other backup solutions for automated protection workflows.",
    example: "Check last backup status of app-db VM"
  },
  {
    icon: <Monitor className="h-8 w-8 text-opsynth-400" />,
    title: "Monitoring & Logging",
    description: "Retrieve events and metrics from vCenter, Splunk, and other monitoring platforms.",
    example: "Show me all critical events from vCenter in the last 24 hours"
  },
  {
    icon: <Wrench className="h-8 w-8 text-opsynth-400" />,
    title: "Patching & Upgrades",
    description: "Perform version checks and orchestrated upgrades across your infrastructure platforms.",
    example: "List ESXi hosts that need patching"
  },
  {
    icon: <DollarSign className="h-8 w-8 text-opsynth-400" />,
    title: "Cost Optimization",
    description: "Identify idle resources, recommend right-sizing, and plan capacity expansions.",
    example: "Which hosts are running under 20% CPU over 7 days"
  },
  {
    icon: <Shield className="h-8 w-8 text-opsynth-400" />,
    title: "Secure",
    description: "Apply RBAC configurations, manage audit logs, implement firewall rules, and enforce tag policies across your infrastructure.",
    example: "List VMs with open SSH port"
  }
];

const UseCases = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-20 md:py-28 px-6 md:px-8 lg:px-12">
        <div className="container max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Use Cases
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed">
              See how OpSynth transforms infrastructure operations across enterprise environments. From simple automation to complex multi-platform workflows.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {useCases.map((useCase, index) => (
              <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-opsynth-600/10 rounded-lg group-hover:bg-opsynth-600/20 transition-colors">
                      {useCase.icon}
                    </div>
                    <CardTitle className="text-lg text-white group-hover:text-opsynth-300 transition-colors">
                      {useCase.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-neutral-400 leading-relaxed">
                    {useCase.description}
                  </CardDescription>
                  <div className="bg-neutral-900/50 rounded-lg p-3 border border-neutral-800">
                    <p className="text-sm text-opsynth-300 font-mono">
                      "{useCase.example}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-neutral-950 rounded-2xl p-12 border border-neutral-800">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to See OpSynth in Action?
              </h2>
              <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
                Experience how natural language can transform your infrastructure operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-opsynth-600 hover:bg-opsynth-700 text-white px-8 py-4">
                  <a href="https://forms.gle/KenQoq3VwLtZhSxk7" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Join Interest List <ArrowRight size={20} className="ml-2" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-opsynth-600 text-opsynth-400 hover:bg-opsynth-600/10 px-8 py-4">
                  <a href="/app" className="flex items-center">
                    View Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UseCases;
