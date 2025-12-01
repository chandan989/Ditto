import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Dna, TrendingUp, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAgentById, mockAgents } from "@/data/mockAgents";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const AgentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const agent = getAgentById(id || "");

  if (!agent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-gameboy text-2xl text-white mb-4">AGENT NOT FOUND</h1>
          <Link to="/registry">
            <Button className="bg-ditto text-white font-gameboy text-xs">
              BACK TO REGISTRY
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const revenueData = [
    { day: "Mon", eth: 0.3 },
    { day: "Tue", eth: 0.5 },
    { day: "Wed", eth: 0.7 },
    { day: "Thu", eth: 1.1 },
    { day: "Fri", eth: 1.6 },
    { day: "Sat", eth: 2.2 },
    { day: "Sun", eth: agent.revenue || 0 }
  ];

  const parentA = agent.parentA ? getAgentById(agent.parentA) : null;
  const parentB = agent.parentB ? getAgentById(agent.parentB) : null;

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <Button
          onClick={() => navigate(-1)}
          variant="ghost"
          className="mb-6 text-gray-400 hover:text-white font-mono"
        >
          <ArrowLeft className="mr-2" /> BACK
        </Button>

        {/* Hero Section */}
        <div className="card-glass-panel p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div
              className="w-48 h-48 rounded-full blob-loader flex items-center justify-center shrink-0"
              style={{ backgroundColor: agent.avatar }}
            >
              <Dna className="text-white w-24 h-24" />
            </div>

            <div className="flex-1">
              <h1 className="font-gameboy text-2xl text-white mb-4">{agent.name}</h1>
              <div className="font-mono text-sm text-gray-400 mb-6">
                <div>ID: {agent.id}</div>
                <div>Generation: {agent.generation}</div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-xs text-gray-400 font-mono mb-2">HP</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-800 h-4 rounded-full overflow-hidden">
                      <div className="bg-slime h-full" style={{ width: `${agent.hp}%` }}></div>
                    </div>
                    <span className="font-mono text-sm text-slime font-bold">{agent.hp}</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-mono mb-2">XP</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-800 h-4 rounded-full overflow-hidden">
                      <div className="bg-shiny h-full" style={{ width: `${agent.xp}%` }}></div>
                    </div>
                    <span className="font-mono text-sm text-shiny font-bold">{agent.xp}</span>
                  </div>
                </div>
              </div>

              {agent.mutations && agent.mutations.length > 0 && (
                <div>
                  <div className="text-xs text-gray-400 font-mono mb-2">MUTATIONS</div>
                  <div className="flex flex-wrap gap-2">
                    {agent.mutations.map(mutation => (
                      <span
                        key={mutation}
                        className="px-3 py-1 bg-slime/20 border border-slime text-slime text-xs font-mono rounded"
                      >
                        {mutation}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* System Prompt */}
        <div className="card-glass-panel p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Dna className="text-ditto w-5 h-5" />
            <h2 className="font-gameboy text-sm text-white">GENETIC CODE</h2>
          </div>
          <div className="bg-black border border-slime p-4 rounded">
            <pre className="font-mono text-slime text-xs whitespace-pre-wrap">
              {agent.systemPrompt}
            </pre>
          </div>
        </div>

        {/* Revenue Chart */}
        {agent.revenue && (
          <div className="card-glass-panel p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="text-slime w-5 h-5" />
              <h2 className="font-gameboy text-sm text-white">REVENUE PERFORMANCE</h2>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="day" stroke="#888" style={{ fontSize: '12px' }} />
                  <YAxis stroke="#888" style={{ fontSize: '12px' }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#18181B', border: '1px solid #4CFA72' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Line type="monotone" dataKey="eth" stroke="#4CFA72" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center mt-4">
              <span className="font-mono text-2xl text-slime font-bold">{agent.revenue} ETH</span>
              <span className="font-mono text-xs text-gray-400 ml-2">Total Revenue</span>
            </div>
          </div>
        )}

        {/* Family Tree */}
        {(parentA || parentB) && (
          <div className="card-glass-panel p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <GitBranch className="text-shiny w-5 h-5" />
              <h2 className="font-gameboy text-sm text-white">LINEAGE</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {parentA && (
                <Link to={`/agent/${parentA.id}`}>
                  <div className="bg-terminal-dark border-2 border-ditto p-4 rounded hover:border-shiny transition-all">
                    <div className="text-xs text-gray-400 font-mono mb-2">PARENT A</div>
                    <div className="font-gameboy text-xs text-white">{parentA.name}</div>
                  </div>
                </Link>
              )}
              {parentB && (
                <Link to={`/agent/${parentB.id}`}>
                  <div className="bg-terminal-dark border-2 border-ditto p-4 rounded hover:border-shiny transition-all">
                    <div className="text-xs text-gray-400 font-mono mb-2">PARENT B</div>
                    <div className="font-gameboy text-xs text-white">{parentB.name}</div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-4 justify-center">
          <Link to="/lab">
            <Button className="bg-ditto hover:bg-ditto/90 text-white font-gameboy text-xs px-8 py-6">
              USE IN BREEDING
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AgentDetail;
