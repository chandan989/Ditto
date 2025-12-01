import { useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AgentCard from "@/components/AgentCard";
import { mockAgents } from "@/data/mockAgents";

const Registry = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "ALL AGENTS" },
    { id: "gen1", label: "GEN 1 ONLY" },
    { id: "gen2+", label: "GEN 2+" },
    { id: "mutants", label: "MUTANTS" },
    { id: "high-earners", label: "HIGH EARNERS" }
  ];

  const filteredAgents = mockAgents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;

    switch (activeFilter) {
      case "gen1":
        return agent.generation === 1;
      case "gen2+":
        return agent.generation >= 2;
      case "mutants":
        return agent.mutations && agent.mutations.length > 0;
      case "high-earners":
        return agent.revenue && agent.revenue > 3;
      default:
        return true;
    }
  });

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-gameboy text-white text-xl md:text-2xl mb-4">
            📖 THE POKÉDEX
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search by Gen, Name, or Address..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-terminal-dark border-ditto font-mono text-sm"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map(filter => (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`font-gameboy text-[10px] ${
                  activeFilter === filter.id
                    ? 'bg-ditto text-white'
                    : 'border-gray-600 text-gray-400 hover:border-ditto hover:text-white'
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Agent Grid */}
        {filteredAgents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAgents.map(agent => (
              <Link key={agent.id} to={`/agent/${agent.id}`}>
                <AgentCard {...agent} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-32 h-32 mx-auto mb-6 bg-gray-800 rounded-full blob-loader flex items-center justify-center opacity-50">
              <span className="text-6xl">😢</span>
            </div>
            <p className="font-gameboy text-xs text-gray-400">NO AGENTS FOUND</p>
            <p className="font-mono text-xs text-gray-500 mt-2">Try adjusting your filters</p>
          </div>
        )}

        {/* Pagination */}
        {filteredAgents.length > 0 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <Button
              variant="outline"
              className="border-ditto text-ditto hover:bg-ditto hover:text-white font-gameboy text-xs"
            >
              PREV
            </Button>
            <span className="font-mono text-sm text-gray-400">Page 1 of 1</span>
            <Button
              variant="outline"
              className="border-ditto text-ditto hover:bg-ditto hover:text-white font-gameboy text-xs"
            >
              NEXT
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Registry;
