export default async (app) => {
  app.use("/api/user", require("./api/user"));

  app.use("/api/employee", require("./api/employee"));
};
