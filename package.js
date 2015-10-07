Package.describe({
  name: 'cunneen:packmeteor',
  version: '0.1.12',
  summary: "Rig the basics for packmeteor",
  git: 'https://github.com/cunneen/packmeteor'
});

Package.on_use(function (api) {
  api.use('appcache', ['client','server']);
  api.use('webapp', 'server');
  api.use('reload', 'client');
  api.use('routepolicy', 'server');
  api.use('underscore', 'server');
  api.use('autoupdate', 'server', {weak: true});

  api.export('Packmeteor');
  api.use('deps', 'client');
  api.add_files('meteor/packmeteor-client.js', 'client');
  api.add_files('meteor/packmeteor-server.js', 'server');
});
