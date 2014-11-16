var path = require('path');

module.exports = {
  name: 'ember-cli-proto-css',

  treeForStyles: function(tree) {
    var singularityPath = path.join(this.app.bowerDirectory, 'singularity', 'stylesheets');
    var singularityTree = this.pickFiles(this.treeGenerator(singularityPath), {
      srcDir: '/',
      destDir: '/app/styles'
    });
    return this.mergeTrees([tree, singularityTree]);
  }
};
