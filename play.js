//main file through which will launch the game client

const net = require("net");

const { connect } = require("./client");
const { setupInput } = require("./input");
// establishes a connection with the game server

console.log("Connecting ...");

setupInput(connect());


