const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data.toString());
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  })


  conn.on("connect", () => {
    conn.write("Name: JLY")
  });

  setTimeout(() => {
    conn.write("Say: I am alive!❤️❤️❤️❤️❤️❤️❤️");
  }, 1000);

  // conn.on("connect", () => {

  // let commands = ["Move: up", "Move: right", "Move: down", "Move: left"]
  // for (let ii = 0, jj = 0; ii < 100000; jj += 0.3, ii += 50) {
  //   setTimeout(() => { conn.write(commands[Math.floor(jj) % 3]) }, 500 + ii * 10)
  // };
  // conn.write("Move: right");
  // conn.write("Move: down");
  // conn.write("Move: left");
  // })
  return conn;
};

module.exports = { connect };