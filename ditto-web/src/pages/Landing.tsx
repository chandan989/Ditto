import { Link } from "react-router-dom";
import { Dna, Zap, Sparkles, GitBranch } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Button } from "@/components/ui/button";
import AgentCard from "@/components/AgentCard";
import { mockAgents } from "@/data/mockAgents";

const Landing = () => {
  const featuredAgents = mockAgents.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(#A756D8 1px, transparent 1px),
              linear-gradient(90deg, #A756D8 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* Floating Blob Logo */}
            <motion.div
              className="w-32 h-32 mx-auto mb-8 bg-ditto rounded-full blob-loader flex items-center justify-center glow-effect"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Dna className="text-white w-16 h-16" />
            </motion.div>

            <h1 className="font-gameboy text-white text-2xl sm:text-3xl md:text-4xl mb-6 uppercase leading-relaxed">
              BIOLOGICAL SOFTWARE<br />EVOLUTION
            </h1>
            
            <p className="font-mono text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-8">
              Mint code-based lifeforms. Breed agents to mutate smart contracts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/lab">
                <Button className="bg-ditto hover:bg-ditto/90 text-white font-gameboy text-xs px-8 py-6 glow-effect">
                  ENTER THE LAB
                </Button>
              </Link>
              <Link to="/registry">
                <Button variant="outline" className="border-shiny text-shiny hover:bg-shiny hover:text-black font-gameboy text-xs px-8 py-6">
                  VIEW POKEDEX
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "AGENTS BORN", value: 1247, color: "ditto" },
              { label: "BREEDING PAIRS", value: 384, color: "shiny" },
              { label: "ETH DISTRIBUTED", value: 127.5, color: "slime", suffix: " ETH" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="card-glass-panel p-6 text-center"
              >
                <div className={`font-mono text-4xl font-bold mb-2 text-${stat.color}`}>
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    decimals={stat.suffix ? 1 : 0}
                    suffix={stat.suffix || ""}
                  />
                </div>
                <div className="font-gameboy text-xs text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="font-gameboy text-white text-xl md:text-2xl text-center mb-12">
            HOW IT WORKS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sparkles,
                title: "SCOUTING",
                desc: "Discover unique AI agents with specialized genetic code"
              },
              {
                icon: Dna,
                title: "BREEDING",
                desc: "Fuse two agents to create mutated offspring with combined traits"
              },
              {
                icon: Zap,
                title: "HATCHING",
                desc: "Watch your new agent emerge with evolved capabilities"
              },
              {
                icon: GitBranch,
                title: "LINEAGE",
                desc: "Track family trees and mutation chains across generations"
              }
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass-panel p-6 text-center hover:border-shiny transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-ditto/20 rounded-full flex items-center justify-center">
                  <step.icon className="text-ditto w-8 h-8" />
                </div>
                <h3 className="font-gameboy text-xs text-white mb-3">{step.title}</h3>
                <p className="font-mono text-xs text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Agents Carousel */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="font-gameboy text-white text-xl md:text-2xl text-center mb-12">
            FEATURED AGENTS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {featuredAgents.map((agent, i) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/agent/${agent.id}`}>
                  <AgentCard {...agent} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t-2 border-ditto/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-ditto rounded-full blob-loader flex items-center justify-center">
                <Dna className="text-white w-5 h-5" />
              </div>
              <span className="font-gameboy text-ditto text-xs">TRANSFORM</span>
            </div>

            <div className="flex gap-6 font-mono text-xs text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Docs</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Discord</a>
            </div>

            <div className="font-mono text-xs text-gray-400">
              Built on <span className="text-shiny">Base</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
