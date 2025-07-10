
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Essentials",
    price: "$25",
    period: "per managed resource/year",
    limit: "Up to 100 resources",
    description: "Perfect for small to medium infrastructure environments",
    features: [
      "Natural language operations",
      "Script generation (PowerShell, Python, Terraform)",
      "VM & Kubernetes lifecycle management",
      "Basic monitoring & logging",
      "Per-use-case dashboards",
      "AI chat support"
    ],
    cta: "Start with Essentials",
    popular: false
  },
  {
    name: "Pro",
    price: "$50",
    period: "per managed resource/year",
    limit: "Up to 1,000 resources",
    description: "Advanced features for growing enterprise teams",
    features: [
      "Everything in Essentials",
      "Infrastructure provisioning",
      "Backup & disaster recovery integration",
      "Patching & upgrade orchestration",
      "RBAC and security configurations",
      "Enterprise SLA support"
    ],
    cta: "Choose Pro",
    popular: true
  },
  {
    name: "Enterprise AI",
    price: "$85",
    period: "per managed resource/year",
    limit: "5,000+ resources",
    description: "Full-featured solution for large enterprise environments",
    features: [
      "Everything in Pro",
      "Cost optimization & analytics",
      "Workload migration automation",
      "Multi-tenancy support",
      "Advanced analytics & reporting",
      "BYO-LLM support",
      "24x7 premium support",
      "Air-gapped deployment option",
      "FedRAMP compliance"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-20 md:py-28 px-6 md:px-8 lg:px-12">
        <div className="container max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed mb-8">
              Choose the plan that fits your infrastructure size and requirements. All plans include core AI-powered automation features.
            </p>
            <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-800 inline-block">
              <p className="text-sm text-neutral-400">
                <strong className="text-white">Managed Resources:</strong> VMs + Containers + Hosts + Storage Volumes + Network Segments
              </p>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card key={index} className={`glass-card hover:shadow-xl transition-all duration-300 relative ${plan.popular ? 'border-opsynth-600' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-opsynth-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-neutral-400 text-sm">{plan.period}</span>
                    </div>
                    <p className="text-opsynth-400 text-sm font-medium mt-1">{plan.limit}</p>
                  </div>
                  <CardDescription className="text-neutral-300">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-opsynth-400 flex-shrink-0" />
                        <span className="text-neutral-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-opsynth-600 hover:bg-opsynth-700' : 'bg-neutral-800 hover:bg-neutral-700'} text-white`}
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-neutral-950 rounded-lg p-8 border border-neutral-800">
              <h3 className="text-xl font-bold text-white mb-4">Deployment Options</h3>
              <ul className="space-y-2 text-neutral-300">
                <li>• <strong>SaaS:</strong> Fully managed cloud service</li>
                <li>• <strong>Cloud-Prem:</strong> Container in your VPC</li>
                <li>• <strong>On-Premises:</strong> Self-hosted with cloud connectivity</li>
                <li>• <strong>Air-Gapped:</strong> Complete offline deployment (Enterprise AI only)</li>
              </ul>
            </div>
            
            <div className="bg-neutral-950 rounded-lg p-8 border border-neutral-800">
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Add-ons</h3>
              <ul className="space-y-2 text-neutral-300">
                <li>• BYO-LLM support (OpenAI, Anthropic)</li>
                <li>• MSP multi-tenant licensing</li>
                <li>• Premium onboarding & training</li>
                <li>• Custom integration development</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-opsynth-600 to-accent1-600 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join the interest list to secure early access pricing and participate in our pilot program.
              </p>
              <Button size="lg" className="bg-white text-opsynth-600 hover:bg-white/90 px-8 py-4 font-semibold">
                <a href="https://forms.gle/KenQoq3VwLtZhSxk7" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Join Interest List <ArrowRight size={20} className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
