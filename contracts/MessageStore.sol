// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract MessageStore is Initializable, OwnableUpgradeable, UUPSUpgradeable {
    string private message;

    event MessageUpdated(string newMessage);

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(string memory initialMessage) public initializer {
        __Ownable_init(msg.sender);
        message = initialMessage;
    }

    function setMessage(string calldata newMessage) external onlyOwner {
        message = newMessage;
        emit MessageUpdated(newMessage);
    }

    function getMessage() external view returns (string memory) {
        return message;
    }

    function _authorizeUpgrade(address) internal override onlyOwner {}
}
