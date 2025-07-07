
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Mail, Rocket, Code, Plane } from "lucide-react";

const JobListings = () => {
  const jobs = [
    {
      id: 1,
      title: "Technical Lead – AI Infrastructure Platform",
      location: "San Francisco Bay Area",
      type: "Full-time",
      workMode: "Hybrid (3 days in office)",
      icon: <Rocket className="h-6 w-6 text-opsynth-400" />,
      description: "Lead the development of OpSynth's core AI infrastructure platform. Work directly with founders to architect and build the next generation of agentic control systems for enterprise infrastructure.",
      requirements: [
        "8+ years building distributed systems, cloud platforms, or enterprise infrastructure software",
        "2+ years experience working with AI technology (LLMs, Agents, RAG, etc.)",
        "Strong expertise in Python, Kubernetes, Docker, and cloud-native architectures",
        "Experience with infrastructure platforms like VMware, Nutanix, or public cloud providers",
        "Track record of leading technical teams and driving complex projects to completion"
      ],
      responsibilities: [
        "Architect and lead development of OpSynth's agentic platform and AI control plane",
        "Build scalable, multi-tenant services that connect AI agents to real infrastructure systems",
        "Lead integration efforts across VMware vSphere, NSX, Nutanix Prism, and cloud providers",
        "Drive technical strategy for LLM-powered automation and natural language interfaces",
        "Mentor engineering team and establish technical best practices"
      ],
      bonusPoints: [
        "Experience building agentic platforms, AI-driven infrastructure tools, or MLOps systems",
        "Deep knowledge of LLM frameworks, multi-agent orchestration, or enterprise AI platforms",
        "Background in infrastructure automation, control planes, or developer tooling"
      ]
    },
    {
      id: 2,
      title: "Technical Lead – Infrastructure Intelligence",
      location: "Bangalore, Chennai, Pune, or Hyderabad",
      type: "Full-time",
      workMode: "Hybrid or Remote",
      icon: <Rocket className="h-6 w-6 text-opsynth-400" />,
      description: "Lead the technical architecture of OpSynth's HybridInfraGraph and MCP services. Work directly with founders to shape our agentic platform and AI-powered infrastructure control plane.",
      requirements: [
        "6+ years building distributed systems or enterprise platforms",
        "1+ years experience working with AI technology (LLMs, Agents, RAG, etc.)",
        "Strong experience with Python, Kubernetes, Docker, and cloud-native design",
        "Prior experience with VMware, Nutanix, or enterprise DevOps platforms",
        "Familiarity with public clouds (AWS, Azure, GCP) and API integration patterns"
      ],
      responsibilities: [
        "Design and lead development of scalable, multi-tenant control plane services",
        "Build agentic platform components that connect AI agents to real infrastructure systems",
        "Develop integrations across APIs from vSphere, NSX, Nutanix Prism, and cloud providers", 
        "Work on LLM-powered automation flows and natural language interfaces",
        "Mentor engineers and contribute to hiring our India-based technical team"
      ],
      bonusPoints: [
        "Experience building agentic platforms, control planes, or AI-driven interfaces",
        "Deep knowledge of LLM frameworks, RAG systems, or multi-agent orchestration",
        "Contributions to open-source projects related to infrastructure or ML tooling"
      ]
    },
    {
      id: 3,
      title: "Software Engineer – LLM + Infrastructure Automation",
      location: "Bangalore, Chennai, Pune, or Hyderabad", 
      type: "Full-time",
      workMode: "Hybrid or Remote",
      icon: <Code className="h-6 w-6 text-opsynth-400" />,
      description: "Build core components of OpSynth's agentic control and automation layer. Connect AI agents to real enterprise systems and drive intelligent operational workflows.",
      requirements: [
        "2–5 years of backend development experience in fast-paced environments",
        "1+ years experience working with AI technology (LLMs, Agents, RAG, etc.)",
        "Proficiency in Python and familiarity with REST APIs and automation tooling",
        "Experience with containerized services (Docker, Kubernetes)",
        "Exposure to infrastructure platforms (VMware, Nutanix, HPE, or public cloud)"
      ],
      responsibilities: [
        "Build APIs and containerized services that interact with infrastructure control planes",
        "Develop agentic platform services that enable AI agents to perform real infrastructure operations",
        "Contribute to MCP (Model Context Protocol) services for VMware, Nutanix, and cloud providers",
        "Implement backend workflows that drive LLM-based operational insights and automation",
        "Write high-quality, testable Python code and ship production features quickly"
      ],
      bonusPoints: [
        "Experience with agentic platforms, LLM frameworks, or embedding pipelines",
        "Knowledge of RAG systems, multi-agent workflows, or prompt engineering",
        "Projects involving hybrid cloud, multi-vendor systems, or infrastructure monitoring"
      ]
    },
    {
      id: 4,
      title: "Forward Deployed Engineer – VMware Infrastructure",
      location: "Anywhere in the U.S.",
      type: "Full-time",
      workMode: "Remote or Hybrid • Up to 50% travel",
      icon: <Plane className="h-6 w-6 text-opsynth-400" />,
      description: "Lead deployments of OpSynth's platform into enterprise environments. Be hands-on with complex hybrid environments and act as a trusted technical advisor to customers.",
      requirements: [
        "15+ years of experience in infrastructure engineering, enterprise architecture, or platform/SRE roles",
        "Deep hands-on expertise with VMware stack: vSphere, vSAN, NSX, vCenter",
        "Experience with automation frameworks: PowerCLI, Python (PyVMOMI), Ansible, or similar",
        "Prior role as a VMware solution architect, field engineer, or hands-on IT infrastructure leader",
        "Strong understanding of hybrid and multi-cloud architectures"
      ],
      responsibilities: [
        "Lead deployment and integration of OpSynth in complex VMware environments (vSphere, vSAN, NSX)",
        "Customize automation workflows using PowerCLI, PyVMOMI, and VMware API layers (SOAP, REST)",
        "Interface with customer architects and SRE/DevOps teams to accelerate time to value",
        "Build scripts, Terraform modules, or lightweight integrations as needed",
        "Travel to enterprise sites (up to 50%) to drive adoption and provide architecture guidance"
      ],
      bonusPoints: [
        "Startup experience or comfort working in unstructured, high-autonomy environments",
        "Familiarity with LLM-powered or AI-driven operational tooling",
        "Exposure to other platforms like Nutanix, HPE GreenLake, Dell APEX"
      ]
    }
  ];

  return (
    <section id="job-openings" className="py-16 px-6 md:px-8 lg:px-12">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Open Positions</h2>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
            We're looking for exceptional engineers to join our mission of transforming enterprise infrastructure operations through AI.
          </p>
        </div>

        <div className="space-y-12">
          {jobs.map((job) => (
            <Card key={job.id} className="border border-neutral-800 bg-neutral-900/30 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-opsynth-600/10 border border-opsynth-600/20">
                      {job.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-3 text-sm text-neutral-400">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.type} • {job.workMode}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base mt-4">
                  {job.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-8">
                {/* About OpSynth Section */}
                <div className="p-6 rounded-lg bg-neutral-950/50 border border-neutral-800">
                  <h4 className="text-lg font-semibold mb-3 text-opsynth-400">About OpSynth</h4>
                  <p className="text-neutral-300 leading-relaxed">
                    OpSynth is building the <strong>AI Control Plane for Hybrid Cloud</strong>. Our mission is to simplify how enterprise infrastructure is controlled, observed, and automated — through a secure, multi-vendor agentic platform powered by LLMs and contextual intelligence.
                  </p>
                  <p className="text-neutral-300 leading-relaxed mt-3">
                    We're a seed-stage startup founded by veterans from VMware, Salesforce, and the OpenAI ecosystem. We integrate with platforms like VMware, Nutanix, and NVIDIA-powered clusters, unifying fragmented operational interfaces with intelligent agents and automation workflows.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">What You'll Do</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start gap-2 text-neutral-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-opsynth-400 mt-2 flex-shrink-0"></div>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4">What We're Looking For</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start gap-2 text-neutral-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-opsynth-400 mt-2 flex-shrink-0"></div>
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Bonus Points</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.bonusPoints.map((bonus, index) => (
                      <Badge key={index} variant="outline" className="border-opsynth-600/30 text-opsynth-300 bg-opsynth-600/5">
                        {bonus}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-gradient-to-r from-opsynth-600/10 to-accent/10 border border-opsynth-600/20">
                  <h4 className="text-lg font-semibold mb-3">Why Join Us</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-neutral-300">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-opsynth-400"></div>
                      <span>Build the agentic control plane for hybrid enterprise infrastructure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-opsynth-400"></div>
                      <span>Work with a globally distributed, high-caliber founding team</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-opsynth-400"></div>
                      <span>Competitive equity and ownership from the ground up</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-opsynth-400"></div>
                      <span>Influence product, architecture, and culture directly</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center pt-4 border-t border-neutral-800">
                  <div className="text-sm text-neutral-400 text-center">
                    <span>Send your LinkedIn profile, GitHub handle and resume to: </span>
                    <a href="mailto:jobs@opsynth.ai" className="text-opsynth-400 hover:text-opsynth-300 transition-colors">
                      jobs@opsynth.ai
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 p-8 rounded-xl bg-neutral-900/50 border border-neutral-800">
          <h3 className="text-2xl font-semibold mb-4">Don't See the Right Role?</h3>
          <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
            We're always looking for exceptional talent. If you're passionate about AI and infrastructure, we'd love to hear from you.
          </p>
          <Button 
            variant="outline" 
            className="border-opsynth-600/30 text-opsynth-300 hover:bg-opsynth-600/10"
            onClick={() => window.open('mailto:jobs@opsynth.ai?subject=General Interest - OpSynth Careers', '_blank')}
          >
            <Mail className="h-4 w-4 mr-2" />
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobListings;
