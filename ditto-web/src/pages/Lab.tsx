import { useState, useEffect } from "react";
import { Dna, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import AgentCard from "@/components/AgentCard";
import { mockAgents, Agent } from "@/data/mockAgents";

const Lab = () => {
  const [selectedA, setSelectedA] = useState<Agent | null>(null);
  const [selectedB, setSelectedB] = useState<Agent | null>(null);
  const [isBreeding, setIsBreeding] = useState(false);
  const [consoleLines, setConsoleLines] = useState<string[]>([]);
  const userAgents = mockAgents.slice(0, 6);

  const handleBreed = async () => {
    if (!selectedA || !selectedB) return;
    
    setIsBreeding(true);
    setConsoleLines([]);
    
    // Console log animation
    const logs = [
      "> Initializing fusion chamber...",
      "> Analyzing parent genomes...",
      `> Parent A: ${selectedA.name} [GEN ${selectedA.generation}]`,
      `> Parent B: ${selectedB.name} [GEN ${selectedB.generation}]`,
      "> Computing compatibility matrix...",
      "> Compatibility: 89%",
      "> Merging system prompts...",
      "> Synthesizing DNA sequences...",
      "> Applying random mutations...",
      "> Calculating offspring traits...",
      "> Fusing genetic material...",
      "> [████████████████████] 100%",
      "> SUCCESS! New agent created.",
      `> Generation: ${Math.max(selectedA.generation, selectedB.generation) + 1}`,
      "> Writing to blockchain...",
      "> Transaction confirmed.",
      "> 🧬 FUSION COMPLETE"
    ];

    for (let i = 0; i < logs.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 300));
      setConsoleLines(prev => [...prev, logs[i]]);
    }

    setTimeout(() => {
      toast.success("🎉 Agent successfully bred!", {
        description: "Your new mutant is ready to explore."
      });
      setIsBreeding(false);
      setSelectedA(null);
      setSelectedB(null);
      setConsoleLines([]);
    }, 1000);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-gameboy text-white text-xl md:text-2xl mb-2">
            🧬 BREEDING LAB
          </h1>
          <p className="font-mono text-xs text-gray-400">
            Select two agents to initiate fusion
          </p>
        </div>

        {/* Fusion Chamber */}
        <div className="card-glass-panel p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            {/* Slot A */}
            <motion.div
              className={`w-64 h-80 border-4 border-dashed rounded-lg flex items-center justify-center ${
                selectedA ? 'border-ditto' : 'border-gray-600'
              }`}
              whileHover={{ scale: selectedA ? 1 : 1.02 }}
            >
              {selectedA ? (
                <div className="scale-90">
                  <AgentCard {...selectedA} isSelected />
                </div>
              ) : (
                <div className="text-center">
                  <Dna className="text-gray-600 w-16 h-16 mx-auto mb-4" />
                  <p className="font-gameboy text-xs text-gray-600">SELECT<br />AGENT A</p>
                </div>
              )}
            </motion.div>

            {/* DNA Helix Animation */}
            <motion.div
              animate={{ 
                rotate: isBreeding ? 360 : 0,
                scale: isBreeding ? [1, 1.2, 1] : 1
              }}
              transition={{ 
                rotate: { duration: 2, repeat: isBreeding ? Infinity : 0, ease: "linear" },
                scale: { duration: 0.5, repeat: isBreeding ? Infinity : 0 }
              }}
            >
              <Dna className={`w-16 h-16 ${isBreeding ? 'text-slime' : 'text-ditto'}`} />
            </motion.div>

            {/* Slot B */}
            <motion.div
              className={`w-64 h-80 border-4 border-dashed rounded-lg flex items-center justify-center ${
                selectedB ? 'border-shiny' : 'border-gray-600'
              }`}
              whileHover={{ scale: selectedB ? 1 : 1.02 }}
            >
              {selectedB ? (
                <div className="scale-90">
                  <AgentCard {...selectedB} isSelected />
                </div>
              ) : (
                <div className="text-center">
                  <Sparkles className="text-gray-600 w-16 h-16 mx-auto mb-4" />
                  <p className="font-gameboy text-xs text-gray-600">SELECT<br />AGENT B</p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Breed Button */}
          <div className="text-center">
            <Button
              onClick={handleBreed}
              disabled={!selectedA || !selectedB || isBreeding}
              className={`font-gameboy text-xs px-8 py-6 ${
                selectedA && selectedB && !isBreeding
                  ? 'bg-ditto hover:bg-ditto/90 text-white glow-effect'
                  : 'bg-gray-700 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isBreeding ? 'FUSING...' : 'INITIATE FUSION'}
            </Button>
          </div>
        </div>

        {/* Console Log Terminal */}
        {consoleLines.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black border-2 border-slime rounded-lg p-4 mb-8 h-64 overflow-y-auto"
          >
            {consoleLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="font-mono text-slime text-xs mb-1"
              >
                {line}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Your Agents */}
        <div>
          <h2 className="font-gameboy text-white text-sm mb-4">YOUR AGENTS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {userAgents.map(agent => (
              <div
                key={agent.id}
                onClick={() => {
                  if (isBreeding) return;
                  if (!selectedA) {
                    setSelectedA(agent);
                  } else if (!selectedB && agent.id !== selectedA.id) {
                    setSelectedB(agent);
                  } else if (selectedA.id === agent.id) {
                    setSelectedA(null);
                  } else if (selectedB?.id === agent.id) {
                    setSelectedB(null);
                  }
                }}
                className="cursor-pointer"
              >
                <AgentCard
                  {...agent}
                  isSelected={selectedA?.id === agent.id || selectedB?.id === agent.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lab;
