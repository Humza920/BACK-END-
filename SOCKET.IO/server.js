const express = require("express");
const path = require("path");
const http = require("http");

const app = express();
const server = http.createServer(app);

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "public", "index.html"));
});

server.listen(9000, () => console.log("server listen at PORT: 9000"));
