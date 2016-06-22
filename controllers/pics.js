var express = require('express');
var models = require('../models');
var jwt = require('express-jwt');
var router = express.Router();

// get mainpage of posts and post new ones

router.route('/')
  .get(function(req, res) {
    models.pic.findOne().then(function(pics, err) {
      if (err) return res.status(500).send(err);
      res.send(pics);
    });
  })
  .post(jwt({secret: "behindtheuniverse"}), function(req, res) {
    models.user.findById(req.user.id).then(function(user, err) {
      user.createPic(req.body).then(function(pic, err) {
      if (err) return res.status(500).send(err);
      res.send(post);
      });
    })
  });

// pulled from the params of FIND 
router.route('/my')
  .get(function(req, res){
    models.user.find({where: {id: req.user.id}}).then(function(user, err){
      user.getPics().then(function(pics, err){
        res.send({user: user, pics: pics});
      });
    });
  })

// findAll is easier
router.route('/all')
  .get(function(req, res){
    models.post.findAll({
      include: [models.user]
    }).then(function(pics, err){
      if (err) return res.status(500).send(err);
      res.send(pics);
    });
  })

// individual show page
router.route('/:id')
  .get(function(req, res) {
    models.pic.find({where: {id: req.params.id}}).then(function(pic, err) {
      pic.getUser({where: {id: pic.userId}}).then(function(user, err) {
        if (err) return res.status(500).send(err);
        res.send({user: user, pic: pic});
      });
    });
  })
  .post(function(req, res) {
    models.pic.find({where: {id: req.params.id}}).then(function(pic, err) {
      pic.update({
        title: req.body.title,
        content: req.body.content
      })
      if (err) return res.status(500).send(err);
      res.send(pic);
    });
  })
  .delete(function(req, res) {
    models.pic.find({where: {id: req.params.id}}).then(function(pic, err) {
      if (err) {
        return res.status(500).send(err);
      } else
      return pic.destroy();
      res.send({'message': 'success'});
    });
  });

module.exports = router;

