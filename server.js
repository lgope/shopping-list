const express = require('express');
const articleRouter = require('./routes/articles');
const app = express();

app.set('view engine', 'ejs');

app.use('/articles', articleRouter);

app.get('/', (req, res) => {
  res.render('index');
});

const port = process.env.PORT | 3000;

app.listen(port, () => console.log(`server is listening at ${port}`));
