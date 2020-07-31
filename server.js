require("dotenv").config(); // Sets up dotenv as soon as our application starts
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { sequelize } = require("wms-sequelize");

const app = express();

const router = express.Router();

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    // sequelize.sync({ force: true })
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
const { v4: uuidv4 } = require("uuid");
console.log(uuidv4());

// Middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());

// This is equivalent to
app.use("/", bodyParser.json());

const environment = process.env.NODE_ENV; // development

if (environment !== "production") {
  const logger = require("morgan");
  app.use(logger("dev"));
  // and this
  app.use("/", logger("dev"));
}

const routes = require("./routes/index.js");

app.use("/api/v1", routes(router));
app.use("/", express.static(path.join(__dirname, "./dist/")));
app.get("/.*/", (req, res) =>
  res.sendFile(path.join(__dirname, "./dist/index.html"))
);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`🚀 Server ready at http://localhost:5000`));
