var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
var Schema = mongoose.Schema;

var userDataSchema = new Schema({
  title: {type: String, required:true},
  content: String,
  author: String
}, {collection: 'user-data'});

var UserData = mongoose.model('UserData', userDataSchema);

router.get('/get-data',(req, res, next) => {
  UserData.find().then((doc) => {
    res.json(doc);
  });
});

router.post('/insert',(req, res, next) => {
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  };
 
  var data = new UserData(item);
  data.save();
 
 
  res.json({
    status: 'Saved'
  });
});

/*
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/get-data',(req, res, next) => {
  UserData.find().then((doc) => {
    res.render('index', {items: doc});
  });
});

router.post('/insert',(req, res, next) => {
 var item = {
   title: req.body.title,
   content: req.body.content,
   author: req.body.author
 };

 var data = new UserData(item);
 data.save();


 res.redirect('/get-data');
});

router.post('/update',(req, res, next) => {
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  };
  var id = req.body.id;
  UserData.findById(id, (err, doc) => {
    if(err){
      console.error('error, no entry found');
    }
    doc.title = req.body.title;
    doc.content = req.body.connect;
    doc.author = req.body.author;

    doc.save();
  });
});

router.post('/delete',(req, res, next) => {
  var id = req.body.id;
  UserData.findByIdAndRemove(id).exec();

});
*/

module.exports = router;
