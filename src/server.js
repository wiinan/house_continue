const app = require("./app");
const { sequelize } = require("./models");

require("dotenv").config();

app.listen(process.env.PORT || 3000, async () => {
  console.log("HELLo world");
  await sequelize.sync();
});
