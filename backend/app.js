const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3001;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`LISTENING TO PORT ${port}`);
});
