var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware');
var mainCtrl = require('./controllers/mainCtrl');


var app = express();

app.use(middleware.addHeaders);
app.use(bodyParser.json());

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);

app.get('/family', mainCtrl.getFamily);
app.get('/restaurants', mainCtrl.getRestaurants);

app.put('/name', mainCtrl.changeName);
app.put('/location', mainCtrl.changeLocation);

app.post('/hobbies', mainCtrl.addHobbie);
app.post('/occupations', mainCtrl.addJob);
app.post('/family', mainCtrl.addFamily);
app.post('/restaurants', mainCtrl.addRestaurants);

app.get('/skillz', mainCtrl.getSkillz);
app.post('/skillz', middleware.generateId, mainCtrl.postSkillz);

// app.get('/secrets/:username/:pin', mainCtrl.authenticate);



app.listen(4000, function(){
  console.log('listening on port 4000...');
});
