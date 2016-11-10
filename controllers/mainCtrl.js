var user = require('../users/user');
var skillz = require('../skillz');


module.exports = {
getName: function(req, res, next){
  console.log(user[0]);
  return res.json(user[0]);
},

getLocation: function(req, res, next){
  console.log(user[0].location);
  return res.json(user[0].location);
},
getOccupations: function(req, res, next){
  console.log(user[0].occupations);
  return res.json(user[0].occupations);
},
getLatestOccupation: function(req, res, next){
  console.log(user[0].occupations[0]);
  return res.json(user[0].occupations[0]);
},
getHobbies: function(req, res, next){
  console.log(user[0].hobbies);
  return res.json(user[0].hobbies);
},
getHobbiesType: function(req, res, next){
  console.log(user[0].hobbies[0].type);
  console.log(req.params.type);
  var hobbieType = req.params.type;

  for(var i = user[0].hobbies.length; i >= 0; i--){
    console.log(i);
    if(user[0].hobbies[i].type !== hobbieType){
      user[0].hobbies.splice(i, 1);
    }
  }
  console.log(user[0].hobbies);
  return res.json(user[0].hobbies);
},

getFamily: function(req, res, next){
  console.log(user[0].family);
  return res.json(user[0].family);
},
getFamilyGender: function(req, res, next){
  console.log(user[0].family);
},
getRestaurants: function(req, res, next){
  console.log(user[0].restaurants);
  return res.json(user[0].restaurants);
},
getResturantsName: function(req, res, next){

},
changeName: function(req, res, next){
  console.log(req.body);
  user[0].name = req.body.name;
  return res.json(user);
},
changeLocation: function(req, res, next){
  console.log(req.body);
  user[0].location = req.body.location;
  return res.json(user);
},
addHobbie: function(req, res, next){
  console.log(req.body);
  user[0].hobbies.push(req.body);
  return res.json(user);
},
addJob: function(req, res, next){
  console.log(req.body);
  user[0].occupations.push(req.body.job);
  return res.json(user);
},
addFamily: function(req, res, next){
  console.log(req.body);
  user[0].family.push(req.body);
  return res.json(user);
},
addRestaurants: function(req, res, next){
  console.log(req.body);
  user[0].restaurants.push(req.body);
  return res.json(user);
},


getSkillz: function(req, res, next){
  console.log('getting skillz');
  console.log(req.query.experience);
  var exp = req.query.experience;
  if(exp){
  var result = skillz.filter(function(skillz){
    console.log(skillz.experience);
    return skillz.experience === exp;
  });
  return res.json(result);
} else {
  return res.json(skillz);
}
},
postSkillz: function(req, res, next){
  console.log(req.body);
  console.log(req.body);
  skillz.push(req.body);
  res.json(skillz);
}

};
