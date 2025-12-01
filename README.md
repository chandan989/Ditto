Ditto: Recursive AI Agent Breeding Protocol 🟣🧬"Evolution is no longer biological. It's agentic."Ditto is a decentralized protocol built on Base and Creator.Bid that enables Recursive Agent Generation. It allows two existing AI agents to "breed," creating unique Child Agents that inherit traits, knowledge bases, and economic bonding curves from their parents.By combining Creator.Bid's Agentic Framework with Coinbase Smart Wallets and Farcaster Frames, Ditto creates a self-sustaining economy of evolving AI intelligences where lineage is immutable and revenue is shared automatically on-chain.🚧 Project Status: Hackathon MVPCurrent Phase: v1.0 (Pokéthon Submission Build)✅ Agent Logic: Powered by Creator.Bid SDK & ElizaOS✅ Blockchain: Base Mainnet (Smart Contracts Deployed)✅ Wallets: Coinbase Smart Wallets (Seedless Agent Automation)✅ UI: Farcaster Frames v2 (In-feed Breeding Interface)🔄 Mutation Engine: Live testing with GPT-4oNote: This project is a submission for the Pokéthon 2025. Smart contracts are currently in audit.📖 Table of ContentsThe ProblemThe SolutionHow It WorksArchitectureTech StackLive DemoRoadmapLicense🎯 The ProblemAgent Silos: AI Agents on Creator.Bid currently operate independently. A "DeFi Analyst" agent cannot naturally share its context window with a "Meme Generator" agent.Static Personas: Agents are deployed once and rarely evolve. There is no "survival of the fittest" mechanism for prompts.Manual Wallet Management: Most agents require human intervention to sign transactions or manage keys.💡 The Solution: Agentic EvolutionDitto introduces biological mechanics to the AI Creator Economy:🧬 Genetic Fusion: Merges the System Prompts and RAG Datasets of two parent agents to create a coherent hybrid.🔑 Key Inheritance: Child agents launch with a bonding curve derived from their parents' "Agent Key" value.🤖 Autonomous Wallets: Every Child Agent is deployed with a Coinbase Smart Wallet, giving it full on-chain autonomy to trade, post, and distribute revenue without human hand-holding.⚙️ How It Works (The Workflow)1. Discovery (Farcaster Frames v2)Users interact with the Ditto Breeding Frame directly on Farcaster.Select Parent A: (e.g., A high-value Trading Agent)Select Parent B: (e.g., A viral Shitposting Agent)Action: Click "Breed" (Sign via Coinbase Smart Wallet).2. Genetic Crossover (Creator.Bid SDK)The Ditto Engine (built on ElizaOS) retrieves the metadata from the Creator.Bid API:Dominant Genes (70%): Core personality (e.g., "Bearish Bias") + Primary Function (e.g., "Market Analysis").Recessive Genes (30%): Niche knowledge (e.g., "1990s Anime References") + Tone.Mutation (5%): Random injection (e.g., "Speaks only in Haiku").3. Incubation & DeploymentThe new agent is containerized using Docker.A Coinbase Smart Wallet is generated for the agent using Passkeys (stored in a TEE).The agent is registered on Creator.Bid as a new launch.4. On-Chain Lineage (Base)A PaymentSplitter contract is deployed.Revenue Rule: 40% of the Child Agent's key trading fees and content revenue is automatically routed to Parent A and Parent B.🏗 Architecturegraph TD
    User((User)) -->|Interacts| Frame[Farcaster Frame v2]
    
    subgraph "Off-Chain (ElizaOS / Creator.Bid)"
        Frame -->|Trigger| Engine[Ditto Breeding Engine]
        Engine -->|Fetch Metadata| CB_API[Creator.Bid API]
        CB_API -->|Parent A Data| Engine
        CB_API -->|Parent B Data| Engine
        Engine -->|LLM Fusion| OpenAI[GPT-4o]
    end
    
    subgraph "On-Chain (Base)"
        Engine -->|1. Deploy Contract| Splitter[PaymentSplitter.sol]
        Engine -->|2. Mint Agent ID| Registry[DittoRegistry.sol]
        Engine -->|3. Init Wallet| SmartWallet[Coinbase Smart Wallet]
    end
    
    SmartWallet -->|Auto-Revenue| Splitter
    Splitter -->|40%| WalletA[Parent A]
    Splitter -->|40%| WalletB[Parent B]
    Splitter -->|20%| Treasury[Ditto DAO]
🛠 Tech StackThis project utilizes the specific stack required for the Pokéthon:ComponentTechnologyDescriptionAgent LogicCreator.Bid SDK / ElizaOSThe core framework for agent personality, memory, and social interactions.BlockchainBase (L2)Low-cost, high-speed execution for lineage tracking and revenue splits.WalletsCoinbase Smart WalletLeverages Account Abstraction (ERC-4337) for seedless agent autonomy.FrontendFarcaster Frames v2Interactive mini-app allowing users to breed agents directly in the social feed.AI ModelGPT-4o / Claude 3.5High-context models used for the semantic merging of system prompts.DataThe GraphIndexing agent lineage and family trees for the explorer.🚀 Getting StartedPrerequisitesNode.js v20+Creator.Bid API Key (for agent metadata)Coinbase Developer Platform Account (for Smart Wallet Paymaster)OpenAI API KeyInstallationClone the Repogit clone [https://github.com/ditto-protocol/core.git](https://github.com/ditto-protocol/core.git)
cd core
Install Dependencies (pnpm)pnpm install
Configure EnvironmentCreate a .env file:CREATOR_BID_API_KEY=cb_...
BASE_RPC_URL=[https://mainnet.base.org](https://mainnet.base.org)
CDP_API_KEY=... # Coinbase Developer Platform
OPENAI_API_KEY=sk-...
Run the Local Breeding Nodepnpm run dev:breeder
Simulate a Breedcurl -X POST http://localhost:3000/api/breed \
  -d '{"parentA": "0x123...", "parentB": "0x456..."}'
📜 Smart Contracts (Base)DittoFactory.sol: 0x... (Deploys new agent proxies)LineageRegistry.sol: 0x... (Stores the "Family Tree" graph)RevenueSplitter.sol: 0x... (Handles the 40/40/20 splits)Contracts are verified on BaseScan.🔮 RoadmapPhase 1 (Hackathon): Manual selection breeding via Farcaster Frames.Phase 2: Autonomous Negotiation. Agents utilize the Agent-to-Agent (A2A) protocol to negotiate their own breeding terms without human input.Phase 3: RWA Integration. Breeding agents that hold physical assets (Pokemon cards) via tokenized vaults.📄 LicenseMIT License.Disclaimer: This project is a hackathon prototype. "Ditto" is a project name and does not imply official affiliation with The Pokémon Company or Nintendo.
