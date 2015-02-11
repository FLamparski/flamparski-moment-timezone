Package.describe({
  summary: "A Meteor 0.9 package for moment-timezone",
  version: "0.1.0",
  git: "https://github.com/FLamparski/flamparski-moment-timezone"
});

var where = ['client', 'server'];
var locales = [ 'en-gb', 'en-au', 'en-ca' ];

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.addFiles(['./node_modules/moment/moment.js'], where);
  api.addFiles(['./flamparski:moment-timezone.js'], where);
  locales.forEach(function(locale) {
    api.addFiles(['./node_modules/moment/locale/' + locale + '.js'], where);
  });
  api.addFiles(['./node_modules/moment-timezone/moment-timezone.js'], where);
  api.addFiles(['./tzdata.js'], where);
  api.export(['moment'], where);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('flamparski:moment-timezone');
  api.addFiles('flamparski:moment-timezone-tests.js');
});
