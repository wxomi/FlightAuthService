const express = require("express");

const { PORT, DB_SYNC } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");

const db = require("./models/index");

const app = express();

const prepareAndStartServer = async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);
  app.listen(PORT, () => {
    console.log(`Server Started Successfully at ${PORT} .`);
    if (DB_SYNC) {
      db.sequelize.sync({ alter: true });
    }
  });
};

prepareAndStartServer();
