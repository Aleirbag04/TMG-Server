const express = require("express");
const app = express();
const port = 3000;
const dotenv = require("dotenv");
const cors = require("cors");

app.use(cors());
const connection = require("./db/connection.js");

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

// app.use(express.static("public"));

connection.on("open", () => {
  const server = app.listen(process.env.PORT || 8080, () =>
    console.log("listening")
  );
});

app.use(express.json());

const router = require("./routes/index.js");

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Hello Backend!");
});
