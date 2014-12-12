'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-proto-css',

  treeForStyles: function(tree) {
    var bourbonPath = path.join(this.app.bowerDirectory, 'bourbon', 'dist');
    var bourbonTree = this.pickFiles(this.treeGenerator(bourbonPath), {
      srcDir: '/',
      destDir: '/app/styles'
    });

    return bourbonTree;
  }
};
