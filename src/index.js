const express = require("express");

const { PORT } = require("./config/serverConfig");

const prepareAndStartServer = async () => {
  const app = express();
  app.listen(PORT, () => {
    console.log(`Server Started Successfully at ${PORT} .`);
  });
};

prepareAndStartServer();
