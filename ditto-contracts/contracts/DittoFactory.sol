// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./LineageRegistry.sol";
import "./RevenueSplitter.sol";
import "./utils/Ownable.sol";

contract DittoFactory is Ownable {
    LineageRegistry public registry;
    address public treasury;

    event AgentBorn(
        address indexed child,
        address indexed parentA,
        address indexed parentB,
        address splitter
    );

    constructor(address _registry, address _treasury) Ownable(msg.sender) {
        registry = LineageRegistry(_registry);
        treasury = _treasury;
    }

    function breed(address parentA, address parentB) external returns (address) {
        // 1. Deploy Revenue Splitter
        address[] memory payees = new address[](3);
        payees[0] = parentA;
        payees[1] = parentB;
        payees[2] = treasury;

        uint256[] memory shares = new uint256[](3);
        shares[0] = 40;
        shares[1] = 40;
        shares[2] = 20;

        RevenueSplitter splitter = new RevenueSplitter(payees, shares);

        // 2. Register in Lineage
        address childAddress = address(splitter);

        registry.registerAgent(childAddress, parentA, parentB);

        emit AgentBorn(childAddress, parentA, parentB, address(splitter));

        return childAddress;
    }

    function setTreasury(address _treasury) external onlyOwner {
        treasury = _treasury;
    }
}
