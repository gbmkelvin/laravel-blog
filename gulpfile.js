var elixir = require('laravel-elixir');
require('laravel-elixir-ng-annotate');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
var jsPlugins = [
    '../vendor/jquery/dist/jquery.min.js',
    '../vendor/angular/angular.min.js',
    '../vendor/prism/prism.js'
   
];
var cssPlugins = [
    '../vendor/font-awesome/css/font-awesome.min.css',
    '../vendor/prism/themes/prism.css'

];
var appScripts = [
    'admin/app/**/*.modules.js',
    'admin/app/**/*.js'
];
var appSass = [
    'admin/app.scss'
];
elixir(function(mix) {
    mix.styles(cssPlugins, 'public/admin/css/dep.css');
    mix.sass(appSass,'public/admin/css/app.min.css');
    mix.annotate(appScripts,'public/admin/js/annotated.js');
    mix.scripts(jsPlugins, 'public/admin/js/dep.js');
    mix.scripts('../../../public/admin/js/annotated.js', 'public/admin/js/app.min.js');
});
