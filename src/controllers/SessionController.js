const User = require('../models/User');

// index, show, store, update, destroys
module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email, password });
    }

    return res.json(user);
  }
};
