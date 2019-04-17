const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/celebrity.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next) => {

  Celebrity.find()
  .then(allCelebs => {
  console.log('Retrieved all celebrities from DB:', allCelebs);
  res.render('celebrities/index', { celebrities: allCelebs });

  })
  .catch(error => {
  console.log('Error while getting the celebrities from the DB: ', error);
  })
});


module.exports = router;
