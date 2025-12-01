import { useState } from "react";
import { Link } from "react-router-dom";
import { Edit2, DollarSign, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import AgentCard from "@/components/AgentCard";
import { getUserAgents } from "@/data/mockAgents";

const Daycare = () => {
  const userAgents = getUserAgents("0xUSER");
  const [selectedAgents, setSelectedAgents] = useState<Set<string>>(new Set());
  const [renamingAgent, setRenamingAgent] = useState<string | null>(null);
  const [newName, setNewName] = useState("");

  const toggleSelect = (id: string) => {
    const newSet = new Set(selectedAgents);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedAgents(newSet);
  };

  const handleRename = (agentId: string) => {
    if (!newName.trim()) return;
    toast.success(`Agent renamed to: ${newName}`);
    setRenamingAgent(null);
    setNewName("");
  };

  const handleClaimRevenue = (agentId: string, amount: number) => {
    toast.success(`Claimed ${amount} ETH from agent!`);
  };

  const handleClaimAll = () => {
    const total = userAgents.reduce((sum, agent) => sum + (agent.revenue || 0), 0);
    toast.success(`Claimed ${total.toFixed(2)} ETH from all agents!`);
  };

  const totalRevenue = userAgents.reduce((sum, agent) => sum + (agent.revenue || 0), 0);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-gameboy text-white text-xl md:text-2xl mb-2">
            🏠 DAY CARE
          </h1>
          <p className="font-mono text-xs text-gray-400">
            Manage your agent collection
          </p>
        </div>

        {/* Revenue Summary */}
        <div className="card-glass-panel p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <div className="text-xs text-gray-400 font-mono mb-1">TOTAL UNCLAIMED REVENUE</div>
              <div className="font-mono text-3xl text-slime font-bold">
                {totalRevenue.toFixed(2)} ETH
              </div>
            </div>
            <Button
              onClick={handleClaimAll}
              className="bg-slime hover:bg-slime/90 text-black font-gameboy text-xs px-8 py-4"
            >
              CLAIM ALL REVENUE
            </Button>
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedAgents.size > 0 && (
          <div className="card-glass-panel p-4 mb-6 flex justify-between items-center">
            <span className="font-mono text-sm text-white">
              {selectedAgents.size} agent(s) selected
            </span>
            <div className="flex gap-2">
              <Button
                disabled={selectedAgents.size !== 2}
                className="bg-ditto hover:bg-ditto/90 text-white font-gameboy text-xs"
              >
                BREED SELECTED
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-400 font-gameboy text-xs"
              >
                EXPORT DATA
              </Button>
            </div>
          </div>
        )}

        {/* Agent List */}
        <div className="space-y-4">
          {userAgents.map(agent => (
            <div key={agent.id} className="card-glass-panel p-4">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                {/* Checkbox */}
                <input
                  type="checkbox"
                  checked={selectedAgents.has(agent.id)}
                  onChange={() => toggleSelect(agent.id)}
                  className="w-5 h-5 accent-ditto cursor-pointer"
                />

                {/* Agent Mini Card */}
                <div className="flex-1 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div
                    className="w-16 h-16 rounded-full blob-loader flex items-center justify-center shrink-0"
                    style={{ backgroundColor: agent.avatar }}
                  >
                    <span className="text-2xl">🧬</span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-gameboy text-xs text-white mb-1">{agent.name}</h3>
                    <div className="font-mono text-xs text-gray-400">
                      {agent.id} • Gen {agent.generation}
                    </div>
                    {agent.revenue && (
                      <div className="font-mono text-xs text-slime mt-1">
                        💰 {agent.revenue} ETH unclaimed
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 flex-wrap">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-400 hover:border-shiny hover:text-shiny"
                        onClick={() => {
                          setRenamingAgent(agent.id);
                          setNewName(agent.name);
                        }}
                      >
                        <Edit2 className="w-4 h-4 mr-1" />
                        Rename
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-terminal border-2 border-ditto">
                      <DialogHeader>
                        <DialogTitle className="font-gameboy text-sm text-white">
                          RENAME AGENT
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <Input
                          value={newName}
                          onChange={(e) => setNewName(e.target.value)}
                          placeholder="Enter new name..."
                          className="bg-terminal-dark border-ditto font-mono"
                        />
                        <Button
                          onClick={() => handleRename(agent.id)}
                          className="w-full bg-ditto hover:bg-ditto/90 text-white font-gameboy text-xs"
                        >
                          CONFIRM
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Link to={`/agent/${agent.id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-400 hover:border-shiny hover:text-shiny"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                  </Link>

                  <Link to="/lab">
                    <Button
                      size="sm"
                      className="bg-ditto hover:bg-ditto/90 text-white font-mono text-xs"
                    >
                      Breed
                    </Button>
                  </Link>

                  {agent.revenue && agent.revenue > 0 && (
                    <Button
                      size="sm"
                      onClick={() => handleClaimRevenue(agent.id, agent.revenue!)}
                      className="bg-slime hover:bg-slime/90 text-black font-mono text-xs"
                    >
                      <DollarSign className="w-4 h-4 mr-1" />
                      Claim {agent.revenue}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Daycare;
