'use strict';

/**
 * @ngdoc overview
 * @name protoYeomanApp
 * @description
 * # protoYeomanApp
 *
 * Main module of the application.
 */
angular
  .module('protoYeomanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ngGrid'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/articulos', {
        templateUrl: 'views/articulos.html',
        controller: 'ArticulosCtrl'
      })
      .when('/galeria', {
        templateUrl: 'views/galeria.html',
        controller: 'GaleriaCtrl'
      })
      .when('/miembros', {
        templateUrl: 'views/miembros.html',
        controller: 'MiembrosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
