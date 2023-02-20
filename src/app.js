const express = require("express");
require("dotenv").config();
const router = require("./router/index")
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors());

app.use("/", router)

app.listen(process.env.PORT, () => {
    console.log(`server is live on ${process.env.PORT}`)
});