const router = require('express').Router();

router.get('/', (req, res) => {
  return res.status('200').json({
    message: 'Hello Omnistack!'
  });
});

router.post('/users', (req, res) => {
  return res.status(200).json({
    message: 'POST'
  });
});

module.exports = router;
