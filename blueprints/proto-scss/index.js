module.exports = {

  normalizeEntityName: function(entityName) {
    // We want this generator to not take arguments so we override this function
    // and leave it empty.
  },

  afterInstall: function() {
    return this.addPackageToProject('ember-cli-sass');
  }

}
