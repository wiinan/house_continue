const { user } = require("../models");

class SessionController {
  async store(req, res) {
    const { email } = req.body;
    try {
      let createUser = await user.create({ email });
      return res.status(200).json(createUser);
    } catch (err) {
      if (err && err.name === "SequelizeUniqueConstraintError")
        return res.status(401).json("Email já existe");
      return res.status(500).json(err);
    }
  }
}

module.exports = new SessionController();
