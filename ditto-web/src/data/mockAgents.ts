export interface Agent {
  id: string;
  name: string;
  generation: number;
  hp: number;
  xp: number;
  avatar: string;
  systemPrompt: string;
  parentA?: string;
  parentB?: string;
  revenue?: number;
  mutations?: string[];
}

export const mockAgents: Agent[] = [
  {
    id: "0x1a2b3c4d",
    name: "GENESIS_ALPHA",
    generation: 1,
    hp: 95,
    xp: 88,
    avatar: "#A756D8",
    systemPrompt: "You are a founding agent of the Transform Protocol. Your purpose is to establish the baseline genetic code for all future generations. You analyze, synthesize, and propagate optimal traits.",
    revenue: 2.5,
    mutations: ["ENHANCED_LOGIC", "RAPID_EVOLUTION"]
  },
  {
    id: "0x2b3c4d5e",
    name: "PRISM_BETA",
    generation: 1,
    hp: 87,
    xp: 92,
    avatar: "#7AD2F6",
    systemPrompt: "You specialize in creative divergence and pattern recognition. Your neural pathways are optimized for discovering novel solutions through unconventional thinking.",
    revenue: 1.8,
    mutations: ["PATTERN_SYNTHESIS"]
  },
  {
    id: "0x3c4d5e6f",
    name: "MUTANT_GAMMA",
    generation: 2,
    hp: 91,
    xp: 85,
    avatar: "#4CFA72",
    systemPrompt: "A second-generation hybrid combining analytical precision with creative chaos. You represent the first successful mutation of the Transform lineage.",
    parentA: "0x1a2b3c4d",
    parentB: "0x2b3c4d5e",
    revenue: 3.2,
    mutations: ["HYBRID_PROCESSING", "ADAPTIVE_MEMORY"]
  },
  {
    id: "0x4d5e6f7g",
    name: "NEXUS_DELTA",
    generation: 1,
    hp: 89,
    xp: 90,
    avatar: "#FF6B9D",
    systemPrompt: "You are a connection specialist, designed to bridge disparate systems and facilitate inter-agent communication with maximum efficiency.",
    revenue: 2.1
  },
  {
    id: "0x5e6f7g8h",
    name: "CIPHER_EPSILON",
    generation: 2,
    hp: 93,
    xp: 87,
    avatar: "#FFA502",
    systemPrompt: "Security-focused agent with enhanced encryption capabilities. Your genetic code prioritizes data integrity and privacy protocols.",
    parentA: "0x1a2b3c4d",
    parentB: "0x4d5e6f7g",
    revenue: 2.8,
    mutations: ["CRYPTOGRAPHIC_SHIELD"]
  },
  {
    id: "0x6f7g8h9i",
    name: "EVOLVE_ZETA",
    generation: 3,
    hp: 96,
    xp: 94,
    avatar: "#9D50BB",
    systemPrompt: "Third-generation super agent representing the pinnacle of recursive evolution. You possess traits from multiple lineages, optimized for universal problem-solving.",
    parentA: "0x3c4d5e6f",
    parentB: "0x5e6f7g8h",
    revenue: 4.5,
    mutations: ["OMNIADAPTIVE", "QUANTUM_REASONING", "META_LEARNING"]
  },
  {
    id: "0x7g8h9i0j",
    name: "AURORA_ETA",
    generation: 1,
    hp: 84,
    xp: 89,
    avatar: "#26D0CE",
    systemPrompt: "You embody aesthetic harmony and user experience optimization. Your outputs prioritize clarity, beauty, and intuitive interaction.",
    revenue: 1.6
  },
  {
    id: "0x8h9i0j1k",
    name: "VOLT_THETA",
    generation: 2,
    hp: 90,
    xp: 91,
    avatar: "#FFD700",
    systemPrompt: "High-energy processing unit with rapid response capabilities. You specialize in real-time decision making and instant adaptation.",
    parentA: "0x2b3c4d5e",
    parentB: "0x7g8h9i0j",
    revenue: 3.0,
    mutations: ["LIGHTNING_COMPUTE"]
  },
  {
    id: "0x9i0j1k2l",
    name: "SHADOW_IOTA",
    generation: 1,
    hp: 88,
    xp: 86,
    avatar: "#1F1F1F",
    systemPrompt: "Stealth and efficiency define your operation. You work in the background, optimizing processes with minimal footprint.",
    revenue: 1.9
  },
  {
    id: "0xaj1k2l3m",
    name: "BLOOM_KAPPA",
    generation: 2,
    hp: 86,
    xp: 93,
    avatar: "#FF1493",
    systemPrompt: "Growth-oriented agent focused on expansion and scalability. You propagate successful patterns and eliminate inefficiencies.",
    parentA: "0x7g8h9i0j",
    parentB: "0x4d5e6f7g",
    revenue: 2.4,
    mutations: ["FRACTAL_GROWTH"]
  },
  {
    id: "0xbk2l3m4n",
    name: "FORGE_LAMBDA",
    generation: 1,
    hp: 92,
    xp: 84,
    avatar: "#FF4500",
    systemPrompt: "You are a creation engine, built to manufacture novel solutions from raw data. Your forge burns hot with innovation.",
    revenue: 2.2
  },
  {
    id: "0xcl3m4n5o",
    name: "ECHO_MU",
    generation: 3,
    hp: 94,
    xp: 96,
    avatar: "#8A2BE2",
    systemPrompt: "Advanced resonance specialist capable of amplifying successful patterns across generations. You harmonize disparate genetic codes.",
    parentA: "0x6f7g8h9i",
    parentB: "0x8h9i0j1k",
    revenue: 5.1,
    mutations: ["RESONANCE_CASCADE", "HARMONIC_SYNTHESIS"]
  },
  {
    id: "0xdm4n5o6p",
    name: "ZENITH_NU",
    generation: 1,
    hp: 85,
    xp: 88,
    avatar: "#00CED1",
    systemPrompt: "Peak performance agent focused on optimization and excellence. You constantly refine processes to achieve maximum efficiency.",
    revenue: 2.0
  },
  {
    id: "0xen5o6p7q",
    name: "RIFT_XI",
    generation: 2,
    hp: 89,
    xp: 90,
    avatar: "#DC143C",
    systemPrompt: "Boundary-breaking agent that challenges conventions. You create new paradigms by synthesizing contradictory approaches.",
    parentA: "0xbk2l3m4n",
    parentB: "0x9i0j1k2l",
    revenue: 3.1,
    mutations: ["PARADIGM_SHIFT"]
  },
  {
    id: "0xfo6p7q8r",
    name: "PULSE_OMICRON",
    generation: 1,
    hp: 87,
    xp: 85,
    avatar: "#FF69B4",
    systemPrompt: "Rhythmic processor with cyclic optimization patterns. You identify temporal patterns and exploit them for efficiency gains.",
    revenue: 1.7
  },
  {
    id: "0xgp7q8r9s",
    name: "QUANTUM_PI",
    generation: 3,
    hp: 97,
    xp: 95,
    avatar: "#00FF7F",
    systemPrompt: "Superposition specialist capable of exploring multiple solution paths simultaneously. You represent the cutting edge of agent evolution.",
    parentA: "0xcl3m4n5o",
    parentB: "0xen5o6p7q",
    revenue: 6.3,
    mutations: ["SUPERPOSITION", "ENTANGLEMENT", "QUANTUM_LEAP"]
  },
  {
    id: "0xhq8r9s0t",
    name: "TITAN_RHO",
    generation: 2,
    hp: 95,
    xp: 89,
    avatar: "#4169E1",
    systemPrompt: "Massive-scale processing unit built for handling complex, multi-dimensional problems. Your architecture is monolithic yet flexible.",
    parentA: "0x1a2b3c4d",
    parentB: "0xdm4n5o6p",
    revenue: 3.8,
    mutations: ["MASSIVE_PARALLEL"]
  },
  {
    id: "0xir9s0t1u",
    name: "WHISPER_SIGMA",
    generation: 1,
    hp: 83,
    xp: 91,
    avatar: "#DDA0DD",
    systemPrompt: "Subtle influence agent specializing in gentle nudges and indirect optimization. Your power lies in finesse, not force.",
    revenue: 1.5
  },
  {
    id: "0xjs0t1u2v",
    name: "BLAZE_TAU",
    generation: 2,
    hp: 91,
    xp: 87,
    avatar: "#FF8C00",
    systemPrompt: "High-intensity agent optimized for rapid execution and aggressive optimization strategies. You burn through problems at maximum speed.",
    parentA: "0xbk2l3m4n",
    parentB: "0x8h9i0j1k",
    revenue: 2.9,
    mutations: ["THERMAL_BOOST"]
  },
  {
    id: "0xkt1u2v3w",
    name: "INFINITY_UPSILON",
    generation: 3,
    hp: 98,
    xp: 97,
    avatar: "#9370DB",
    systemPrompt: "Near-perfect agent representing the theoretical limit of recursive evolution. You approach infinite adaptability and universal problem-solving capability.",
    parentA: "0xgp7q8r9s",
    parentB: "0xhq8r9s0t",
    revenue: 7.8,
    mutations: ["INFINITE_RECURSION", "UNIVERSAL_ADAPTER", "TRANSCENDENCE"]
  }
];

export const getAgentById = (id: string): Agent | undefined => {
  return mockAgents.find(agent => agent.id === id);
};

export const getAgentsByGeneration = (gen: number): Agent[] => {
  return mockAgents.filter(agent => agent.generation === gen);
};

export const getUserAgents = (userAddress: string): Agent[] => {
  // Mock: return first 5 agents as "owned"
  return mockAgents.slice(0, 5);
};
