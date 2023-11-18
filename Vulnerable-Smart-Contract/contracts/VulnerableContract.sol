// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";

contract VulnerableContract is Ownable, Pausable {
    // Event for notification
    event NotifyOwner(address indexed sender, uint256 amount);

    constructor() Ownable(msg.sender) {}

    mapping(address => uint256) private _balances;

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    // Notification function vulnerable to reentrancy
    function vulnerableFunction(uint256 amount) external whenNotPaused {
        require(_balances[msg.sender] >= amount, "Insufficient balance");

        // Vulnerable section - transfer before updating the balance
        payable(msg.sender).transfer(amount); // Vulnerability introduced here

        // Update balance
        _balances[msg.sender] -= amount;

        // Emit event to trigger notification
        emit NotifyOwner(msg.sender, amount);
    }

    function deposit() external payable whenNotPaused {
        _balances[msg.sender] += msg.value;
    }

    function getBalance() external view returns (uint256) {
        return _balances[msg.sender];
    }
}
