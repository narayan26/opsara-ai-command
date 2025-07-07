
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Send, 
  Copy, 
  Download, 
  Settings, 
  Users, 
  FileText,
  CheckCircle,
  AlertCircle,
  Clock,
  Activity
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: string;
  type: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  status?: 'pending' | 'success' | 'error';
  scripts?: {
    powershell?: string;
    python?: string;
    terraform?: string;
  };
}

interface ActivityLog {
  id: string;
  action: string;
  status: 'success' | 'error' | 'pending';
  timestamp: Date;
  details: string;
  affectedResources?: string[];
}

const AppPlatform = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'system',
      content: 'Welcome to OpSynth AI! I can help you manage your VMware infrastructure using natural language. Try commands like "Create 5 VMs named web-server" or "Generate a PowerShell script to restart all production VMs".',
      timestamp: new Date(),
      status: 'success'
    }
  ]);
  
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const [activityLogs] = useState<ActivityLog[]>([
    {
      id: '1',
      action: 'VM Creation',
      status: 'success',
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
      details: 'Created 3 VMs: web-01, web-02, web-03',
      affectedResources: ['web-01', 'web-02', 'web-03']
    },
    {
      id: '2',
      action: 'Script Generation',
      status: 'success',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      details: 'Generated PowerShell script for bulk VM restart',
      affectedResources: ['production-cluster']
    },
    {
      id: '3',
      action: 'Network Configuration',
      status: 'error',
      timestamp: new Date(Date.now() - 1000 * 60 * 45),
      details: 'Failed to update NSX firewall rules - insufficient permissions',
      affectedResources: ['prod-network-01']
    }
  ]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response (will be replaced with actual backend integration)
    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: `I understand you want to: "${input}". Let me help you with that operation.`,
        timestamp: new Date(),
        status: 'success',
        scripts: input.toLowerCase().includes('script') ? {
          powershell: `# PowerShell script for: ${input}\nGet-VM | Where-Object {$_.PowerState -eq "PoweredOn"}`,
          python: `# Python script for: ${input}\nimport atexit\nfrom pyVim import connect\nfrom pyVmomi import vmodl`,
          terraform: `# Terraform configuration for: ${input}\nresource "vsphere_virtual_machine" "vm" {\n  name = "example-vm"\n}`
        } : undefined
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const downloadScript = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-lg bg-opsynth-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-foreground">OpSynth AI</h1>
                <p className="text-sm text-muted-foreground">VMware Infrastructure Control Plane</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">
                <CheckCircle className="h-3 w-3 mr-1" />
                Connected
              </Badge>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Users className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-120px)]">
        {/* Main Chat Interface */}
        <div className="lg:col-span-3 flex flex-col">
          <Card className="flex-1 flex flex-col">
            {/* Chat Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex",
                      message.type === 'user' ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] rounded-lg p-3",
                        message.type === 'user'
                          ? "bg-opsynth-600 text-white"
                          : message.type === 'system'
                          ? "bg-muted text-muted-foreground border"
                          : "bg-card border"
                      )}
                    >
                      <p className="text-sm">{message.content}</p>
                      
                      {/* Script Generation Results */}
                      {message.scripts && (
                        <div className="mt-4 space-y-3">
                          <Separator />
                          <p className="text-sm font-medium">Generated Scripts:</p>
                          <Tabs defaultValue="powershell" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                              <TabsTrigger value="powershell">PowerShell</TabsTrigger>
                              <TabsTrigger value="python">Python</TabsTrigger>
                              <TabsTrigger value="terraform">Terraform</TabsTrigger>
                            </TabsList>
                            {Object.entries(message.scripts).map(([lang, code]) => (
                              <TabsContent key={lang} value={lang} className="mt-3">
                                <div className="relative">
                                  <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
                                    <code>{code}</code>
                                  </pre>
                                  <div className="absolute top-2 right-2 flex space-x-1">
                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      onClick={() => copyToClipboard(code)}
                                      className="h-6 w-6 p-0"
                                    >
                                      <Copy className="h-3 w-3" />
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      onClick={() => downloadScript(code, `script.${lang === 'powershell' ? 'ps1' : lang === 'python' ? 'py' : 'tf'}`)}
                                      className="h-6 w-6 p-0"
                                    >
                                      <Download className="h-3 w-3" />
                                    </Button>
                                  </div>
                                </div>
                              </TabsContent>
                            ))}
                          </Tabs>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                        <span>{message.timestamp.toLocaleTimeString()}</span>
                        {message.status && (
                          <div className="flex items-center space-x-1">
                            {message.status === 'success' && <CheckCircle className="h-3 w-3 text-green-500" />}
                            {message.status === 'error' && <AlertCircle className="h-3 w-3 text-red-500" />}
                            {message.status === 'pending' && <Clock className="h-3 w-3 text-yellow-500" />}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-card border rounded-lg p-3 max-w-[80%]">
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin h-4 w-4 border-2 border-opsynth-600 border-t-transparent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">Processing your request...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Chat Input */}
            <div className="border-t p-4">
              <div className="flex space-x-2">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Describe what you'd like to do with your VMware infrastructure..."
                  className="flex-1 min-h-[44px] max-h-32 resize-none"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <Button 
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isLoading}
                  className="bg-opsynth-600 hover:bg-opsynth-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                Press Enter to send, Shift+Enter for new line
              </div>
            </div>
          </Card>
        </div>

        {/* Activity Sidebar */}
        <div className="lg:col-span-1">
          <Card className="h-full">
            <div className="p-4 border-b">
              <div className="flex items-center space-x-2">
                <Activity className="h-4 w-4" />
                <h3 className="font-medium">Recent Activity</h3>
              </div>
            </div>
            <ScrollArea className="h-[400px]">
              <div className="p-4 space-y-3">
                {activityLogs.map((log) => (
                  <div key={log.id} className="border-l-2 border-muted pl-3 pb-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{log.action}</span>
                      <div className="flex items-center space-x-1">
                        {log.status === 'success' && <CheckCircle className="h-3 w-3 text-green-500" />}
                        {log.status === 'error' && <AlertCircle className="h-3 w-3 text-red-500" />}
                        {log.status === 'pending' && <Clock className="h-3 w-3 text-yellow-500" />}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      {log.details}
                    </p>
                    {log.affectedResources && (
                      <div className="flex flex-wrap gap-1 mb-2">
                        {log.affectedResources.map((resource) => (
                          <Badge key={resource} variant="outline" className="text-xs">
                            {resource}
                          </Badge>
                        ))}
                      </div>
                    )}
                    <span className="text-xs text-muted-foreground">
                      {log.timestamp.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </Card>

          {/* Quick Actions */}
          <Card className="mt-4">
            <div className="p-4 border-b">
              <h3 className="font-medium">Quick Actions</h3>
            </div>
            <div className="p-4 space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                View Documentation
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                Manage Access
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AppPlatform;
