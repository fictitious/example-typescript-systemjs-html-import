var map = {
    'app':   'dist',
    'plugin-text': 'node_modules/systemjs-plugin-text/text.js'
};

var packages = {
    'app':  {
        main: './main.js',
        defaultExtension: 'js',
        meta: { '*.html' : { loader: 'plugin-text' }}
    }
};

SystemJS.config({
    map: map,
    packages: packages
});
