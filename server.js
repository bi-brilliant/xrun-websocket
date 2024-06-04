// const express = require("express");
// const app = express();
// const server = require("http").createServer(app);
// const Websocket = require("ws");

// const wss = new Websocket.Server({ server: server });

// wss.on("connection", function connection(ws) {
//   ws.send("Welcome new client");

//   ws.on("error", console.error);

//   ws.on("message", function message(data) {
//     console.log("received: %s", data);
//     ws.send("Got ur msg its: " + data);

//     wss.clients.forEach(function each(client) {
//       if (client.readyState === Websocket.OPEN) {
//         client.send(data);
//       }
//     });
//   });
// });

// app.get("/", (req, res) => res.send("Hello World"));

// server.listen(3005, () => console.log(`Lisening on port :3005`));

const express = require("express");
const app = express();
const server = require("http").createServer(app);
const WebSocket = require("ws");

const wss = new WebSocket.Server({ server: server });

wss.on("connection", function connection(ws) {
  console.log("A new client Connected!");
  ws.send("Welcome New Client!");

  ws.on("message", function incoming(message) {
    console.log("received: %s", message);

    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

app.get("/", (req, res) => res.send("Hello World!"));

server.listen(3005, () => console.log(`Lisening on port :3005`));
