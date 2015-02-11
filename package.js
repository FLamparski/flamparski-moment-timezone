Package.describe({
  summary: "A Meteor 0.9 package for moment-timezone",
  version: "0.1.0",
  git: "https://github.com/FLamparski/flamparski-moment-timezone"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.addFiles(['./bower_components/moment-timezone/builds/moment-timezone-with-data-2010-2020.js'], ['server', 'client']);
  api.addFiles(['./flamparski:moment-timezone.js'], ['server', 'client']);
  api.export(['moment']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('flamparski:moment-timezone');
  api.addFiles('flamparski:moment-timezone-tests.js');
});
