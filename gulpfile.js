var elixir = require('laravel-elixir');

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
 var appAdminSass = [
     'admin/appadmin.scss'
 ];
 var appFrontSass = [
     'front/appfront.scss'
 ];
elixir(function(mix) {
  mix.sass(appAdminSass,'public/assets/css/appAdmin.min.css');
  mix.sass(appFrontSass,'public/assets/css/appFront.min.css');

});
