Package.describe({
  summary: "A Meteor 0.9 package for moment-timezone",
  version: "0.0.1",
  git: "https://github.com/FLamparski/flamparski-moment-timezone"
});

var where = ['client', 'server'];
var locales = [ 'en-gb', 'en-au', 'en-ca' ];

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.addFiles(['./bower_components/moment/moment.js'], where);
  api.addFiles(['./flamparski:moment-timezone.js'], where);
  locales.forEach(function(locale) {
    api.addFiles(['./bower_components/moment/locale/' + locale + '.js'], where);
  });
  api.addFiles(['./bower_components/moment-timezone/builds/moment-timezone-with-data-2010-2020.js'], where);
  api.export(['moment'], where);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('flamparski:moment-timezone');
  api.addFiles('flamparski:moment-timezone-tests.js');
});
