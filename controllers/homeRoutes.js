const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('homePage', { 
      style: 'homepage.css',
      script: 'homepage.js',
      title: 'Tech Blog',
      logged_in: req.session.logged_in
    });
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login', { 
    style: 'login.css',
    script: 'login.js',
    title: 'Tech Blog Login',
    logged_in: req.session.logged_in
  });
});

router.get('/signup', (req, res) => {
  res.render('signup', { 
    style: 'signup.css',
    script: 'signup.js',
    title: 'Tech Blog Sign-Up',
  });
});

router.get('/blog-post', (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('newPost', {
        style: 'newPost.css',
        script: 'newPost.js',
        title: 'Tech Blog',
        logged_in: req.session.logged_in
    });
});

module.exports = router;
