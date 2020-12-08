const router = require('express').Router();
const { Trainer, Pokemon } = require('../db');
router.get('/trainers', async (req, res, next) => {
  try {
    let trainers = await Trainer.findAll();
    trainers = trainers.filter((trainer) => {
      return trainer.name !== 'PokePC Owner';
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

//convert this into a post?
router.get('/create/:trainerName', async (req, res, next) => {
  try {
    console.log('trying to create trainer');
    const newTrainer = await Trainer.create({
      name: req.params.trainerName,
    });
    res.send(newTrainer);
  } catch (ex) {
    next(ex);
  }
});

router.post('/sendToTrainer', async (req, res, next) => {
  try {
    const trainer = await Trainer.findByPk(req.body.selectedTrainer.id);
    const pokemon = await Pokemon.findByPk(req.body.selectedPokemon.id);
    pokemon.trainerId = trainer.id;
    await pokemon.save();
    res.send('ok');
  } catch (ex) {
    next(ex);
  }
});

router.post('/sendToPC', async (req, res, next) => {
  try {
    console.log('************************sending to pc');
    const pokemon = await Pokemon.findByPk(req.body.selectedPokemon);
    pokemon.trainerId = 3;
    await pokemon.save();
    res.send('ok');
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
