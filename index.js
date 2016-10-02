/* jshint node: true */
'use strict';

module.exports = {
  name: 'dummy-app-demo',
  normalizeEntityName: function () { },
  included: function (appOrAddon) {
    this._super.included(app);
    var app = appOrAddon.app || appOrAddon;
    var bower = app.bowerDirectory;
    app.import(bower + '/showdown/dist/showdown.js');

  }
};
