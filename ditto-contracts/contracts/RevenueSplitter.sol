// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./utils/PaymentSplitter.sol";

contract RevenueSplitter is PaymentSplitter {
    constructor(
        address[] memory payees,
        uint256[] memory shares_
    ) PaymentSplitter(payees, shares_) {}
}
