
const authRoute = require("./authRoute");
const messageRoute = require("./messageRoute");

const mountRoutes = (app) => {

    app.use("/api/v1/auth", authRoute);
  app.use("/api/v1/massage", messageRoute)
;
};

module.exports = mountRoutes;
