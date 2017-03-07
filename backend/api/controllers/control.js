'use strict';
var parse = require('co-body');
var monk = require('monk');
var wrap = require('co-monk');
var db = monk('localhost/socrates');
var co = require('co');

module.exports.all = function * all(name,next) {
  if ('GET' != this.method) return yield next;
  this.body = yield wrap(db.get(name)).find({});
};

module.exports.fetch = function * fetch(name,id,next) {
  if ('GET' != this.method) return yield next;
  if(id === ""+parseInt(id, 10)){
    var model = yield wrap(db.get(name)).find({}, {
      'skip': id - 1,
      'limit': 1
    });
    if (model.length === 0) {
      this.throw(404, 'model with id = ' + id + ' was not found');
    }
    this.body = yield model;
  }

};

module.exports.add = function * add(name,next) {
  if ('POST' != this.method) return yield next;
  var model = yield parse(this, {
    limit: '1kb'
  });
  var inserted = yield  wrap(db.get(name)).insert(model);
  if (!inserted) {
    this.throw(405, "The model couldn't be added.");
  }
  this.body = "{\"success\":1}";
};

module.exports.modify = function * modify(name,id,next) {
  if ('PUT' != this.method) return yield next;

  var data = yield parse(this, {
    limit: '1kb'
  });

  var model = yield wrap(db.get(name)).find({}, {
    'skip': id - 1,
    'limit': 1
  });

  if (model.length === 0) {
    this.throw(404, 'model with id = ' + id + ' was not found');
  }

  var updated = wrap(db.get(name)).update(model[0], {
    $set: data
  });

  if (!updated) {
    this.throw(405, "Unable to update.");
  } else {
    this.body = "{\"success\":1}";
  }
};

module.exports.remove = function * remove(name,id,next) {
  if ('DELETE' != this.method) return yield next;

  var model = yield wrap(db.get(name)).find({}, {
    'skip': id - 1,
    'limit': 1
  });

  if (model.length === 0) {
    this.throw(404, 'model with id = ' + id + ' was not found');
  }

  var removed = wrap(db.get(name)).remove(model[0]);

  if (!removed) {
    this.throw(405, "Unable to delete.");
  } else {
    this.body = "{\"success\":1}";
  }

};

module.exports.head = function *(){
  return;
};

module.exports.options = function *() {
  this.body = "Allow: HEAD,GET,PUT,DELETE,OPTIONS";
};

module.exports.trace = function *() {
  this.body = "Smart! But you can't trace.";
};
