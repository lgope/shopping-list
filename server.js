const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles');
const app = express();

mongoose.connect('mongodb://localhost/markdown-blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.set('view engine', 'ejs');

app.use('/articles', articleRouter);
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  const articles = [
    {
      title: 'Test Article',
      createdAt: new Date(),
      describtion: 'test description'
    },
    {
      title: 'Test Article 2',
      createdAt: new Date(),
      describtion: 'test description 2'
    }
  ];
  res.render('articles/index', { articles });
});

const port = process.env.PORT | 3000;

app.listen(port, () => console.log(`server is listening at ${port}`));
