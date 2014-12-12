var fs = require('fs');
var path = require('path');
var chalk = require('chalk');

module.exports = {

  normalizeEntityName: function(/* entityName */) {},

  afterInstall: function() {
    // remove default app.css
    var defaultAppCssFile = path.join(this.project.root, 'app', 'styles', 'app.css');

    if (fs.existsSync(defaultAppCssFile)) {
      fs.unlinkSync(defaultAppCssFile);
      this.ui.writeLine('ember-cli-proto-css: ' + chalk.green('Replacing default app.css file...'));
    }

    var blueprint = this;
    return this.addPackageToProject('broccoli-sass').then(function() {
      return blueprint.addBowerPackagesToProject([{name: 'bourbon'}]);
    });
  }
}
