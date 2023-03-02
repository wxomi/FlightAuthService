const express = require("express");

const { PORT } = require("./config/serverConfig");

const creatAndStartServer = async () => {
  const app = express();
  app.listen(PORT, () => {
    console.log(`Server Started Successfully at ${PORT} .`);
  });
};

creatAndStartServer();
