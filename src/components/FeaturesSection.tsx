
import { AlertCircle, BarChart2, MessageSquare, Search, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <AlertCircle className="h-10 w-10 text-opsara-600" />,
    title: "Intelligent Alert Triage",
    description:
      "Automatically correlate and summarize alerts across your monitoring stack to identify root causes faster.",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-opsara-600" />,
    title: "Conversation Analysis",
    description:
      "Extract key insights from Slack war rooms, tickets, and RCA threads to keep everyone aligned during incidents.",
  },
  {
    icon: <Search className="h-10 w-10 text-opsara-600" />,
    title: "Knowledge Retrieval",
    description:
      "Search across your runbooks, docs, and past incident history to surface relevant information during outages.",
  },
  {
    icon: <Zap className="h-10 w-10 text-opsara-600" />,
    title: "Rapid Response",
    description:
      "Generate actionable recommendations and playbooks based on historical data and current system state.",
  },
  {
    icon: <BarChart2 className="h-10 w-10 text-opsara-600" />,
    title: "Impact Analysis",
    description:
      "Estimate business impact and prioritize incidents based on affected services, customers, and revenue.",
  },
  {
    icon: <Shield className="h-10 w-10 text-opsara-600" />,
    title: "Secure By Design",
    description:
      "Enterprise-grade security with data residency options, SSO, and role-based access controls.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 px-6 md:px-8 lg:px-12 bg-neutral-50 dark:bg-neutral-900">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Less chaos, more clarity</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Opsara acts as your always-on command center, helping you cut through the noise and focus on what matters during critical incidents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-neutral-200 dark:border-neutral-800 bg-card hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-600 dark:text-neutral-400 text-base">
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
