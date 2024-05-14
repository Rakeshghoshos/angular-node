const express = require("express");
const db = require("./database");
const router = require("./components/index");
const cors = require("cors");
const http = require("http");
const socket = require("./socket");

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(
    cors({
      origin: 'http://localhost:4200',
      allowedHeaders: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
    })
  );

db();

// socket(server);

app.use('/',router);

server.listen(8080,()=>{
    console.log(`server started 8080`);
});