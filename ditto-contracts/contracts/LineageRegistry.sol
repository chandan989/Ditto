// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./utils/Ownable.sol";

contract LineageRegistry is Ownable {
    struct Agent {
        address parentA;
        address parentB;
        uint256 generation;
        uint256 birthTime;
        bool exists;
    }

    mapping(address => Agent) public agents;
    mapping(address => address[]) public children;

    event AgentRegistered(
        address indexed child,
        address indexed parentA,
        address indexed parentB,
        uint256 generation
    );

    constructor() Ownable(msg.sender) {}

    function registerAgent(
        address _child,
        address _parentA,
        address _parentB
    ) external onlyOwner {
        require(!agents[_child].exists, "Agent already registered");

        uint256 genA = agents[_parentA].exists ? agents[_parentA].generation : 0;
        uint256 genB = agents[_parentB].exists ? agents[_parentB].generation : 0;
        uint256 newGen = (genA > genB ? genA : genB) + 1;

        agents[_child] = Agent({
            parentA: _parentA,
            parentB: _parentB,
            generation: newGen,
            birthTime: block.timestamp,
            exists: true
        });

        children[_parentA].push(_child);
        if (_parentA != _parentB) {
            children[_parentB].push(_child);
        }

        emit AgentRegistered(_child, _parentA, _parentB, newGen);
    }

    function getAgent(address _agent) external view returns (Agent memory) {
        return agents[_agent];
    }

    function getChildren(address _parent) external view returns (address[] memory) {
        return children[_parent];
    }
}
