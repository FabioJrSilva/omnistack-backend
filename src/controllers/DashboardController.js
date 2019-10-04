const Spot = require('../models/Spot');

module.exports = {
  async show(req, res) {
    const userId = req.headers.user_id;
    const spots = await Spot.find({ user: userId });

    if (!spots.length) {
      res.json({ message: 'Você não tem nenhum spot publicado!' });
    }

    return res.json(spots);
  }
};
