// router for shake -related requests
const express = require('express');

// create router
const router = express.Router();

// cs-linuxlab-31.stlawu.edu:3000/shakes/
router.get('/', function(req, res){
  res.send(`
      <h1>Cakes</h1>
      <ul>
        <li><a href "/vanilla">Vanilla</a></li>
        <li><a href "/choc">Chocolate</a></li>
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
