var fs = require('fs');
var path = require('path');
var chalk = require('chalk');

module.exports = {

  normalizeEntityName: function(entityName) {
    return this.project.pkg.name;
  },

  afterInstall: function() {
    // remove default app.css
    var defaultAppCssFile = path.join(this.project.root, 'app', 'styles', 'app.css');

    if (fs.existsSync(defaultAppCssFile)) {
      fs.unlinkSync(defaultAppCssFile);
      this.ui.writeLine('  ' + chalk.green('Removing default app.css file'));
    }

    var blueprint = this;
    return this.addPackageToProject('ember-cli-compass-compiler').
      then(function() {
      return blueprint.addPackageToProject('ember-cli-bourbon');
    }).then(function() {
      return blueprint.addBowerPackageToProject('singularity');
    });
  }
}
