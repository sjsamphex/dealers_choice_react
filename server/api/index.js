const router = require('express').Router();
const { Trainer, Pokemon } = require('../db');
router.get('/trainers', async (req, res, next) => {
  try {
    const trainers = await Trainer.findAll({
      include: Pokemon,
    });
    res.send(trainers);
  } catch (ex) {
    next(ex);
  }
});

router.get('/trainers/:trainerid', async (req, res, next) => {
  try {
    const trainer = await Trainer.findByPk(req.params.trainerid, {
      include: Pokemon,
    });
    res.send(trainer);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
