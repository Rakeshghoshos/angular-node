const express = require("express");
const db = require("./database");
const router = require("./components/index");
const app = express();
app.use(express.json());

db();
app.use('/',router);

app.listen(8080,()=>{
    console.log(`server started 8080`);
});