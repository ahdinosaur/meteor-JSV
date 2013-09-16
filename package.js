Package.describe({
  summary: "A JavaScript implementation of a extendable, fully compliant JSON Schema validator"
});

Package.on_use(function (api) {
  var both = ['client', 'server'];
  api.add_files('lib/jsv.js', both);
});
