import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";

const dev = true;
const hostname = "localhost";
const port = 3001;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer, {
    cors: {
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    // ...
    console.log("a user is connceted");
    socket.on("demo", (msg, callback) => {
      console.log("message:", msg);
      console.log("iashdksjad");
      socket.emit("chatmssg", msg);
      callback({
        status: "message sent",
      });
    });
  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
