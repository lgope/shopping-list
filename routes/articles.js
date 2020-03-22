const express = require('express');
const Article = require('./../models/article');
const router = express.Router();

router.get('/new', (req, res) => {
  res.render('articles/new');
});

router.get('/:get', (req, res) => {});

router.post('/', async (req, res) => {
  const { title, description, markdown } = req.body;
  const article = new Article({
    title,
    description,
    markdown
  });

  try {
    article = await article.save();
    res.redirect(`/articles/${article.id}`);
  } catch (error) {
    res.render(`articles/new`, { article });
  }
});

module.exports = router;
