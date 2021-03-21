const cluster = require("cluster");

if (cluster.isMaster) {
  console.log("master");
} else {
  console.log(`worker (${cluster.worker.id})`);
}

process.on("message", (msg) => {
  process.send(msg);
});
