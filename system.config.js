// map tells the System loader where to look for things
var map = {
  'app':                                'dist/js',
  'rxjs':                               'lib/js/rxjs',
  '@angular':                           'lib/js/@angular',
  'zone.js':                            'lib/js/zone.js/dist',
};

// packages tells the System loader how to load when no filename and/or no extension
var packages = {
  'app':                                { main: 'main', defaultExtension: 'js' },
  'rxjs':                               { defaultExtension: 'js' },
  'zone.js':                            { main: 'zone', defaultExtension: 'js' },
};

var packageNames = [
  'common',
  'compiler',
  'core',
  'forms',
  'http',
  'platform-browser',
  'platform-browser-dynamic',
  'router',
  'testing',
  'upgrade',
];

// add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
packageNames.forEach(function(pkgName) {
  packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
});

System.config({
  map: map,
  packages: packages
});
