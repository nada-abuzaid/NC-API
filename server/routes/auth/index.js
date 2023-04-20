const router = require('express').Router();

router.use('/signup', (_request, response) => {
  response.send('Sign up');
});

module.exports = router;
