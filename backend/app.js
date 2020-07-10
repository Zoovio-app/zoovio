const express = require("express");
const cors = require("cors");
const port = 3001;

const app = express();

app.listen(port, () => {
  console.log(`LISTENING TO PORT ${port}`);
});
