Package.describe({
  summary: ""
});

Package.on_use(function (api) {
  var both = ['client', 'server'];
  api.add_files('lib/jsv.js', both);
});
