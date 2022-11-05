// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Message {
    mapping(address => string) public myMessage;

    function setMessage(address _addr, string memory _message) public {
        myMessage[_addr] = _message;
    }

    function getMessage(address _addr) public view returns (string memory) {
        return myMessage[_addr];
    }
}