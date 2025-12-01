import { useState } from "react";
import { Dna } from "lucide-react";
import { motion } from "framer-motion";

interface AgentCardProps {
  id: string;
  name: string;
  generation: number;
  hp: number;
  xp: number;
  avatar: string;
  systemPrompt: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const AgentCard = ({ 
  id, 
  name, 
  generation, 
  hp, 
  xp, 
  avatar, 
  systemPrompt,
  isSelected = false,
  onClick 
}: AgentCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className={`relative h-80 cursor-pointer ${isSelected ? 'ring-4 ring-ditto glow-effect' : ''}`}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full card-glass-panel p-4 flex flex-col items-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div
            className="w-24 h-24 rounded-full blob-loader flex items-center justify-center mb-4"
            style={{ backgroundColor: avatar }}
          >
            <Dna className="text-white w-12 h-12" />
          </div>
          
          <h3 className="font-gameboy text-white text-xs mb-2 text-center truncate w-full">
            {name}
          </h3>
          
          <div className="font-mono text-xs text-gray-400 mb-4">
            ID: {id.slice(0, 8)}...
          </div>

          <div className="w-full space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-mono text-xs text-gray-400">HP</span>
              <span className="font-mono text-xs text-slime font-bold">{hp}</span>
            </div>
            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
              <div className="bg-slime h-full" style={{ width: `${hp}%` }}></div>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-mono text-xs text-gray-400">XP</span>
              <span className="font-mono text-xs text-shiny font-bold">{xp}</span>
            </div>
            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
              <div className="bg-shiny h-full" style={{ width: `${xp}%` }}></div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="font-mono text-xs text-gray-400">GEN</span>
              <span className="font-mono text-xs text-ditto font-bold">{generation}</span>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full bg-black border-2 border-slime p-4 overflow-hidden"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="font-mono text-slime text-[8px] leading-relaxed">
            <div className="text-xs mb-2 font-bold">&gt; SYSTEM_PROMPT</div>
            <pre className="whitespace-pre-wrap break-words">
              {systemPrompt.slice(0, 200)}...
            </pre>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AgentCard;
