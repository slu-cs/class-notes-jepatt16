// router for cake -related requests
const express = require('express');

// create router
const router = express.Router();

// cs-linuxlab-31.stlawu.edu:3000/cakes/
router.get('/', function(req, res){
  res.send(`
      <h1>Cakes</h1>
      <ul>
        <li><a href "/cakes/vanilla">Vanilla</a></li>
        <li><a href "/cakes/choc">Chocolate</a></li>
      </ul>
    `);
});

router.get(':flavor', function(req, res, next){
  if (req.params.flavor === 'vanilla'){
    res.send('ye we got em');
  }
  else if (req.params.flavor === 'choc'){
    res.send('ye we got those too');
  }
  else {
    next();
  };
});

module.exports = router;
