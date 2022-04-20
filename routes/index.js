const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

router.get('/users/details', ensureAuthenticated, (req, res) =>
  res.render('details', {
    user: req.user
  })
);

router.get('/users/courses', ensureAuthenticated, (req, res) =>
  res.render('courses', {
    user: req.user
  })
);

module.exports = router;
