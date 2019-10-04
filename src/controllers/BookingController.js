const Booking = require('../models/Booking');

module.exports = {
  async store(req, res) {
    const userId = req.headers.user_id;
    const spotId = req.params.spot_id;
    const { date } = req.body;

    const booking = await Booking.create({
      user: userId,
      spot: spotId,
      date
    });

    await booking.populate('spot').populate('user').execPopulate();

    res.json(booking);
  }
};
