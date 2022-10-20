const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index.ejs');
});
app.get('/gallery', (req, res) => {
    res.render('gallery.ejs');
});
app.get('/guide', (req, res) => {
    res.render('guide.ejs');
});
app.get('/homepage', (req, res) => {
    res.render('homepage.ejs');
});
app.get('/regform', (req, res) => {
    res.render('regform.ejs');
});
app.get('/signup', (req, res) => {
    res.render('signup.ejs');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});