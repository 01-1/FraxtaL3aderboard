// SPDX-License-Identifier: GPL-3
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/structs/EnumerableMap.sol";

contract FraxtaL3aderboard2048 {
    using EnumerableMap for EnumerableMap.AddressToUintMap;

    mapping(address => string) private playerNames;
    EnumerableMap.AddressToUintMap private playerHighscores;

    function resetHighscore() public {
        playerHighscores.set(msg.sender, 0);
    }

    function updatePlayerName(string memory _name) public {
        playerNames[msg.sender] = _name;
    }

    function updateHighscore(uint256 _newHighscore) public {
        require(!playerHighscores.contains(msg.sender) || playerHighscores.get(msg.sender) < _newHighscore);
        playerHighscores.set(msg.sender, _newHighscore);
    }
    
    function getName(address _address) public view returns (string memory name) {
        return playerNames[_address];
    }

    function getHighscore(address _address) public view returns (uint256 highscore) {
        return playerHighscores.get(_address);
    }

    function getHighscoreLength() public view returns (uint256 length) {
        return playerHighscores.length();
    }

    function getHighscoreByIndex(uint256 index) public view returns (address _address, uint256 highscore) {
        return playerHighscores.at(index);
    }
}