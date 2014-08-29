Package.describe({
  summary: "A Meteor 0.9 package for moment-timezone",
  version: "0.0.1",
  git: "localhost"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.addFiles(['./bower_components/moment-timezone/builds/moment-timezone-with-data-2010-2020.js'], ['server', 'client']);
  // uh... expose?
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('flamparski:moment-timezone');
  api.addFiles('flamparski:moment-timezone-tests.js');
});