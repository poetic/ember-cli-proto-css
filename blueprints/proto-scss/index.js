var fs = require('fs');
var path = require('path');
var chalk = require('chalk');

module.exports = {

  normalizeEntityName: function(entityName) {
    // We want this generator to not take arguments so we override this function
    // and leave it empty.
  },

  afterInstall: function() {
    // remove default app.css
    var defaultAppCssFile = path.join(this.project.root, 'app', 'styles', 'app.css');

    if (fs.existsSync(defaultAppCssFile)) {
      fs.unlinkSync(defaultAppCssFile);
      this.ui.writeLine(chalk.green('Removing default app.css file...'));
    }

    return this.addPackageToProject('ember-cli-sass');
  }

}
