const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes");

const app = express();
app.use(cors());
app.use(express.json())

app.use("/api", router);

const PORT = process.env.PORT || 7000 ;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("connected to DB.");
    console.log("Server is  on PORT", PORT);
  });
});
