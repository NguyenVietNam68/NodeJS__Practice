const express = require('express');
const path = require('path');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ extname: '.hbs'});
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

//HTTP Logger
app.use(morgan('combined'));

// TEMPLATE ENGINE
app.engine('hbs', hbs.engine )
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resource/views'));

//route
app.get('/', (req, res) => res.render('home'));
app.get('/news', (req, res) => res.render('news'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));