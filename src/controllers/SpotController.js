const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {

  async index(req, res) {
    const { tech } = req.query;
    const spots = await Spot.find({ techs: tech });

    if (!spots.length) {
      return res.json({ message: `Não foram encontrados spots de ${tech}` });
    }

    return res.json(spots);
  },

  async store(req, res) {
    const { filename } = req.file;
    const { company, techs, price } = req.body;
    const userId = req.headers.user_id;

    const user = await User.findById(userId);
    if (!user) {
      res.status(400).json({ error: 'Usuário não existe!' });
    }

    const spot = await Spot.create({
      user: userId,
      thumbnail: filename,
      company,
      price,
      techs: techs.split(',').map((tech) => tech.trim())
    });

    return res.json(spot);
  }
};
