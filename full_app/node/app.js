const express = require("express");
const db = require("./database");
const router = require("./components/index");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

db();
app.use('/',router);

app.listen(8080,()=>{
    console.log(`server started 8080`);
});