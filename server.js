const express = require('express'),
path = require('path'),
app = express();

const PORT = 8505;
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
    res.redirect('html/menu.html');
});
app.listen(PORT);

console.log('Running at Port' + PORT);