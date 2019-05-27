const express = require("express");

const app = express();
const port = '8000';

app.get("/test", ({ headers }, res) => {

  return res.json({ messge: 'hello', headers });
});

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);