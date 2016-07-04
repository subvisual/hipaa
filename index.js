const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 8080));
app.use(express.static('build'));
app.use('*', (req, res) => res.sendFile(__dirname + '/build/index.html'));

app.listen(app.get('port'), () => console.log('App running on port', app.get('port')));
