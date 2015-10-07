Package.describe({
  name: 'cunneen:packmeteor',
  version: '0.1.12',
  summary: "Rig the basics for packmeteor",
  git: 'https://github.com/cunneen/packmeteor'
});

Package.on_use(function (api) {
  api.use('appcache@1.0.6', ['client','server']);
  api.use('webapp@1.2.2', 'server');
  api.use('routepolicy@1.0.6', 'server');
  api.use('underscore@1.0.4', 'server');
  api.use('autoupdate@1.2.3', 'server', {weak: true});
  api.use('reload@1.1.4', 'client');
  api.use('deps@1.0.9', 'client');

  api.export('Packmeteor');
  api.add_files('meteor/packmeteor-client.js', 'client');
  api.add_files('meteor/packmeteor-server.js', 'server');
});
