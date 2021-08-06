"use strict";

const app = require("./app/server");

const PORT = process.env.PORT || 4004;

app.listen(PORT,()=>{
  console.log(`App listening on port ${PORT}`);
});
