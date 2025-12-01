import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Button } from '@/components/ui/button';
import { Wallet } from 'lucide-react';

export function WalletButton() {
    const { address, isConnected } = useAccount();
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();

    const handleConnect = () => {
        const coinbaseConnector = connectors.find(
            (c) => c.id === 'coinbaseWalletSDK'
        );
        if (coinbaseConnector) {
            connect({ connector: coinbaseConnector });
        }
    };

    if (isConnected && address) {
        return (
            <Button
                variant="outline"
                className="border-shiny text-shiny hover:bg-shiny hover:text-black font-gameboy text-xs"
                onClick={() => disconnect()}
            >
                <Wallet className="w-4 h-4 mr-2" />
                {address.slice(0, 6)}...{address.slice(-4)}
            </Button>
        );
    }

    return (
        <Button
            className="bg-ditto hover:bg-ditto/90 text-white font-gameboy text-xs glow-effect"
            onClick={handleConnect}
        >
            <Wallet className="w-4 h-4 mr-2" />
            CONNECT WALLET
        </Button>
    );
}
