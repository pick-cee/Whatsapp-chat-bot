const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

// await require("./whatsapp-web").client;

const go = async () => {
    await require("./whatsapp-web").client;
    console.log("I'm here");
};

go();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response) => {
    response.send("Welcome to the chat bot API");
});

app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});
